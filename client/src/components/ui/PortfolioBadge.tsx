'use client';

import { cn } from '@/lib/utils/cn';
import { type ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'outline' | 'gold';
  className?: string;
  icon?: ReactNode;
}

/**
 * Badge component for portfolio
 */
export function PortfolioBadge({
  children,
  variant = 'default',
  className,
  icon,
}: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
        variant === 'default' &&
          'bg-[#141B2D] text-[#C5CED9] border border-[#1F2E4D]',
        variant === 'primary' &&
          'bg-[#4A6FA8] text-[#F5F7FA] border border-[#3D5A8A] shadow-sm',
        variant === 'outline' &&
          'bg-transparent text-[#4A6FA8] border border-[#4A6FA8] hover:bg-[#0F1A2E]/30',
        variant === 'gold' &&
          'bg-[#F59E0B] text-[#111827] border border-[#F59E0B] shadow-sm',
        className
      )}
    >
      {icon && <span className="flex-shrink-0 text-base">{icon}</span>}
      {children}
    </div>
  );
}
