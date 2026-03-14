/**
 * Navigation links for the portfolio
 */
export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Acerca de', href: '#about' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
] as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/fernandorosero',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/fernandorosero',
    icon: 'Github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/fernandorosero',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:fernando@rosero.dev',
    icon: 'Mail',
  },
] as const;

/**
 * Section IDs for scroll spy
 */
export const SECTION_IDS = ['hero', 'about', 'testimonials', 'experience', 'contact'] as const;
