import type { Course } from '@/types/courses.types';

/**
 * Courses and certifications data for Elier Fernando Rosero Bravo
 */
const coursesList: Course[] = [
  {
    id: 'course-1',
    title: 'Diplomado en NIIF (Normas Internacionales de Información Financiera)',
    provider: 'Politécnico de Colombia',
    description: 'Formación especializada en normas internacionales de contabilidad y reportes financieros.',
    skills: ['NIIF', 'Contabilidad Internacional', 'Auditoría', 'Reportes Financieros'],
  },
  {
    id: 'course-2',
    title: 'Curso Básico de HTML',
    provider: 'Udemy',
    description: 'Introducción a HTML5 y desarrollo web frontend.',
    skills: ['HTML5', 'Web Development', 'Frontend'],
  },
  {
    id: 'course-3',
    title: 'Bootcamp Programación Nivel Básico',
    provider: 'Talento Tech (Universidad Tecnológica de Pereira)',
    description: 'Programa intensivo de programación con fundamentos de desarrollo de software.',
    skills: ['Programación', 'Lógica de Programación', 'Desarrollo de Software'],
  },
];

/**
 * Get all courses
 */
export function getAllCourses(): Course[] {
  return coursesList;
}

/**
 * Get course by id
 */
export function getCourseById(id: string): Course | undefined {
  return coursesList.find((course) => course.id === id);
}

/**
 * Get courses by provider
 */
export function getCoursesByProvider(provider: string): Course[] {
  return coursesList.filter((course) => course.provider.toLowerCase().includes(provider.toLowerCase()));
}
