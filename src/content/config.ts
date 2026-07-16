import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Wedding', 'Graduation', 'Real Estate', 'Commercial', 'Events', 'Sports']),
    date: z.string(),
    location: z.string().optional(),
    youtubeId: z.string().optional(),
    cover: z.string(),
    featured: z.boolean().default(false)
  })
});

const localities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    region: z.string().optional(),
    venue: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(true)
  })
});

export const collections = { portfolio, localities };
