'use client';

import { cn } from '@/lib/utils/cn';
import { type ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'gold' | 'outline';
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
        'inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-colors',
        variant === 'default' &&
          'bg-navy-panel text-cream border border-steel-dark',
        variant === 'gold' &&
          'bg-gold-default text-navy-default border border-gold-light',
        variant === 'outline' &&
          'bg-transparent text-gold-default border border-gold-default',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </div>
  );
}
