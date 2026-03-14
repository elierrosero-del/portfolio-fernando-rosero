'use client';

import {
  getAllExperience,
  getExperienceByType,
} from '@/lib/data/experience';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineItem } from '../ui/TimelineItem';

/**
 * Experience section component
 */
export function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'academic' | 'professional'>('all');

  const academicExperience = getExperienceByType('academic');
  const professionalExperience = getExperienceByType('professional');
  const allExperience = getAllExperience();

  const displayedExperience =
    filter === 'academic'
      ? academicExperience
      : filter === 'professional'
        ? professionalExperience
        : allExperience;

  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative overflow-hidden bg-navy-mid"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 glow-gold-tr pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeader
          eyebrow="Mi Recorrido"
          title="Experiencia"
          description="Educación y experiencia profesional acumulada"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Filter Tabs */}
          <motion.div variants={fadeUp} className="flex gap-3 justify-center flex-wrap">
            {[
              { label: 'Todos', value: 'all' as const },
              { label: 'Académica', value: 'academic' as const },
              { label: 'Profesional', value: 'professional' as const },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                  filter === tab.value
                    ? 'bg-gold-default text-navy-default'
                    : 'bg-navy-panel text-cream hover:border-gold-default border border-steel-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            className="space-y-6 md:space-y-8"
          >
            {displayedExperience.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="md:flex md:gap-8"
              >
                {/* Timeline line and dot (desktop) */}
                <div className="hidden md:flex flex-col items-center w-20 flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.isActive
                        ? 'bg-gold-default border-gold-default shadow-lg shadow-gold-default/50'
                        : 'border-steel-dark bg-navy-default'
                    }`}
                  />
                  {idx !== displayedExperience.length - 1 && (
                    <div className="w-1 flex-grow bg-gradient-to-b from-gold-default to-transparent mt-4 mb-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow md:mt-0">
                  <TimelineItem item={item} isActive={item.isActive} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
