'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, SetStateAction, useEffect, useState } from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ProjectPayload, ShowcaseProject } from '@/types'

export function Gallery({
  project,
  images,
}: {
  project: ShowcaseProject
  images?: string[]
}) {
  const [imageToShow, setImageToShow] = useState('')
  const [lightboxDisplay, setLightBoxDisplay] = useState(false)
  // console.log(images)

  const showImage = (image: SetStateAction<string>) => {
    setImageToShow(image)
    setLightBoxDisplay(true)
  }

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  //show next image in lightbox
  const showNext = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    let currentIndex = images.indexOf(imageToShow)
    if (currentIndex >= images.length - 1) {
      let firstImage = images[0]
      setImageToShow(firstImage)
    } else {
      let nextImage = images[currentIndex + 1]
      setImageToShow(nextImage)
    }
  }

  //show previous image in lightbox
  const showPrev = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    let currentIndex = images.indexOf(imageToShow)
    if (currentIndex <= 0) {
      let lastImage = images[images.length - 1]
      setImageToShow(lastImage)
    } else {
      let nextImage = images[currentIndex - 1]
      setImageToShow(nextImage)
    }
  }

  return (
    <div className="flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 ">
      <div className="w-full ">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-w-16 aspect-h-9"
        />
      </div>

      <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
        <div>
          {/* Title */}
          <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
            {project.title}
          </div>
          {/* Overview  */}
          <div className="font-serif text-gray-500">
            <CustomPortableText value={project.overview} />
          </div>
          <button onClick={() => showImage(project.coverImage)}>Open</button>
        </div>
        {/* Tags */}
        <div className="mt-4 flex flex-row gap-x-2">
          {project.tags?.map((tag, key) => (
            <div className="text-sm font-medium lowercase md:text-lg" key={key}>
              #{tag}
            </div>
          ))}
        </div>
        {/* <Dialog
          className="relative z-50"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex  items-center justify-center  p-4">
            <Dialog.Panel className="bg-white">
              <Dialog.Title>Deactivate account</Dialog.Title>
              <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description>

              <ImageBox
                image={project.coverImage}
                alt={`Cover image from ${project.title}`}
                classesWrapper="relative aspect-w-16 aspect-h-9"
              />

              <button onClick={() => setIsOpen(false)}>Deactivate</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog.Panel>
          </div>
        </Dialog> */}
        <Transition.Root show={lightboxDisplay} as={Fragment}>
          <Dialog
            className="relative z-50"
            open={lightboxDisplay}
            onClose={hideLightBox}
          >
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="hidden sm:inline-block sm:h-screen sm:align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="inline-block max-w-screen-lg transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle">
                    {/* <Image
                        className=" block w-full overflow-hidden rounded-lg"
                        src={imageToShow}
                        alt=""
                        fill
                      /> */}

                    <ImageBox
                      image={imageToShow}
                      alt={`Cover image from ${project.title}`}
                      classesWrapper="relative aspect-w-3 aspect-h-2"
                    />

                    <div className="flex justify-between space-x-10 pt-6">
                      <button type="button" className="" onClick={showPrev}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
                        onClick={hideLightBox}
                      >
                        Go back to dashboard
                      </button>
                      <button type="button" className=" " onClick={showNext}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  )
}
