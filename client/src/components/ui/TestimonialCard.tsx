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
 * Testimonial card component with professional styling
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
        'p-6 rounded-md border transition-all duration-300 h-full flex flex-col',
        testimonial.featured
          ? 'border-primary bg-card dark:border-[#4A6FA8] dark:bg-[#1A2340] dark:shadow-lg dark:shadow-[#4A6FA8]/20 shadow-lg shadow-primary/10'
          : 'border-border bg-background dark:border-[#1F2E4D] dark:bg-[#0F1A2E]/50 dark:hover:border-[#3D5A8A] hover:border-primary/50',
        className
      )}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-accent text-accent dark:fill-[#F59E0B] dark:text-[#F59E0B]"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-muted-foreground dark:text-[#8B95A8] mb-6 flex-grow leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border dark:border-[#1F2E4D]">
        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary dark:bg-[#4A6FA8]/20 dark:border-[#4A6FA8] flex items-center justify-center">
          <span className="text-xs font-semibold text-primary dark:text-[#4A6FA8]">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground dark:text-[#F5F7FA]">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground dark:text-[#8B95A8]">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
