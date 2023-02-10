'use client'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, SetStateAction, useEffect, useState } from 'react'

import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { urlForImage } from '@/lib/sanity.image'
import { resolveHref } from '@/lib/sanity.links'
import type { HomePagePayload, ShowcaseProject } from '@/types'

import { Gallery } from './Gallery'

export function WorkPage({ data }: { data: HomePagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { showcaseProjects } = data || {}
  const [filteredImages, setFilteredImages] = useState<ShowcaseProject[]>([])

  useEffect(() => {
    return setFilteredImages(showcaseProjects || [])
  }, [showcaseProjects])

  const images = filteredImages.map(function (project) {
    return project.coverImage
  })

  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        {showcaseProjects && showcaseProjects.length > 0 && (
          <section className="mx-auto grid w-full grid-cols-4 ">
            {showcaseProjects.map((project, key) => {
              return <Gallery key={key} project={project} images={images} />
            })}
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
