import Image from 'next/image'

import { urlForImage } from '@/lib/sanity.image'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
}

export default function ClientSliderImage({
  image,
  alt = 'Cover image',
  width = 250,
  height = 148,

  classesWrapper,
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div className={`${classesWrapper}`}>
      {imageUrl && (
        <Image
          className=""
          alt={alt}
          width={width}
          height={height}
          src={imageUrl}
        />
      )}
    </div>
  )
}
