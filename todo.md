# Portafolio Fernando Rosero - TODO

## Configuración Base
- [x] Inicializar proyecto con webdev_init_project
- [x] Configurar package.json con dependencias
- [x] Configurar tsconfig.json con strict mode
- [x] Configurar tailwind.config.ts con colores y fuentes custom
- [x] Configurar next.config.ts
- [x] Crear app/layout.tsx con metadata y providers
- [x] Crear app/globals.css con Tailwind y variables CSS
- [x] Crear .env.local.example

## Tipos y Datos
- [x] Crear types/index.ts
- [x] Crear types/skill.types.ts
- [x] Crear types/experience.types.ts
- [x] Crear types/testimonial.types.ts
- [x] Crear types/personal.types.ts
- [x] Crear lib/data/personal.ts
- [x] Crear lib/data/skills.ts
- [x] Crear lib/data/experience.ts
- [x] Crear lib/data/testimonials.ts
- [x] Crear lib/data/index.ts (barrel export)

## Utilidades y Hooks
- [x] Crear lib/utils/cn.ts
- [x] Crear lib/utils/animations.ts (Framer Motion variants)
- [x] Crear lib/hooks/useScrollSpy.ts
- [x] Crear lib/hooks/useMousePosition.ts
- [x] Crear lib/constants/routes.ts

## Esquemas y Acciones
- [x] Crear lib/schemas/contact.schema.ts
- [ ] Crear lib/actions/sendEmail.action.ts (Server Action - TODO)

## Componentes UI
- [x] Crear components/ui/Button.tsx
- [x] Crear components/ui/Badge.tsx (PortfolioBadge)
- [x] Crear components/ui/SectionHeader.tsx
- [x] Crear components/ui/SkillBar.tsx
- [x] Crear components/ui/TimelineItem.tsx
- [x] Crear components/ui/TestimonialCard.tsx
- [x] Crear components/ui/ContactForm.tsx
- [x] Crear components/ui/AvatarPlaceholder.tsx
- [ ] Crear components/ui/index.ts (barrel export)

## Componentes de Layout
- [x] Crear components/layout/Navbar.tsx
- [x] Crear components/layout/Footer.tsx
- [x] Crear components/layout/CustomCursor.tsx
- [ ] Crear components/layout/index.ts (barrel export)

## Secciones
- [x] Crear components/sections/HeroSection.tsx
- [x] Crear components/sections/AboutSection.tsx
- [x] Crear components/sections/TestimonialsSection.tsx
- [x] Crear components/sections/ExperienceSection.tsx
- [x] Crear components/sections/ContactSection.tsx
- [ ] Crear components/sections/index.ts (barrel export)

## Página Principal
- [x] Crear pages/Home.tsx (integración de todas las secciones)

## Testing
- [ ] Crear tests para componentes principales (TODO)
- [ ] Crear tests para hooks (TODO)
- [ ] Crear tests para Server Actions (TODO)

## Assets
- [ ] Crear public/cv/fernando-rosero-cv.pdf
- [ ] Crear public/og-image.png (1200×630)

## Finalización
- [ ] Verificar responsividad en mobile/tablet/desktop
- [ ] Verificar animaciones y performance
- [ ] Verificar accesibilidad (a11y)
- [ ] Crear checkpoint final

## Tema Claro/Oscuro (Light/Dark Mode)
- [x] Diseñar paleta de colores para modo claro
- [x] Actualizar index.css con variables de tema
- [x] Crear lib/hooks/useTheme.ts
- [x] Crear lib/contexts/ThemeContext.tsx
- [x] Agregar toggle de tema en Navbar
- [x] Actualizar App.tsx con ThemeProvider
- [x] Verificar persistencia en localStorage
- [x] Probar transiciones de tema

## Mejoras de Contraste (Light Mode)
- [x] Aumentar contraste de textos en modo claro
- [x] Ajustar colores de secciones para mejor legibilidad
- [x] Revisar TestimonialCard en modo claro
- [x] Revisar colores de badges y etiquetas
- [x] Verificar accesibilidad WCAG AA en ambos modos


## Ajustes de Diseño según Wireframe
- [x] Actualizar Navbar con estados (normal y sticky)
- [x] Mejorar Hero section layout (nombre grande, descripción, stats, avatar)
- [x] Rediseñar About section con 2 columnas (bio + foto | skills)
- [x] Actualizar Testimonios (featured grande + 3 cards en grid)
- [x] Rediseñar Experience section con timeline mejorado
- [x] Verificar responsividad en todos los breakpoints


## Corrección de Colores Naranjas en Modo Claro
- [x] Revisar visibilidad de colores naranjas/dorados en modo claro
- [x] Actualizar paleta de colores en index.css
- [x] Ajustar componentes que usan colores naranjas
- [x] Verificar contraste en todas las secciones


## Aplicación de Diseño HTML a Next.js
- [x] Actualizar paleta de colores en index.css con nuevos valores
- [x] Refactorizar componentes UI con nuevos estilos (Button, Badge, SkillBar, SectionHeader, TestimonialCard, TimelineItem, AvatarPlaceholder)
- [x] Rediseñar secciones principales (Hero, About)
- [x] Mejorar modo claro con contraste profesional
- [x] Verificar responsividad mobile-first
- [x] Optimizar animaciones y transiciones


## Secci\u00f3n Acad\u00e## Sección Académica
- [x] Crear tipos para educación (education.types.ts)
- [x] Agregar datos académicos en lib/data (education.ts)
- [x] Crear componente EducationCard
- [x] Crear EducationSection
- [x] Integrar en Home.tsx
- [x] Verificar diseño y responsividad


## Actualización de Información Real
- [x] Actualizar nombre completo (Elier Fernando Rosero Bravo)
- [x] Actualizar educación con universidades correctas
- [x] Crear sección de cursos/diplomados
- [x] Actualizar experiencia laboral contable
- [x] Actualizar experiencia desarrollo software
- [x] Crear sección de proyectos de desarrollo
- [x] Verificar diseño y responsividad


## Correcciones de Bugs
- [x] Revisar y corregir sección de Experiencia que no carga
- [x] Revisar y corregir sección Académica que no aparece
- [x] Verificar datos en experience.ts y education.ts
- [x] Verificar componentes ExperienceSection y EducationSection
