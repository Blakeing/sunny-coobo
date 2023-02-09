import '@/styles/globals.css'

import { Montserrat, Open_Sans } from '@next/font/google'

import { useScrollPadding } from '@/utils/useScrollPadding'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full max-w-[100vw] overflow-x-hidden scroll-smooth  antialiased `}
    >
      <body className="">{children}</body>
    </html>
  )
}
