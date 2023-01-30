import '../../styles/globals.css'

import Footer from '@components/Footer'
import Header from '@components/shared/Header'
import { Montserrat, Open_Sans } from '@next/font/google'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { getPreviewToken } from 'lib/sanity.server.preview'

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
  const token = getPreviewToken()

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body>
        {token && <PreviewBanner />}
        <Header />
        <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
