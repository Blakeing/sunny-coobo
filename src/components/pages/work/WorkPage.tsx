import Link from 'next/link'

import GalleryImage from '@/components/shared/GalleryImage.'
import { resolveHref } from '@/lib/sanity.links'
import type { HomePagePayload, ProjectPayload } from '@/types'

export function WorkPage({ data }: { data: ProjectPayload }) {
  // Default to an empty object to allow previews on non-existent documents
  // const { overview, showcaseProjects, title } = data || {}

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 "
      >
        {data.map((project) => (
          <Link key={project._id} href={`/projects/${project.slug}`}>
            <li className="relative">
              <div className="group aspect-w-3 aspect-h-2 block w-full overflow-hidden  focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus:outline-none">
                <GalleryImage
                  classesWrapper="object-cover group-hover:opacity-75 "
                  image={project.coverImage}
                  alt={project.title}
                />
                <span className="sr-only absolute inset-0">
                  View details for {project.title}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
