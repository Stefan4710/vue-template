const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1320px' },
      xl: { max: '1320px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },

      minsm: { min: '640px' },
      minmd: { min: '768px' },
      minlg: { min: '1024px' },
      minxl: { min: '1320px' },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
      margin: {
        "28px": "28px"
      },
      colors: {
        "grey": "#F0F2F5"
      },
      boxShadow: {
        "3xl": "0px 18px 50px rgba(0, 0, 0, 0.06)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
