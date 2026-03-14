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
  const baseClasses = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors border';
  
  let variantClasses = '';
  
  if (variant === 'default') {
    variantClasses = 'dark:bg-[#141B2D] dark:text-[#C5CED9] dark:border-[#1F2E4D] light:bg-[#E5E7EB] light:text-[#0F1A2E] light:border-[#D1D5DB]';
  } else if (variant === 'primary') {
    variantClasses = 'dark:bg-[#4A6FA8] dark:text-[#F5F7FA] dark:border-[#3D5A8A] light:bg-[#4A6FA8] light:text-white light:border-[#3D5A8A] shadow-sm';
  } else if (variant === 'outline') {
    variantClasses = 'dark:bg-transparent dark:text-[#4A6FA8] dark:border-[#4A6FA8] dark:hover:bg-[#0F1A2E]/30 light:bg-transparent light:text-[#2E446B] light:border-[#4A6FA8] light:hover:bg-[#4A6FA8]/10';
  } else if (variant === 'gold') {
    variantClasses = 'dark:bg-[#F59E0B] dark:text-[#111827] dark:border-[#F59E0B] light:bg-[#D97706] light:text-white light:border-[#D97706] shadow-sm';
  }

  return (
    <div className={cn(baseClasses, variantClasses, className)}>
      {icon && <span className="flex-shrink-0 text-base">{icon}</span>}
      {children}
    </div>
  );
}
