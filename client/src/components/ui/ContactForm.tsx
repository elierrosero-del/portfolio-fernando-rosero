'use client';

import { contactSchema, type ContactFormData } from '@/lib/schemas/contact.schema';
import { cn } from '@/lib/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './button';

export interface ContactFormProps {
  className?: string;
}

/**
 * Contact form component with validation
 */
export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement server action to send email via Resend
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-4', className)}
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-cream mb-2">
          Nombre
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          placeholder="Tu nombre"
          className={cn(
            'w-full px-4 py-2 bg-input border rounded text-cream placeholder-steel-dark transition-colors focus:outline-none focus:border-gold-default',
            errors.name && 'border-destructive'
          )}
        />
        {errors.name && (
          <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-cream mb-2">
          Email
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          placeholder="tu@email.com"
          className={cn(
            'w-full px-4 py-2 bg-input border rounded text-cream placeholder-steel-dark transition-colors focus:outline-none focus:border-gold-default',
            errors.email && 'border-destructive'
          )}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-cream mb-2">
          Tipo de Proyecto
        </label>
        <select
          {...register('projectType')}
          id="projectType"
          className={cn(
            'w-full px-4 py-2 bg-input border rounded text-cream transition-colors focus:outline-none focus:border-gold-default',
            errors.projectType && 'border-destructive'
          )}
        >
          <option value="">Selecciona un tipo</option>
          <option value="web">Desarrollo Web</option>
          <option value="mobile">App Móvil</option>
          <option value="consulting">Consultoría</option>
          <option value="other">Otro</option>
        </select>
        {errors.projectType && (
          <p className="text-xs text-destructive mt-1">{errors.projectType.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-cream mb-2">
          Asunto
        </label>
        <input
          {...register('subject')}
          id="subject"
          type="text"
          placeholder="Asunto del mensaje"
          className={cn(
            'w-full px-4 py-2 bg-input border rounded text-cream placeholder-steel-dark transition-colors focus:outline-none focus:border-gold-default',
            errors.subject && 'border-destructive'
          )}
        />
        {errors.subject && (
          <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cream mb-2">
          Mensaje
        </label>
        <textarea
          {...register('message')}
          id="message"
          placeholder="Tu mensaje aquí..."
          rows={5}
          className={cn(
            'w-full px-4 py-2 bg-input border rounded text-cream placeholder-steel-dark transition-colors focus:outline-none focus:border-gold-default resize-none',
            errors.message && 'border-destructive'
          )}
        />
        {errors.message && (
          <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-500/20 border border-green-500 rounded text-green-400 text-sm">
          ¡Mensaje enviado exitosamente!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-3 bg-destructive/20 border border-destructive rounded text-destructive text-sm">
          Error al enviar el mensaje. Intenta de nuevo.
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </form>
  );
}
