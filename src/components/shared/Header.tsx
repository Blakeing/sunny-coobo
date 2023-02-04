'use client'

import { Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '@public/coobo-logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Fragment } from 'react'

import { useScrollDirection } from '@/utils/useScrollDirection'

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const scrollDirection = useScrollDirection()
  const segment = useSelectedLayoutSegment()
  console.log(segment)

  return (
    <Popover
      className={`fixed z-20 w-full  bg-accent py-6 px-[5vw] ${
        scrollDirection === 'down' ? '-top-[112.1px] ' : 'top-0  '
      }  transition-all duration-500 ease-in-out`}
    >
      <div className="mx-auto ">
        <div className="flex items-center justify-between md:justify-start md:space-x-10">
          <div className="flex justify-start gap-10 lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <Image height={64} width={144} src={logo} alt="Logo" />
            </Link>
            {/* Navigation*/}
            <Popover.Group
              as="nav"
              className=" hidden items-center space-x-8 md:flex "
            >
              {links.map((link) => (
                <Popover key={link.label} className="relative">
                  <Popover.Button className="space-x-6 text-sm font-bold text-white  focus:outline-none ">
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
                </Popover>
              ))}
            </Popover.Group>
          </div>

          <div className="-my-2 -mr-2 ">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coobo">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
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
          className="absolute right-0 top-0 min-h-screen w-80  origin-top-right transform border-l-8 border-white bg-coobo  transition "
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
                        className={classNames(
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
                            className={classNames(
                              item.href === `/${segment}`
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-white',
                              'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left font-display text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-accent'
                            )}
                          >
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
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
                                className={classNames(
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
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
