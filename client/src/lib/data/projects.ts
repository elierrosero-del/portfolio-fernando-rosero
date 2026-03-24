import type { Project } from '@/types/projects.types';

/**
 * Software development projects for Elier Fernando Rosero Bravo
 */
const projectsList: Project[] = [
  {
    id: 'proj-parking',
    title: 'Sistema de Gestión de Parqueaderos',
    description:
      'Plataforma completa para administración de parqueaderos con control de ingresos, tarifas y reportes en tiempo real. Incluye módulo de estadísticas y gestión de espacios.',
    technologies: ['Django', 'Python', 'Tailwind CSS', 'PostgreSQL'],
    status: 'production',
    icon: '🅿️',
    category: 'full-stack',
    featured: true,
  },
  {
    id: 'proj-billing',
    title: 'Facturación Electrónica Colombia',
    description:
      'Sistema de facturación electrónica cumpliendo normativa DIAN, con generación automática de documentos tributarios, reportes fiscales y cumplimiento de obligaciones.',
    technologies: ['Python', 'Flask', 'MySQL', 'DIAN API'],
    status: 'production',
    icon: '🧾',
    category: 'accounting',
    featured: true,
  },
  {
    id: 'proj-restaurant',
    title: 'Gestión de Restaurantes',
    description:
      'Aplicación para manejo de pedidos, inventario y facturación en restaurantes con interfaz intuitiva. Gestión de mesas, menú dinámico y reportes de ventas.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'EJS'],
    status: 'testing',
    icon: '🍽️',
    category: 'full-stack',
    featured: true,
  },
  {
    id: 'proj-inventory',
    title: 'Control de Inventarios y Ventas',
    description:
      'Sistema integral para gestión de inventarios, ventas y reportes financieros con dashboard interactivo. Módulo de proveedores, auditoría y análisis de datos.',
    technologies: ['Laravel 12', 'Vue.js', 'PostgreSQL', 'PHP'],
    status: 'testing',
    icon: '📦',
    category: 'full-stack',
    featured: true,
  },
  {
    id: 'proj-university',
    title: 'Proyectos Universitarios',
    description:
      'Desarrollo de múltiples proyectos en distintos lenguajes y tecnologías durante la carrera de Ingeniería de Software. Python, Java con Spring Boot, JavaScript, React y más.',
    technologies: ['Python', 'Java', 'Spring Boot', 'JavaScript', 'React'],
    status: 'archived',
    icon: '🎓',
    category: 'university',
  },
];

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projectsList;
}

/**
 * Get featured projects (main projects to display)
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
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projectsList.filter((project) => project.category === category);
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
