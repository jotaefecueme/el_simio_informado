import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    // Título de la noticia monificada
    title: z.string(),
    // Fecha de publicación
    date: z.coerce.date(),
    // Entradilla: 1-2 frases que resumen la noticia, se muestra en la home
    excerpt: z.string(),
    // Categoría libre (ej: "Deportes", "Política", "Sociedad") — opcional
    category: z.string().optional(),
    // Ruta a la imagen banner, relativa a /public (ej: "/images/mi-noticia.jpg")
    // Opcional: si no hay imagen, se muestra el patrón de "dosel" por defecto
    image: z.string().optional(),
    // Texto alternativo de la imagen, por accesibilidad
    imageAlt: z.string().optional(),
  }),
});

export const collections = { posts };
