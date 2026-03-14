/**
 * Skill category type
 */
export type SkillCategory = 'technical' | 'financial';

/**
 * Skill interface
 */
export interface Skill {
  id: string;
  name: string;
  level: number; // 0–100
  category: SkillCategory;
  icon?: string;
}
