import marketing from '@public/bg_marketing_splash-1.webp'
import web from '@public/bg_web_dog.webp'
import brand from '@public/brand-landing.webp'
import print from '@public/print-landing.png'
import video from '@public/video-tv.webp'
import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { HomePagePayload } from 'types'

export function HomePage({ data }: { data: HomePagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview, showcaseProjects, title } = data || {}

  return (
    <div className="mx-auto max-w-7xl space-y-16 ">
      {/* Web */}
      <section className="grid-col-1 grid gap-12  lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="pb-2.5 font-display text-5xl font-bold text-web">
            Web.
          </h2>
          <h4 className="pb-2.5 font-display text-xl  capitalize text-[#444]">
            Compete with the big dogs
          </h4>
          <p className="pb-5  text-body">
            Whether you’re a start-up or an industry leader, the Internet helps
            to level the playing field. If you’re not taking advantage of that,
            your competition thanks you.
          </p>
          <a className="font-display text-sm font-bold uppercase tracking-widest text-web underline decoration-2 underline-offset-8">
            Whoof!
          </a>
        </div>
        <div className="relative flex   justify-center  ">
          <Image
            className="z-10"
            alt="Web"
            src={web}
            height={420}
            width={316}
          />

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
            className=" z-10  scale-x-[-1]"
            alt="Print"
            src={print}
            height={360}
            width={580}
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
            From business cards to billboards, a brand represents the heart and
            soul of your product or service. Don’t just print what you make.
            Elevate why you sell it and why we’re all better for it.
            “Information is cheap. Meaning is expensive.” - George Dyson
          </p>
          <a className="font-display text-sm font-bold uppercase tracking-widest text-print underline decoration-2 underline-offset-8">
            Print!
          </a>
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
            Evolve your brand. It may start with a logo and a color scheme, but
            it will culminate from the principles and ideas that your company
            represents.
          </p>
          <a className="font-display text-sm font-bold uppercase tracking-widest text-brand underline decoration-2 underline-offset-8">
            Avoid The Windshield
          </a>
        </div>
        <div className="relative flex  justify-center">
          <Image
            className=" z-10   scale-x-[-1]"
            alt="Brand"
            src={brand}
            height={430}
            width={347}
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
            className=" z-10  "
            alt="Marketing"
            src={marketing}
            height={380}
            width={380}
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
            Technology has revolutionized the way we market to our customers.
            Using the right mix of digital marketing, advertising and public
            relations, you can reach your target audience more efficiently.
          </p>
          <a className="font-display text-sm font-bold uppercase tracking-widest text-marketing underline decoration-2 underline-offset-8">
            &quot;Marco?&quot;
          </a>
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
            Video on a landing page has been known to increase conversion rates
            by over 80%. Life doesn’t sit still, so why should your content?
          </p>
          <a className="font-display text-sm font-bold uppercase tracking-widest text-video underline decoration-2 underline-offset-8">
            Giddy-Up!
          </a>
        </div>
        <div className="relative flex justify-center">
          <Image
            className=" z-10  "
            alt="Video"
            src={video}
            height={336}
            width={410}
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

      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
