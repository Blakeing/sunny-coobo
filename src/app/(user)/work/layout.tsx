import web from '@public/header_bg_web.jpg'
import Image from 'next/image'
import Link from 'next/link'

import { PreviewBanner } from '@/components/preview/PreviewBanner'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { getPreviewToken } from '@/lib/sanity.server.preview'
export default function WorkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()

  return (
    <>
      {token && <PreviewBanner />}
      <Header />
      <main>
        <div className="relative flex h-80 flex-col justify-center bg-gray-200 px-[5vw] pt-[112.1px]">
          <div className="z-10 flex flex-col items-center justify-between lg:flex-row">
            <h1 className="font-display text-5xl font-bold text-white">
              Our Work
            </h1>
            <ul className="flex font-display text-2xl text-white">
              <li className="border-l-4 bg-[#a7a7a7bf] px-4 py-2">
                <Link href="/work">All</Link>
              </li>
              <li className="bg-black/50 px-4 py-2">
                <Link className="hover:text-coobo" href="/work/web">
                  Web
                </Link>
              </li>
              <li className="bg-black/50 px-4  py-2">
                <Link className="hover:text-coobo" href="/work/print">
                  Print
                </Link>
              </li>
              <li className="bg-black/50 px-4 py-2">
                <Link className="hover:text-coobo" href="/work/brand">
                  Brand
                </Link>
              </li>
            </ul>
          </div>

          <Image
            src={web}
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover "
            alt="Background Target"
          />
          <div className="absolute inset-0 bg-accent opacity-50">
            <span className="sr-only"></span>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  )
}
