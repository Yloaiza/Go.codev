# Go.Codev · sitio web (Astro)

Landing page de Go.Codev: servicios, cómo trabajamos, portafolio que crece solo, quiénes somos, preguntas frecuentes y contacto. Con animaciones y adaptada a celular.

## Empezar

```bash
npm install
npm run dev        # abre http://localhost:4321
npm run build      # genera la carpeta dist/ lista para publicar
```

Necesitas Node 20 o superior.

## 1. Cambia tus datos de contacto (¡antes de publicar!)

Abre `src/data/sitio.ts` y edita el bloque `contacto`:

```ts
contacto: {
  whatsapp: '573000000000',   // solo números, con indicativo (Colombia = 57)
  correo: 'hola@tudominio.com',
  instagram: 'gocodev',       // sin @
},
```

Al compilar, la consola te avisa si todavía quedan los datos de ejemplo.

## 2. Agregar un proyecto al portafolio

Cada proyecto es **un archivo** dentro de `src/content/proyectos/`. Crea uno nuevo, por ejemplo `restaurante-sabor.md`:

```md
---
nombre: "Restaurante Sabor"
tipo: "Restaurante"
descripcion: "Página con menú digital y pedidos por WhatsApp."
fecha: 2026-11-20
url: "https://restaurantesabor.com"
captura: "/proyectos/restaurante-sabor.png"
tecnologias: ["Astro", "WhatsApp"]
---
```

Y guarda la captura de pantalla en `public/proyectos/restaurante-sabor.png`.

- **Se apila solo**: los proyectos se ordenan por `fecha` y el más reciente queda arriba. No tienes que tocar ningún otro archivo.
- El contador "N proyectos y contando" se actualiza solo.
- `url`, `captura` y `tecnologias` son opcionales. Sin `captura` se muestra un marco vacío; sin `url` la tarjeta no es un enlace.
- Consejo para la captura: una imagen de la parte superior de la página, de unos 1200×800 px. Al pasar el mouse sobre la tarjeta, la imagen se desplaza suavemente.
- **Borra los tres archivos `ejemplo-1.md`, `ejemplo-2.md` y `ejemplo-3.md`** cuando tengas tus proyectos reales.

## 3. Editar textos

Todo el texto vive en `src/data/sitio.ts`:

| Qué | Dónde |
| --- | --- |
| Servicios | `servicios` |
| Pasos de "Cómo trabajamos" | `pasos` |
| Valores de "Quiénes somos" y tu historia | `valores` y `sitio.historia` |
| Preguntas frecuentes | `preguntas` |
| Frases de la cinta que se mueve | `frases` |

Los textos del hero (la portada) están en `src/components/Hero.astro`.

## 4. Revisa las preguntas frecuentes

Escribí las respuestas con lo que sé de Go.Codev, pero algunas son supuestos que debes confirmar o ajustar en `preguntas`:

- Tiempos aproximados de entrega.
- Pagos por etapas con anticipo.
- Que el código y el proyecto son del cliente al terminar el pago.
- Que dominio y hosting los paga el cliente.
- Que trabajas 100 % en línea.

## 5. Publicar

El resultado de `npm run build` es la carpeta `dist/` (sitio estático). Se puede subir gratis a Netlify, Vercel, Cloudflare Pages o GitHub Pages: conecta el repositorio y usa `npm run build` como comando y `dist` como carpeta de salida. Cuando tengas dominio, agrega `site: 'https://tudominio.com'` en `astro.config.mjs`.

## Estructura

```
src/
  components/   secciones de la página (Hero, Servicios, Portafolio...)
  content/proyectos/   un .md por proyecto
  data/sitio.ts        textos y datos editables
  layouts/Base.astro   cabecera HTML, fuentes y animación de aparición
  styles/global.css    colores, animaciones y estilos
public/
  logos/        logos de Go.Codev (SVG y PNG)
  proyectos/    capturas del portafolio
```

## Animaciones

Aparición al hacer scroll, saludo y parpadeo de la mascota, fichas flotantes, cinta en movimiento, barra de progreso de lectura y efectos al pasar el mouse. Si la persona tiene activada la opción "reducir movimiento" en su dispositivo, todas se desactivan automáticamente.
