import React from 'react'

const copyrightDate = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="relative  border-b-8 border-white bg-accent ">
      <div className="coobo-container flex h-full items-center justify-center pb-14 pt-8 text-center lg:justify-start lg:py-8">
        <p className="text-body">
          &copy; {copyrightDate} Coobo Media | Terms of Service
        </p>
      </div>
      <div className="absolute -bottom-2  flex w-full justify-center gap-4  lg:right-[5vw] lg:justify-end  ">
        <a className="flex items-center  border-x-8 border-t-8 border-white bg-coobo px-3 py-2 text-white focus:outline-none">
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="facebook-f"
            className="h-4 w-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </a>

        <a className="flex items-center border-x-8 border-t-8   border-white bg-coobo px-3 py-2 text-white focus:outline-none">
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="linkedin-in"
            className="h-4 w-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
