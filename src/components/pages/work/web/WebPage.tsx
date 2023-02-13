'use client'

import { useEffect, useState } from 'react'

import type { ProjectPayload } from '@/types'

import { Gallery } from '../../test/Gallery'

export function WebPage({ data }: { data: ProjectPayload }) {
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    return setFilteredImages(data || [])
  }, [data])

  const images = filteredImages.map(function (data) {
    return data.coverImage
  })

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 "
      >
        {data.map((project) => (
          <Gallery key={project._id} project={project} images={images} />
        ))}
      </ul>
    </>
  )
}
