'use client';

import { skillBarFill } from '@/lib/utils/animations';
import { cn } from '@/lib/utils/cn';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

/**
 * Animated skill bar component
 */
export function SkillBar({ name, level, className }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={cn('mb-6', className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-cream">{name}</span>
        <span className="text-xs font-mono text-gold-default">{level}%</span>
      </div>
      <div className="h-2 bg-navy-panel rounded-full overflow-hidden border border-steel-dark">
        <motion.div
          variants={skillBarFill(level)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="h-full skill-fill rounded-full"
        />
      </div>
    </div>
  );
}
