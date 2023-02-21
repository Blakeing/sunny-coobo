import Link from 'next/link'

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

function Daisy() {
  return (
    <div className="flex min-h-screen flex-col justify-center ">
      <div className="mx-auto max-w-7xl space-x-10">
        <button className="btn">Button</button>
        <button className="btn-primary btn">Button</button>
        <button className="btn-secondary btn">Button</button>
        <button className="btn-accent btn">Button</button>
        <button className="btn-ghost btn">Button</button>
        <button className="btn-link btn">Button</button>
      </div>
      <nav className="hidden items-center space-x-8 bg-black md:flex">
        {links.map((link) => (
          <div key={link.label} className="dropdown-hover dropdown relative">
            <Link href={link.href}>
              <label
                tabIndex={0}
                className="cursor-pointer space-x-6 text-sm font-bold text-white   "
              >
                {link.label}
              </label>
            </Link>
            <ul
              tabIndex={0}
              className="dropdown-content menu  top-[60px] flex w-48 flex-col  bg-black/75 p-5 shadow-lg shadow-black/5"
            >
              {link.subLinks.map((subLabel) => (
                <li key={subLabel.label}>
                  <Link
                    className="p-1 text-sm text-white hover:bg-[#313233]"
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
  )
}

export default Daisy
