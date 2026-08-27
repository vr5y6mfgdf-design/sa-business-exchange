import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SA Business Exchange',
  description: 'Connect, trade, and grow with South African businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
