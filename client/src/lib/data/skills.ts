import type { Skill, SkillCategory } from '@/types';

const skillsData: Skill[] = [
  // Technical Skills
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 95,
    category: 'technical',
    icon: 'Code2',
  },
  {
    id: 'react',
    name: 'React & Next.js',
    level: 90,
    category: 'technical',
    icon: 'Zap',
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    level: 85,
    category: 'technical',
    icon: 'Server',
  },
  {
    id: 'database',
    name: 'SQL & Databases',
    level: 88,
    category: 'technical',
    icon: 'Database',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 92,
    category: 'technical',
    icon: 'Palette',
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    level: 80,
    category: 'technical',
    icon: 'Cloud',
  },
  // Financial Skills
  {
    id: 'accounting',
    name: 'Contabilidad General',
    level: 90,
    category: 'financial',
    icon: 'BarChart3',
  },
  {
    id: 'financial-analysis',
    name: 'Análisis Financiero',
    level: 88,
    category: 'financial',
    icon: 'TrendingUp',
  },
  {
    id: 'auditing',
    name: 'Auditoría',
    level: 85,
    category: 'financial',
    icon: 'CheckCircle',
  },
  {
    id: 'tax',
    name: 'Tributaria',
    level: 82,
    category: 'financial',
    icon: 'FileText',
  },
];

/**
 * Get all skills
 */
export function getAllSkills(): Skill[] {
  return skillsData;
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skillsData.filter((skill) => skill.category === category);
}

/**
 * Get skill by ID
 */
export function getSkillById(id: string): Skill | undefined {
  return skillsData.find((skill) => skill.id === id);
}
