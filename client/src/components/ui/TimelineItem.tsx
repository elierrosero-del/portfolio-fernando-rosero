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
        'relative p-6 rounded-md border transition-all duration-300',
        isActive
          ? 'dark:border-[#4A6FA8] dark:bg-[#1A2340] dark:shadow-lg dark:shadow-[#4A6FA8]/20 light:border-[#4A6FA8] light:bg-[#E5E7EB] light:shadow-lg light:shadow-[#4A6FA8]/10'
          : 'dark:border-[#1F2E4D] dark:bg-[#0F1A2E]/50 dark:hover:border-[#3D5A8A] light:border-[#D1D5DB] light:bg-white light:hover:border-[#4A6FA8]',
        className
      )}
    >
      {/* Dot indicator */}
      <div
        className={cn(
          'absolute w-3 h-3 rounded-full -translate-x-[calc(100%+12px)] top-8',
          isActive
            ? 'dark:bg-[#4A6FA8] dark:shadow-lg dark:shadow-[#4A6FA8]/50 light:bg-[#4A6FA8]'
            : 'border-2 dark:border-[#1F2E4D] dark:bg-[#0A0E1A] light:border-[#D1D5DB] light:bg-white'
        )}
      />

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold dark:text-[#F5F7FA] light:text-[#0F1A2E]">{item.title}</h4>
            <p className="text-sm dark:text-[#8B95A8] light:text-[#4B5563]">{item.institution}</p>
          </div>
          <span className="text-xs font-mono dark:text-[#4A6FA8] light:text-[#2E446B] whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-sm dark:text-[#8B95A8] light:text-[#4B5563] leading-relaxed">
          {item.description}
        </p>
        {item.isActive && (
          <div className="inline-flex items-center gap-2 mt-3">
            <span className="w-2 h-2 dark:bg-[#4A6FA8] light:bg-[#4A6FA8] rounded-full animate-pulse-dot" />
            <span className="text-xs font-mono dark:text-[#4A6FA8] light:text-[#2E446B]">Actual</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
