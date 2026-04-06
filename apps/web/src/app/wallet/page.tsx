'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Wallet() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const kioskId = searchParams.get('kiosk_id') || 'default';

    const [token, setToken] = useState<string | null>(null);
    const [balance, setBalance] = useState(0);
    const [topUps, setTopUps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [amount, setAmount] = useState('');
    const [accountTitle, setAccountTitle] = useState('');
    const [reqLoading, setReqLoading] = useState(false);
    const [reqError, setReqError] = useState('');
    const [reqSuccess, setReqSuccess] = useState(false);

    useEffect(() => {
        const t = localStorage.getItem('kiosk_token');
        if (!t) {
            router.push(`/?kiosk_id=${kioskId}`);
            return;
        }
        setToken(t);
        fetchWalletData(t);
    }, []);

    const fetchWalletData = async (t: string) => {
        try {
            const res = await fetch('http://localhost:3001/api/wallet/balance', {
                headers: { 'Authorization': `Bearer ${t}` }
            });
            const data = await res.json();
            if (res.ok) {
                setBalance(data.balance);
                setTopUps(data.topUps);
            }
        } catch (e) {
            console.error('Failed to fetch wallet data', e);
        } finally {
            setLoading(false);
        }
    };

    const handleTopUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setReqLoading(true);
        setReqError('');
        setReqSuccess(false);

        try {
            const res = await fetch('http://localhost:3001/api/wallet/request-topup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ amount, nayapayAccountTitle: accountTitle })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to submit request');

            setReqSuccess(true);
            setAmount('');
            setAccountTitle('');
            await fetchWalletData(token!); // refresh list
        } catch (err: any) {
            setReqError(err.message);
        } finally {
            setReqLoading(false);
        }
    };

    if (loading) return null;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body { height: 100%; }

                .wallet-root {
                    height: 100svh;
                    background: #fdfdfd;
                    position: relative;
                    overflow-y: auto;
                    font-family: 'Barlow', sans-serif;
                    padding-bottom: 40px;
                }
                .wallet-header {
                    padding: 44px 28px 20px;
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

                .wallet-content {
                    padding: 0 28px;
                }
                
                .balance-card {
                    background: #4fda0f;
                    padding: 32px 24px;
                    border-radius: 24px;
                    color: white;
                    margin-top: 16px;
                    margin-bottom: 32px;
                    box-shadow: 0 8px 32px rgba(79,218,15,0.3);
                }
                .balance-label {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 14px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    opacity: 0.8;
                    margin-bottom: 8px;
                }
                .balance-amount {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 64px;
                    line-height: 1;
                    letter-spacing: 2px;
                }

                .section-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 32px;
                    color: #3f4247;
                    letter-spacing: 1.5px;
                    margin-bottom: 16px;
                }

                .topup-form {
                    background: white;
                    border: 1px solid rgba(63,66,71,0.1);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-bottom: 32px;
                }
                
                .form-input {
                    padding: 16px 20px;
                    background: #f4f5f7;
                    border: 1px solid transparent;
                    border-radius: 12px;
                    font-family: 'Barlow', sans-serif;
                    font-size: 16px;
                    color: #3f4247;
                }
                .form-input:focus {
                    outline: none; background: #ffffff;
                    border-color: #4fda0f;
                    box-shadow: 0 0 0 4px rgba(79,218,15,0.1);
                }

                .submit-btn {
                    padding: 16px;
                    background: #3f4247;
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 20px;
                    letter-spacing: 2px;
                    cursor: pointer;
                }
                .submit-btn:active { transform: scale(0.98); }

                .topup-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .topup-item {
                    background: white;
                    border: 1px solid rgba(63,66,71,0.1);
                    padding: 16px;
                    border-radius: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .topup-amount {
                    font-weight: 600;
                    color: #3f4247;
                    font-size: 18px;
                }
                .topup-status {
                    font-size: 12px;
                    font-weight: 700;
                    padding: 4px 10px;
                    border-radius: 20px;
                    text-transform: uppercase;
                }
                .status-PENDING { background: #fef08a; color: #854d0e; }
                .status-APPROVED { background: #dcfce7; color: #166534; }
                .status-REJECTED { background: #fee2e2; color: #991b1b; }
                
                .msg-box {
                    padding: 12px; border-radius: 8px; font-size: 14px; margin-bottom: 4px;
                }
                .msg-error { background: #fee2e2; color: #ef4444; }
                .msg-success { background: #dcfce7; color: #22c55e; }
            `}</style>
            
            <div className="wallet-root">
                <div className="wallet-header">
                    <button className="back-btn" onClick={() => router.push(`/?kiosk_id=${kioskId}`)}>
                        ← Back to Menu
                    </button>
                </div>
                
                <div className="wallet-content">
                    <div className="balance-card">
                        <div className="balance-label">Available Balance</div>
                        <div className="balance-amount">Rs {balance}</div>
                    </div>

                    <h2 className="section-title">Add Funds</h2>
                    <form className="topup-form" onSubmit={handleTopUp}>
                        {reqError && <div className="msg-box msg-error">{reqError}</div>}
                        {reqSuccess && <div className="msg-box msg-success">Top-up request sent for approval!</div>}
                        
                        <p style={{fontSize: '14px', color: '#666', lineHeight: 1.4}}>
                            Transfer funds via NayaPay and submit the request here. Admin will approve it shortly.
                        </p>
                        
                        <input
                            type="number"
                            className="form-input"
                            placeholder="Amount transfered (Rs)"
                            required
                            min="1"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Your NayaPay Account Title"
                            required
                            value={accountTitle}
                            onChange={(e) => setAccountTitle(e.target.value)}
                        />
                        <button type="submit" className="submit-btn" disabled={reqLoading}>
                            {reqLoading ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </form>

                    {topUps.length > 0 && (
                        <>
                            <h2 className="section-title">History</h2>
                            <div className="topup-list">
                                {topUps.map((t) => (
                                    <div key={t.id} className="topup-item">
                                        <div>
                                            <div className="topup-amount">Rs {t.amount}</div>
                                            <div style={{fontSize: '12px', color: '#888', marginTop: '2px'}}>{new Date(t.createdAt).toLocaleDateString()}</div>
                                        </div>
                                        <div className={`topup-status status-${t.status}`}>
                                            {t.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
