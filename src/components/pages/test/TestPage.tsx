'use client'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, SetStateAction, useEffect, useState } from 'react'

import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { urlForImage } from '@/lib/sanity.image'
import { resolveHref } from '@/lib/sanity.links'
import type { HomePagePayload, ShowcaseProject } from '@/types'

import { Gallery } from './Gallery'

export function TestPage({ data }: { data: HomePagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { showcaseProjects } = data || {}
  const [filteredImages, setFilteredImages] = useState<ShowcaseProject[]>([])
  const [tag, setTag] = useState('all' || [])
  const [selectedOption, setSelectedOption] = useState('all')

  useEffect(() => {
    return setFilteredImages(showcaseProjects || [])
  }, [showcaseProjects])

  useEffect(() => {
    tag === 'all'
      ? setFilteredImages(showcaseProjects || [])
      : setFilteredImages(
          showcaseProjects.filter((project) => project.tag === tag)
        )
  }, [tag, showcaseProjects])

  // useEffect(() => {
  //   selectedOption === 'all'
  //     ? setFilteredImages(files)
  //     : setFilteredImages(files.filter((file) => file.tag === selectedOption))
  // }, [selectedOption])

  const images = filteredImages.map(function (project) {
    return project.coverImage
  })

  const tabs = [
    {
      name: 'All',
      href: '#',
      tag: 'all',
    },
    {
      name: 'New',
      href: '#',
      tag: 'new',
    },
    {
      name: 'Free',
      href: '#',
      tag: 'free',
    },
    {
      name: 'Pro',
      href: '#',
      tag: 'pro',
    },
  ]

  const TagButtons = tabs.map((tab, tabIdx) => (
    <button
      key={tab.name}
      onClick={() => setTag(tab.tag)}
      className={clsx(
        tag === tab.tag ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
        tabIdx === 0 ? 'rounded-l-lg' : '',
        tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
        ' group  relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none'
      )}
      aria-current={tag === tab.tag ? 'page' : undefined}
    >
      <span>{tab.name}</span>
      <span
        aria-hidden="true"
        className={clsx(
          tag === tab.tag ? 'bg-orange-500' : 'bg-transparent',
          'absolute inset-x-0 bottom-0 h-0.5'
        )}
      />
    </button>
  ))

  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <div className="mt-16">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            >
              {tabs.map((tab) => (
                <option value={tab.tag} key={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav
              className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
              aria-label="Tabs"
            >
              {TagButtons}
            </nav>
          </div>
        </div>
        {showcaseProjects && showcaseProjects.length > 0 && (
          <ul
            role="list"
            className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 "
          >
            {showcaseProjects.map((project, key) => {
              return <Gallery key={key} project={project} images={images} />
            })}
          </ul>
        )}
      </main>
      <Footer />
    </>
  )
}
