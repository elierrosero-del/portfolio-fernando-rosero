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
  variant?: 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'default';
  children?: ReactNode;
}

/**
 * Custom Button component with portfolio styling
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'gold',
    size = 'md',
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
        'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-default focus-visible:ring-gold-default disabled:opacity-50 disabled:cursor-not-allowed',
        // Size variants
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',
        size === 'icon' && 'w-10 h-10',
        size === 'default' && 'px-4 py-2',
        // Color variants
        variant === 'gold' &&
          'bg-gold-default text-navy-default hover:bg-gold-light active:bg-gold-default',
        variant === 'outline' &&
          'border border-gold-default text-gold-default hover:bg-gold-default hover:text-navy-default active:bg-gold-light',
        variant === 'ghost' &&
          'text-cream hover:bg-navy-mid active:bg-navy-panel',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
