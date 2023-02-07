'use client'

import { useForm, ValidationError } from '@formspree/react'
import cooboBG1 from '@public/coobo_3d_houston_1.jpg'
import cooboBG2 from '@public/coobo_3d_houston_2.png'
import Image from 'next/image'

function ContactForm() {
  const [state, handleSubmit] = useForm('xwkjlpyk')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="z-30 grid-cols-1 bg-black/50 p-[5vw] lg:col-start-7 lg:col-end-11">
          <h2 className="pb-8 text-2xl font-bold text-white">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="block w-full rounded-md  border-white  bg-black/40 px-5 py-3 text-white shadow-sm focus:border-white focus:ring-white  sm:text-sm"
                  placeholder="Name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
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
                  className="block w-full rounded-md  border-white  bg-black/40 px-5 py-3 text-white shadow-sm focus:border-white focus:ring-white  sm:text-sm"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className=" ">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="">
                  <textarea
                    rows={8}
                    name="message"
                    placeholder="Your Message"
                    id="message"
                    className="block w-full rounded-md  border-white  bg-black/40 px-5 py-3 text-white shadow-sm focus:border-white focus:ring-white  sm:text-sm"
                    defaultValue={''}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>
            <button
              className="mt-10 w-auto bg-black/40 px-5 py-4 font-display text-sm font-bold uppercase text-white hover:bg-[#444444] "
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Image
        src={cooboBG2}
        fill
        sizes="100vw"
        className="absolute inset-0 z-20 object-cover "
        alt="Background Target"
      />
      <Image
        src={cooboBG1}
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover "
        alt="Background Target"
      />
      <div className="absolute inset-0 bg-accent opacity-50">
        <span className="sr-only"></span>
      </div>
    </div>
  )
}

export default ContactForm
