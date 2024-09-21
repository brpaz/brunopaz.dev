/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
