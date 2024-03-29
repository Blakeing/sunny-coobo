import marketing from '@public/bg_marketing_splash-1.webp'
import web from '@public/bg_web_dog.webp'
import brand from '@public/brand-landing.webp'
import ice from '@public/ice-insta.jpeg'
import marketingInsta from '@public/marketing-insta.jpeg'
import christmas from '@public/merry-christmas-insta.jpeg'
import printInsta from '@public/print-insta.jpeg'
import print from '@public/print-landing.png'
import tilt from '@public/tilt_houston.jpg'
import videoInsta from '@public/video-insta.jpeg'
import video from '@public/video-tv.webp'
import webInsta from '@public/web-insta.jpeg'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import ScrollUp from '@/components/shared/ScrollUp'
import ClientSlider from '@/components/ui/ClientSlider'
import TestimonialSlider from '@/components/ui/TestimonialSlider'
import TypeWriterText from '@/components/ui/TypeWriterText'
import type { ClientPayload, HomePagePayload } from '@/types'

export default function HomePage({ data }: { data: ClientPayload }) {
  return (
    <>
      <Header />
      <main className="">
        <div className="relative min-h-screen border-8 border-white">
          <Image
            src={tilt}
            alt="Tilt Houston"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="coobo-container absolute inset-0 z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center ">
            <h1 className="pb-4 text-3xl font-bold text-white lg:text-7xl">
              A Creative Agency
            </h1>
            <h3 className="intro-border pb-8 pt-4 pl-4 text-2xl italic text-white lg:text-3xl">
              Focused on{' '}
              <TypeWriterText
                speed={500}
                text={[
                  'Web Design',
                  'Social Media',
                  'Digital Marketing',
                  'Search Engine Optimization',
                  'Graphic Design',
                ]}
                loop={true}
              />
            </h3>
            <div className="flex flex-wrap gap-5">
              <Link
                className="flex w-52 items-center justify-center bg-coobo py-4  px-5 font-display font-bold uppercase text-white hover:opacity-90"
                href="#"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="flex w-52 items-center justify-center bg-white py-4 px-5 font-display font-bold uppercase text-accent   hover:opacity-90"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-accent opacity-30">
            <span className="sr-only"></span>
          </div>
        </div>
        {/* Web */}
        <div className="coobo-container mx-auto max-w-7xl space-y-16 py-20">
          <section className="grid-col-1 grid gap-12  lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="pb-2.5 font-display text-5xl font-bold text-web">
                Web.
              </h2>
              <h4 className="pb-2.5 font-display text-xl  capitalize text-[#444]">
                Compete with the big dogs
              </h4>
              <p className="pb-5  text-body">
                Whether you’re a start-up or an industry leader, the Internet
                helps to level the playing field. If you’re not taking advantage
                of that, your competition thanks you.
              </p>
              <Link
                href="/web"
                className="font-display text-sm font-bold uppercase tracking-widest text-web underline decoration-2 underline-offset-8"
              >
                Whoof!
              </Link>
            </div>
            <div className="relative flex justify-center  ">
              <Image className="z-10 w-auto" alt="Web" src={web} height={420} />

              <svg
                className="absolute inset-0  h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 600"
              >
                <path
                  d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z"
                  fill="#b33232"
                ></path>
              </svg>
            </div>
          </section>
          {/* Print */}
          <section className="grid-col-1  grid  gap-12 lg:grid-cols-2">
            <div className="relative flex  justify-center">
              <Image
                className=" z-10 w-auto  scale-x-[-1]"
                alt="Print"
                src={print}
                height={360}
              />
              <svg
                className="blob-print absolute inset-0  h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="600"
                viewBox="0 0 600 600"
              >
                <path
                  d="M416 239.2C456.5 303 499.5 371.5 480.6 428.2 461.7 485 380.8 530 297.8 531.3 214.8 532.5 129.7 490 93.7 423.4 57.8 356.8 71.1 266.2 113.7 201.1 156.2 136 228.1 96.5 283 106.3 337.8 116.2 375.6 175.3 416 239.2Z"
                  fill="#45b3a0"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="pb-2.5 font-display text-5xl font-bold text-print">
                Print.
              </h2>
              <h4 className="pb-2.5 font-display text-xl  capitalize text-[#444]">
                Use Our Trees Wisely
              </h4>
              <p className="pb-5  text-body">
                From business cards to billboards, a brand represents the heart
                and soul of your product or service. Don’t just print what you
                make. Elevate why you sell it and why we’re all better for it.
                “Information is cheap. Meaning is expensive.” - George Dyson
              </p>
              <Link
                href="/print"
                className="font-display text-sm font-bold uppercase tracking-widest text-print underline decoration-2 underline-offset-8"
              >
                Print!
              </Link>
            </div>
          </section>
          {/* Brand */}
          <section className="grid-col-1  grid  gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="pb-2.5 font-display text-5xl font-bold text-brand">
                Brand.
              </h2>
              <h4 className="pb-2.5 font-display text-xl  capitalize text-[#444]">
                Is In The Details
              </h4>
              <p className="pb-5  text-body">
                Evolve your brand. It may start with a logo and a color scheme,
                but it will culminate from the principles and ideas that your
                company represents.
              </p>
              <Link
                href="/brand"
                className="font-display text-sm font-bold uppercase tracking-widest text-brand underline decoration-2 underline-offset-8"
              >
                Avoid The Windshield
              </Link>
            </div>
            <div className="relative flex  justify-center">
              <Image
                className=" z-10 w-auto  scale-x-[-1]"
                alt="Brand"
                src={brand}
                height={430}
              />
              <svg
                className="blob-brand absolute inset-0  h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 600"
              >
                <path
                  d="M411.4 166.7C442.3 193.1 463.7 230.2 462.6 265.2 461.5 300.2 437.9 333.1 419.7 373.2 401.4 413.2 388.5 460.4 355.4 488.1 322.2 515.8 268.9 524 224.8 507.5 180.7 491.1 146 450 112.1 402.9 78.3 355.8 45.4 302.5 50.6 253.1 55.8 203.6 99.2 158 147.1 134.6 195 111.2 247.5 110.1 293.9 117.4 340.3 124.7 380.6 140.3 411.4 166.7Z"
                  fill="#3686b5"
                ></path>
              </svg>
            </div>
          </section>
          {/* Marketing */}
          <section className="grid-col-1  grid  gap-12 lg:grid-cols-2">
            <div className="relative flex  justify-center">
              <Image
                className=" z-10  w-auto "
                alt="Marketing"
                src={marketing}
                height={380}
              />
              <svg
                className="blob-marketing  absolute inset-0 h-full w-full "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 600"
              >
                <path
                  d="M441.7 222.8C479 282.7 501.2 355.8 475.1 398.9 449 442 374.5 455 312.4 447.8 250.3 440.7 200.7 413.3 161.4 362.7 122.2 312 93.3 238 118.1 185.3 143 132.7 221.5 101.3 286.9 108.9 352.3 116.5 404.5 163 441.7 222.8Z"
                  fill="#ea6330"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="pb-2.5 font-display text-5xl font-bold text-marketing">
                Marketing.
              </h2>
              <h4 className="pb-2.5 font-display text-xl  capitalize text-[#444]">
                Optimize Your Splash
              </h4>
              <p className="pb-5  text-body">
                Technology has revolutionized the way we market to our
                customers. Using the right mix of digital marketing, advertising
                and public relations, you can reach your target audience more
                efficiently.
              </p>
              <Link
                href="/marketing"
                className="font-display text-sm font-bold uppercase tracking-widest text-marketing underline decoration-2 underline-offset-8"
              >
                &quot;Marco?&quot;
              </Link>
            </div>
          </section>
          {/* Video */}
          <section className="grid-col-1  grid  gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="pb-2.5 font-display text-5xl font-bold text-video">
                Video.
              </h2>
              <h4 className="pb-2.5 font-display text-xl  capitalize text-[#444]">
                Be Moved
              </h4>
              <p className="pb-5  text-body">
                Video on a landing page has been known to increase conversion
                rates by over 80%. Life doesn’t sit still, so why should your
                content?
              </p>
              <Link
                href="/video"
                className="font-display text-sm font-bold uppercase tracking-widest text-video underline decoration-2 underline-offset-8"
              >
                Giddy-Up!
              </Link>
            </div>
            <div className="relative flex justify-center">
              <Image
                className=" z-10  w-auto"
                alt="Video"
                src={video}
                height={336}
              />
              <svg
                className="blob-video absolute inset-0  h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="600"
                viewBox="0 0 600 600"
              >
                <path
                  d="M492.7 188.9C535.8 263.5 547.4 356.5 510 425.7 472.6 495 386.3 540.5 304.9 537.7 223.5 534.8 147 483.7 118.1 419.3 89.3 355 108 277.5 146.3 205.8 184.5 134 242.3 68 308.5 63.1 374.8 58.2 449.5 114.3 492.7 188.9Z"
                  fill="#744177"
                ></path>
              </svg>
            </div>
          </section>
        </div>
        {/* Testimonials */}
        <TestimonialSlider />
        <h3 className="flex justify-center bg-[#333333] pb-8 text-white">
          <a className="font-bold" href="https://www.instagram.com/coobomedia/">
            @coobomedia
          </a>{' '}
          - Give us a follow
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          <div className="aspect-w-1 aspect-h-1 relative">
            <Image className=" object-cover" alt="Video" src={christmas} fill />
          </div>
          <div className="aspect-w-1 aspect-h-1 relative">
            <Image className=" object-cover" alt="Video" src={ice} fill />
          </div>
          <div className="aspect-w-1 aspect-h-1 relative">
            <Image
              className=" object-cover"
              alt="Video"
              src={videoInsta}
              fill
            />
          </div>
          <div className="aspect-w-1 aspect-h-1 relative">
            <Image
              className=" object-cover"
              alt="Video"
              src={marketingInsta}
              fill
            />
          </div>
          <div className="aspect-w-1 aspect-h-1 relative">
            <Image
              className=" object-cover"
              alt="Video"
              src={printInsta}
              fill
            />
          </div>
          <div className="aspect-w-1 aspect-h-1 relative">
            <Image className=" object-cover" alt="Video" src={webInsta} fill />
          </div>
        </div>
        <ClientSlider data={data} />
      </main>
      <Footer />
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}
