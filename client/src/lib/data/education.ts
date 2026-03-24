import type { Education } from '@/types/education.types';

export const educationData: Education[] = [
  {
    id: 'edu-1',
    title: 'Técnico en Mecánica Diesel',
    institution: 'SENA',
    startYear: 2008,
    endYear: 2010,
    description: 'Formación técnica en mecánica diesel y sistemas de motores',
  },
  {
    id: 'edu-2',
    title: 'Contador Público',
    institution: 'Universidad de Nariño',
    startYear: 2014,
    endYear: 2019,
    description: 'Profesional en contabilidad y gestión financiera',
  },
  {
    id: 'edu-3',
    title: 'Magister en Gerencia y Auditoría Tributaria',
    institution: 'Institución Educativa',
    startYear: 2021,
    endYear: 2023,
    description: 'Postgrado especializado en auditoría y gestión tributaria',
  },
  {
    id: 'edu-4',
    title: 'Ingeniería de Software',
    institution: 'Institución Educativa',
    startYear: 2024,
    endYear: 'Actual',
    description: 'Estudiante de 5to semestre en Ingeniería de Software',
  },
];

/**
 * Get education by id
 */
export function getEducationById(id: string): Education | undefined {
  return educationData.find((edu) => edu.id === id);
}

/**
 * Get all education sorted by end year descending
 */
export function getAllEducation(): Education[] {
  return [...educationData].sort((a, b) => {
    const aYear = a.endYear === 'Actual' ? 9999 : a.endYear;
    const bYear = b.endYear === 'Actual' ? 9999 : b.endYear;
    return bYear - aYear;
  });
}
