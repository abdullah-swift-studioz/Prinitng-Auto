'use client';

import { useEffect, useState, useRef, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import QRCode from 'react-qr-code';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface Video {
    id: string;
    filename: string;
    originalname: string;
    uploadedAt: string;
}

function KioskDisplayContent() {
    const searchParams = useSearchParams();
    const kioskId = searchParams.get('kiosk_id') || 'default';
    const router = useRouter();
    const [baseUrl, setBaseUrl] = useState('http://localhost:3000');
    const processedJobs = useRef<Set<number>>(new Set());
    const [tick, setTick] = useState(0);
    const [time, setTime] = useState('');

    // Video ad state
    const [videos, setVideos] = useState<Video[]>([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showQrOverlay, setShowQrOverlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setBaseUrl(`${window.location.protocol}//${window.location.host}`);
        }
    }, []);

    // Clock
    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    // Pulse tick for animations
    useEffect(() => {
        const id = setInterval(() => setTick(t => t + 1), 2000);
        return () => clearInterval(id);
    }, []);

    // Poll for paid jobs
    useEffect(() => {
        const poll = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/jobs/kiosk/${kioskId}`);
                if (!res.ok) return;
                const jobs = await res.json();
                if (jobs.length > 0) {
                    const job = jobs[0];
                    if (!processedJobs.current.has(job.id)) {
                        processedJobs.current.add(job.id);
                        router.push(`/kiosk-print?jobId=${job.id}&fileId=${job.fileId}&copies=${job.copies}&kioskId=${kioskId}`);
                        return;
                    }
                }
            } catch { /* ignore */ }
        };
        const interval = setInterval(poll, 5000);
        poll();
        return () => clearInterval(interval);
    }, [kioskId, router]);

    // Fetch ad videos
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/videos`);
                if (res.ok) {
                    const data = await res.json();
                    setVideos(data);
                }
            } catch { /* ignore */ }
        };
        fetchVideos();
        const id = setInterval(fetchVideos, 30000);
        return () => clearInterval(id);
    }, []);

    // When video list changes, reset index and load new video
    useEffect(() => {
        if (videos.length > 0 && videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(() => {});
        }
        setShowQrOverlay(false);
    }, [currentVideoIndex, videos]);

    const handleVideoEnded = useCallback(() => {
        setShowQrOverlay(false);
        setCurrentVideoIndex(i => (i + 1) % videos.length);
    }, [videos.length]);

    const handleDoubleClick = useCallback(() => {
        setShowQrOverlay(prev => !prev);
    }, []);

    const uploadUrl = `${baseUrl}/?kiosk_id=${kioskId}`;

    const steps = [
        { n: '01', label: 'Scan the QR Code', sub: 'Point your phone camera' },
        { n: '02', label: 'Upload & Pay', sub: 'Via NayaPay transfer' },
        { n: '03', label: 'Collect Your Print', sub: 'Ready in seconds' },
    ];

    const currentVideoUrl = videos.length > 0
        ? `${API_BASE}/uploads/videos/${videos[currentVideoIndex % videos.length].filename}`
        : null;

    // ── Video Ad Mode ──────────────────────────────────────────────────────────
    if (videos.length > 0 && currentVideoUrl) {
        return (
            <>
                <style>{`
                    html, body { overflow: hidden !important; height: 100% !important; margin: 0 !important; padding: 0 !important; }
                    body > * { padding: 0 !important; }

                    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                    .video-root {
                        width: 100vw; height: 100vh;
                        background: #000;
                        position: relative;
                        overflow: hidden;
                        cursor: none;
                    }

                    .video-ad {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    /* Video counter pill */
                    .video-counter {
                        position: absolute;
                        top: 24px; right: 24px;
                        background: rgba(0,0,0,0.5);
                        backdrop-filter: blur(8px);
                        border: 1px solid rgba(255,255,255,0.15);
                        border-radius: 20px;
                        padding: 6px 14px;
                        font-family: 'Barlow Condensed', 'Helvetica Neue', sans-serif;
                        font-size: 12px;
                        letter-spacing: 3px;
                        text-transform: uppercase;
                        color: rgba(255,255,255,0.5);
                        z-index: 10;
                    }

                    /* Floating QR overlay */
                    .qr-overlay {
                        position: absolute;
                        bottom: 36px; right: 36px;
                        z-index: 20;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 14px;
                        animation: overlay-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
                    }
                    @keyframes overlay-in {
                        from { opacity: 0; transform: translateY(20px) scale(0.92); }
                        to   { opacity: 1; transform: translateY(0) scale(1); }
                    }

                    .qr-overlay-card {
                        background: rgba(255,255,255,0.97);
                        border-radius: 20px;
                        padding: 20px;
                        box-shadow:
                            0 0 0 1px rgba(79,218,15,0.5),
                            0 0 40px rgba(79,218,15,0.25),
                            0 24px 64px rgba(0,0,0,0.5);
                        position: relative;
                        overflow: hidden;
                    }

                    /* green scanline on overlay QR */
                    .qr-overlay-card::after {
                        content: '';
                        position: absolute;
                        left: 20px; right: 20px;
                        height: 2px;
                        background: linear-gradient(90deg, transparent, #4fda0f, transparent);
                        border-radius: 2px;
                        box-shadow: 0 0 10px #4fda0f;
                        animation: scan-overlay 2.5s ease-in-out infinite;
                    }
                    @keyframes scan-overlay {
                        0%   { top: 20px; opacity: 1; }
                        48%  { top: calc(100% - 20px); opacity: 1; }
                        50%  { opacity: 0; }
                        52%  { top: 20px; opacity: 0; }
                        54%  { opacity: 1; }
                        100% { top: 20px; opacity: 1; }
                    }

                    .qr-overlay-label {
                        background: rgba(0,0,0,0.75);
                        backdrop-filter: blur(12px);
                        border: 1px solid rgba(79,218,15,0.3);
                        border-radius: 14px;
                        padding: 12px 18px;
                        max-width: 240px;
                        text-align: right;
                    }
                    .qr-overlay-label-main {
                        font-family: 'Barlow Condensed', 'Helvetica Neue', sans-serif;
                        font-size: 16px;
                        font-weight: 700;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        color: #4fda0f;
                        line-height: 1.2;
                    }
                    .qr-overlay-label-sub {
                        font-family: 'Barlow', 'Helvetica Neue', sans-serif;
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(255,255,255,0.65);
                        margin-top: 4px;
                        line-height: 1.5;
                    }

                    /* double-click hint at bottom center */
                    .dbl-hint {
                        position: absolute;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        font-family: 'Barlow Condensed', 'Helvetica Neue', sans-serif;
                        font-size: 11px;
                        letter-spacing: 4px;
                        text-transform: uppercase;
                        color: rgba(255,255,255,0.2);
                        z-index: 5;
                        white-space: nowrap;
                        pointer-events: none;
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;700&family=Barlow+Condensed:wght@400;600;700&display=swap');
                `}</style>

                <div className="video-root" onDoubleClick={handleDoubleClick}>
                    <video
                        ref={videoRef}
                        key={currentVideoUrl}
                        className="video-ad"
                        src={currentVideoUrl}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnded}
                    />

                    {videos.length > 1 && (
                        <div className="video-counter">
                            {(currentVideoIndex % videos.length) + 1} / {videos.length}
                        </div>
                    )}

                    {!showQrOverlay && (
                        <div className="dbl-hint">double tap to scan &amp; print</div>
                    )}

                    {showQrOverlay && (
                        <div className="qr-overlay">
                            <div className="qr-overlay-label">
                                <div className="qr-overlay-label-main">Scan &amp; Continue</div>
                                <div className="qr-overlay-label-sub">
                                    Scan the QR code and continue on your mobile screen for further steps
                                </div>
                            </div>
                            <div className="qr-overlay-card">
                                <QRCode
                                    value={uploadUrl}
                                    size={180}
                                    fgColor="#3f4247"
                                    bgColor="#ffffff"
                                    level="H"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    }

    // ── Default Display Mode ───────────────────────────────────────────────────
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                html, body { overflow: hidden !important; height: 100% !important; margin: 0 !important; padding: 0 !important; }
                body > * { padding: 0 !important; }

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .kiosk-root {
                    width: 100vw; height: 100vh;
                    background: #ffffff;
                    display: flex; flex-direction: row;
                    overflow: hidden;
                    font-family: 'Barlow', sans-serif;
                    position: relative;
                }

                /* ── Background grid ── */
                .kiosk-root::before {
                    content: '';
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(79,218,15,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(79,218,15,0.1) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }

                /* ══════════════ LEFT PANEL ══════════════ */
                .left-panel {
                    width: 58%;
                    display: flex; flex-direction: column;
                    justify-content: space-between;
                    padding: 48px 56px;
                    position: relative; z-index: 1;
                    border-right: 1px solid rgba(63,66,71,0.12);
                }

                /* subtle green ambient */
                .left-panel::after {
                    content: '';
                    position: absolute;
                    top: -200px; left: -200px;
                    width: 700px; height: 700px;
                    background: radial-gradient(circle, rgba(79,218,15,0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                /* ── Brand bar ── */
                .brand {
                    display: flex; align-items: center;
                }
                .brand-logo {
                    width: 200px;
                    height: auto;
                    object-fit: contain;
                }

                /* ── Headline ── */
                .headline-block { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 32px 0; }
                .headline-eyebrow {
                    display: inline-flex; align-items: center; gap: 10px;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 13px; letter-spacing: 6px;
                    text-transform: uppercase; color: #3ab30a;
                    margin-bottom: 20px;
                }
                .eyebrow-dot {
                    width: 6px; height: 6px;
                    background: #4fda0f;
                    border-radius: 50%;
                    animation: blink 1.5s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.6); }
                }

                .headline {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: clamp(72px, 9vw, 110px);
                    line-height: 0.92;
                    letter-spacing: 2px;
                    color: #3f4247;
                }
                .headline em {
                    font-style: normal;
                    color: transparent;
                    -webkit-text-stroke: 2px #4fda0f;
                }
                .headline-sub {
                    margin-top: 24px;
                    font-size: 18px;
                    font-weight: 300;
                    color: rgba(63,66,71,0.55);
                    letter-spacing: 0.5px;
                    line-height: 1.6;
                    max-width: 420px;
                }

                /* ── Steps ── */
                .steps { display: flex; flex-direction: column; gap: 6px; }
                .step {
                    display: flex; align-items: center; gap: 20px;
                    padding: 16px 20px;
                    border-radius: 12px;
                    border: 1px solid transparent;
                    transition: all 0.4s ease;
                    cursor: default;
                }
                .step-active {
                    background: rgba(79,218,15,0.08);
                    border-color: rgba(79,218,15,0.3);
                }
                .step-num {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 13px; letter-spacing: 2px;
                    color: #3ab30a;
                    width: 28px; flex-shrink: 0;
                }
                .step-divider {
                    width: 1px; height: 32px;
                    background: rgba(79,218,15,0.35);
                    flex-shrink: 0;
                }
                .step-content { flex: 1; }
                .step-label {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 20px; font-weight: 700;
                    color: #3f4247; letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
                .step-sub {
                    font-size: 13px; font-weight: 400;
                    color: rgba(63,66,71,0.5);
                    margin-top: 2px;
                }
                .step-icon {
                    width: 36px; height: 36px;
                    border-radius: 50%;
                    background: rgba(79,218,15,0.1);
                    border: 1px solid rgba(79,218,15,0.35);
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .step-icon svg { width: 16px; height: 16px; stroke: #3ab30a; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

                /* ── Bottom status bar ── */
                .status-bar {
                    display: flex; align-items: center; justify-content: space-between;
                    padding-top: 24px;
                    border-top: 1px solid rgba(63,66,71,0.1);
                }
                .status-dot-row { display: flex; align-items: center; gap: 8px; }
                .status-dot {
                    width: 8px; height: 8px; border-radius: 50%;
                    background: #4fda0f;
                    box-shadow: 0 0 8px rgba(79,218,15,0.6);
                    animation: pulse-dot 2s ease-in-out infinite;
                }
                @keyframes pulse-dot {
                    0%, 100% { box-shadow: 0 0 8px rgba(79,218,15,0.6); }
                    50% { box-shadow: 0 0 20px rgba(79,218,15,0.8), 0 0 40px rgba(79,218,15,0.3); }
                }
                .status-text {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 13px; letter-spacing: 3px;
                    text-transform: uppercase; color: rgba(63,66,71,0.45);
                }
                .kiosk-id-badge {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 11px; letter-spacing: 4px;
                    text-transform: uppercase; color: rgba(63,66,71,0.4);
                    padding: 6px 14px;
                    border: 1px solid rgba(63,66,71,0.15);
                    border-radius: 20px;
                }
                .clock {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px; letter-spacing: 3px;
                    color: rgba(63,66,71,0.35);
                }

                /* ══════════════ RIGHT PANEL ══════════════ */
                .right-panel {
                    width: 42%;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                    padding: 48px 40px;
                    position: relative; z-index: 1;
                    background: rgba(79,218,15,0.03);
                }

                /* diagonal accent stripe */
                .right-panel::before {
                    content: '';
                    position: absolute; inset: 0;
                    background: linear-gradient(135deg, transparent 60%, rgba(79,218,15,0.05) 100%);
                    pointer-events: none;
                }

                .qr-wrapper {
                    display: flex; flex-direction: column;
                    align-items: center; gap: 28px;
                    position: relative;
                }

                /* Outer pulsing ring */
                .qr-ring-outer {
                    position: absolute;
                    width: 340px; height: 340px;
                    border-radius: 50%;
                    border: 1px solid rgba(79,218,15,0.25);
                    animation: ring-expand 3s ease-out infinite;
                }
                .qr-ring-outer:nth-child(2) { animation-delay: 1.5s; }
                @keyframes ring-expand {
                    0% { transform: scale(0.85); opacity: 0.7; }
                    100% { transform: scale(1.25); opacity: 0; }
                }

                .qr-card {
                    position: relative;
                    background: #fff;
                    border-radius: 24px;
                    padding: 28px;
                    box-shadow:
                        0 0 0 1px rgba(79,218,15,0.35),
                        0 0 40px rgba(79,218,15,0.12),
                        0 16px 48px rgba(63,66,71,0.12);
                }

                /* Corner accents */
                .qr-card::before, .qr-card::after {
                    content: '';
                    position: absolute;
                    width: 24px; height: 24px;
                    border-color: #4fda0f; border-style: solid;
                }
                .qr-card::before {
                    top: -1px; left: -1px;
                    border-width: 3px 0 0 3px;
                    border-radius: 4px 0 0 0;
                }
                .qr-card::after {
                    bottom: -1px; right: -1px;
                    border-width: 0 3px 3px 0;
                    border-radius: 0 0 4px 0;
                }

                /* scan-line effect */
                .qr-scanline {
                    position: absolute;
                    left: 28px; right: 28px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #4fda0f, transparent);
                    animation: scan 3s ease-in-out infinite;
                    z-index: 10;
                    border-radius: 2px;
                    box-shadow: 0 0 12px #4fda0f;
                }
                @keyframes scan {
                    0% { top: 28px; opacity: 1; }
                    48% { top: calc(100% - 28px); opacity: 1; }
                    50% { opacity: 0; }
                    52% { top: 28px; opacity: 0; }
                    54% { opacity: 1; }
                    100% { top: 28px; opacity: 1; }
                }

                /* ── CTA label ── */
                .scan-cta {
                    display: flex; flex-direction: column; align-items: center; gap: 8px;
                }
                .scan-cta-main {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 32px; letter-spacing: 6px;
                    color: #3f4247; text-transform: uppercase;
                }
                .scan-cta-main span { color: #3ab30a; }
                .scan-cta-sub {
                    font-size: 13px; font-weight: 400;
                    color: rgba(63,66,71,0.5);
                    letter-spacing: 2px; text-transform: uppercase;
                }
                .scan-arrow {
                    display: flex; align-items: center; gap: 6px;
                    color: #3ab30a;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 12px; letter-spacing: 4px; text-transform: uppercase;
                    margin-top: 4px;
                    animation: arrow-bounce 2s ease-in-out infinite;
                }
                @keyframes arrow-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                .scan-arrow svg { width: 14px; height: 14px; stroke: #3ab30a; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

                /* ── Price badge ── */
                .price-badge {
                    margin-top: 12px;
                    display: flex; align-items: center; gap: 12px;
                    padding: 12px 24px;
                    background: rgba(79,218,15,0.1);
                    border: 1px solid rgba(79,218,15,0.3);
                    border-radius: 40px;
                }
                .price-badge-label {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 12px; letter-spacing: 3px;
                    text-transform: uppercase; color: rgba(63,66,71,0.55);
                }
                .price-badge-value {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px; letter-spacing: 2px;
                    color: #3ab30a;
                }
                .price-badge-divider {
                    width: 1px; height: 20px;
                    background: rgba(79,218,15,0.3);
                }
            `}</style>

            <div className="kiosk-root">

                {/* ══ LEFT PANEL ══ */}
                <div className="left-panel">

                    {/* Brand */}
                    <div className="brand">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.jpeg" alt="Print It Logo" className="brand-logo" />
                    </div>

                    {/* Headline */}
                    <div className="headline-block">
                        <div className="headline-eyebrow">
                            <span className="eyebrow-dot"></span>
                            Ready to Print
                        </div>
                        <h1 className="headline">
                            Print<br />
                            <em>Anything.</em><br />
                            Instantly.
                        </h1>
                        <p className="headline-sub">
                            Upload your document, pay via NayaPay, and collect your printout — all in under 2 minutes.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="steps">
                        {steps.map((s, i) => (
                            <div key={i} className={`step ${i === (tick % 3) ? 'step-active' : ''}`}>
                                <div className="step-num">{s.n}</div>
                                <div className="step-divider"></div>
                                <div className="step-content">
                                    <div className="step-label">{s.label}</div>
                                    <div className="step-sub">{s.sub}</div>
                                </div>
                                <div className="step-icon">
                                    {i === 0 && (
                                        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>
                                    )}
                                    {i === 1 && (
                                        <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                                    )}
                                    {i === 2 && (
                                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Status bar */}
                    <div className="status-bar">
                        <div className="status-dot-row">
                            <div className="status-dot"></div>
                            <span className="status-text">System Online</span>
                        </div>
                        <div className="clock">{time}</div>
                        <div className="kiosk-id-badge">ID: {kioskId}</div>
                    </div>
                </div>

                {/* ══ RIGHT PANEL ══ */}
                <div className="right-panel">
                    <div className="qr-wrapper">
                        <div className="qr-ring-outer"></div>
                        <div className="qr-ring-outer"></div>

                        <div className="qr-card">
                            <div className="qr-scanline"></div>
                            <QRCode
                                value={uploadUrl}
                                size={260}
                                fgColor="#3f4247"
                                bgColor="#ffffff"
                                level="H"
                            />
                        </div>

                        <div className="scan-cta">
                            <div className="scan-cta-main">Scan to <span>Start</span></div>
                            <div className="scan-cta-sub">Open camera &amp; point at QR</div>
                            <div className="scan-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                                point &amp; scan
                            </div>
                        </div>

                        <div className="price-badge">
                            <span className="price-badge-label">Starts from</span>
                            <div className="price-badge-divider"></div>
                            <span className="price-badge-value">PKR 10 / page</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function KioskDisplayPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', color: '#3ab30a', fontFamily: 'monospace', letterSpacing: '4px', fontSize: '14px' }}>
                INITIALIZING...
            </div>
        }>
            <KioskDisplayContent />
        </Suspense>
    );
}
