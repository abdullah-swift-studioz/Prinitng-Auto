'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Printer } from 'phosphor-react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

function KioskPrintContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const jobId = searchParams.get('jobId');
    const fileId = searchParams.get('fileId');
    const copies = parseInt(searchParams.get('copies') || '1', 10);
    const kioskId = searchParams.get('kioskId') || 'default';

    const [statusText, setStatusText] = useState('Loading document…');
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const hasRun = useRef(false); // Prevent double-execution if iframe fires onLoad twice
    const fileUrl = `${API_BASE}/uploads/${fileId}`;

    const runPrint = async () => {
        if (hasRun.current) return;
        hasRun.current = true;

        setStatusText(`Printing ${copies} ${copies === 1 ? 'copy' : 'copies'}…`);

        for (let i = 0; i < copies; i++) {
            window.print();
            if (i < copies - 1) {
                // Brief pause between copies so print spooler can queue each job
                await new Promise(r => setTimeout(r, 2500));
            }
        }

        setStatusText('Finishing up…');
        try {
            await fetch(`${API_BASE}/api/jobs/${jobId}/complete`, { method: 'POST' });
        } catch {
            // Non-fatal — job will appear as PAID in admin but won't block user
        }

        setStatusText('Done! Collect your document.');
        await new Promise(r => setTimeout(r, 2500));

        router.replace(`/kiosk-display?kiosk_id=${kioskId}`);
    };

    // Fallback: if iframe never fires onLoad (e.g. network error or non-PDF),
    // still attempt to print after 10 seconds so the kiosk doesn't freeze.
    useEffect(() => {
        const fallback = setTimeout(runPrint, 10000);
        return () => clearTimeout(fallback);
    }, []);

    return (
        <>
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                @media print {
                    .no-print { display: none !important; }
                    iframe {
                        position: fixed !important;
                        top: 0 !important; left: 0 !important;
                        width: 100% !important; height: 100% !important;
                        border: none !important;
                    }
                }
            `}</style>

            {/* Status overlay — hidden during actual print dialog */}
            <div className="no-print fixed inset-0 z-50 bg-gray-950 flex flex-col items-center justify-center gap-6 text-white">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Printer size={40} weight="duotone" className="text-blue-400" />
                    </div>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-3xl font-bold">Job #{jobId}</p>
                    <p className="text-gray-400 text-lg">{statusText}</p>
                </div>
            </div>

            {/* PDF rendered in full-page iframe — window.print() captures it */}
            <iframe
                ref={iframeRef}
                src={fileUrl}
                onLoad={runPrint}
                style={{
                    position: 'fixed', top: 0, left: 0,
                    width: '100%', height: '100%',
                    border: 'none', zIndex: 1,
                }}
            />
        </>
    );
}

export default function KioskPrintPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
                Preparing print…
            </div>
        }>
            <KioskPrintContent />
        </Suspense>
    );
}
