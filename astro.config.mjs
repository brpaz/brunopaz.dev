// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  site: process.env.BASE_URL || "http://localhost:3000",
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
    },
  },
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [],
  },
});
