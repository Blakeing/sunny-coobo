import mark from '@public/header_bg_mark.jpg'
import brewer from '@public/staff_brian_brewer.jpg'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

function BrewerRoute() {
  return (
    <>
      <div className="grid min-h-[calc(100vh-96px)] grid-cols-12 ">
        <div className="aspect-w-3 aspect-h-4 relative col-span-12 bg-green-500 md:col-span-6 lg:col-span-3">
          <Image
            src={brewer}
            className="object-cover"
            fill
            alt="Background Target"
          />
        </div>
        <div className="col-span-12 bg-[#78AB3C]  py-8 text-white md:col-span-6 lg:col-span-9 lg:pt-[112.1px]">
          <div className="grid grid-cols-1 lg:grid-cols-2  ">
            <div className="col-span-1 px-[2.5vw] pb-8 lg:col-span-2">
              <h1 className="font-display text-5xl font-bold">Brian Brewer</h1>
              <h5 className="font-display text-lg font-bold">Art Director</h5>
            </div>
            <div className="bg-black/[.10] p-[2.5vw]">
              <p className="text-2xl">
                “It’s rare that I ever meet a musician who doesn’t agree that
                music is a language. But it’s very rare to meet a musician that
                really treats it like one”
              </p>
            </div>
            <div className="bg-black/[.20] p-[2.5vw]  leading-6">
              <p>
                Those who are both visual artists and musicians find that skills
                learned for one often apply to the other. Victor Wooten’s
                approach to music as a language is a good example. The job of a
                designer is not just to make clients look good, but to speak
                through a visual language that helps the customer understand
                content and establishes a feel that is appropriate to the brand.
                This quote is a reminder never to fall in to the category of the
                designer who forgets to achieve this in his work.
              </p>
              <p className="mt-4">
                Brian began working as a graphic designer on a contract basis
                with Coobo Media in April 2012. His contribution to our creative
                product, including his work on hihowareyou.com, spindletap.com
                alitek.com and many others, has helped shape the firm’s overall
                portfolio. A graduate of Oklahoma Christian University with a
                degree in Graphic Design.
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

export default BrewerRoute
