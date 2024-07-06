import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        image: z.string(),
        pinned: z.any().optional(),
    }),
});

export const collections = { posts };
