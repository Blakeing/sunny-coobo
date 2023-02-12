import { notFound } from 'next/navigation'

import { BrandPage } from '@/components/pages/work/brand/BrandPage'
import { WorkPagePreview } from '@/components/pages/work/WorkPagePreview'
import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
import { getProjectsByBrandTag } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export const revalidate = 30

export default async function WorkBrandRoute() {
  const token = getPreviewToken()
  const data = (await getProjectsByBrandTag({ token })) || { projects: [] }

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <BrandPage data={data} />
            </PreviewWrapper>
          }
        >
          <WorkPagePreview token={token} />
        </PreviewSuspense>
      ) : (
        <BrandPage data={data} />
      )}
    </>
  )
}
