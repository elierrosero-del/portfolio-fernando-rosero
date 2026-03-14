/**
 * Testimonial interface
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
  initials: string;
  featured: boolean;
}
