import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).optional().default([]),
    file: z.string(),
    fileLabel: z.string(),
    tags: z.array(z.string()),
    date: z.string().optional(),
  }),
});

export const collections = { products };
