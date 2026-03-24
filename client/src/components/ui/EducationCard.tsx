'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import type { Education } from '@/types/education.types';

interface EducationCardProps {
  education: Education;
  index?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function EducationCard({ education, index = 0 }: EducationCardProps) {
  const yearRange = education.endYear === 'Actual' 
    ? `${education.startYear} - Actual`
    : `${education.startYear} - ${education.endYear}`;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-bg-card dark:bg-bg-card-dark border border-border dark:border-border-dark rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-all duration-300 hover:border-primary/50 dark:hover:border-accent-blue/50">
        {/* Header with icon and title */}
        <div className="flex items-start gap-4 mb-3">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-accent-blue/20 dark:to-accent-amber/20 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary dark:text-accent-blue" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground dark:text-text-primary mb-1">
              {education.title}
            </h3>
            <p className="text-sm text-secondary dark:text-text-secondary font-medium">
              {education.institution}
            </p>
          </div>
        </div>

        {/* Year range */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-1 bg-accent dark:bg-accent-amber rounded-full" />
          <span className="text-sm text-tertiary dark:text-text-tertiary font-medium">
            {yearRange}
          </span>
        </div>

        {/* Description */}
        {education.description && (
          <p className="text-sm text-tertiary dark:text-text-tertiary leading-relaxed">
            {education.description}
          </p>
        )}

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent dark:from-accent-blue dark:via-accent-amber dark:to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
