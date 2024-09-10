import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      description: z.string(),
      startDate: z.date().optional(),
      endDate: z.date().optional(),
      category: z.enum(['application', 'website', 'library', 'tool']),
      externalUrl: z.string().optional(),
      sourceUrl: z.string().optional(),
      technologies: z.array(z.string()),
      coverImage: z.string(),
      images: z.array(z.string()),
      isFeatured: z.boolean().default(false),
      role: z.enum(['Developer','Tech Lead']),
      company: z.string().optional(),
      isPrivate: z.boolean().default(true),
      sortOrder: z.number().default(1)
    })
});

const blogPostsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      publishDate: z.date().optional(),
      published: z.boolean().default(false),
      coverImage: z.string().optional(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
    })
});

export const collections = {
  projects: projectsCollection,
  blogPosts: blogPostsCollection
};
