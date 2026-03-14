import type { ExperienceItem, ExperienceType } from '@/types';

const experienceData: ExperienceItem[] = [
  // Academic Experience
  {
    id: 'engineering-degree',
    type: 'academic',
    title: 'Ingeniería de Software',
    institution: 'Universidad de Nariño',
    period: '2019 - 2024',
    description:
      'Formación integral en desarrollo de software, arquitectura de sistemas, bases de datos y metodologías ágiles. Proyecto de grado enfocado en soluciones fintech.',
    isActive: false,
  },
  {
    id: 'accounting-degree',
    type: 'academic',
    title: 'Contaduría Pública',
    institution: 'Universidad de Nariño',
    period: '2019 - 2024',
    description:
      'Especialización en contabilidad general, auditoría, tributaria y análisis financiero. Experiencia práctica en empresas del sector.',
    isActive: false,
  },
  // Professional Experience
  {
    id: 'senior-developer',
    type: 'professional',
    title: 'Senior Full-Stack Developer',
    institution: 'Tech Innovators Colombia',
    period: '2023 - Presente',
    description:
      'Liderazgo técnico en proyectos fintech. Desarrollo de arquitecturas escalables con Next.js, Node.js y bases de datos SQL. Mentoring de junior developers.',
    isActive: true,
  },
  {
    id: 'developer',
    type: 'professional',
    title: 'Full-Stack Developer',
    institution: 'Digital Solutions Pasto',
    period: '2021 - 2023',
    description:
      'Desarrollo de aplicaciones web con React y Node.js. Implementación de APIs REST y GraphQL. Integración con servicios de terceros.',
    isActive: false,
  },
  {
    id: 'junior-developer',
    type: 'professional',
    title: 'Junior Developer',
    institution: 'StartUp Local',
    period: '2020 - 2021',
    description:
      'Primeros pasos en desarrollo web. Creación de componentes React, estilos con CSS y colaboración en equipo con metodología Scrum.',
    isActive: false,
  },
];

/**
 * Get all experience items
 */
export function getAllExperience(): ExperienceItem[] {
  return experienceData;
}

/**
 * Get experience by type
 */
export function getExperienceByType(type: ExperienceType): ExperienceItem[] {
  return experienceData.filter((item) => item.type === type);
}

/**
 * Get active experience
 */
export function getActiveExperience(): ExperienceItem[] {
  return experienceData.filter((item) => item.isActive);
}

/**
 * Get experience by ID
 */
export function getExperienceById(id: string): ExperienceItem | undefined {
  return experienceData.find((item) => item.id === id);
}
