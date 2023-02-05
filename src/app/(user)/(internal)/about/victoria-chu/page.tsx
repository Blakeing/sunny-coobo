import chu from '@public/staff_victoria_chu.jpg'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

function HarrisonRoute() {
  return (
    <>
      <div className="grid min-h-[calc(100vh-96px)] grid-cols-12">
        <div className="aspect-w-3 aspect-h-4 relative col-span-12 md:col-span-6 lg:col-span-3">
          <Image
            src={chu}
            className="object-cover"
            fill
            alt="Background Target"
          />
        </div>
        <div className="col-span-12 bg-[#C94646] py-12 pb-16 text-white md:col-span-6 lg:col-span-9 lg:pt-[112.1px]">
          <div className=" ">
            <div className=" px-[2.5vw] pb-8 ">
              <h1 className="font-display text-5xl font-bold">Victoria Chu</h1>
              <h5 className="font-display text-lg font-bold">
                Web Designer / Developer
              </h5>
            </div>

            <div className="bg-black/[.20] p-[2.5vw]  leading-6">
              <p>
                Victoria joined Coobo in 2015, bringing with her considerable
                web design talents. Originally from Taiwan, she attended school
                in the states and graduated from the University of Houston with
                a Bachelor of Arts in Art Education. After graduation, Victoria
                spent 1½ years working with middle school computer and art
                students at the Harmony School of Science. But the
                self-proclaimed geek found her true passion during an internship
                at a web design startup. Victoria, who also answers to, Vickie,
                was a bit of tomboy as a child and now she channels her athletic
                tendencies into outdoor activities and cheering for our Houston
                Astros.
              </p>
            </div>
          </div>
          <div className="span-col-1 lg:span-col-2 flex justify-center pt-8">
            <Button intent="outline">Back to about us page</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HarrisonRoute
