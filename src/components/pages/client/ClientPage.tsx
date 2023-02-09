import ImageBox from '@/components/shared/ImageBox'
import ScrollUp from '@/components/shared/ScrollUp'
import type { ProjectPayload } from '@/types'

export function ClientPage({ data }: { data: ProjectPayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { client, coverImage, title } = data || {}

  return (
    <main className="my-20 flex-grow px-4 md:px-16 lg:px-32">
      <div className="space-y-6">
        <div className="rounded-md border">
          {/* Image  */}
          <ImageBox
            image={coverImage}
            alt={`Cover image for ${title}`}
            classesWrapper="relative aspect-[16/9]"
          />

          <div className="grid grid-cols-1 divide-y divide-inherit lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
            {/* Client */}
            {client && (
              <div className="p-3 lg:p-4">
                <div className="text-xs md:text-sm">Client</div>
                <div className="text-md md:text-lg">{client}</div>
              </div>
            )}
          </div>
        </div>

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
    </main>
  )
}
