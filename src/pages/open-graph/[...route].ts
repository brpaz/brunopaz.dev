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
    description: `By Bruno Paz - brunopaz.dev`,
    bgGradient: [
      [96, 165, 250],
      [96, 166, 250],
    ],
    border: {
      color: [250, 250, 250],
      width: 10,
      side: 'inline-start',
    },
    padding: 120,
  }),
});
