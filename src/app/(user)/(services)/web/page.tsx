import web from '@public/bg_web_dog.webp'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

function WebRoute() {
  return (
    <>
      <section className=" w-full bg-web  ">
        <div className=" relative mx-auto grid max-w-7xl grid-cols-1 px-6 pt-[133.29px] pb-16 md:grid-cols-2 md:pt-[176px] lg:px-8">
          <div className="">
            <h1 className="mb-2 font-display text-6xl font-bold text-white  ">
              Web.
            </h1>
            <h2 className="mb-2 font-display text-3xl italic text-white">
              Compete with the Big Dogs
            </h2>
            <p className="mb-10 max-w-lg text-white">
              Whether you’re a start-up or an industry leader, the internet
              levels the playing field. If you’re not taking advantage of that,
              your competition thanks you.
            </p>
            <div className="flex flex-wrap gap-5">
              <Button>Learn More</Button>
              <Button intent="secondary">Portfolio</Button>
            </div>
          </div>
          <div className="relative">
            <Image className="z-10 object-contain" fill alt="Web" src={web} />
          </div>
        </div>
      </section>
      <section className=" mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Site Design
            </h3>
            <p className="">
              Our web design team has developed hundreds of websites across a
              diverse array of industries, ranging across multiple continents.
              We customize each site to cater to your business needs, giving the
              same dedicated service to each of our clients. Whether you’re a
              local small-business owner or a multi-billion dollar organization,
              our responsive web design will take your business to the next
              level.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Hosting Your Website
            </h3>
            <p className="">
              After all the hard work you put into your business, the last thing
              you should worry about is making sure your website stays live.
              Monitoring and maintaining your website’s server can result in
              hours of wasted time. We ensure that your website will not only
              run smoothly, but consistently.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              E-Commerce
            </h3>
            <p className="">
              Give your brick and mortar the digital facelift it deserves.
              Through measurable consumer analytics and site tracking, we make
              it easy to know what people are buying, and where you can improve.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Content Development
            </h3>
            <p className="">
              We develop personalized content for every aspect of your business
              needs. Whether you’re looking to expand your reach on social
              media, engage customers with visually compelling emails or dazzle
              prospective leads with your website; Coobo has a solution for you.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto grid  grid-cols-12  ">
          <div className="col-span-12 bg-web px-[5vw] py-16 lg:col-span-8">
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
            <Button className="mt-6" intent="web">
              Web
            </Button>
            <Button className="mt-5" intent="accent">
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

export default WebRoute
