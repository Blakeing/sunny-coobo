'use client'

import cooboBG1 from '@public/coobo_3d_houston_1.jpg'
import cooboBG2 from '@public/coobo_3d_houston_2.png'
import mark from '@public/header_bg_mark.jpg'
import cityBG from '@public/page_title_bg_city2.jpg'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import Image from 'next/image'

import ContactForm from '@/components/forms/contactForm'
import Map from '@/components/shared/Map'
import { Button } from '@/components/ui/Button'
import MapStyles from '@/utils/MapStyles'

function ContactRoute() {
  return (
    <>
      <div className="relative flex h-80 flex-col justify-center  px-[5vw] pt-[112.1px]">
        <h1 className="z-10 font-display text-5xl font-bold text-white">
          Contact Us
        </h1>
        <Image
          src={cityBG}
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover "
          alt="Background Target"
        />
        <div className="absolute inset-0 bg-black/30 ">
          <span className="sr-only"></span>
        </div>
      </div>
      <div className="grid-cols 1 grid lg:grid-cols-2">
        <div className="relative flex items-center justify-center bg-accent">
          <Map />
        </div>
        <div className="space-y-4 bg-accent p-[5vw]">
          <h1 className="font-display text-2xl font-bold text-white ">
            Coobo Media
          </h1>
          <p className="font-display text-lg  text-white">
            Located Near Memorial City Mall
          </p>
          <p className="text-white">
            9525 Kay Freeway, Suite 230
            <br /> Houston, Texas 77024
          </p>
          <p className="flex items-center gap-2 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coobo fill-transparent stroke-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </span>
            281.206.0022
          </p>
          <p className="flex items-center  gap-2 fill-black text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coobo fill-transparent stroke-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            hi@coobomedia.com
          </p>
        </div>
      </div>
      <ContactForm />
    </>
  )
}

export default ContactRoute
