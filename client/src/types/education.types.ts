/**
 * Education type definitions for academic titles
 */

export interface Education {
  id: string;
  title: string;
  institution: string;
  startYear: number;
  endYear: number | 'Actual';
  description?: string;
  icon?: string;
}

export type EducationLevel = 'technical' | 'undergraduate' | 'graduate' | 'student';
