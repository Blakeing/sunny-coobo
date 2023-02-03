import print from '@public/print-landing.png'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

function PrintRoute() {
  return (
    <>
      <section className=" w-full bg-print  ">
        <div className=" relative mx-auto grid max-w-7xl grid-cols-1 px-6 pt-[133.29px] pb-16 md:grid-cols-2 md:pt-[176px] lg:px-8">
          <div className="">
            <h1 className="mb-2 font-display text-6xl font-bold text-white  ">
              Print.
            </h1>
            <h2 className="mb-2 font-display text-3xl italic text-white">
              Use our trees wisely
            </h2>
            <p className="mb-10 max-w-lg text-white">
              From business cards to billboards, a brand represents the heart
              and soul of your product or service. Don’t just print what you
              make. Elevate why you sell it and why we’re all better for it.
              “Information is cheap. Meaning is expensive.” - George Dyson
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
              alt="print"
              src={print}
            />
          </div>
        </div>
      </section>
      <section className=" mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Brochures/Flyers
            </h3>
            <p className="text-body">
              Looking for a tangible way to promote your business? Flyers and
              brochures are an effective way to introduce your business, create
              positive press or simply tell your audience what they are missing
              out on.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Business Cards
            </h3>
            <p className="text-body">
              Get your foot in the door and your business card in their hand. A
              well-designed business card will help give a great first
              impression, showcase what your company is capable of, and in turn,
              create more opportunities for you!
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Vehicle Wraps
            </h3>
            <p className="text-body">
              Kill two birds with one stone by showcasing your company’s
              expertise and protecting your vehicle from unwanted scratches.
              Vehicle wraps are a creative way to let your potential clients
              know that you are local and ready for action. Our visual displays
              will attract potential clients.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Booths & Banners
            </h3>
            <p className="text-body">
              Display advertising can be extremely helpful when promoting your
              brand in a physical space. We create eye-catching visuals that
              will generate conversation and take the stress out of event
              marketing. you.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Billboard Advertising
            </h3>
            <p className="text-body">
              When was the last time you saw a billboard? Probably today. Coobo
              Media will make your message the billboard of tomorrow. Our
              designers will help your business transcend the marketing white
              noise with our head turning ad specs.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Packaging
            </h3>
            <p className="text-body">
              It may be what’s on the inside that counts, but it’s the outside
              that separates you from the competition. Shelf presence is
              everything and packaging directly reflects your product’s quality.
              Let us handle the aesthetics – you won’t be disappointed.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Letterhead/Envelope
            </h3>
            <p className="text-body">
              Well-designed letterheads and stationery will give your clients a
              glimpse of your professionalism and organizational skills. We
              won’t skimp on the details!
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto grid  grid-cols-12  ">
          <div className="col-span-12 bg-print px-6 py-16 lg:col-span-8 lg:px-8">
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
            <Button className="mt-5" intent="print">
              Print
            </Button>
            <Button className="mt-5" intent="accent">
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

export default PrintRoute
