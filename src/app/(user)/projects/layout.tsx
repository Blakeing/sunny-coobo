import { PreviewBanner } from '@/components/preview/PreviewBanner'
import Header from '@/components/shared/Header'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export default function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()

  return (
    <main>
      {token && <PreviewBanner />}
      <Header />
      {children}
    </main>
  )
}
