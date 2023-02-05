import { PreviewBanner } from '@/components/preview/PreviewBanner'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export default function ServicesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()

  return (
    <>
      {token && <PreviewBanner />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
