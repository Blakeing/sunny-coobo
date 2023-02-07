import marketing from '@public/bg_marketing_splash-1.webp'
import Image from 'next/image'
import Link from 'next/link'

import ServicesForm from '@/components/forms/ServicesForm'

function MarketingRoute() {
  return (
    <>
      <section className=" w-full bg-marketing  ">
        <div className=" relative mx-auto grid max-w-7xl grid-cols-1 px-6 pt-[133.29px] pb-16 md:grid-cols-2 md:pt-[176px] lg:px-8">
          <div className="">
            <h1 className="mb-2 font-display text-6xl font-bold text-white  ">
              Marketing.
            </h1>
            <h2 className="mb-2 font-display text-3xl italic text-white">
              Optimize Your Splash
            </h2>
            <p className="mb-10 max-w-lg text-white">
              Technology has revolutionized the way we market to our customers.
              Using the right mix of digital marketing, advertising and public
              relations, you can reach your target audience more efficiently.
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
              src={marketing}
            />
          </div>
        </div>
      </section>
      <section className=" mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">SEO</h3>
            <p className="text-body">
              Hi. Hello. Hey. Hola. Ciao. —The meaning is the same, but the tone
              says a lot about who you are as a company. Every word and image
              defines your product, your service and your brand. You’re not
              trying to attract a referral. Your future clients are out there.
              Make your initial introduction perfect.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Social Media
            </h3>
            <p className="text-body">
              A great social media plan requires a careful blend of research,
              relevance, and creativity. One post can generate attention, but an
              organized routine can cultivate a dedicated following of engaged
              users. Our team will create a strategy that conveys your brand’s
              vision across multiple platforms.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Paid Ads
            </h3>
            <p className="text-body">
              Our web design goes deeper than the surface to coincide with your
              paid advertising, maximizing ROI and generating real, measurable
              conversions. We’ve helped clients market their services through
              Google, Facebook, LinkedIn, Youtube, Bing and Yahoo
              advertisements. As certified ad spenders, we know where to place
              your message and secure business leads of the future.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Email Marketing
            </h3>
            <p className="text-body">
              On average, over 300 billion emails are sent each day around the
              globe. We strive to make your company stand out amongst the
              clutter.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto grid  grid-cols-12  ">
          <div className="col-span-12 bg-marketing px-[5vw] py-16 lg:col-span-8">
            <h3 className="mb-8 font-display text-3xl font-bold text-white">
              Contact Us
            </h3>
            <ServicesForm />
          </div>
          <div className="col-span-12 flex flex-col  bg-accent py-16 px-8  lg:col-span-4">
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
              className="mt-5 bg-accentGray px-5 py-4 text-center  font-display text-lg  font-bold text-white    hover:opacity-90"
            >
              Brand
            </Link>
            <Link
              href="/marketing"
              className="mt-5 bg-marketing px-5 py-4 text-center  font-display text-lg  font-bold text-white    hover:opacity-90"
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

export default MarketingRoute
