'use client'

import { useForm, ValidationError } from '@formspree/react'

function ServicesForm() {
  const [state, handleSubmit] = useForm('mdoveane')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-white px-5 py-3 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            placeholder="Name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-white px-5 py-3 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <div className="">
            <textarea
              rows={8}
              name="message"
              placeholder="Message"
              id="message"
              className="block w-full rounded-md border-white px-5 py-3 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
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
        className="float-right mt-10 border-4 border-white bg-transparent  px-5 py-4 font-display font-bold uppercase text-white  hover:opacity-90"
        type="submit"
        disabled={state.submitting}
      >
        Send Message
      </button>
    </form>
  )
}

export default ServicesForm
