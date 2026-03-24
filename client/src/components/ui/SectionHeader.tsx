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
 * Reusable section header component with professional styling
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
        <p className="text-sm font-mono text-primary dark:text-[#4A6FA8] mb-2 uppercase tracking-wider">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground dark:text-[#F5F7FA] mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground dark:text-[#8B95A8] max-w-2xl mx-auto mb-6">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
