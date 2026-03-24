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
 * Timeline item component for experience section with professional styling
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
        'relative p-6 rounded-md border transition-all duration-300',
        isActive
          ? 'border-primary bg-card dark:border-[#4A6FA8] dark:bg-[#1A2340] dark:shadow-lg dark:shadow-[#4A6FA8]/20 shadow-lg shadow-primary/10'
          : 'border-border bg-background dark:border-[#1F2E4D] dark:bg-[#0F1A2E]/50 dark:hover:border-[#3D5A8A] hover:border-primary/50',
        className
      )}
    >
      {/* Dot indicator */}
      <div
        className={cn(
          'absolute w-3 h-3 rounded-full -translate-x-[calc(100%+12px)] top-8',
          isActive
            ? 'bg-primary dark:bg-[#4A6FA8] dark:shadow-lg dark:shadow-[#4A6FA8]/50 shadow-lg shadow-primary/50'
            : 'border-2 border-border bg-background dark:border-[#1F2E4D] dark:bg-[#0A0E1A]'
        )}
      />

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-foreground dark:text-[#F5F7FA]">{item.title}</h4>
            <p className="text-sm text-muted-foreground dark:text-[#8B95A8]">{item.institution}</p>
          </div>
          <span className="text-xs font-mono text-primary dark:text-[#4A6FA8] whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-muted-foreground dark:text-[#8B95A8] leading-relaxed">
          {item.description}
        </p>
        {item.isActive && (
          <div className="inline-flex items-center gap-2 mt-3">
            <span className="w-2 h-2 bg-primary dark:bg-[#4A6FA8] rounded-full animate-pulse-dot" />
            <span className="text-xs font-mono text-primary dark:text-[#4A6FA8]">Actual</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
