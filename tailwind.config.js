/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#676767',
        web: '#b33232',
        print: '#45b3a0',
        coobo: '#ec5325',
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
