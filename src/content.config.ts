import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada archivo .md de src/content/proyectos/ es un proyecto del portafolio.
// Los proyectos se ordenan solos por fecha: el más reciente queda arriba.
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    nombre: z.string(),
    tipo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    url: z.string().url().optional(),
    captura: z.string().optional(),
    tecnologias: z.array(z.string()).default([]),
  }),
});

export const collections = { proyectos };
