'use client';

import { avatarFloat, avatarFloatTransition } from '@/lib/utils/animations';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';

export interface AvatarPlaceholderProps {
  className?: string;
  showScan?: boolean;
}

/**
 * Avatar placeholder component with floating animation
 */
export function AvatarPlaceholder({
  className,
  showScan = true,
}: AvatarPlaceholderProps) {
  return (
    <motion.div
      variants={avatarFloat}
      animate="animate"
      transition={avatarFloatTransition}
      className={cn(
        'relative w-full max-w-xs mx-auto aspect-[3/5] rounded border-2 border-dashed border-gold-default bg-gradient-to-br from-navy-mid to-navy-panel overflow-hidden',
        className
      )}
    >
      {/* Background glow */}
      <div className="absolute inset-0 glow-gold-c" />

      {/* Placeholder figure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 200 300"
          className="w-3/4 h-3/4 text-gold-default/30"
          fill="currentColor"
        >
          {/* Head */}
          <circle cx="100" cy="60" r="30" />
          {/* Body */}
          <path d="M 100 95 Q 70 120 70 160 L 130 160 Q 130 120 100 95 Z" />
          {/* Arms */}
          <rect x="40" y="110" width="30" height="15" rx="7" />
          <rect x="130" y="110" width="30" height="15" rx="7" />
        </svg>
      </div>

      {/* Scan line animation */}
      {showScan && (
        <motion.div
          className="absolute inset-x-0 h-1 bg-gradient-to-b from-gold-default/0 via-gold-default/50 to-gold-default/0 animate-scan"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Border glow */}
      <div className="absolute inset-0 rounded border-2 border-gold-default/20 pointer-events-none" />
    </motion.div>
  );
}
