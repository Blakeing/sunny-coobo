'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="relative bg-accent p-[5vw]">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="flex max-w-7xl flex-col items-center justify-center">
              <p className="pb-8 font-display text-2xl text-coobo">
                Our partnership with Coobo Media has helped us take the SandBox
                Logistics brand from concept to reality. We continue to rely on
                their support as we expand into new markets and seek to define
                our services to new audiences.
              </p>
              <p className="font-display text-white">Josh Oren</p>
              <p className="font-display text-sm text-white/60">
                President and CEO SandBox Logistics
              </p>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className="flex max-w-7xl flex-col items-center justify-center">
              <p className="pb-8 font-display text-2xl text-coobo">
                Coobo Media’s work is creative and brilliant! Coobo Media takes
                the time to understand client needs and deliver award-winning
                results. Team is very professional, attentive, and wonderful to
                work with. Couldn’t ask for a better marketing firm partner.
              </p>
              <p className="font-display text-white"> Carrie Criado, J.D. </p>
              <p className="font-display text-sm text-white/60">
                Executive Director of Communications and Marketing The
                University of Houston Law Center
              </p>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className="flex max-w-7xl flex-col items-center justify-center">
              <p className="pb-8 font-display text-2xl text-coobo">
                Our partnership with Coobo Media has helped us take the SandBox
                Logistics brand from concept to reality. We continue to rely on
                their support as we expand into new markets and seek to define
                our services to new audiences.
              </p>
              <p className="font-display text-white">Josh Oren</p>
              <p className="font-display text-sm text-white/60">
                President and CEO SandBox Logistics
              </p>
            </div>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center bg-accent py-4">
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