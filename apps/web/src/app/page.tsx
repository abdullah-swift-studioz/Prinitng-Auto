'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { QrCode, ArrowRight } from 'phosphor-react';

function HomeContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const kioskId = searchParams.get('kiosk_id') || 'default';

    const handleStart = () => {
        router.push(`/upload?kiosk_id=${kioskId}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
            <div className="w-full max-w-md flex flex-col items-center text-center space-y-8 animate-fade-in">

                <div className="p-4 bg-white/10 rounded-full backdrop-blur-md shadow-xl border border-white/20">
                    <QrCode size={64} weight="duotone" className="text-blue-400" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Printing Kiosk
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Scan. Upload. Print.
                    </p>
                </div>

                <div className="w-full pt-8">
                    <button
                        onClick={handleStart}
                        className="group relative w-full flex items-center justify-center py-4 px-8 text-lg font-bold text-white bg-blue-600 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                        <span className="relative flex items-center gap-3">
                            Start Printing <ArrowRight size={24} weight="bold" />
                        </span>
                    </button>
                    <p className="mt-4 text-xs text-gray-600 font-mono">
                        Kiosk ID: {kioskId}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default function Home() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
                Loading...
            </div>
        }>
            <HomeContent />
        </Suspense>
    );
}
