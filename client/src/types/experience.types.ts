/**
 * Experience type
 */
export type ExperienceType = 'academic' | 'professional';

/**
 * Experience item interface
 */
export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  institution: string;
  period: string;
  description: string;
  isActive: boolean;
}
