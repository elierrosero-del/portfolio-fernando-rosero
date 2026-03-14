import type { Testimonial } from '@/types';

const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'María García',
    role: 'Directora de Proyectos',
    company: 'Tech Innovators Colombia',
    content:
      'Fernando es un desarrollador excepcional con una capacidad increíble para resolver problemas complejos. Su dedicación y profesionalismo son inspiradores.',
    rating: 5,
    initials: 'MG',
    featured: true,
  },
  {
    id: 'testimonial-2',
    name: 'Carlos López',
    role: 'CEO',
    company: 'Digital Solutions Pasto',
    content:
      'Trabajar con Fernando fue transformador para nuestro equipo. Implementó arquitecturas escalables que mejoraron significativamente nuestro producto.',
    rating: 5,
    initials: 'CL',
    featured: false,
  },
  {
    id: 'testimonial-3',
    name: 'Ana Martínez',
    role: 'Product Manager',
    company: 'StartUp Local',
    content:
      'Su combinación de habilidades técnicas y conocimiento financiero lo hace único. Siempre entrega más de lo esperado.',
    rating: 5,
    initials: 'AM',
    featured: false,
  },
  {
    id: 'testimonial-4',
    name: 'Roberto Sánchez',
    role: 'CTO',
    company: 'Enterprise Solutions',
    content:
      'Fernando demuestra un compromiso genuino con la excelencia. Sus contribuciones han sido fundamentales en nuestros proyectos más críticos.',
    rating: 5,
    initials: 'RS',
    featured: false,
  },
];

/**
 * Get all testimonials
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonialsData;
}

/**
 * Get featured testimonial
 */
export function getFeaturedTestimonial(): Testimonial | undefined {
  return testimonialsData.find((t) => t.featured);
}

/**
 * Get testimonials by rating
 */
export function getTestimonialsByRating(rating: number): Testimonial[] {
  return testimonialsData.filter((t) => t.rating === rating);
}

/**
 * Get testimonial by ID
 */
export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonialsData.find((t) => t.id === id);
}
