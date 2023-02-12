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

export default function GalleryImage({
  image,
  alt = 'Cover image',
  width = 600,
  height = 400,
  size = '100vw',
  classesWrapper,
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div className={`object-cover group-hover:opacity-75 ${classesWrapper}`}>
      {imageUrl && (
        <Image
          className="absolute h-full w-full "
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </div>
  )
}
