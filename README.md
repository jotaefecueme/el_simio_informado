# El simio informado

Blog minimalista de noticias reales "monificadas". Hecho con [Astro](https://astro.build) — sin backend, sin base de datos: cada noticia es un archivo Markdown.

## Cómo se estructura

```
src/content/posts/mi-noticia.md   ← una noticia = un archivo
src/content/config.ts             ← define los campos obligatorios/opcionales
src/pages/index.astro             ← portada (listado en una columna)
src/pages/posts/[slug].astro      ← página de detalle de cada noticia
src/styles/global.css             ← todo el sistema visual (colores, tipografía)
```

El nombre del archivo (sin `.md`) es el "slug", es decir, la URL final:
`el-saludo-que-paro-la-selva.md` → `elsimioinformado.com/posts/el-saludo-que-paro-la-selva/`

## Cómo publicar una noticia nueva

Crea un archivo `.md` en `src/content/posts/` con este formato:

```markdown
---
title: "Título de la noticia"
date: 2026-07-21
excerpt: "Entradilla de 1-2 frases que se muestra en la portada."
category: "Deportes"        # opcional
image: "/images/foto.jpg"   # opcional, de momento se puede omitir
imageAlt: "Descripción"     # opcional
---

Aquí va el cuerpo completo de la noticia, en párrafos normales de Markdown.
```

Si no hay campo `image`, la tarjeta muestra automáticamente el patrón de "dosel de la selva" por defecto — así que puedes publicar noticias sin imagen desde ya y añadir las fotos/imágenes generadas más adelante sin tocar nada del diseño.

## Desarrollo local

```bash
npm install
npm run dev
```

Se abre en `http://localhost:4321`.

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel: "Add New Project" → importa el repo → Vercel detecta Astro automáticamente (no hay que tocar nada de configuración).
3. Cada `git push` a la rama principal despliega solo.

## Publicación automática (n8n / agente)

Como cada noticia es solo un archivo de texto dentro del repo, un agente puede publicar sin backend propio:

1. Generar el Markdown con el frontmatter correcto (título, fecha, entradilla, categoría, cuerpo).
2. Llamar a la API de GitHub para crear el archivo en `src/content/posts/` (endpoint `PUT /repos/{owner}/{repo}/contents/{path}`, con el contenido en base64).
3. Vercel detecta el push al repo y redespliega automáticamente — la noticia queda publicada sin intervención manual.

Cuando se quiera meter generación de imágenes, el mismo agente puede subir la imagen a `public/images/` con otra llamada a la API de GitHub y referenciarla en el campo `image` del frontmatter.
