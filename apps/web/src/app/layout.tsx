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
            <body className="antialiased">
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
