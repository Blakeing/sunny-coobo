'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'

import { ClientPayload } from '@/types'

import ClientSliderImage from '../shared/ClientSliderImage'

const animation = { duration: 10000, easing: (t: number) => t }

export default function ClientSlider({ data }: { data: ClientPayload }) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 6,
    },
    created(s) {
      s.moveToIdx(6, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 6, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 6, true, animation)
    },
  })

  return (
    <>
      <div className="relative bg-[#333333]  py-[5vw]">
        <div ref={sliderRef} className="keen-slider">
          {data.map((client) => (
            <ClientSliderImage
              key={client._id}
              image={client.clientImage}
              width={250}
              height={148}
              alt={client.altText}
              classesWrapper="keen-slider__slide number-slide1"
            />
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center bg-[#333333] pt-4 pb-[5vw]">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}
