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
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="mx-auto w-full max-w-screen-xl flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
