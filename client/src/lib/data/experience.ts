import type { ExperienceItem, ExperienceType } from '@/types';

const experienceData: ExperienceItem[] = [
  // Accounting/Financial Experience
  {
    id: 'univ-nariño-budget',
    type: 'professional',
    title: 'Auxiliar de Presupuesto',
    institution: 'Universidad de Nariño',
    period: '2016 - 2019',
    description:
      'Apoyo en la elaboración y control de presupuestos institucionales. Análisis de ejecución presupuestal y reportes financieros.',
    isActive: false,
  },
  {
    id: 'metropolis-accounting',
    type: 'professional',
    title: 'Auxiliar Contable',
    institution: 'Supermercado Metrópolis 21',
    period: '2019 - 2020',
    description:
      'Registro de operaciones contables, conciliaciones bancarias, elaboración de estados financieros y cumplimiento normativo.',
    isActive: false,
  },
  {
    id: 'corponariño-income',
    type: 'professional',
    title: 'Profesional de Ingresos',
    institution: 'Corponariño',
    period: '2021 - 2022',
    description:
      'Gestión de ingresos, facturación, análisis de recaudos y reportes de gestión financiera para la entidad.',
    isActive: false,
  },
  {
    id: 'intyquilla-accountant',
    type: 'professional',
    title: 'Contador Público',
    institution: 'Asociación de Cabildos Indígenas IntyQuilla',
    period: '2021 - 2024',
    description:
      'Gestión contable integral, auditoría interna, cumplimiento tributario y asesoría financiera a la organización.',
    isActive: false,
  },
  {
    id: 'univ-nariño-admin',
    type: 'professional',
    title: 'Asistente Vicerrectoría Administrativa y Financiera',
    institution: 'Universidad de Nariño',
    period: '2022 - 2024',
    description:
      'Apoyo administrativo y financiero a la vicerrectoría, gestión de presupuestos, reportes y coordinación de procesos.',
    isActive: false,
  },
  {
    id: 'coopcolon-accountant',
    type: 'professional',
    title: 'Contador Público',
    institution: 'Coopcolon',
    period: '2019 - Actual',
    description:
      'Gestión contable, tributaria y financiera. Elaboración de estados financieros, auditoría interna y asesoría empresarial.',
    isActive: true,
  },
  {
    id: 'univ-autonoma-teacher',
    type: 'professional',
    title: 'Docente de Contaduría Pública',
    institution: 'Universidad Autónoma',
    period: '2023 - Actual',
    description:
      'Docencia en cursos de contabilidad, auditoría y finanzas. Formación de nuevos profesionales en contabilidad.',
    isActive: true,
  },
  // Software Development Experience
  {
    id: 'parking-project',
    type: 'professional',
    title: 'Desarrollo - Gestión de Parqueaderos',
    institution: 'Proyecto Personal',
    period: '2024',
    description:
      'Aplicación web para gestión de parqueaderos. Stack: Django, HTML, Tailwind CSS, PostgreSQL. Estado: En producción.',
    isActive: true,
  },
  {
    id: 'restaurant-project',
    type: 'professional',
    title: 'Desarrollo - Gestión de Restaurantes',
    institution: 'Proyecto Personal',
    period: '2024',
    description:
      'Sistema de gestión para restaurantes. Stack: Node.js, Express.js, MySQL, EJS (template engine server-side). Estado: En pruebas.',
    isActive: true,
  },
  {
    id: 'inventory-project',
    type: 'professional',
    title: 'Desarrollo - Control de Inventarios y Ventas',
    institution: 'Proyecto Personal',
    period: '2024',
    description:
      'Plataforma de gestión de inventarios y ventas. Stack: Laravel 12, Vue.js, PostgreSQL. Estado: En pruebas.',
    isActive: true,
  },
  {
    id: 'billing-project',
    type: 'professional',
    title: 'Desarrollo - Facturación Electrónica Colombia',
    institution: 'Proyecto Personal',
    period: '2024',
    description:
      'Sistema de facturación electrónica según normativa DIAN. Stack: Python Flask, MySQL. Estado: En producción.',
    isActive: true,
  },
  {
    id: 'university-projects',
    type: 'professional',
    title: 'Proyectos Universitarios',
    institution: 'Universidad Cooperativa de Colombia',
    period: '2024',
    description:
      'Desarrollo de múltiples proyectos en distintos lenguajes y tecnologías: Python, Java con Spring Boot, JavaScript, React.',
    isActive: true,
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
