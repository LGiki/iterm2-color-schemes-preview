import './globals.css'
import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: 'iTerm2 Color Schemes Preview',
  description: 'iTerm2 Color Schemes Preview',
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
