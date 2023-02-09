import { promises as fs } from 'fs'
import Image from 'next/image'
import path from 'path'

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), '/public/clients')
  const imageFilenames = await fs.readdir(imageDirectory)

  return (
    <div className="">
      <div className="">
        <Title Name="Gallery" Title={'Proof of Concept'} />
        <Gallery images={imageFilenames} />
      </div>
    </div>
  )
}

const Gallery = ({ images }: { images: Array<string> }) => {
  return (
    <div className="grid grid-cols-4 bg-black">
      {images.map((el: string) => (
        <Image
          className=""
          width={250}
          height={148}
          alt={'alt'}
          src={`/clients/${el}`}
          key={el}
        />
      ))}
    </div>
  )
}

const Title = ({ Name, Title }: { Name: string; Title: String }) => {
  return (
    <h1 className="">
      {Name} {Title}
    </h1>
  )
}

export default GalleryPage
