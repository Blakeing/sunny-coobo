import fox from '@public/staff_justin_fox.jpg'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

function ChuRoute() {
  return (
    <>
      <div className="grid min-h-[calc(100vh-96px)] grid-cols-12">
        <div className="aspect-w-3 aspect-h-4 relative col-span-12  md:col-span-6 lg:col-span-3">
          <Image
            src={fox}
            className="object-cover"
            fill
            alt="Background Target"
          />
        </div>
        <div className="col-span-12 bg-[#042451] py-12 pb-16 text-white md:col-span-6 lg:col-span-9 lg:pt-[112.1px]">
          <div className=" ">
            <div className=" px-[2.5vw] pb-8 ">
              <h1 className="font-display text-5xl font-bold">Justin Fox</h1>
              <h5 className="font-display text-lg font-bold">
                Marketing Coordinator
              </h5>
            </div>

            <div className="bg-black/[.20] p-[2.5vw]  leading-6">
              <p>
                Justin Fox is a native Houstonian, and a die-hard, foam finger
                waving, loyal Houston sports fan. His previous experience as the
                IT Coordinator for The Houston Furniture Bank gave him the
                opportunity to brainstorm and develop new systems and web-based
                applications, while implementing innovative digital marketing
                strategies. As a Marketing Coordinator at Coobo Media, Justin is
                dedicated to delivering a remarkable online experience that is
                appealing and relevant to the decision makers our clients want
                to influence. Justin has an imagination that knows no
                boundaries, a keen eye for detail, and an enthusiastic, unique
                perspective to come up with creative impactful ideas. He credits
                his awesome multi-tasking skills to his beautiful wife Erin, his
                two young children, Ben and Charlotte, Penny the dog, Callie the
                cat, and the recently deceased beta fish, Rainbow Fox.
              </p>
            </div>
          </div>
          <div className="span-col-1 lg:span-col-2 flex justify-center pt-8">
            <Link
              className="cursor-pointer border-2 border-white px-10 py-3 font-display font-bold uppercase hover:opacity-90"
              href="/about"
            >
              Back to about us page
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChuRoute
