/**
 * Software projects type definitions
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'production' | 'testing' | 'development' | 'archived';
  startDate?: number;
  endDate?: number;
  link?: string;
  repository?: string;
  image?: string;
  featured?: boolean;
}

export type ProjectStatus = 'production' | 'testing' | 'development' | 'archived';
