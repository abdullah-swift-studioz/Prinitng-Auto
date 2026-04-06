'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CloudArrowUp, FilePdf, CheckCircle, Spinner, Printer, Clock } from 'phosphor-react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const PRICE_PER_PAGE_PKR = 10;

type Status =
    | 'IDLE'
    | 'UPLOADING'
    | 'CONFIGURING'
    | 'PAYING'
    | 'VERIFYING_PAYMENT'
    | 'AWAITING_ADMIN'
    | 'SUCCESS'
    | 'COMPLETED';

const STYLES = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }

    /* ─── shared grid bg ─────────────────────────────────────────────────────── */
    .page-bg {
        position: fixed; inset: 0;
        background: #ffffff;
        z-index: -1;
    }
    .page-bg::after {
        content: '';
        position: absolute; inset: 0;
        background-image:
            linear-gradient(rgba(79,218,15,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,218,15,0.07) 1px, transparent 1px);
        background-size: 32px 32px;
    }

    /* ─── full-screen status pages ───────────────────────────────────────────── */
    .fs-shell {
        height: 100svh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 28px;
        font-family: 'Barlow', sans-serif;
        position: relative;
        gap: 0;
    }
    .fs-inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
    }
    .fs-headline {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(36px, 10vw, 52px);
        letter-spacing: 2px;
        color: #3f4247;
        text-align: center;
        line-height: 1;
    }
    .fs-body {
        font-size: 15px;
        font-weight: 300;
        color: rgba(63,66,71,0.52);
        text-align: center;
        line-height: 1.65;
        width: 100%;
    }
    .fs-card {
        width: 100%;
        padding: 22px 24px;
        border: 1px solid rgba(63,66,71,0.1);
        border-radius: 18px;
        text-align: center;
        background: rgba(79,218,15,0.03);
        box-shadow: 0 0 0 1px rgba(79,218,15,0.1), 0 2px 16px rgba(63,66,71,0.05);
    }
    .fs-price {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(42px, 12vw, 60px);
        letter-spacing: 2px;
        color: #3f4247;
        line-height: 1;
    }
    .fs-job-id {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase;
        color: rgba(63,66,71,0.28);
        margin-top: 8px;
    }
    .fs-account {
        font-size: 14px; color: rgba(63,66,71,0.45); margin-top: 4px;
    }

    /* spinner ring */
    .ring-wrap {
        position: relative;
        width: 100px; height: 100px;
        flex-shrink: 0;
    }
    .ring-bg {
        position: absolute; inset: 0; border-radius: 50%;
        border: 3px solid rgba(79,218,15,0.15);
    }
    .ring-spin {
        position: absolute; inset: 0; border-radius: 50%;
        border: 3px solid #4fda0f;
        border-top-color: transparent;
        animation: do-spin 0.9s linear infinite;
    }
    @keyframes do-spin { to { transform: rotate(360deg); } }
    .ring-center {
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
    }

    /* pending ring */
    .pending-wrap {
        position: relative;
        width: 100px; height: 100px;
        flex-shrink: 0;
    }
    .pending-pulse {
        position: absolute; inset: 0; border-radius: 50%;
        background: rgba(245,158,11,0.1);
        animation: do-ping 2.5s ease-out infinite;
    }
    @keyframes do-ping {
        0% { transform: scale(1); opacity: 0.7; }
        100% { transform: scale(1.5); opacity: 0; }
    }
    .pending-border {
        position: absolute; inset: 0; border-radius: 50%;
        border: 2px solid rgba(245,158,11,0.35);
        display: flex; align-items: center; justify-content: center;
    }

    /* completed icon */
    .done-icon {
        width: 100px; height: 100px; border-radius: 50%;
        background: rgba(79,218,15,0.08);
        border: 2px solid rgba(79,218,15,0.3);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
    }

    /* live row */
    .live-row {
        display: flex; align-items: center; gap: 8px;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px; letter-spacing: 0.5px;
        color: rgba(63,66,71,0.5);
    }
    .live-dot {
        width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
    }
    .dot-green {
        background: #4fda0f;
        animation: glow 2s ease-in-out infinite;
        box-shadow: 0 0 8px rgba(79,218,15,0.6);
    }
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 8px rgba(79,218,15,0.6); }
        50% { box-shadow: 0 0 20px rgba(79,218,15,0.9); }
    }
    .dot-amber {
        background: #f59e0b;
        animation: amber-pulse 2s ease-in-out infinite;
    }
    @keyframes amber-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

    .wait-note {
        font-size: 12px; color: rgba(63,66,71,0.32);
        text-align: center; line-height: 1.65; width: 100%;
    }
    .wait-note strong { color: rgba(63,66,71,0.48); }

    /* ─── main upload / configure / pay shell ────────────────────────────────── */
    .up-shell {
        height: 100svh;
        display: flex;
        flex-direction: column;
        font-family: 'Barlow', sans-serif;
        position: relative;
    }

    /* fixed header */
    .up-header {
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 44px 24px 16px;
        border-bottom: 1px solid rgba(63,66,71,0.08);
        background: rgba(255,255,255,0.92);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        position: relative;
        z-index: 10;
    }
    .up-logo { width: 86px; height: auto; object-fit: contain; display: block; }
    .up-kiosk-id {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase;
        color: rgba(63,66,71,0.38);
        padding: 5px 14px;
        border: 1px solid rgba(63,66,71,0.14);
        border-radius: 20px;
    }

    /* scrollable content */
    .up-body {
        flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding: 24px 24px 0;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    /* upload zone — fills height when IDLE */
    .up-zone-wrap {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
    }
    .up-drop-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 18px;
        flex: 1;
        min-height: 280px;
        border: 2px dashed rgba(79,218,15,0.32);
        border-radius: 20px;
        cursor: pointer;
        padding: 40px 24px;
        transition: border-color 0.18s, background 0.18s;
        -webkit-tap-highlight-color: transparent;
    }
    .up-drop-label:active {
        border-color: #4fda0f;
        background: rgba(79,218,15,0.04);
    }
    .up-icon-bg {
        width: 72px; height: 72px;
        border-radius: 20px;
        background: rgba(79,218,15,0.1);
        display: flex; align-items: center; justify-content: center;
    }
    .up-tap-text {
        font-size: 18px; font-weight: 600; color: #3f4247; text-align: center;
    }
    .up-file-types {
        font-size: 14px; color: rgba(63,66,71,0.4); text-align: center;
    }

    .up-uploading {
        flex: 1; min-height: 280px;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center; gap: 16px;
    }
    .up-spinner-bg {
        width: 72px; height: 72px; border-radius: 50%;
        background: rgba(79,218,15,0.08);
        border: 1px solid rgba(79,218,15,0.2);
        display: flex; align-items: center; justify-content: center;
    }
    .up-analyzing {
        font-size: 15px; color: rgba(63,66,71,0.5);
    }

    /* file info card */
    .cfg-file {
        display: flex; align-items: center; gap: 14px;
        padding: 14px 16px;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.18);
        border-radius: 16px;
        flex-shrink: 0;
    }
    .cfg-file-icon {
        padding: 10px;
        background: rgba(79,218,15,0.1);
        border-radius: 10px;
        flex-shrink: 0;
    }
    .cfg-file-name {
        font-weight: 600; font-size: 14px; color: #3f4247;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .cfg-file-meta {
        font-size: 12px; color: rgba(63,66,71,0.45); margin-top: 2px;
    }

    /* section label */
    .sec-label {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase; color: rgba(63,66,71,0.4);
        margin-bottom: 10px;
    }

    /* copies */
    .copies-row {
        display: flex; align-items: center; gap: 0;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.18);
        border-radius: 16px;
        overflow: hidden;
    }
    .copies-btn {
        flex: 1;
        height: 64px;
        background: transparent;
        border: none;
        font-size: 28px; font-weight: 300;
        color: #3ab30a;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: background 0.12s;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }
    .copies-btn:disabled { opacity: 0.28; cursor: not-allowed; }
    .copies-btn:not(:disabled):active { background: rgba(79,218,15,0.12); }
    .copies-divider {
        width: 1px; height: 36px;
        background: rgba(79,218,15,0.2);
        flex-shrink: 0;
    }
    .copies-val {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 52px; letter-spacing: 2px;
        color: #3f4247;
        min-width: 80px; text-align: center; line-height: 1;
        padding: 0 8px;
    }

    /* price card */
    .price-card {
        display: flex; justify-content: space-between; align-items: center;
        padding: 20px 20px;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.18);
        border-radius: 16px;
        flex-shrink: 0;
    }
    .price-label {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase; color: rgba(63,66,71,0.4);
    }
    .price-val {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(36px, 10vw, 48px); letter-spacing: 2px;
        color: #3f4247; line-height: 1; margin-top: 4px;
    }
    .price-breakdown { text-align: right; }
    .price-line {
        font-size: 13px; color: rgba(63,66,71,0.4); line-height: 1.7;
    }

    /* payment box */
    .pay-box {
        padding: 20px;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.22);
        border-radius: 16px;
        display: flex; flex-direction: column; gap: 14px;
        flex-shrink: 0;
    }
    .pay-heading {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
        color: #3ab30a;
    }
    .pay-row {
        display: flex; justify-content: space-between; align-items: center; gap: 10px;
    }
    .pay-row-label {
        font-size: 13px; color: rgba(63,66,71,0.45); flex-shrink: 0;
    }
    .pay-row-val {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px; font-weight: 700; color: #3f4247;
        background: rgba(79,218,15,0.08);
        padding: 4px 10px; border-radius: 6px;
        text-align: right; word-break: break-all;
    }
    .pay-note {
        font-size: 12px; color: rgba(63,66,71,0.4);
        border-top: 1px solid rgba(79,218,15,0.14);
        padding-top: 10px;
    }

    /* input */
    .input-label {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase; color: rgba(63,66,71,0.4);
        display: block; margin-bottom: 8px;
    }
    .account-input {
        width: 100%;
        padding: 16px;
        background: #ffffff;
        border: 1.5px solid rgba(63,66,71,0.16);
        border-radius: 14px;
        font-family: 'Barlow', sans-serif;
        font-size: 16px; color: #3f4247;
        outline: none;
        transition: border-color 0.15s, box-shadow 0.15s;
        -webkit-appearance: none;
    }
    .account-input::placeholder { color: rgba(63,66,71,0.28); }
    .account-input:focus {
        border-color: #4fda0f;
        box-shadow: 0 0 0 3px rgba(79,218,15,0.12);
    }
    .input-hint {
        font-size: 12px; color: rgba(63,66,71,0.38); margin-top: 6px;
    }

    /* sticky footer with action button */
    .up-footer {
        flex-shrink: 0;
        padding: 16px 24px 36px;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-top: 1px solid rgba(63,66,71,0.07);
    }

    /* buttons */
    .btn-green {
        width: 100%;
        padding: 19px 24px;
        background: #4fda0f;
        border: none; border-radius: 16px;
        display: flex; align-items: center; justify-content: center; gap: 8px;
        cursor: pointer;
        transition: opacity 0.12s, transform 0.1s;
        box-shadow: 0 6px 24px rgba(79,218,15,0.35);
        -webkit-tap-highlight-color: transparent;
    }
    .btn-green:disabled { opacity: 0.35; cursor: not-allowed; box-shadow: none; }
    .btn-green:not(:disabled):active { transform: scale(0.98); }
    .btn-green-text {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 22px; letter-spacing: 3px;
        color: #ffffff; text-transform: uppercase;
    }

    .btn-dark-green {
        width: 100%;
        padding: 19px 24px;
        background: #3ab30a;
        border: none; border-radius: 16px;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 22px; letter-spacing: 3px;
        color: #ffffff; text-transform: uppercase;
        cursor: pointer;
        transition: opacity 0.12s, transform 0.1s;
        box-shadow: 0 6px 24px rgba(58,179,10,0.3);
        -webkit-tap-highlight-color: transparent;
    }
    .btn-dark-green:disabled { opacity: 0.32; cursor: not-allowed; box-shadow: none; }
    .btn-dark-green:not(:disabled):active { transform: scale(0.98); }

    .btn-dark {
        width: 100%;
        padding: 19px 24px;
        background: #3f4247;
        border: none; border-radius: 16px;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 22px; letter-spacing: 3px;
        color: #ffffff; text-transform: uppercase;
        cursor: pointer;
        transition: opacity 0.12s, transform 0.1s;
        -webkit-tap-highlight-color: transparent;
    }
    .btn-dark:active { transform: scale(0.98); opacity: 0.88; }

    /* spacer at bottom of scrollable area so content isn't hidden behind footer */
    .scroll-spacer { height: 8px; flex-shrink: 0; }
