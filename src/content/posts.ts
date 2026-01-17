import type { CollectionEntry } from 'astro:content';
import type { BlogPost } from './types';
import { z, defineCollection } from 'astro:content';

export const blogPostsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.date().optional(),
    published: z.boolean().default(false),
    coverImage: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

/**
 * Helper function to sort a collection of posts by it´s published date.
 */
export function sortPosts(posts: CollectionEntry<BlogPost>[]): CollectionEntry<BlogPost>[] {
  return posts.sort((a, b) => {
    if (a.data.publishDate === undefined) {
      return -1;
    }

    if (b.data.publishDate === undefined) {
      return 1;
    }

    // Convert dates to timestamps for comparison
    const aTimestamp = a.data.publishDate.getTime();
    const bTimestamp = b.data.publishDate.getTime();

    return bTimestamp - aTimestamp;
  });
}
