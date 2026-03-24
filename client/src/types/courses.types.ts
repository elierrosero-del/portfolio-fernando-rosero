/**
 * Courses and certifications type definitions
 */

export interface Course {
  id: string;
  title: string;
  provider: string;
  description?: string;
  year?: number;
  certificateUrl?: string;
  skills?: string[];
}
