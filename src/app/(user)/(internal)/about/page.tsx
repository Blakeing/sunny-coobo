import harrison from '@public/blake_harrison.jpg'
import smith from '@public/Cason_Headshot2.webp'
import mark from '@public/header_bg_mark.jpg'
import brewer from '@public/staff_abt_brian_brewer.jpg'
import chu from '@public/staff_abt_victoria_chu.jpg'
import ingenthron from '@public/staff-blake2-sq.jpg'
import fox from '@public/staff-justin2-sq.jpg'
import Image from 'next/image'
import Link from 'next/link'

const employees = [
  { name: 'Blake Harrison', href: '/about/#', image: harrison },
  { name: 'Brian Brewer', href: '/about/#', image: brewer },
  { name: 'Victoria Chu', href: '#', image: chu },
  { name: 'Justin Fox', href: '/about/#', image: fox },
  { name: 'Blake Ingenthron', href: '/about/#', image: ingenthron },
  { name: 'Cason Smith', href: '/about/#', image: smith },
]

const industries = [
  { name: 'Energy oil, gas, and oilfield equipment services' },
  { name: 'Manufacturing' },
  { name: 'Logistics' },
  { name: 'Construction' },
  { name: 'Architecture' },
  { name: 'Law' },
  { name: 'Health Care' },
  { name: 'Insurance' },
  { name: 'Private Schools' },
  { name: 'Universities' },
  { name: 'Retail' },
  { name: 'Churches' },
  { name: 'Food and Beverage' },
  { name: 'Consulting' },
  { name: 'Software' },
  { name: 'Non-Profits' },
  { name: 'Home Builders' },
  { name: 'Interior Design' },
  { name: 'Professional Athletes' },
  { name: 'Book Publishing' },
]

function AboutRoute() {
  return (
    <div className="">
      <div className="relative flex h-80 flex-col justify-center bg-gray-200 px-[5vw] pt-[112.1px]">
        <h1 className="z-10 font-display text-6xl font-bold text-white">
          About Us
        </h1>
        <Image
          src={mark}
          fill
          className="absolute inset-0 object-cover "
          alt="Background Target"
        />
      </div>
      <div className="grid grid-cols-1  xl:grid-cols-2 ">
        <div className="bg-white p-[5vw]">
          <p className="mb-4 leading-7 text-body">
            Coobo Media takes pride in the partnerships we form with all of our
            clients. Our mantra is “Be Thoughtful in Everything You Do.” We
            believe that if you put an extra measure of considered thought into
            every design, plan and interaction, the results will exceed
            expectations.
          </p>
          <p className="leading-7 text-body">
            Our branding, marketing and web design experience spans a wide
            variety of industries. We work with clients in our building, our
            neighborhoods, across Houston, around Texas, the U.S., the U.K. and
            even Australia. Our current client list includes consumer brands as
            well as business-to-business marketers. With Coobo Media, you get
            all of the services of a big agency with the personal,
            principal-level attention of a small firm.
          </p>
          <h2 className="mt-20 font-display text-3xl font-bold text-accent">
            Industries:
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-[5vw] xl:grid-cols-1">
            {industries.map((industry) => (
              <li
                key={industry.name}
                className="border-l-4 border-coobo bg-black/[.08] p-2 text-body "
              >
                {industry.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {employees.map((employee) => (
            <div
              key={employee.name}
              className="aspect-w-1 aspect-h-1 relative "
            >
              <Link href={employee.href}>
                <div className="group block w-full overflow-hidden">
                  <Image
                    src={employee.image}
                    alt={`${employee.name}'s staff picture`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 z-10 p-8">
                    <div className="flex h-full  flex-col justify-between">
                      <p className=" block truncate font-display text-sm font-medium text-white">
                        {employee.name}
                      </p>
                      <p className=" block text-xs font-bold uppercase tracking-wide text-white">
                        View Bio
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-accent opacity-50 group-hover:opacity-40 ">
                    <span className="sr-only">{`View  ${employee.name}'s Bio`}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutRoute
