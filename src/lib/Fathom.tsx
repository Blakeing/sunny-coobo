// Fathom.tsx
'use client'

import { load, trackPageview } from 'fathom-client'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    load('OZIGYCOY', {
      includedDomains: ['sunny-coobo.vercel.app'],
    })
  }, [])

  // Record a pageview when route changes
  useEffect(() => {
    trackPageview()
  }, [pathname, searchParams])

  return null
}

export default function Fathom() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  )
}
