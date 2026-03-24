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
 * Badge component for portfolio with professional styling
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
    variantClasses = 'bg-card text-card-foreground border-border hover:bg-card/80 dark:bg-[#141B2D] dark:text-[#C5CED9] dark:border-[#1F2E4D] dark:hover:bg-[#1A2340]';
  } else if (variant === 'primary') {
    variantClasses = 'bg-primary text-primary-foreground border-primary shadow-sm hover:bg-primary/90 dark:bg-[#4A6FA8] dark:text-[#F5F7FA] dark:border-[#3D5A8A] dark:hover:bg-primary-700';
  } else if (variant === 'outline') {
    variantClasses = 'bg-transparent text-primary border-primary hover:bg-primary/10 dark:bg-transparent dark:text-[#4A6FA8] dark:border-[#4A6FA8] dark:hover:bg-[#0F1A2E]/30';
  } else if (variant === 'gold') {
    variantClasses = 'bg-accent text-accent-foreground border-accent shadow-sm hover:bg-accent/90 dark:bg-[#F59E0B] dark:text-[#111827] dark:border-[#F59E0B] dark:hover:opacity-90';
  }

  return (
    <div className={cn(baseClasses, variantClasses, className)}>
      {icon && <span className="flex-shrink-0 text-base">{icon}</span>}
      {children}
    </div>
  );
}
