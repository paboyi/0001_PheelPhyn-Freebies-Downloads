// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name:      z.string(),
    tagline:   z.string(),
    image:     z.string().optional().default(''),
    imagetwo:  z.string().optional().default(''),
    imagethree:z.string().optional().default(''),
    icons:     z.array(z.string()).optional().default([]),
    images:    z.array(z.string()).optional().default([]),
    color:     z.enum(['blush','sage','sky','lavender','butter','cream']).optional().default('cream'),
    file:      z.string(),
    fileLabel: z.string(),
    tags:      z.array(z.string()),
    date:      z.string().optional().default(''),
  }),
});

export const collections = { products };
