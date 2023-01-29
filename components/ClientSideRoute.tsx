'use client'

import Link from 'next/link'

function ClientSideRoute({
  children,
  route,
  className,
}: {
  children: React.ReactNode
  route: string
  className?: string
}) {
  return (
    <Link className={className} href={route}>
      {children}
    </Link>
  )
}

export default ClientSideRoute
