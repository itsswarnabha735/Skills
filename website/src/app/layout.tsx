import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ButterPath | The Context Layer for AI Agents',
  description: 'We package expert knowledge into executable Skills that any AI agent can use reliably. The smoothest path from chaos to production.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'ButterPath | The Context Layer for AI Agents',
    description: 'The smoothest path through context. Executable skills for AI agents.',
    type: 'website',
  },
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
