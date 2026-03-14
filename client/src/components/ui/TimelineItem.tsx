'use client';

import { scaleOnHover } from '@/lib/utils/animations';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';
import { type ExperienceItem } from '@/types';

export interface TimelineItemProps {
  item: ExperienceItem;
  isActive?: boolean;
  position?: 'left' | 'right';
  className?: string;
}

/**
 * Timeline item component for experience section
 */
export function TimelineItem({
  item,
  isActive = false,
  position = 'left',
  className,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={scaleOnHover}
      whileHover="whileHover"
      className={cn(
        'relative p-6 rounded border transition-all duration-300',
        isActive
          ? 'border-gold-default bg-navy-panel/50 shadow-lg shadow-gold-default/20'
          : 'border-steel-dark bg-navy-mid/30 hover:border-steel-light',
        className
      )}
    >
      {/* Dot indicator */}
      <div
        className={cn(
          'absolute w-3 h-3 rounded-full -translate-x-[calc(100%+12px)] top-8',
          isActive
            ? 'bg-gold-default shadow-lg shadow-gold-default/50'
            : 'border-2 border-steel-dark bg-navy-default'
        )}
      />

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-cream">{item.title}</h4>
            <p className="text-sm text-steel-light">{item.institution}</p>
          </div>
          <span className="text-xs font-mono text-gold-default whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-steel-light leading-relaxed">
          {item.description}
        </p>
        {item.isActive && (
          <div className="inline-flex items-center gap-2 mt-3">
            <span className="w-2 h-2 bg-gold-default rounded-full animate-pulse-dot" />
            <span className="text-xs font-mono text-gold-default">Actual</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
