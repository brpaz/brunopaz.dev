export default {
  '*.{ts,js,astro}': (files) => [
    `eslint ${files.join(' ')} --fix`,
    `prettier --write ${files.join(' ')}`,
  ],
  '*.md': (files) => `markdownlint ${files.join(' ')}`,
};
