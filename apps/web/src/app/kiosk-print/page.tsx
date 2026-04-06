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
    const [blobUrl, setBlobUrl] = useState<string | null>(null);
    const [fileType, setFileType] = useState<'image' | 'pdf' | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const hasRun = useRef(false);
    const fileUrl = `${API_BASE}/uploads/${fileId}`;

    // Fetch the file as a blob, detect its type via magic bytes so we handle
    // files that were saved without an extension (no Content-Type header).
    useEffect(() => {
        let objectUrl: string | null = null;

        const prepare = async () => {
            try {
                const res = await fetch(fileUrl);
                const blob = await res.blob();

                // Detect MIME type: prefer response header, fall back to magic bytes
                let mime = blob.type || res.headers.get('content-type') || '';
                if (!mime || mime === 'application/octet-stream') {
                    const header = new Uint8Array(await blob.slice(0, 4).arrayBuffer());
                    if (header[0] === 0xFF && header[1] === 0xD8) mime = 'image/jpeg';
                    else if (header[0] === 0x89 && header[1] === 0x50) mime = 'image/png';
                    else if (header[0] === 0x47 && header[1] === 0x49) mime = 'image/gif';
                    else if (header[0] === 0x25 && header[1] === 0x50) mime = 'application/pdf';
                }

                const typedBlob = new Blob([blob], { type: mime });
                objectUrl = URL.createObjectURL(typedBlob);
                setBlobUrl(objectUrl);
                setFileType(mime.startsWith('image/') ? 'image' : 'pdf');
            } catch {
                // If fetch fails, fall back to the raw URL (will likely still show blank)
                setBlobUrl(fileUrl);
                setFileType('pdf');
            }
        };

        prepare();
        return () => { if (objectUrl) URL.revokeObjectURL(objectUrl); };
    }, [fileUrl]);

    const runPrint = async () => {
        if (hasRun.current) return;
        hasRun.current = true;

        setStatusText(`Printing ${copies} ${copies === 1 ? 'copy' : 'copies'}…`);

        for (let i = 0; i < copies; i++) {
            if (fileType === 'image') {
                // For images the content is in the parent page — window.print() works
                window.print();
            } else {
                // For PDFs, print from inside the iframe
                try {
                    iframeRef.current?.contentWindow?.print();
                } catch {
                    window.print();
                }
            }
            if (i < copies - 1) {
                await new Promise(r => setTimeout(r, 2500));
            }
        }

        setStatusText('Finishing up…');
        try {
            await fetch(`${API_BASE}/api/jobs/${jobId}/complete`, { method: 'POST' });
        } catch { /* non-fatal */ }

        setStatusText('Done! Collect your document.');
        await new Promise(r => setTimeout(r, 2500));
        router.replace(`/kiosk-display?kiosk_id=${kioskId}`);
    };

    return (
        <>
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }

                /* When printing an IMAGE: hide everything except the image */
                @media print {
                    .no-print { display: none !important; }
                    .print-image {
                        position: fixed !important;
                        top: 0 !important; left: 0 !important;
                        width: 100vw !important; height: 100vh !important;
                        object-fit: contain !important;
                        display: block !important;
                    }
                }
            `}</style>

            {/* Status overlay — hidden during print */}
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

            {/* IMAGE: render as <img> so window.print() captures it */}
            {fileType === 'image' && blobUrl && (
                <img
                    src={blobUrl}
                    alt="Print document"
                    className="print-image"
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
                    onLoad={runPrint}
                />
            )}

            {/* PDF: render in iframe and print from contentWindow */}
            {fileType === 'pdf' && blobUrl && (
                <iframe
                    ref={iframeRef}
                    src={blobUrl}
                    onLoad={runPrint}
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 1 }}
                />
            )}
        </>
    );
}

export default function KioskPrintPage() {
    return (
        <Suspense fallback={<div style={{ height: '100svh', background: '#111' }} />}>
            <KioskPrintContent />
        </Suspense>
    );
}
