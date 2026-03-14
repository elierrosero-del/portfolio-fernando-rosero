'use client';

import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable section header component
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className={cn('text-center mb-12', className)}
    >
      {eyebrow && (
        <p className="text-sm font-mono text-gold-default mb-2 uppercase tracking-wider">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-steel-light max-w-2xl mx-auto mb-6">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
