'use client'

import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
  const [state, handleSubmit] = useForm('xwkjlpyk')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="z-30 grid-cols-1 bg-black/50 p-[5vw] text-white lg:col-start-7 lg:col-end-11">
          <h2 className="pb-8 text-2xl font-bold text-white">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-10 ">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  className="block w-full rounded-md border-gray-300 px-5 py-3 text-body shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
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
                  className="block w-full rounded-md border-gray-300 px-5 py-3 text-body shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="col-span-1 ">
                <label htmlFor="message" className="sr-only">
                  Add your message
                </label>
                <div className="">
                  <textarea
                    rows={8}
                    name="message"
                    placeholder="Your Message"
                    id="message"
                    className="block w-full rounded-md border-gray-300 px-5 py-3 text-body shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                    defaultValue={''}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <button
                className="float-right mt-10"
                type="submit"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
