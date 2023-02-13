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
  width = 1000,
  height = parseInt('666.67'),

  classesWrapper,
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div className={`${classesWrapper}`}>
      {imageUrl && (
        <Image
          className="object-cover"
          alt={alt}
          width={width}
          height={height}
          src={imageUrl}
        />
      )}
    </div>
  )
}
