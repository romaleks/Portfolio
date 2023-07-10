import { Raleway } from 'next/font/google'

import Navigation from '@/components/layout/navigation/Navigation'

import Cursor from '@/ui/cursor/Cursor'

import '../styles/globals.scss'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata = {
  title: 'Alex Protfolio',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navigation />
        {children}
        <Cursor />
      </body>
    </html>
  )
}
