import eslintPluginAstro from 'eslint-plugin-astro';
import playwright from 'eslint-plugin-playwright';
/** @type {import("eslint").Linter.Config} */
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/e2e/**'],
  },
];
