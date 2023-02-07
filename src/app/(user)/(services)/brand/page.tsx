import brand from '@public/brand-landing.webp'
import Image from 'next/image'
import Link from 'next/link'

import ServicesForm from '@/components/forms/ServicesForm'
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
              <Link
                className="flex items-center bg-accent py-4 px-5  font-display font-bold uppercase text-white hover:opacity-90"
                href="/#"
              >
                Learn More
              </Link>
              <Link
                href="/work"
                className="bg-white py-4 px-5 font-display font-bold uppercase text-accent   hover:opacity-90"
              >
                Portfolio
              </Link>
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
          <div className="col-span-12 bg-brand px-[5vw] py-16 lg:col-span-8 ">
            <h3 className="mb-8 font-display text-3xl font-bold text-white">
              Contact Us
            </h3>
            <ServicesForm />
          </div>
          <div className="col-span-12 flex flex-col  bg-accent py-16 px-6  lg:col-span-4 lg:px-8">
            <h3 className="text-3xl font-bold text-white">Services</h3>
            <Link
              href="/web"
              className="mt-6 bg-accentGray px-5 py-4 text-center  font-display text-lg  font-bold text-white    hover:opacity-90"
            >
              Web
            </Link>
            <Link
              href="/print"
              className="mt-5 bg-accentGray px-5 py-4 text-center  font-display text-lg  font-bold text-white    hover:opacity-90"
            >
              Print
            </Link>
            <Link
              href="/brand"
              className="mt-5 bg-brand px-5 py-4 text-center  font-display text-lg  font-bold text-white    hover:opacity-90"
            >
              Brand
            </Link>
            <Link
              href="/marketing"
              className="mt-5 bg-accentGray px-5 py-4 text-center  font-display text-lg  font-bold text-white    hover:opacity-90"
            >
              Marketing
            </Link>
            <Link
              href="/video"
              className="mt-5 bg-accentGray px-5 py-4 text-center  font-display text-lg  font-bold text-white    hover:opacity-90"
            >
              Video
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandRoute
