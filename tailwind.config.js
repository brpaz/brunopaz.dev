import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        neutral: colors.gray,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
