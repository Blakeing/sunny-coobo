import video from '@public/video2.webp'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

function VideoRoute() {
  return (
    <>
      <section className=" w-full bg-video  ">
        <div className=" relative mx-auto grid max-w-7xl grid-cols-1 px-6 pt-[133.29px] pb-16 md:grid-cols-2 md:pt-[176px] lg:px-8">
          <div className="">
            <h1 className="mb-2 font-display text-6xl font-bold text-white  ">
              Video.
            </h1>
            <h2 className="mb-2 font-display text-3xl italic text-white">
              Be Moved
            </h2>
            <p className="mb-10 max-w-lg text-white">
              Video on a landing page has been known to increase conversion
              rates by over 80%. Life doesn’t sit still, so why should your
              content?
            </p>
            <div className="flex flex-wrap gap-5">
              <Button>Learn More</Button>
              <Button intent="secondary">Examples</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              className="z-10 object-contain"
              fill
              alt="video"
              src={video}
            />
          </div>
        </div>
      </section>
      <section className=" mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Explainer Videos
            </h3>
            <p className="text-body">
              Visual storytelling has been regarded as one of the most
              successful methods of resonating your message to potential
              clients. No matter how complex the subject, we know how to
              formulate and execute a video with clarity
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Motion Graphics
            </h3>
            <p className="text-body">
              As the average attention span duration continues to decline year
              after year, grasping and holding the attention of viewers has
              become increasingly difficult. Motion Graphics seek to bridge that
              gap using methods of movable graphic design, conveying your
              message through a series of animation and text.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Drone Footage
            </h3>
            <p className="text-body">
              Let us be your eyes in the sky. From commercial projects to local
              events, we have you covered from above.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Advertising
            </h3>
            <p className="text-body">
              According to a study from Forbes.com, viewers retain 95% of a
              message when they watch it on video, compared to 10% when reading
              it in a text. The increase in click-through rate with video is as
              high as 96%, and videos are shared 1200% more times than links and
              text combined. There has never been a better time to make the
              transition to video advertising.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Time-lapse
            </h3>
            <p className="text-body">
              There may be nothing more satisfying than seeing a project’s
              evolution from start to finish, but who has the time to sit there
              and wait? Our video equipment, that’s who.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Vlog/Podcast
            </h3>
            <p className="text-body">
              As we enter the golden age of podcasts and video blogging, it has
              never been more convenient for your audience to connect with you
              on a personal level. Our production team has the capabilities to
              let your voice be heard through video and audio messaging.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-accentLight">
              Instructional Videos
            </h3>
            <p className="text-body">
              Sometimes, you just have to show how to do something rather than
              tell. Give your audience informative content that they can view at
              their own pace, allowing the message to resonate naturally.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto grid  grid-cols-12  ">
          <div className="col-span-12 bg-video px-[5vw] py-16 lg:col-span-8 ">
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
            <Button className="mt-5" intent="accent">
              Brand
            </Button>
            <Button className="mt-5" intent="accent">
              Marketing
            </Button>
            <Button className="mt-5" intent="video">
              Video
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoRoute
