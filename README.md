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

## Autor

**Esteban Villalobos Meriño** — AIGILE

- GitHub: [@Esteb4n92](https://github.com/Esteb4n92)
- LinkedIn: [estebanvillalo](https://www.linkedin.com/in/estebanvillalo)

---

## Licencia

Este proyecto es de uso privado. Todos los derechos reservados.
