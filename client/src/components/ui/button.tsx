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
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent';
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
        'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-md',
        // Size variants
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',
        size === 'icon' && 'w-10 h-10',
        size === 'default' && 'px-4 py-2',
        // Color variants
        variant === 'primary' &&
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm hover:shadow-md dark:bg-accent-blue dark:hover:bg-primary-700 dark:active:bg-primary-800',
        variant === 'secondary' &&
          'border border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 dark:border-primary-600 dark:text-accent-blue dark:hover:bg-primary-900/50 dark:active:bg-primary-800',
        variant === 'ghost' &&
          'text-foreground hover:bg-muted active:bg-muted/80 dark:text-text-primary dark:hover:bg-bg-card-hover dark:active:bg-primary-800',
        variant === 'outline' &&
          'border border-primary text-primary hover:bg-primary/10 active:bg-primary/20 dark:border-accent-blue dark:text-accent-blue dark:hover:bg-primary-900/50 dark:active:bg-primary-800',
        variant === 'accent' &&
          'bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 shadow-sm hover:shadow-md dark:bg-[#F59E0B] dark:hover:bg-[#F59E0B]/90 dark:active:bg-[#F59E0B]/80 dark:text-[#0F1A2E]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
