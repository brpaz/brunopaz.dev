// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL || "http://localhost:3000",
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
    },
  },
  integrations: [
    svelte(),
    sitemap(),
    mdx(),
    tailwind()
  ],
  vite: {
    plugins: [],
  },
});
