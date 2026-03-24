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
        'relative p-6 md:p-7 rounded-lg border transition-all duration-300 backdrop-blur-sm',
        isActive
          ? 'dark:border-[#4A6FA8] dark:bg-[#141B2D]/80 dark:shadow-lg dark:shadow-[#4A6FA8]/20 light:border-[#4A6FA8] light:bg-[#F0F4F8] light:shadow-lg light:shadow-[#4A6FA8]/10'
          : 'dark:border-[#1F2E4D] dark:bg-[#0F1A2E]/40 dark:hover:border-[#4A6FA8]/50 dark:hover:bg-[#141B2D]/60 light:border-[#D1D5DB] light:bg-white light:hover:border-[#4A6FA8] light:hover:bg-[#F9FAFB]',
        className
      )}
    >
      {/* Year/Period Badge */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h4 className="text-base md:text-lg font-bold dark:text-[#F5F7FA] light:text-[#0F1A2E]">
            {item.title}
          </h4>
          <p className="text-sm dark:text-[#C5CED9] light:text-[#4B5563] font-medium mt-1">
            {item.institution}
          </p>
        </div>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap dark:bg-[#4A6FA8]/10 dark:text-[#4A6FA8] light:bg-[#4A6FA8]/10 light:text-[#2E446B]">
          {item.period}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm dark:text-[#8B95A8] light:text-[#6B7280] leading-relaxed mb-3">
        {item.description}
      </p>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mt-4 pt-3 border-t dark:border-[#1F2E4D] light:border-[#E5E7EB]"
        >
          <span className="w-2 h-2 dark:bg-[#10B981] light:bg-[#10B981] rounded-full animate-pulse" />
          <span className="text-xs font-semibold dark:text-[#10B981] light:text-[#059669]">
            Posición Actual
          </span>
        </motion.div>
      )}

      {/* Accent line on hover */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r dark:from-[#4A6FA8] dark:via-[#F59E0B] dark:to-transparent light:from-[#4A6FA8] light:via-[#F59E0B] light:to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
