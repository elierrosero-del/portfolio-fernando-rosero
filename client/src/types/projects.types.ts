/**
 * Software projects type definitions
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'production' | 'testing' | 'development' | 'archived';
  icon?: string;
  startDate?: number;
  endDate?: number;
  link?: string;
  repository?: string;
  image?: string;
  featured?: boolean;
  category?: 'accounting' | 'development' | 'full-stack' | 'university';
}

export type ProjectStatus = 'production' | 'testing' | 'development' | 'archived';
export type ProjectCategory = 'accounting' | 'development' | 'full-stack' | 'university';
