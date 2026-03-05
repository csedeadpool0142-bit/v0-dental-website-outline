import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oceanview Dental Care | Modern, Gentle Dentistry in White Rock, BC',
  description:
    'Oceanview Dental Care offers comfortable, modern dental services in White Rock, BC. Book your appointment with Dr. Maya Patel, DDS. Cleanings, Invisalign, implants, emergency care & more.',
  keywords: [
    'dentist White Rock',
    'dental care BC',
    'Oceanview Dental',
    'Dr. Maya Patel',
    'Invisalign',
    'dental implants',
    'emergency dentist',
    'family dentistry',
  ],
}

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
