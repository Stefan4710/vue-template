const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '798px', 'max': '1053px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1054px', 'max': '1349px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1350px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      container: {
        "xl": "max-width: 1350px",
        center: true,
        padding: '15px',
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
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
