'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CloudArrowUp, FilePdf, Image as ImageIcon, CheckCircle, Spinner, Printer } from 'phosphor-react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

function UploadPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const kioskId = searchParams.get('kiosk_id') || 'default';

    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [metadata, setMetadata] = useState<{ pageCount: number, fileId: string } | null>(null);
    const [jobId, setJobId] = useState<number | null>(null);
    const [accountTitle, setAccountTitle] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [copies, setCopies] = useState(1);
    const [status, setStatus] = useState<'IDLE' | 'UPLOADING' | 'CONFIGURING' | 'PAYING' | 'VERIFYING_PAYMENT' | 'SUCCESS' | 'COMPLETED'>('IDLE');

    // Poll for status when in success/printing state
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (status === 'SUCCESS' && jobId) {
            interval = setInterval(async () => {
                try {
                    const res = await fetch(`${API_BASE}/api/jobs/${jobId}`);
                    const job = await res.json();
                    if (job.status === 'COMPLETED') {
                        setStatus('COMPLETED');
                        clearInterval(interval);
                    }
                } catch (e) {
                    console.error('Polling error', e);
                }
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [status, jobId]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            await uploadFile(selectedFile);
        }
    };

    const uploadFile = async (fileToUpload: File) => {
        setUploading(true);
        setStatus('UPLOADING');

        const formData = new FormData();
        formData.append('file', fileToUpload);

        try {
            const res = await fetch(`${API_BASE}/api/upload`, {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();

            if (res.ok) {
                setMetadata(data);
                setStatus('CONFIGURING');
            } else {
                alert('Upload failed');
                setStatus('IDLE');
            }
        } catch (err) {
            console.error(err);
            alert('Upload error');
            setStatus('IDLE');
        } finally {
            setUploading(false);
        }
    };

    const handleCreateJob = async () => {
        if (!metadata) return;
        setStatus('PAYING');

        try {
            const res = await fetch(`${API_BASE}/api/jobs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fileId: metadata.fileId,
                    pageCount: metadata.pageCount,
                    copies,
                    kioskId
                })
            });
            const job = await res.json();

            if (res.ok) {
                setJobId(job.id);
                // Stay on PAYING - show bank transfer UI
            } else {
                alert('Job creation failed');
                setStatus('CONFIGURING');
            }
        } catch (err) {
            console.error(err);
            setStatus('CONFIGURING');
        }
    };

    const handleVerifyPayment = async () => {
        if (!jobId || !accountTitle.trim()) {
            alert('Please enter your account title');
            return;
        }
        setIsVerifying(true);
        setStatus('VERIFYING_PAYMENT');

        try {
            const res = await fetch(`${API_BASE}/api/jobs/${jobId}/verify-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ accountTitle: accountTitle.trim() })
            });
            const data = await res.json();

            if (res.ok) {
                setStatus('SUCCESS');
            } else {
                alert(data.error || 'Payment verification failed');
                setStatus('PAYING');
            }
        } catch (err) {
            console.error(err);
            alert('Verification failed. Please try again.');
            setStatus('PAYING');
        } finally {
            setIsVerifying(false);
        }
    };

    const PRICE_PER_PAGE_PKR = 10;
    const totalPrice = metadata ? metadata.pageCount * copies * PRICE_PER_PAGE_PKR : 0;

    if (status === 'SUCCESS' || status === 'COMPLETED') {
        const isCompleted = status === 'COMPLETED';
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
                <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md flex flex-col items-center space-y-6">

                    {isCompleted ? (
                        <CheckCircle size={80} weight="fill" className="text-green-500 animate-bounce" />
                    ) : (
                        <div className="relative w-20 h-20">
                            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                            <Printer size={32} className="absolute inset-0 m-auto text-blue-500" />
                        </div>
                    )}

                    <h2 className="text-3xl font-bold text-gray-900">
                        {isCompleted ? 'Printing Complete!' : 'Printing in Progress...'}
                    </h2>

                    <p className="text-gray-600 text-lg">
                        {isCompleted
                            ? 'Please collect your documents below.'
                            : `Sending ${copies} cop${copies > 1 ? 'ies' : 'y'} to the printer.`}
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                            className={`h-full bg-blue-500 transition-all duration-1000 ease-out ${isCompleted ? 'w-full' : 'w-2/3 animate-pulse'}`}
                        />
                    </div>
                    <p className="text-sm text-gray-500 font-mono">
                        Status: {isCompleted ? 'DONE' : 'PRINTING'}
                    </p>

                    {isCompleted && (
                        <button
                            onClick={() => router.push(`/?kiosk_id=${kioskId}`)}
                            className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 w-full"
                        >
                            Print Another
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
            <header className="w-full max-w-lg flex justify-between items-center mb-8">
                <h1 className="text-xl font-bold text-gray-800">Kiosk Upload</h1>
                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-600">ID: {kioskId}</span>
            </header>

            <main className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Upload Section */}
                {status === 'IDLE' || status === 'UPLOADING' ? (
                    <div className="p-8 flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-gray-200 m-4 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors relative">
                        {uploading ? (
                            <div className="flex flex-col items-center space-y-4">
                                <Spinner size={48} className="animate-spin text-blue-600" />
                                <p className="text-gray-500 font-medium">Analyzing document...</p>
                            </div>
                        ) : (
                            <>
                                <CloudArrowUp size={64} className="text-blue-500 mb-4" />
                                <p className="text-xl font-semibold text-gray-700 mb-2">Upload your file</p>
                                <p className="text-sm text-gray-400 mb-6 text-center">Supports PDF, JPG, PNG up to 10MB</p>
                                <label className="relative cursor-pointer">
                                    <span className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
                                        Choose File
                                    </span>
                                    <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,image/*" />
                                </label>
                            </>
                        )}
                    </div>
                ) : (
                    /* Configuration Section */
                    <div className="p-8 space-y-8">
                        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                <FilePdf size={32} />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900 truncate">{file?.name}</p>
                                <p className="text-sm text-gray-500">{metadata?.pageCount} Pages • {((file?.size || 0) / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide">Number of Copies</label>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setCopies(Math.max(1, copies - 1))}
                                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl font-bold hover:bg-gray-200"
                                >-</button>
                                <span className="text-3xl font-bold text-gray-900 w-16 text-center">{copies}</span>
                                <button
                                    onClick={() => setCopies(copies + 1)}
                                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl font-bold hover:bg-gray-200"
                                >+</button>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 space-y-4">
                            <div className="flex justify-between items-center text-gray-600">
                                <span>Price per page</span>
                                <span>PKR {PRICE_PER_PAGE_PKR}</span>
                            </div>
                            <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
                                <span>Total</span>
                                <span>PKR {totalPrice}</span>
                            </div>

                            {status === 'PAYING' || status === 'VERIFYING_PAYMENT' ? (
                                <div className="space-y-4 animate-fade-in">
                                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800 space-y-2">
                                        <p>
                                            Please transfer <b>PKR {totalPrice}</b> to your NayaPay account:
                                        </p>
                                        <ul className="text-xs space-y-1">
                                            <li><b>Bank</b>: Naya Pay</li>
                                            <li><b>Account Title</b>: Ayesha Awais</li>
                                            <li><b>NayaPay Account #</b>: 03234563464</li>
                                            <li><b>NayaPay ID</b>: ayesha.624@nayapay</li>
                                            <li><b>IBAN</b>: PK26NAYA1234503234563464</li>
                                        </ul>
                                        <p className="text-xs mt-1">
                                            Make sure you send the exact amount so we can auto-verify your payment from the NayaPay email.
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Account Title in NayaPay</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Ayesha Awais"
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                            value={accountTitle}
                                            onChange={(e) => setAccountTitle(e.target.value)}
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            We match this with the <b>Destination Acc. Title</b> in your NayaPay email.
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleVerifyPayment}
                                        disabled={isVerifying}
                                        className="w-full py-4 bg-green-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-green-700 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                                    >
                                        {isVerifying ? <Spinner className="animate-spin" /> : 'I Have Paid'}
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleCreateJob}
                                    className="w-full py-4 bg-black text-white rounded-2xl font-bold text-lg shadow-xl shadow-gray-900/10 hover:bg-gray-800 transition-all flex justify-center items-center gap-2"
                                >
                                    Proceed to Payment
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default function UploadPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-600">
                    Loading upload page...
                </div>
            }
        >
            <UploadPageContent />
        </Suspense>
    );
}
