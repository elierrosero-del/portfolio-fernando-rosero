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
          ? 'border-[#4A6FA8] bg-[#1A2340] shadow-lg shadow-[#4A6FA8]/20'
          : 'border-[#1F2E4D] bg-[#0F1A2E]/50 hover:border-[#3D5A8A]',
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
      <p className="text-sm text-[#8B95A8] mb-6 flex-grow leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#1F2E4D]">
        <div className="w-10 h-10 rounded-full bg-[#4A6FA8]/20 border border-[#4A6FA8] flex items-center justify-center">
          <span className="text-xs font-semibold text-[#4A6FA8]">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#F5F7FA]">{testimonial.name}</p>
          <p className="text-xs text-[#8B95A8]">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
