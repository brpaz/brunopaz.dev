// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL || "http://localhost:3000",
  redirects: {
    '/blog/' : '/blog/page/1', // force redirect to first page of blog
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
    },
  },
  integrations: [
    sitemap(),
    mdx(),
    tailwind()
  ],
  vite: {
    plugins: [],
  },
});
