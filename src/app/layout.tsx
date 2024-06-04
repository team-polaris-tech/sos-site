import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Sos Construir',
    default: 'Sos Construir',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col items-center antialiased">
        <Header />
        <main className="w-full max-w-screen-xl flex-grow px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
