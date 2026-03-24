import type { Education } from '@/types/education.types';

/**
 * Academic education data for Elier Fernando Rosero Bravo
 */
const educationList: Education[] = [
  {
    id: 'edu-1',
    title: 'Técnico en Mecánica Diesel',
    institution: 'SENA (Servicio Nacional de Aprendizaje)',
    startYear: 2008,
    endYear: 2010,
    description: 'Formación técnica en mecánica diesel con énfasis en mantenimiento y reparación de motores.',
  },
  {
    id: 'edu-2',
    title: 'Contador Público',
    institution: 'Universidad de Nariño',
    startYear: 2014,
    endYear: 2019,
    description: 'Licenciatura en Contabilidad con énfasis en auditoría, finanzas corporativas y normas internacionales de información financiera (NIIF).',
  },
  {
    id: 'edu-3',
    title: 'Magister en Gerencia y Auditoría Tributaria',
    institution: 'Universidad Mariana',
    startYear: 2021,
    endYear: 2023,
    description: 'Posgrado especializado en gestión tributaria, auditoría fiscal y cumplimiento normativo empresarial.',
  },
  {
    id: 'edu-4',
    title: 'Ingeniería de Software (5º Semestre)',
    institution: 'Universidad Cooperativa de Colombia',
    startYear: 2024,
    endYear: 'Actual',
    description: 'Programa de ingeniería enfocado en desarrollo de software, arquitectura de sistemas y tecnologías emergentes.',
  },
];

/**
 * Get all education records
 */
export function getAllEducation(): Education[] {
  return educationList;
}

/**
 * Get education by id
 */
export function getEducationById(id: string): Education | undefined {
  return educationList.find((edu) => edu.id === id);
}
