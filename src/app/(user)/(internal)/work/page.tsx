import mark from '@public/header_bg_mark.jpg'
import wolf from '@public/Web-WolfPack.jpg'
import Image from 'next/image'

const projects = [
  {
    title: 'Project 1',
    alt: 'Project 1',
    image: wolf,
  },
  {
    title: 'Project 2',
    alt: 'Project 2',
    image: wolf,
  },
  {
    title: 'Project 3',
    alt: 'Project 3',
    image: wolf,
  },
  {
    title: 'Project 4',
    alt: 'Project 4',
    image: wolf,
  },
]

function ourWorkRoute() {
  return (
    <main className=" min-h-[calc(100vh-96px)]">
      <div className="relative  flex h-80 flex-col justify-center bg-gray-200 px-[5vw] pt-[112.1px]">
        <h1 className="z-10 font-display text-5xl font-bold text-white">
          Our Work
        </h1>
        <Image
          src={mark}
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover "
          alt="Background Target"
        />
        <div className="absolute inset-0 bg-accent opacity-50">
          <span className="sr-only"></span>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 "
      >
        {projects.map((project) => (
          <li key={project.title} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden  bg-gray-100 ">
              <Image
                src={project.image}
                alt={project.alt}
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">
                  View details for {project.title}
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ourWorkRoute
