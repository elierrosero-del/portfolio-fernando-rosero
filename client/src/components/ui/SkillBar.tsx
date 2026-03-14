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
        <span className="text-sm font-medium dark:text-[#F5F7FA] light:text-[#0F1A2E]">{name}</span>
        <span className="text-xs font-mono dark:text-[#4A6FA8] light:text-[#2E446B]">{level}%</span>
      </div>
      <div className="h-2 dark:bg-[#141B2D] light:bg-[#E5E7EB] rounded-full overflow-hidden border dark:border-[#1F2E4D] light:border-[#D1D5DB]">
        <motion.div
          variants={skillBarFill(level)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="h-full dark:skill-fill light:bg-gradient-to-r light:from-[#4A6FA8] light:to-[#2DD4BF] rounded-full"
        />
      </div>
    </div>
  );
}
