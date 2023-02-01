/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#676767',
        web: '#b33232',
        print: '#45b3a0',
        coobo: '#ec5325',
        video: '#744177',
        marketing: '#ea6330',
        brand: '#3686b5',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', ...fontFamily.sans],
        sans: ['var(--font-open-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
  ],
}
