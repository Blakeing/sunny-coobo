import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/coobo-logo-white.svg'

function StudioLogo() {
  return (
    <Link href="/">
      <Image className="" height={35} src={logo} alt="Logo" />
    </Link>
  )
}

export default StudioLogo
