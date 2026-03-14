import { type Variants } from 'framer-motion';

/**
 * Fade up animation variant
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

/**
 * Stagger container for animating children sequentially
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Skill bar fill animation - animates width from 0 to percentage
 */
export const skillBarFill = (pct: number): Variants => ({
  hidden: { width: '0%' },
  visible: {
    width: `${pct}%`,
    transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 },
  },
});

/**
 * Scale on hover animation
 */
export const scaleOnHover: Variants = {
  whileHover: {
    y: -2,
    transition: { duration: 0.2 },
  },
};

/**
 * Avatar float animation
 */
export const avatarFloat: Variants = {
  animate: {
    y: [0, -14, 0],
  },
};

/**
 * Avatar float transition
 */
export const avatarFloatTransition = {
  duration: 5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};
