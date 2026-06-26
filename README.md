# AIGILE

Landing page de AIGILE, una micro-agencia tecnológica especializada en landing pages premium, automatizaciones y dashboards a medida. El sitio presenta los servicios, el enfoque de trabajo y un portafolio de proyectos, con soporte bilingüe (español / inglés) e integraciones directas de contacto.

**Demo en producción:** https://aigile-silk.vercel.app

---

## Características

- **Diseño premium y responsive**, optimizado para escritorio y dispositivos móviles.
- **Bilingüe (ES / EN)** mediante un contexto de idioma con cambio en tiempo real.
- **Animaciones fluidas** con Framer Motion y anime.js.
- **Contenido centralizado** en un único archivo de configuración (`lib/site-config.ts`) para editar textos, servicios, proyectos y enlaces sin tocar los componentes.
- **Integraciones de contacto**: WhatsApp y Calendly.
- **Analítica** integrada con Vercel Analytics.
- **Componentes accesibles** construidos sobre Radix UI.

---

## Stack tecnológico

| Categoría        | Tecnología                          |
| ---------------- | ----------------------------------- |
| Framework        | Next.js 16 (App Router)             |
| Lenguaje         | TypeScript                          |
| UI               | React 19                            |
| Estilos          | Tailwind CSS v4                     |
| Componentes      | Radix UI                            |
| Animaciones      | Framer Motion, anime.js             |
| Iconos           | lucide-react                        |
| Analítica        | Vercel Analytics                    |
| Despliegue       | Vercel                              |

---

## Estructura del proyecto

```
.
├── app/                  # App Router: layout, página principal y estilos globales
├── components/
│   ├── sections/         # Secciones de la landing (hero, servicios, proyectos, etc.)
│   ├── ui/               # Componentes de interfaz reutilizables
│   └── animations.tsx    # Utilidades de animación
├── lib/
│   ├── site-config.ts    # Configuración y contenido editable del sitio
│   └── language-context.tsx  # Proveedor de idioma (ES / EN)
└── public/               # Imágenes y recursos estáticos
```

---

## Requisitos previos

- Node.js 18.18 o superior
- pnpm (recomendado)

---

## Instalación y uso

Clonar el repositorio e instalar dependencias:

```bash
git clone https://github.com/Esteb4n92/AIGILE.git
cd AIGILE
pnpm install
```

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación quedará disponible en `http://localhost:3000`.

### Scripts disponibles

| Script          | Descripción                                      |
| --------------- | ------------------------------------------------ |
| `pnpm dev`      | Inicia el servidor de desarrollo                 |
| `pnpm build`    | Genera la versión de producción                  |
| `pnpm start`    | Sirve la versión de producción                   |
| `pnpm lint`     | Ejecuta el linter                                |

---

## Personalización

Casi todo el contenido del sitio (textos, servicios, proyectos, enlaces sociales, WhatsApp y Calendly) se edita desde `lib/site-config.ts`, sin necesidad de modificar los componentes. Las imágenes se ubican en la carpeta `public/`.

---

## Despliegue

El proyecto está optimizado para desplegarse en [Vercel](https://vercel.com). Al conectar el repositorio, Vercel detecta automáticamente Next.js y configura el build. Cada push a la rama `main` genera un nuevo despliegue.

---

## Autor

**Esteban Villalobos** — AIGILE

- GitHub: [@Esteb4n92](https://github.com/Esteb4n92)
- LinkedIn: [estebanvillalo](https://www.linkedin.com/in/estebanvillalo)

---

## Licencia

Este proyecto es de uso privado. Todos los derechos reservados.
