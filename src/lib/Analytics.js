'use client'

import * as Fathom from 'fathom-client'
import { useEffect } from 'react'

const Analytics = () => {
  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_ID, {
      includedDomains: ['sunny-coobo.vercel.app'],
    })

    const onRouteChange = () => Fathom.trackPageview()

    window.addEventListener('routeChange', onRouteChange)
    return () => window.removeEventListener('routeChange', onRouteChange)
  }, [])

  return null
}

export default Analytics
