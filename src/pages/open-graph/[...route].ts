import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { BlogPostCollection } from '~/content/types';

const collectionEntries = await getCollection(BlogPostCollection);

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(collectionEntries.map(({ slug, data }) => [slug, data]));

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: pages,
  param: 'route',
  getImageOptions: (_, page) => ({
    title: page.title,
    description: 'Bruno Paz - Software Engineer',
    bgGradient: [
      [15, 23, 42], // slate-900
      [30, 41, 59], // slate-800
    ],
    font: {
      title: {
        size: 72,
        weight: 'Bold',
        color: [255, 255, 255],
        families: ['Inter', 'sans-serif'],
      },
      description: {
        size: 36,
        weight: 'Normal',
        color: [148, 163, 184], // slate-400
        families: ['Inter', 'sans-serif'],
      },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/inter/latin-700-normal.ttf',
    ],
    border: {
      color: [96, 165, 250], // blue-500 - primary color
      width: 20,
      side: 'inline-start',
    },
    padding: 100,
  }),
});
