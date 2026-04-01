import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Printing Kiosk',
    description: 'Print documents easily',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900 antialiased min-h-screen">
                <main className="flex flex-col items-center justify-center min-h-screen p-4">
                    {children}
                </main>
            </body>
        </html>
    )
}
