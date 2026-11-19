import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_KEYS } from './consts';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('The Sufferer'),
    category: z.enum(CATEGORY_KEYS),
    tags: z.array(z.coerce.string()).default([]),
    // The Pain-o-Meter: 1 = despair, 10 = delirium
    mood: z.number().int().min(1).max(10).default(5),
    // Optional scoreline for match reports, e.g. "United 2–1 Opponent"
    score: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
