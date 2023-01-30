'use client'

import { Popover, Transition } from '@headlessui/react'
import logo from '@public/coobo-logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  {
    href: '/web',
    label: 'Web',
    subLinks: [
      { label: 'Site Design', href: '#' },
      { label: 'Hosting', href: '#' },
      { label: 'E-Commerce', href: '#' },
      { label: 'Content Development', href: '#' },
    ],
  },
  {
    href: '/print',
    label: 'Print',
    subLinks: [
      { label: 'Brochures/Flyers', href: '#' },
      { label: 'Business Cards', href: '#' },
      { label: 'Vehicle Wraps', href: '#' },
      { label: 'Booths & Banners', href: '#' },
      { label: 'Billboard Advertising', href: '#' },
      { label: 'Packaging', href: '#' },
      { label: 'Letterhead/Envelope', href: '#' },
    ],
  },
  {
    href: '/brand',
    label: 'Brand',
    subLinks: [
      { label: 'Logo Development', href: '#' },
      { label: 'Strategy', href: '#' },
      { label: 'Public Relations', href: '#' },
      { label: 'Collateral', href: '#' },
    ],
  },
  {
    href: '/marketing',
    label: 'Marketing',
    subLinks: [
      { label: 'SEO', href: '#' },
      { label: 'Social Media', href: '#' },
      { label: 'Paid Ads', href: '#' },
      { label: 'Email Marketing', href: '#' },
    ],
  },
  {
    href: '/video',
    label: 'Video',
    subLinks: [
      { label: 'Explainer Videos', href: '#' },
      { label: 'Motion Graphics', href: '#' },
      { label: 'Drone Footage', href: '#' },
      { label: 'Advertising', href: '#' },
      { label: 'Time-Lapse', href: '#' },
      { label: 'Vlog/Podcast', href: '#' },
      { label: 'Instructional Videos', href: '#' },
    ],
  },
]

function Header() {
  return (
    <div className="grid grid-cols-12 gap-2 bg-black p-6">
      <div className="col-span-2">
        <Link href="/">
          <Image height={64} width={144} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="col-span-8 hidden items-center md:flex">
        <Popover.Group className="flex space-x-8">
          {links.map((link) => (
            <Popover key={link.label} className="relative">
              <Popover.Button className="space-x-6 text-sm font-bold text-white">
                {link.label}
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
                    <a
                      className="p-1 text-sm text-white hover:bg-[#313233]"
                      key={subLabel.label}
                      href={subLabel.href}
                    >
                      {subLabel.label}
                    </a>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>
          ))}
        </Popover.Group>
      </div>
      <div className="col-span-2 flex items-center">
        <p className="text-sm font-bold text-white ">Login</p>
      </div>
    </div>
  )
}

export default Header
