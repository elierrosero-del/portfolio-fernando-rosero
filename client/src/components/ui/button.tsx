'use client';

import { cn } from '@/lib/utils/cn';
import { forwardRef, type ReactNode } from 'react';

/**
 * Button variants for compatibility
 */
export const buttonVariants = (options?: { size?: string; variant?: string }) => {
  return '';
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'default';
  children?: ReactNode;
}

/**
 * Custom Button component with professional styling
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
        variant = 'primary' as const,
        size = 'md' as const,
    className,
    children,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:ring-accent-blue disabled:opacity-50 disabled:cursor-not-allowed rounded-md',
        // Size variants
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',
        size === 'icon' && 'w-10 h-10',
        size === 'default' && 'px-4 py-2',
        // Color variants
        variant === 'primary' &&
          'bg-accent-blue text-text-primary hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md',
        variant === 'secondary' &&
          'border border-primary-600 text-accent-blue hover:bg-primary-900/50 active:bg-primary-800 transition-colors',
        variant === 'ghost' &&
          'text-text-primary hover:bg-bg-card-hover active:bg-primary-800',
        variant === 'outline' &&
          'border border-accent-blue text-accent-blue hover:bg-primary-900/50 active:bg-primary-800',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
