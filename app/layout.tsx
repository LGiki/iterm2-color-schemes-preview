import './globals.css'
import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: 'iTerm2 Color Schemes Preview',
  description: 'iTerm2 Color Schemes Preview',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💅</text></svg>',
  },
  openGraph: {
    title: 'iTerm2 Color Schemes Preview',
    description: 'iTerm2 Color Schemes Preview',
    images: 'https://iterm2-color-schemes-preview.vercel.app/og.jpg',
  },
  twitter: {
    title: 'iTerm2 Color Schemes Preview',
    description: 'iTerm2 Color Schemes Preview',
    images: 'https://iterm2-color-schemes-preview.vercel.app/og.jpg',
  }
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
