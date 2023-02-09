'use client'

import 'keen-slider/keen-slider.min.css'

import aag from '@public/clients/client_aag-law.webp'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import React, { useState } from 'react'

const animation = { duration: 10000, easing: (t: number) => t }

export default function TestimonialSlider() {
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
      <div className="relative bg-[#333333]  pb-[5vw]">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>

          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={aag} width={250} height={148} alt="aag" />
          </div>
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
