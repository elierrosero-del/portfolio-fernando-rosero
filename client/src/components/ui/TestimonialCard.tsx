'use client';

import { scaleOnHover } from '@/lib/utils/animations';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { type Testimonial } from '@/types';

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * Testimonial card component
 */
export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={scaleOnHover}
      whileHover="whileHover"
      className={cn(
        'p-6 rounded border transition-all duration-300 h-full flex flex-col',
        testimonial.featured
          ? 'border-gold-default bg-navy-panel/50 shadow-lg shadow-gold-default/20'
          : 'border-steel-dark bg-navy-mid/30 hover:border-steel-light',
        className
      )}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-gold-default text-gold-default"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-steel-light mb-6 flex-grow leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-steel-dark">
        <div className="w-10 h-10 rounded-full bg-gold-default/20 border border-gold-default flex items-center justify-center">
          <span className="text-xs font-semibold text-gold-default">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-cream">{testimonial.name}</p>
          <p className="text-xs text-steel-light">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
