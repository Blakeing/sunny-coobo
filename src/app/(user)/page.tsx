import { notFound } from 'next/navigation'

import HomePage from '@/components/pages/home/HomePage'
import { WorkPagePreview } from '@/components/pages/work/WorkPagePreview'
import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
import { getClients, getProjects } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export const revalidate = 30

export default async function HomeRoute() {
  const token = getPreviewToken()
  const data = (await getClients({ token })) || { clients: [] }

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <HomePage data={data} />
            </PreviewWrapper>
          }
        >
          <WorkPagePreview token={token} />
        </PreviewSuspense>
      ) : (
        <HomePage data={data} />
      )}
    </>
  )
}
