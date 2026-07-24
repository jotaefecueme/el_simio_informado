import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    category: z.string().optional(),

    // Imagen de cabecera (también se usa al compartir en redes)
    image: z.string().optional(),

    // Imagen dentro del cuerpo, con su pie de foto visible
    bodyImage: z.string().optional(),
    bodyCaption: z.string().optional(),

    // Opcionales para más adelante
    hashtags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts };