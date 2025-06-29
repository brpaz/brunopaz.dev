import { z, defineCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Project } from './types';

export enum ProjectType {
  Work = 'work',
  Personal = 'personal',
}

export const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    category: z.enum(['application', 'website', 'library', 'tool', 'other']),
    externalUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
    technologies: z.array(z.string()),
    coverImage: z.string(),
    images: z.array(z.string()),
    isFeatured: z.boolean().default(false),
    role: z
      .array(
        z.enum([
          'Developer',
          'Software Engineer',
          'Tech Lead',
          'Engineering Manager',
        ]),
      )
      .optional(),
    company: z.string().optional(),
    type: z.enum(['work', 'personal']).default('work'),
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
