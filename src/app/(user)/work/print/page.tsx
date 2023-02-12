import { notFound } from 'next/navigation'

import { PrintPage } from '@/components/pages/work/print/PrintPage'
import { WorkPagePreview } from '@/components/pages/work/WorkPagePreview'
import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
import { getProjectsByPrintTag } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export const revalidate = 30

export default async function WorkPrintRoute() {
  const token = getPreviewToken()
  const data = (await getProjectsByPrintTag({ token })) || { projects: [] }

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <PrintPage data={data} />
            </PreviewWrapper>
          }
        >
          <WorkPagePreview token={token} />
        </PreviewSuspense>
      ) : (
        <PrintPage data={data} />
      )}
    </>
  )
}
