import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavHeader from '../components/rootLayout/navHeader'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hellocode v2ing',
  description: '好奇代码第二版开发中',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-6`}>
        <NavHeader />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
