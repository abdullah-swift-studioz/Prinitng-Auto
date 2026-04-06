'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function HomeContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const kioskId = searchParams.get('kiosk_id') || 'default';
    
    const [token, setToken] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = localStorage.getItem('kiosk_token');
        const e = localStorage.getItem('kiosk_user_email');
        if (t) {
            setToken(t);
            setEmail(e);
        }
        setLoading(false);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('kiosk_token');
        localStorage.removeItem('kiosk_user_email');
        setToken(null);
        setEmail(null);
    };

    if (loading) return null;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body { height: 100%; }

                .home-root {
                    height: 100svh;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Barlow', sans-serif;
                    display: flex;
                    flex-direction: column;
                }
                .home-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(79,218,15,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(79,218,15,0.08) 1px, transparent 1px);
                    background-size: 32px 32px;
                    pointer-events: none;
                    z-index: 0;
                }

                /* header */
                .home-header {
                    position: relative;
                    z-index: 1;
                    padding: 44px 28px 0;
                    flex-shrink: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .home-logo {
                    width: 100px;
                    height: auto;
                    object-fit: contain;
                    display: block;
                }
                .logout-btn {
                    font-size: 13px; font-weight: 600; color: #ef4444; background: rgba(239, 68, 68, 0.1);
                    padding: 6px 12px; border-radius: 8px; border: none; cursor: pointer;
                }

                /* hero — fills remaining space */
                .home-hero {
                    flex: 1;
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 28px;
                }
                .home-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 12px;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    color: #3ab30a;
                    margin-bottom: 16px;
                }
                .eyebrow-dot {
                    width: 6px; height: 6px;
                    background: #4fda0f;
                    border-radius: 50%;
                    flex-shrink: 0;
                    animation: blink 1.5s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.6); }
                }
                .home-headline {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: clamp(64px, 20vw, 120px);
                    line-height: 0.9;
                    letter-spacing: 2px;
                    color: #3f4247;
                    margin-bottom: 20px;
                }
                .home-headline em {
                    font-style: normal;
                    color: transparent;
                    -webkit-text-stroke: 2.5px #4fda0f;
                }
                .home-sub {
                    font-size: 16px;
                    font-weight: 300;
                    color: rgba(63,66,71,0.52);
                    line-height: 1.65;
                    letter-spacing: 0.3px;
                }
                .home-email {
                    font-weight: 600; color: #3f4247;
                }

                /* footer CTA — always at bottom */
                .home-footer {
                    position: relative;
                    z-index: 1;
                    padding: 0 28px 40px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .start-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    padding: 20px 24px;
                    background: #4fda0f;
                    border: none;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease, box-shadow 0.12s ease;
                    box-shadow: 0 8px 32px rgba(79,218,15,0.4);
                    -webkit-tap-highlight-color: transparent;
                }
                .start-btn:active {
                    transform: scale(0.97);
                    box-shadow: 0 2px 12px rgba(79,218,15,0.25);
                }
                .start-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 24px;
                    letter-spacing: 4px;
                    color: #ffffff;
                    text-transform: uppercase;
                }
                .start-btn-arrow {
                    width: 22px; height: 22px;
                    stroke: #ffffff;
                    fill: none;
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    flex-shrink: 0;
                }

                .secondary-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 24px;
                    background: #3f4247;
                    border: none;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .secondary-btn:active { transform: scale(0.97); opacity: 0.9; }
                .secondary-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px;
                    letter-spacing: 3px;
                    color: #ffffff;
                    text-transform: uppercase;
                }

                .guest-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 24px;
                    background: transparent;
                    border: 1.5px solid rgba(63,66,71,0.2);
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .guest-btn:active { transform: scale(0.97); background: rgba(63,66,71,0.05); }
                .guest-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px;
                    letter-spacing: 3px;
                    color: #3f4247;
                    text-transform: uppercase;
                }

                .kiosk-id-pill {
                    margin-top: 10px;
                    text-align: center;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 11px;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: rgba(63,66,71,0.28);
                }
            `}</style>

            <div className="home-root">
                <div className="home-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.jpeg" alt="Print It" className="home-logo" />
                    {token && (
                        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
                    )}
                </div>

                <div className="home-hero">
                    <div className="home-eyebrow">
                        <span className="eyebrow-dot" />
                        Ready to Print
                    </div>
                    {token ? (
                        <>
                            <h1 className="home-headline">
                                Welcome<br />
                                <em>Back.</em>
                            </h1>
                            <p className="home-sub">
                                Logged in as <span className="home-email">{email}</span>. Use your wallet balance to instantly print without waiting.
                            </p>
                        </>
                    ) : (
                        <>
                            <h1 className="home-headline">
                                Print<br />
                                <em>Anything.</em><br />
                                Instantly.
                            </h1>
                            <p className="home-sub">
                                Upload your document and pay via NayaPay. Login to use your pre-funded wallet for instant prints.
                            </p>
                        </>
                    )}
                </div>

                <div className="home-footer">
                    {token ? (
                        <>
                            <button className="start-btn" onClick={() => router.push(`/upload?kiosk_id=${kioskId}`)}>
                                <span className="start-btn-text">Start Printing</span>
                                <svg className="start-btn-arrow" viewBox="0 0 24 24">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                            <button className="secondary-btn" onClick={() => router.push(`/wallet?kiosk_id=${kioskId}`)}>
                                <span className="secondary-btn-text">My Wallet</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="start-btn" onClick={() => router.push(`/login?kiosk_id=${kioskId}`)}>
                                <span className="start-btn-text">Login / Sign Up</span>
                            </button>
                            <button className="guest-btn" onClick={() => router.push(`/upload?kiosk_id=${kioskId}`)}>
                                <span className="guest-btn-text">Continue as Guest</span>
                            </button>
                        </>
                    )}
                    <p className="kiosk-id-pill">Kiosk ID: {kioskId}</p>
                </div>
            </div>
        </>
    );
}

export default function Home() {
    return (
        <Suspense fallback={
            <div style={{
                height: '100svh', display: 'flex', alignItems: 'center',
                justifyContent: 'center', background: '#ffffff',
                fontFamily: 'monospace', letterSpacing: '4px',
                fontSize: '13px', color: '#3ab30a',
            }}>
                INITIALIZING...
            </div>
        }>
            <HomeContent />
        </Suspense>
    );
}
