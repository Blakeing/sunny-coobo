import brand from '@public/brand-landing.webp'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

function BrandRoute() {
  return (
    <>
      <section className=" w-full bg-brand  ">
        <div className=" relative mx-auto grid max-w-7xl grid-cols-1 px-6 pt-[133.29px] pb-16 md:grid-cols-2 md:pt-[176px] lg:px-8">
          <div className="">
            <h1 className="mb-2 font-display text-6xl font-bold text-white  ">
              Brand.
            </h1>
            <h2 className="mb-2 font-display text-3xl italic text-white">
              Is in the Details
            </h2>
            <p className="mb-10 max-w-lg text-white">
              Evolve your brand. It may start with a logo and a color scheme,
              but it will culminate from the principles and ideas that your
              company represents.
            </p>
            <div className="flex flex-wrap gap-5">
              <Button>Learn More</Button>
              <Button intent="secondary">Portfolio</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              className="z-10 object-contain"
              fill
              alt="brand"
              src={brand}
            />
          </div>
        </div>
      </section>
      <section className=" mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Logo Development
            </h3>
            <p className="text-body">
              Your logo should be clear, concise and represent your company’s
              values. Present your business through a message that can’t be put
              into words. First impressions are important, let Coobo do the
              translating.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Strategy
            </h3>
            <p className="text-body">
              Marketing research and development can be overwhelming. From
              formulating a message that resonates with your target audience, to
              funneling prospective leads to your business; Our analytics and
              marketing research team will implement the right strategy for your
              business with tangible results.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Public Relations
            </h3>
            <p className="text-body">
              The scope of PR goes far beyond damage control. We already know
              how great you are; now it’s time to share it with everyone else.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Collateral
            </h3>
            <p className="text-body">
              When you can’t find the words to say, let the collateral do the
              talking. Infographic brochures, video blogs, or even company
              t-shirts are just a taste of what Coobo can do for your brand.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto grid  grid-cols-12  ">
          <div className="col-span-12 bg-brand px-6 py-16 lg:col-span-8 lg:px-8">
            <h3 className="mb-8 font-display text-3xl font-bold text-white">
              Contact Us
            </h3>
            <form>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 px-5 py-3 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 px-5 py-3 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                    placeholder="Email"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="comment" className="sr-only">
                    Add your comment
                  </label>
                  <div className="">
                    <textarea
                      rows={8}
                      name="comment"
                      placeholder="Message"
                      id="comment"
                      className="block w-full rounded-md border-gray-300 px-5 py-3 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <Button className="float-right mt-10 " intent="outline">
                Send Message
              </Button>
            </form>
          </div>
          <div className="col-span-12 flex flex-col  bg-accent py-16 px-6  lg:col-span-4 lg:px-8">
            <h3 className="text-3xl font-bold text-white">Services</h3>
            <Button className="mt-6" intent="accent">
              Web
            </Button>
            <Button className="mt-5" intent="accent">
              Print
            </Button>
            <Button className="mt-5" intent="brand">
              Brand
            </Button>
            <Button className="mt-5" intent="accent">
              Marketing
            </Button>
            <Button className="mt-5" intent="accent">
              Video
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandRoute
