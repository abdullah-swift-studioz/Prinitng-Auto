'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const kioskId = searchParams.get('kiosk_id') || 'default';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');

            localStorage.setItem('kiosk_token', data.token);
            localStorage.setItem('kiosk_user_email', data.user.email);
            
            router.push(`/?kiosk_id=${kioskId}`);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body { height: 100%; }

                .auth-root {
                    height: 100svh;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Barlow', sans-serif;
                    display: flex;
                    flex-direction: column;
                }
                .auth-header {
                    position: relative;
                    z-index: 1;
                    padding: 44px 28px 20px;
                    flex-shrink: 0;
                }
                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    background: transparent;
                    color: #3f4247;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 14px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    -webkit-tap-highlight-color: transparent;
                }
                
                .auth-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 0 28px;
                    justify-content: center;
                    z-index: 1;
                }
                .auth-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 64px;
                    line-height: 0.9;
                    letter-spacing: 2px;
                    color: #3f4247;
                    margin-bottom: 24px;
                }

                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .auth-input {
                    width: 100%;
                    padding: 16px 20px;
                    background: #f4f5f7;
                    border: 1px solid transparent;
                    border-radius: 12px;
                    font-family: 'Barlow', sans-serif;
                    font-size: 16px;
                    color: #3f4247;
                    transition: all 0.2s ease;
                }
                .auth-input:focus {
                    outline: none;
                    background: #ffffff;
                    border-color: #4fda0f;
                    box-shadow: 0 0 0 4px rgba(79,218,15,0.1);
                }
                
                .submit-btn {
                    margin-top: 8px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 24px;
                    background: #4fda0f;
                    border: none;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .submit-btn:active { transform: scale(0.97); }
                .submit-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px;
                    letter-spacing: 3px;
                    color: #ffffff;
                    text-transform: uppercase;
                }

                .auth-switch {
                    margin-top: 24px;
                    text-align: center;
                    font-size: 15px;
                    color: #8c8f96;
                }
                .switch-link {
                    color: #4fda0f;
                    font-weight: 600;
                    background: none; border: none; padding: 0;
                    cursor: pointer;
                }
                
                .error-msg {
                    color: #ef4444; font-size: 14px; margin-top: 8px; text-align: center;
                }
            `}</style>
            
            <div className="auth-root">
                <div className="auth-header">
                    <button className="back-btn" onClick={() => router.push(`/?kiosk_id=${kioskId}`)}>
                        ← Back
                    </button>
                </div>
                
                <div className="auth-content">
                    <h1 className="auth-title">Login</h1>
                    
                    <form className="auth-form" onSubmit={handleLogin}>
                        <input
                            type="email"
                            className="auth-input"
                            placeholder="Email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="auth-input"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        {error && <div className="error-msg">{error}</div>}
                        
                        <button type="submit" className="submit-btn" disabled={loading}>
                            <span className="submit-btn-text">{loading ? 'Logging in...' : 'Sign In'}</span>
                        </button>
                    </form>
                    
                    <div className="auth-switch">
                        Don't have an account? <button className="switch-link" onClick={() => router.push(`/signup?kiosk_id=${kioskId}`)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}
