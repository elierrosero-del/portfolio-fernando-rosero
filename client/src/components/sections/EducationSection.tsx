'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EducationCard } from '@/components/ui/EducationCard';
import { getAllEducation } from '@/lib/data/education';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function EducationSection() {
  const educationList = getAllEducation();

  return (
    <section
      id="education"
      className="py-20 md:py-32 bg-background dark:bg-bg-dark transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <SectionHeader
          title="Formación Académica"
          description="Mi trayecto educativo y títulos profesionales"
          className="text-left"
        />

        {/* Education Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {educationList.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </motion.div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border dark:border-border-dark"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Timeline start */}
            <div className="text-center md:text-left">
              <p className="text-sm text-secondary dark:text-text-secondary font-medium mb-1">
                Inicio de formación
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground dark:text-text-primary">
                2008
              </p>
            </div>

            {/* Timeline progress */}
            <div className="hidden md:flex flex-1 items-center gap-4">
              <div className="flex-1 h-1 bg-gradient-to-r from-primary via-accent to-primary dark:from-accent-blue dark:via-accent-amber dark:to-accent-blue rounded-full" />
              <div className="text-center">
                <p className="text-xs text-tertiary dark:text-text-tertiary font-medium uppercase tracking-wider">
                  16 años de
                </p>
                <p className="text-xs text-tertiary dark:text-text-tertiary font-medium uppercase tracking-wider">
                  experiencia educativa
                </p>
              </div>
              <div className="flex-1 h-1 bg-gradient-to-r from-primary via-accent to-primary dark:from-accent-blue dark:via-accent-amber dark:to-accent-blue rounded-full" />
            </div>

            {/* Timeline end */}
            <div className="text-center md:text-right">
              <p className="text-sm text-secondary dark:text-text-secondary font-medium mb-1">
                Formación actual
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground dark:text-text-primary">
                2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
