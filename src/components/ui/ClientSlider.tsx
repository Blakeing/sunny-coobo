'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <>
      <div className="relative bg-[#333333] px-[5vw] pt-[5vw]">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="flex max-w-7xl flex-col items-center justify-center">
              <p className="pb-8 font-display text-lg text-coobo lg:text-2xl">
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
              <p className="pb-8 font-display text-lg text-coobo lg:text-2xl">
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
              <p className="pb-8 font-display text-lg text-coobo lg:text-2xl">
                My Company has worked with Coobo Media over the past three years
                developing our internal and external marketing materials.
                They’ve done a wonderful job helping us build and promote the
                Swagelok brand to the Houston community, whether it’s through
                marketing materials, website development or event materials.
                Coobo is truly a partner in our business and always there to
                support our day to day marketing needs.
              </p>
              <p className="font-display text-white">Brian H. Payne</p>
              <p className="font-display text-sm text-white/60">
                Swagelok Central Houston
              </p>
            </div>
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
