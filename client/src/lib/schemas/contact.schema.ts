import { z } from 'zod';

/**
 * Zod schema for contact form validation
 */
export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  projectType: z.string().min(3, 'Por favor selecciona un tipo de proyecto'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
});

/**
 * Type inferred from schema
 */
export type ContactFormData = z.infer<typeof contactSchema>;