`;

function UploadPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const kioskId = searchParams.get('kiosk_id') || 'default';

    const [file, setFile] = useState<File | null>(null);
    const [metadata, setMetadata] = useState<{ pageCount: number; fileId: string } | null>(null);
    const [jobId, setJobId] = useState<number | null>(null);
    const [accountTitle, setAccountTitle] = useState('');
    const [copies, setCopies] = useState(1);
    const [status, setStatus] = useState<Status>('IDLE');
    const [isCreatingJob, setIsCreatingJob] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const [token, setToken] = useState<string | null>(null);
    const [walletBal, setWalletBal] = useState<number | null>(null);

    const totalPrice = metadata ? metadata.pageCount * copies * PRICE_PER_PAGE_PKR : 0;

    useEffect(() => {
        const t = localStorage.getItem('kiosk_token');
        if (t) {
            setToken(t);
            fetch(`${API_BASE}/api/wallet/balance`, { headers: { Authorization: `Bearer ${t}` } })
                .then(r => r.json())
                .then(d => { if (d.balance !== undefined) setWalletBal(d.balance); })
                .catch(() => {});
        }
    }, []);

    useEffect(() => {
        if (!jobId || (status !== 'SUCCESS' && status !== 'AWAITING_ADMIN')) return;

        const interval = setInterval(async () => {
            try {
                const res = await fetch(`${API_BASE}/api/jobs/${jobId}`);
                if (!res.ok) return;
                const job = await res.json();

                if (status === 'AWAITING_ADMIN' && job.status === 'PAID') {
                    setStatus('SUCCESS');
                } else if (status === 'SUCCESS' && job.status === 'COMPLETED') {
                    setStatus('COMPLETED');
                }
            } catch { /* keep polling */ }
        }, 3000);

        return () => clearInterval(interval);
    }, [status, jobId]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;
        setFile(selectedFile);
        setUploadError(null);
        setStatus('UPLOADING');

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const res = await fetch(`${API_BASE}/api/upload`, { method: 'POST', body: formData });
            const data = await res.json();
            if (res.ok) {
                setMetadata(data);
                setStatus('CONFIGURING');
            } else {
                setUploadError(data.error || `Upload failed (${res.status})`);
                setStatus('IDLE');
            }
        } catch (err) {
            setUploadError('Cannot reach the server. Make sure the API is running.');
            setStatus('IDLE');
        }
    };

    const handleCreateJob = async () => {
        if (!metadata || isCreatingJob) return;
        setIsCreatingJob(true);
        try {
            const reqBody: any = { fileId: metadata.fileId, pageCount: metadata.pageCount, copies, kioskId };
            const res = await fetch(`${API_BASE}/api/jobs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqBody),
            });
            const job = await res.json();
            if (res.ok) { setJobId(job.id); setStatus('PAYING'); }
        } catch { /* stay on CONFIGURING */ }
        finally { setIsCreatingJob(false); }
    };

    const handleWalletPayment = async () => {
        if (!jobId || !token) return;
        setStatus('VERIFYING_PAYMENT');
        try {
            const res = await fetch(`${API_BASE}/api/jobs/${jobId}/pay-wallet`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                setStatus('SUCCESS');
            } else {
                setUploadError('Wallet payment failed or insufficient balance.');
                setStatus('PAYING');
            }
        } catch {
            setUploadError('Network error');
            setStatus('PAYING');
        }
    };

    const handleVerifyPayment = async () => {
        if (!jobId || !accountTitle.trim()) return;
        setStatus('VERIFYING_PAYMENT');
        try {
            const res = await fetch(`${API_BASE}/api/jobs/${jobId}/verify-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ accountTitle: accountTitle.trim() }),
            });
            setStatus(res.ok ? 'SUCCESS' : 'AWAITING_ADMIN');
        } catch { setStatus('AWAITING_ADMIN'); }
    };

    // ─── Full-screen: Verifying ───────────────────────────────────────────────

    if (status === 'VERIFYING_PAYMENT') return (
        <>
            <style>{STYLES}</style>
            <div className="page-bg" />
            <div className="fs-shell">
                <div className="fs-inner">
                    <div className="ring-wrap">
                        <div className="ring-bg" />
                        <div className="ring-spin" />
                        <div className="ring-center">
                            <Spinner size={32} weight="bold" color="#4fda0f" />
                        </div>
                    </div>
                    <h2 className="fs-headline">Verifying Payment</h2>
                    <p className="fs-body">Checking your NayaPay transaction. This takes a few seconds…</p>
                    <div className="fs-card">
                        <div className="fs-price">PKR {totalPrice}</div>
                        {jobId && <div className="fs-job-id">Job #{jobId}</div>}
                    </div>
                </div>
            </div>
        </>
    );

    // ─── Full-screen: Awaiting Admin ─────────────────────────────────────────

    if (status === 'AWAITING_ADMIN') return (
        <>
            <style>{STYLES}</style>
            <div className="page-bg" />
            <div className="fs-shell">
                <div className="fs-inner">
                    <div className="pending-wrap">
                        <div className="pending-pulse" />
                        <div className="pending-border">
                            <Clock size={46} weight="duotone" color="#f59e0b" />
                        </div>
                    </div>
                    <h2 className="fs-headline">Payment Under Review</h2>
                    <p className="fs-body">
                        We couldn&apos;t auto-verify your payment. Our team has been notified and is
                        reviewing it — you&apos;ll be moved to the print queue automatically.
                    </p>
                    <div className="fs-card">
                        <div className="fs-price">PKR {totalPrice}</div>
                        {accountTitle && <div className="fs-account">{accountTitle}</div>}
                        {jobId && <div className="fs-job-id">Job #{jobId}</div>}
                    </div>
                    <div className="live-row">
                        <span className="live-dot dot-amber" />
                        Waiting for approval — updates automatically
                    </div>
                    <p className="wait-note">
                        Typical wait: 1–5 minutes.{' '}
                        <strong>Do not close this screen.</strong>
                    </p>
                </div>
            </div>
        </>
    );

    // ─── Full-screen: Printing ────────────────────────────────────────────────

    if (status === 'SUCCESS') return (
        <>
            <style>{STYLES}</style>
            <div className="page-bg" />
            <div className="fs-shell">
                <div className="fs-inner">
                    <div className="ring-wrap">
                        <div className="ring-bg" />
                        <div className="ring-spin" />
                        <div className="ring-center">
                            <Printer size={34} weight="duotone" color="#4fda0f" />
                        </div>
                    </div>
                    <h2 className="fs-headline">Payment Confirmed!</h2>
                    <p className="fs-body">
                        Sending {copies} {copies === 1 ? 'copy' : 'copies'} to the printer.
                        Please wait near the machine.
                    </p>
                    <div className="fs-card">
                        <div className="fs-price">PKR {totalPrice}</div>
                        {jobId && <div className="fs-job-id">Job #{jobId}</div>}
                    </div>
                    <div className="live-row">
                        <span className="live-dot dot-green" />
                        Printing in progress
                    </div>
                </div>
            </div>
        </>
    );

    // ─── Full-screen: Completed ───────────────────────────────────────────────

    if (status === 'COMPLETED') return (
        <>
            <style>{STYLES}</style>
            <div className="page-bg" />
            <div className="fs-shell">
                <div className="fs-inner">
                    <div className="done-icon">
                        <CheckCircle size={54} weight="fill" color="#4fda0f" />
                    </div>
                    <h2 className="fs-headline">All Done!</h2>
                    <p className="fs-body">
                        Your documents are ready. Please collect them from the printer.
                    </p>
                    <button
                        className="btn-dark"
                        style={{ marginTop: 8 }}
                        onClick={() => router.push(`/?kiosk_id=${kioskId}`)}
                    >
                        Print Another Document
                    </button>
                </div>
            </div>
        </>
    );

    // ─── Upload / Configure / Pay flow ───────────────────────────────────────

    return (
        <>
            <style>{STYLES}</style>
            <div className="page-bg" />
            <div className="up-shell">

                {/* Fixed header */}
                <header className="up-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.svg" alt="Print It" className="up-logo" />
                    <span className="up-kiosk-id">{kioskId}</span>
                </header>

                {/* Scrollable content */}
                <div className="up-body">

                    {/* ── IDLE / UPLOADING ── */}
                    {(status === 'IDLE' || status === 'UPLOADING') && (
                        <div className="up-zone-wrap">
                            {status === 'UPLOADING' ? (
                                <div className="up-uploading">
                                    <div className="up-spinner-bg">
                                        <Spinner size={30} weight="bold" color="#4fda0f" className="animate-spin" />
                                    </div>
                                    <p className="up-analyzing">Analyzing document…</p>
                                </div>
                            ) : (
                                <>
                                    {uploadError && (
                                        <div style={{
                                            padding: '12px 16px',
                                            marginBottom: '12px',
                                            background: 'rgba(239,68,68,0.08)',
                                            border: '1px solid rgba(239,68,68,0.25)',
                                            borderRadius: '12px',
                                            color: '#dc2626',
                                            fontSize: '13px',
                                            lineHeight: 1.5,
                                        }}>
                                            {uploadError}
                                        </div>
                                    )}
                                    <label className="up-drop-label">
                                        <div className="up-icon-bg">
                                            <CloudArrowUp size={36} color="#3ab30a" />
                                        </div>
                                        <p className="up-tap-text">Tap to select file</p>
                                        <p className="up-file-types">PDF, JPG, or PNG</p>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }}
                                            accept=".pdf,image/*"
                                        />
                                    </label>
                                </>
                            )}
                        </div>
                    )}

                    {/* ── CONFIGURING / PAYING ── */}
                    {(status === 'CONFIGURING' || status === 'PAYING') && metadata && (
                        <>
                            {/* File info */}
                            <div className="cfg-file">
                                <div className="cfg-file-icon">
                                    <FilePdf size={28} color="#3ab30a" />
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div className="cfg-file-name">{file?.name}</div>
                                    <div className="cfg-file-meta">
                                        {metadata.pageCount} pages &middot; {((file?.size || 0) / 1024 / 1024).toFixed(2)} MB
                                    </div>
                                </div>
                            </div>

                            {/* Copies */}
                            <div>
                                <div className="sec-label">Copies</div>
                                <div className="copies-row">
                                    <button
                                        className="copies-btn"
                                        onClick={() => setCopies(c => Math.max(1, c - 1))}
                                        disabled={copies <= 1 || status === 'PAYING'}
                                    >
                                        −
                                    </button>
                                    <div className="copies-divider" />
                                    <span className="copies-val">{copies}</span>
                                    <div className="copies-divider" />
                                    <button
                                        className="copies-btn"
                                        onClick={() => setCopies(c => c + 1)}
                                        disabled={status === 'PAYING'}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Price summary */}
                            <div className="price-card">
                                <div>
                                    <div className="price-label">Total</div>
                                    <div className="price-val">PKR {totalPrice}</div>
                                </div>
                                <div className="price-breakdown">
                                    <div className="price-line">{metadata.pageCount} pages × {copies} {copies === 1 ? 'copy' : 'copies'}</div>
                                    <div className="price-line">PKR {PRICE_PER_PAGE_PKR} per page</div>
                                </div>
                            </div>

                            {/* Payment instructions (PAYING only) */}
                            {status === 'PAYING' && (
                                <>
                                    {uploadError && (
                                        <div style={{ padding: '10px', background: '#fee2e2', color: '#dc2626', borderRadius: '12px', fontSize: '13px' }}>
                                            {uploadError}
                                        </div>
                                    )}

                                    {token !== null && walletBal !== null && walletBal >= totalPrice ? (
                                        <div className="pay-box" style={{ borderColor: '#4fda0f' }}>
                                            <div className="pay-heading">Instant Wallet Payment</div>
                                            <div className="pay-row">
                                                <span className="pay-row-label">Available Balance</span>
                                                <span className="pay-row-val">PKR {walletBal}</span>
                                            </div>
                                            <p className="pay-note">You have enough funds. Pay instantly below.</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="pay-box">
                                                <div className="pay-heading">
                                                    Transfer exactly PKR {totalPrice} to:
                                                </div>
                                                {([
                                                    ['Account', 'Ayesha Awais'],
                                                    ['NayaPay #', '03234563464'],
                                                    ['ID', 'ayesha.624@nayapay'],
                                                    ['IBAN', 'PK26NAYA1234503234563464'],
                                                ] as [string, string][]).map(([label, value]) => (
                                                    <div key={label} className="pay-row">
                                                        <span className="pay-row-label">{label}</span>
                                                        <span className="pay-row-val">{value}</span>
                                                    </div>
                                                ))}
                                                <p className="pay-note">
                                                    Send the exact amount to enable auto-verification.
                                                </p>
                                            </div>

                                            <div>
                                                <label className="input-label">
                                                    Your NayaPay Account Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="account-input"
                                                    placeholder="e.g. Muhammad Ali"
                                                    value={accountTitle}
                                                    onChange={e => setAccountTitle(e.target.value)}
                                                    autoComplete="off"
                                                    autoCorrect="off"
                                                />
                                                <p className="input-hint">
                                                    Must match the name shown in your NayaPay account exactly.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}

                    <div className="scroll-spacer" />
                </div>

                {/* Sticky footer action button */}
                {(status === 'CONFIGURING' || status === 'PAYING') && (
                    <div className="up-footer">
                        {status === 'CONFIGURING' && (
                            <button
                                className="btn-green"
                                onClick={handleCreateJob}
                                disabled={isCreatingJob}
                            >
                                {isCreatingJob
                                    ? <><Spinner size={20} className="animate-spin" />&nbsp;&nbsp;Processing…</>
                                    : <span className="btn-green-text">Proceed to Payment</span>
                                }
                            </button>
                        )}
                        {status === 'PAYING' && (
                            token !== null && walletBal !== null && walletBal >= totalPrice ? (
                                <button
                                    className="btn-dark-green"
                                    onClick={handleWalletPayment}
                                >
                                    Pay PKR {totalPrice} Instantly
                                </button>
                            ) : (
                                <button
                                    className="btn-dark-green"
                                    onClick={handleVerifyPayment}
                                    disabled={!accountTitle.trim()}
                                >
                                    I Have Paid
                                </button>
                            )
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default function UploadPage() {
    return (
        <Suspense fallback={<div style={{ height: '100svh', background: '#ffffff' }} />}>
            <UploadPageContent />
        </Suspense>
    );
}
