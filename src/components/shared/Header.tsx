'use client'

import { Popover, Transition } from '@headlessui/react'
import logo from '@public/coobo-logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'

import { useScrollDirection } from '@/utils/useScrollDirection'

const links = [
  {
    href: '/web',
    label: 'Web',
    subLinks: [
      { label: 'Site Design', href: '/web' },
      { label: 'Hosting', href: '/web' },
      { label: 'E-Commerce', href: '/web' },
      { label: 'Content Development', href: '/web' },
    ],
  },
  {
    href: '/print',
    label: 'Print',
    subLinks: [
      { label: 'Brochures/Flyers', href: '/print' },
      { label: 'Business Cards', href: '/print' },
      { label: 'Vehicle Wraps', href: '/print' },
      { label: 'Booths & Banners', href: '/print' },
      { label: 'Billboard Advertising', href: '/print' },
      { label: 'Packaging', href: '/print' },
      { label: 'Letterhead/Envelope', href: '/print' },
    ],
  },
  {
    href: '/brand',
    label: 'Brand',
    subLinks: [
      { label: 'Logo Development', href: '/brand' },
      { label: 'Strategy', href: '/brand' },
      { label: 'Public Relations', href: '/brand' },
      { label: 'Collateral', href: '/brand' },
    ],
  },
  {
    href: '/marketing',
    label: 'Marketing',
    subLinks: [
      { label: 'SEO', href: '/marketing' },
      { label: 'Social Media', href: '/marketing' },
      { label: 'Paid Ads', href: '/marketing' },
      { label: 'Email Marketing', href: '/marketing' },
    ],
  },
  {
    href: '/video',
    label: 'Video',
    subLinks: [
      { label: 'Explainer Videos', href: '/video' },
      { label: 'Motion Graphics', href: '/video' },
      { label: 'Drone Footage', href: '/video' },
      { label: 'Advertising', href: '/video' },
      { label: 'Time-Lapse', href: '/video' },
      { label: 'Vlog/Podcast', href: '/video' },
      { label: 'Instructional Videos', href: '/video' },
    ],
  },
]

function Header() {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`fixed z-20 grid w-full grid-cols-12 gap-2 bg-accent p-6 ${
        scrollDirection === 'down' ? '-top-[112.1px] ' : 'top-0  '
      }  transition-all duration-500 ease-in-out`}
    >
      <div className="col-span-2">
        <Link href="/">
          <Image height={64} width={144} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="col-span-8 hidden items-center md:flex">
        <Popover.Group className="flex space-x-8">
          {links.map((link) => (
            <Popover key={link.label} className="relative">
              <>
                <Popover.Button className="space-x-6 text-sm font-bold text-white  focus:outline-none ">
                  {link.label}
                  {/* <Link href={link.href}>{link.label}</Link> */}
                </Popover.Button>
                <Transition
                  className="absolute top-[68px] z-10 "
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel className="flex w-48 flex-col  bg-black/75 p-5 shadow-lg shadow-black/5 ">
                    {link.subLinks.map((subLabel) => (
                      <Link
                        className="p-1 text-sm text-white hover:bg-[#313233]"
                        key={subLabel.label}
                        href={subLabel.href}
                      >
                        {subLabel.label}
                      </Link>
                    ))}
                  </Popover.Panel>
                </Transition>
              </>
            </Popover>
          ))}
        </Popover.Group>
      </div>
      <div className="col-span-2 flex items-center">
        <p className="text-sm font-bold text-white ">Login</p>
      </div>
    </header>
  )
}

export default Header
