'use client';

import { useMousePosition } from '@/lib/hooks/useMousePosition';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Custom cursor component with professional blue accent
 */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const { x, y } = useMousePosition();

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#4A6FA8] rounded-full pointer-events-none z-[9999]"
        animate={{
          x: x - 16,
          y: y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed w-2 h-2 bg-[#4A6FA8] rounded-full pointer-events-none z-[9999]"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
        }}
      />
    </>
  );
}
