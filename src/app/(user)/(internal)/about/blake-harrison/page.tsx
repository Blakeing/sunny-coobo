import harrison from '@public/staff_blake_harrison.jpg'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

function HarrisonRoute() {
  return (
    <>
      <div className="grid min-h-[calc(100vh-96px)] grid-cols-12">
        <div className="aspect-w-3 aspect-h-4 relative col-span-12 md:col-span-6 lg:col-span-3">
          <Image
            src={harrison}
            className="object-cover"
            fill
            alt="Background Target"
          />
        </div>
        <div className="col-span-12 bg-[#42B2BF] py-12 pb-16 text-white md:col-span-6 lg:col-span-9 lg:pt-[112.1px]">
          <div className=" ">
            <div className=" px-[2.5vw] pb-8 ">
              <h1 className="font-display text-5xl font-bold">
                Blake Harrison
              </h1>
              <h5 className="font-display text-lg font-bold">
                Creative Director / Managing Partner
              </h5>
            </div>

            <div className="bg-black/[.20] p-[2.5vw]  leading-6">
              <p>
                Coobo Media is not only named after Blake‘s twin boys, Cooper
                and Bo, but it is also the realization of his dream to create a
                business where he gets to interact with all types of people from
                all types of jobs. Blake’s passion lies in helping his clients
                find, understand and intelligently communicate their
                differentiators to the world. His mix of business acumen with
                creativity and design provides the needed balance of messaging
                and tone when it comes to marketing for a variety of industries.
                After graduating from Texas A&M with a finance degree, Blake
                spent a few years in Real Estate Banking with NCNB Texas as an
                Asset Manager learning that’s NOT what he wanted to do for the
                rest of his life. He discovered his knack/talent/desire for
                “being creative” and changed gears to move to California to work
                in the entertainment industry, working for studios like
                Sony/Columbia TriStar, CastleRock, Carsey-Werner and Universal.
                His entree into Web Development started in the 90’s after
                raising funds and creating an online portal, featuring
                serialized comedy sketches. From there he worked for a New
                York-based start-up, raising funds for hedge funds, then shifted
                to heading up the marketing department for a
                manufacturer/distributor, who remains a client today. Blake is
                married to TK and has three kids.
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
