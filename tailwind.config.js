const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        neutral: colors.gray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
