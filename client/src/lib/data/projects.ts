import type { Project } from '@/types/projects.types';

/**
 * Software development projects for Elier Fernando Rosero Bravo
 */
const projectsList: Project[] = [
  {
    id: 'proj-parking',
    title: 'Sistema de Gestión de Parqueaderos',
    description:
      'Aplicación web completa para la gestión integral de parqueaderos. Permite registrar vehículos, controlar entradas y salidas, generar reportes y administrar tarifas. Interfaz intuitiva con dashboard de estadísticas en tiempo real.',
    technologies: ['Django', 'Python', 'HTML5', 'Tailwind CSS', 'PostgreSQL'],
    status: 'production',
    featured: true,
  },
  {
    id: 'proj-restaurant',
    title: 'Sistema de Gestión de Restaurantes',
    description:
      'Plataforma integral para administración de restaurantes. Gestión de menú, pedidos, inventario, mesas y reportes. Sistema de punto de venta con integración de pagos.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'EJS', 'JavaScript'],
    status: 'testing',
    featured: true,
  },
  {
    id: 'proj-inventory',
    title: 'Control de Inventarios y Ventas',
    description:
      'Sistema robusto para control de inventario, gestión de stock, registro de ventas y generación de reportes analíticos. Incluye módulo de proveedores y auditoría de cambios.',
    technologies: ['Laravel 12', 'Vue.js', 'PostgreSQL', 'PHP', 'JavaScript'],
    status: 'testing',
    featured: true,
  },
  {
    id: 'proj-billing',
    title: 'Facturación Electrónica Colombia',
    description:
      'Sistema de facturación electrónica conforme a normativa DIAN. Generación de facturas, notas crédito, reportes fiscales y cumplimiento de obligaciones tributarias colombianas.',
    technologies: ['Python', 'Flask', 'MySQL', 'XML', 'DIAN API'],
    status: 'production',
  },
  {
    id: 'proj-university-1',
    title: 'Proyectos Universitarios - Python',
    description:
      'Diversos proyectos desarrollados durante la carrera de Ingeniería de Software. Aplicaciones con Python enfocadas en algoritmos, estructuras de datos y programación orientada a objetos.',
    technologies: ['Python', 'Jupyter', 'NumPy', 'Pandas'],
    status: 'archived',
  },
  {
    id: 'proj-university-2',
    title: 'Proyectos Universitarios - Java Spring Boot',
    description:
      'Aplicaciones backend desarrolladas con Java y Spring Boot. Incluye APIs REST, manejo de bases de datos y patrones de diseño empresarial.',
    technologies: ['Java', 'Spring Boot', 'Maven', 'PostgreSQL', 'REST API'],
    status: 'archived',
  },
  {
    id: 'proj-university-3',
    title: 'Proyectos Universitarios - JavaScript/React',
    description:
      'Aplicaciones frontend y full-stack desarrolladas con JavaScript y React. Componentes reutilizables, manejo de estado y consumo de APIs.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    status: 'archived',
  },
];

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projectsList;
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projectsList.filter((project) => project.featured);
}

/**
 * Get projects by status
 */
export function getProjectsByStatus(status: string): Project[] {
  return projectsList.filter((project) => project.status === status);
}

/**
 * Get projects by technology
 */
export function getProjectsByTechnology(tech: string): Project[] {
  return projectsList.filter((project) =>
    project.technologies.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
  );
}

/**
 * Get project by id
 */
export function getProjectById(id: string): Project | undefined {
  return projectsList.find((project) => project.id === id);
}
