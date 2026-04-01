'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Printer } from 'phosphor-react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

function KioskPrintContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const jobId = searchParams.get('jobId');
    const fileId = searchParams.get('fileId');
    const copies = parseInt(searchParams.get('copies') || '1');
    const kioskId = searchParams.get('kioskId') || 'default';

    const [status, setStatus] = useState('Loading document...');
    const fileUrl = `${API_BASE}/uploads/${fileId}`;

    useEffect(() => {
        const run = async () => {
            // Wait for iframe PDF to fully load
            setStatus('Loading document...');
            await new Promise(r => setTimeout(r, 3000));

            setStatus(`Printing ${copies} ${copies > 1 ? 'copies' : 'copy'}...`);
            for (let i = 0; i < copies; i++) {
                window.print();
                if (i < copies - 1) {
                    await new Promise(r => setTimeout(r, 2000));
                }
            }

            // Mark job complete on server
            setStatus('Finishing up...');
            try {
                await fetch(`${API_BASE}/api/jobs/${jobId}/complete`, { method: 'POST' });
            } catch {}

            setStatus('Done! Collect your document.');
            await new Promise(r => setTimeout(r, 2500));

            // Return to kiosk display
            router.replace(`/kiosk-display?kiosk_id=${kioskId}`);
        };

        run();
    }, []);

    return (
        <>
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                @media print {
                    .no-print { display: none !important; }
                    iframe { position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; }
                }
            `}</style>

            {/* Status overlay — hidden when printing */}
            <div className="no-print fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-6 text-white">
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center animate-pulse">
                    <Printer size={48} weight="duotone" />
                </div>
                <p className="text-3xl font-bold">Job #{jobId}</p>
                <p className="text-xl text-gray-300">{status}</p>
            </div>

            {/* PDF loaded in full-page iframe — printed by window.print() */}
            <iframe
                src={fileUrl}
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }}
            />
        </>
    );
}

export default function KioskPrintPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                Preparing print...
            </div>
        }>
            <KioskPrintContent />
        </Suspense>
    );
}
