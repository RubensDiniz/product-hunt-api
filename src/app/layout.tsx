import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { AppWrapper } from '@/components/AppWrapper'

export const metadata: Metadata = {
  title: 'Project Hunt',
  description: 'Project Hunt frontend code challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
