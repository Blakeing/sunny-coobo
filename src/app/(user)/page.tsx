import { notFound } from 'next/navigation'

import HomePage from '@/components/pages/home/HomePage'
import { HomePagePreview } from '@/components/pages/home/HomePagePreview'
import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
import { getClients } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export const revalidate = 30

export default async function HomeRoute() {
  const token = getPreviewToken()
  const data = await getClients({ token })

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <HomePage data={data!} />
            </PreviewWrapper>
          }
        >
          <HomePagePreview token={token} />
        </PreviewSuspense>
      ) : (
        <HomePage data={data!} />
      )}
    </>
  )
}
