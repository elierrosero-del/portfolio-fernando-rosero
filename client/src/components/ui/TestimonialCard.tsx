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
        'p-6 rounded-md border transition-all duration-300 h-full flex flex-col',
        testimonial.featured
          ? 'dark:border-[#4A6FA8] dark:bg-[#1A2340] dark:shadow-lg dark:shadow-[#4A6FA8]/20 light:border-[#4A6FA8] light:bg-[#E5E7EB] light:shadow-lg light:shadow-[#4A6FA8]/10'
          : 'dark:border-[#1F2E4D] dark:bg-[#0F1A2E]/50 dark:hover:border-[#3D5A8A] light:border-[#D1D5DB] light:bg-white light:hover:border-[#4A6FA8]',
        className
      )}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-[#F59E0B] text-[#F59E0B]"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm dark:text-[#8B95A8] light:text-[#4B5563] mb-6 flex-grow leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t dark:border-[#1F2E4D] light:border-[#D1D5DB]">
        <div className="w-10 h-10 rounded-full dark:bg-[#4A6FA8]/20 dark:border-[#4A6FA8] light:bg-[#4A6FA8]/10 light:border-[#4A6FA8] border flex items-center justify-center">
          <span className="text-xs font-semibold dark:text-[#4A6FA8] light:text-[#0F1A2E]">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold dark:text-[#F5F7FA] light:text-[#0F1A2E]">{testimonial.name}</p>
          <p className="text-xs dark:text-[#8B95A8] light:text-[#4B5563]">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
