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
        accent: '#252525',
        accentLight: '#444',
        accentGray: '#b7b7b7',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', ...fontFamily.sans],
        sans: ['var(--font-open-sans)', ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#EC5335',
          secondary: '#B7B7B7',
          accent: '#252525',
          neutral: '#676767',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
