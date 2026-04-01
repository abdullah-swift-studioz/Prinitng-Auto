'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import QRCode from 'react-qr-code';
import { Printer, ArrowRight } from 'phosphor-react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

function KioskDisplayContent() {
    const searchParams = useSearchParams();
    const kioskId = searchParams.get('kiosk_id') || 'default';

    const router = useRouter();
    const [baseUrl, setBaseUrl] = useState('http://localhost:3000');
    const processedJobs = useRef<Set<number>>(new Set());

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setBaseUrl(`${window.location.protocol}//${window.location.host}`);
        }
    }, []);

    // Poll for paid jobs and print them via hidden iframe
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
            } catch {
                // Silently ignore network errors
            }
        };

        const interval = setInterval(poll, 5000);
        poll(); // run immediately on mount
        return () => clearInterval(interval);
    }, [kioskId]);

    const uploadUrl = `${baseUrl}/?kiosk_id=${kioskId}`;

    return (
        <div className="min-h-screen bg-black text-white flex flex-row overflow-hidden font-sans">

            {/* Left Side: Call to Action */}
            <div className="w-1/2 flex flex-col justify-center p-16 space-y-12 bg-gradient-to-br from-gray-900 to-black z-10 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-blue-600 rounded-full blur-[150px] animate-pulse"></div>
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-4 text-blue-400">
                        <Printer size={48} weight="duotone" />
                        <span className="text-xl font-bold tracking-wider uppercase opacity-80">Self-Service Printing</span>
                    </div>
                    <h1 className="text-7xl font-bold leading-tight">
                        Print your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Documents
                        </span>
                        <br />
                        Here.
                    </h1>
                </div>

                <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-900/50">1</div>
                        <p className="text-2xl font-light">Scan the QR Code</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold">2</div>
                        <p className="text-2xl font-light">Upload & Pay</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold">3</div>
                        <p className="text-2xl font-light">Collect Print</p>
                    </div>
                </div>
            </div>

            {/* Right Side: QR Code */}
            <div className="w-1/2 bg-white text-black flex flex-col items-center justify-center p-12 relative">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center gap-6 scale-125">
                    <div className="p-4 bg-gray-900 rounded-2xl">
                        <QRCode
                            value={uploadUrl}
                            size={300}
                            fgColor="#ffffff"
                            bgColor="#111827"
                            level="H"
                        />
                    </div>
                    <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        Scan to Start <ArrowRight weight="bold" />
                    </p>
                </div>

                <div className="absolute bottom-12 text-gray-400 text-sm font-mono">
                    Kiosk ID: {kioskId}
                </div>
            </div>
        </div>
    );
}

export default function KioskDisplayPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                Loading kiosk display...
            </div>
        }>
            <KioskDisplayContent />
        </Suspense>
    );
}
