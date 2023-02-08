'use client'

import { useEffect, useState } from 'react'

export function useScrollPadding() {
  const [scrollPadding, setScrollPadding] = useState(0)

  useEffect(() => {
    const navigationRef = document.querySelector('header')

    const navigationHeight = navigationRef?.offsetHeight

    setScrollPadding(navigationHeight || 0)

    return () => {
      document.documentElement.style.setProperty(
        '--scroll-padding',
        scrollPadding + 'px'
      )
    }
  }, [scrollPadding])

  return scrollPadding
}
