'use client'

import { Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@public/coobo-logo-white.svg'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Fragment } from 'react'

import { useHasScrolled } from '@/utils/useHasScrolled'
import { useScrollDirection } from '@/utils/useScrollDirection'
import { useScrollPadding } from '@/utils/useScrollPadding'

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

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    children: [
      { name: 'Web', href: '/web' },
      { name: 'Print', href: '/print' },
      { name: 'Brand', href: '/brand' },
      { name: 'Marketing', href: '/marketing' },
      { name: 'Video', href: '/video' },
    ],
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Work',
    href: '/work',
  },

  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Header() {
  const scrollDirection = useScrollDirection()
  const hasScrolled = useHasScrolled()

  const segment = useSelectedLayoutSegment()

  return (
    <Popover
      as="header"
      className={cn(
        'coobo-container fixed z-20 w-full border-t-8 border-white py-6 transition-all duration-500 ease-in-out',
        { 'bg-black/50': hasScrolled },
        `${scrollDirection === 'down' ? 'top-[-120.1px]' : 'top-0'}`
      )}
    >
      <div className="mx-auto">
        <div className="flex items-center justify-between md:justify-start md:space-x-10">
          <div className="flex justify-start gap-10 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <Image priority height={64} width={144} src={logo} alt="Logo" />
            </Link>
            {/* Navigation*/}
            <nav className="hidden items-center space-x-8 md:flex">
              {links.map((link) => (
                <div key={link.label} className="dropdown-hover dropdown ">
                  <Link href={link.href}>
                    <label
                      tabIndex={0}
                      className="cursor-pointer space-x-6 text-sm font-bold leading-[4rem] text-white hover:underline hover:decoration-2 hover:underline-offset-8   "
                    >
                      {link.label}
                    </label>
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu top-16  flex w-48 flex-col  bg-black/75 p-5 shadow-lg shadow-black/5"
                  >
                    {link.subLinks.map((subLabel) => (
                      <li key={subLabel.label}>
                        <Link
                          className="p-1 text-sm text-white hover:!rounded-none hover:bg-[#313233]"
                          href={subLabel.href}
                        >
                          {subLabel.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 border-l-8 border-b-8 border-white ">
        <Popover.Button className="inline-flex items-center justify-center  bg-coobo p-2 text-white  hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coobo">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-12 w-12" aria-hidden="true" />
        </Popover.Button>
      </div>
      {/*Mobile Popover */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute right-0 top-0  min-h-screen w-80  origin-top-right transform border-l-8 border-white bg-coobo  transition "
        >
          <div className="flex flex-grow flex-col overflow-y-auto   pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center justify-end px-4">
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coobo">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-5 flex  flex-grow flex-col px-6">
              <nav className="flex-1 space-y-1  px-2" aria-label="Sidebar">
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          item.href === `/${segment}`
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-white',
                          'group flex w-full items-center rounded-md py-2 pl-2 font-display text-2xl font-bold'
                        )}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ) : (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={cn(
                              item.href === `/${segment}`
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-white',
                              'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left font-display text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-accent'
                            )}
                          >
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={cn(
                                open ? 'rotate-90 opacity-80' : ' text-white ',
                                'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-accent'
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as={Link}
                                href={subItem.href}
                                className={cn(
                                  subItem.href === `/${segment}`
                                    ? 'bg-white text-black'
                                    : 'bg-none text-white',
                                  'group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-xl font-bold  hover:bg-gray-50 hover:text-gray-900'
                                )}
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
                <h4 className="pt-5 font-display text-xl font-bold text-white">
                  Contact Information
                </h4>
                <p className="text-white">281.206.0022</p>
                <p className="text-white">hi@coobomedia.com</p>
                <p className="text-white">
                  9525 Kay Freeway, Suite 230
                  <br /> Houston, Texas 77024
                </p>
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
