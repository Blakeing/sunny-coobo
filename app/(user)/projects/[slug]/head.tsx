import { SiteMeta } from '@components/global/SiteMeta'
import { toPlainText } from '@portabletext/react'
import { getProjectBySlug } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'

export default async function ProjectPageHead({
  params,
}: {
  params: { slug: string }
}) {
  const token = getPreviewToken()

  const [project] = await Promise.all([
    getProjectBySlug({ slug: params.slug, token }),
  ])

  return (
    <SiteMeta
      description={project?.overview ? toPlainText(project.overview) : ''}
      image={project?.coverImage}
      title={project?.title}
    />
  )
}
