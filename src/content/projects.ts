import { z, defineCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Project } from './types';

export const projectsCollection = defineCollection({
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
    role: z.array(
      z.enum([
        'Developer',
        'Software Engineer',
        'Tech Lead',
        'Engineering Manager',
      ]),
    ),
    company: z.string().optional(),
    isPrivate: z.boolean().default(true),
    sortOrder: z.number().default(1),
  }),
});

/**
 * Helper function to sort a collection of projects by it´s sortOrder.
 */
export function sortProjects(
  projects: CollectionEntry<Project>[],
): CollectionEntry<Project>[] {
  return projects.sort((a, b) => a.data.sortOrder - b.data.sortOrder);
}
