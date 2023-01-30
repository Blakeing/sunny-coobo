import logo from '@public/coobo-logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'

function StudioLogo() {
  return (
    <Link href="/">
      <Image className="" height={35} src={logo} alt="Logo" />
    </Link>
  )
}

export default StudioLogo
