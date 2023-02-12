import { notFound } from 'next/navigation'

import { WebPage } from '@/components/pages/work/web/WebPage'
import { WorkPagePreview } from '@/components/pages/work/WorkPagePreview'
import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
import { getProjectsByWebTag } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export const revalidate = 30

export default async function WorkWebRoute() {
  const token = getPreviewToken()
  const data = (await getProjectsByWebTag({ token })) || { projects: [] }

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <WebPage data={data} />
            </PreviewWrapper>
          }
        >
          <WorkPagePreview token={token} />
        </PreviewSuspense>
      ) : (
        <WebPage data={data} />
      )}
    </>
  )
}
