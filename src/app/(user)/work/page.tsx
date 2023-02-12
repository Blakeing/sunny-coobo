import { notFound } from 'next/navigation'

import { WorkPage } from '@/components/pages/work/WorkPage'
import { WorkPagePreview } from '@/components/pages/work/WorkPagePreview'
import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
import { getHomePage, getProjectsByTag } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export const revalidate = 30

export default async function WorkRoute() {
  const token = getPreviewToken()
  const data = (await getProjectsByTag({ token })) || {
    title: '',
    overview: [],
    showcaseProjects: [],
  }

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <WorkPage data={data} />
            </PreviewWrapper>
          }
        >
          <WorkPagePreview token={token} />
        </PreviewSuspense>
      ) : (
        <WorkPage data={data} />
      )}
    </>
  )
}
