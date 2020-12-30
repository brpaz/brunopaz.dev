const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        primary: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
