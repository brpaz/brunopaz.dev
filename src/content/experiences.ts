import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

export const experiencesCollection = defineCollection({
  loader: file('./src/content/experience.json'),
  schema: z.object({
    company: z.string(),
    position: z.string(),
    url: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
  }),
});
