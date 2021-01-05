const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        primary: colors.blue,
        'text-primary': colors.blueGray,
        secondary: colors.blueGray,
        header: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
