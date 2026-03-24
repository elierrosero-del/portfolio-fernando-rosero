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
 * Experience section component with improved timeline
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
      className="py-20 md:py-32 relative overflow-hidden dark:bg-[#141B2D] light:bg-[#F9FAFB]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 glow-gold-tr pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="text-xs font-semibold dark:text-[#8B95A8] light:text-[#6B7280] tracking-widest uppercase mb-4">
              Trayectoria
            </p>
            <h2 className="text-4xl md:text-5xl font-bold dark:text-[#F5F7FA] light:text-[#0F1A2E] leading-tight">
              Experiencia & Formación
            </h2>
          </div>

          {/* Filter Tabs */}
          <motion.div variants={fadeUp} className="flex gap-0 border dark:border-[#1F2E4D] light:border-[#D1D5DB] rounded overflow-hidden">
            {[
              { label: 'Académica', value: 'academic' as const },
              { label: 'Laboral', value: 'professional' as const },
              { label: 'Todos', value: 'all' as const },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                  filter === tab.value
                    ? 'dark:bg-[#0F1A2E] dark:text-white light:bg-[#0F1A2E] light:text-white'
                    : 'dark:bg-transparent dark:text-[#C5CED9] light:bg-transparent light:text-[#4B5563] dark:hover:text-[#F5F7FA] light:hover:text-[#0F1A2E]'
                } ${tab.value !== 'all' ? 'dark:border-r dark:border-[#1F2E4D] light:border-r light:border-[#D1D5DB]' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Timeline */}
          <div className="space-y-6 md:space-y-8">
            {displayedExperience.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg dark:text-[#8B95A8] light:text-[#6B7280]">No hay experiencia para mostrar</p>
              </div>
            ) : (
              displayedExperience.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-0 md:gap-6"
                >
                  {/* Left side (alternates) */}
                  <div className={`${idx % 2 === 0 ? 'md:text-right' : 'md:col-start-3'}`}>
                    {idx % 2 === 0 && (
                      <TimelineItem item={item} isActive={item.isActive} position="left" />
                    )}
                  </div>

                  {/* Center dot and line */}
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${
                        item.isActive
                          ? 'dark:bg-[#4A6FA8] light:bg-[#4A6FA8] dark:shadow-lg dark:shadow-[#4A6FA8]/50'
                          : 'dark:border-2 dark:border-[#1F2E4D] dark:bg-[#0A0E1A] light:border-2 light:border-[#D1D5DB] light:bg-white'
                      }`}
                    />
                    {idx !== displayedExperience.length - 1 && (
                      <div className="w-0.5 flex-grow dark:bg-gradient-to-b dark:from-[#4A6FA8] dark:to-transparent light:bg-gradient-to-b light:from-[#4A6FA8] light:to-transparent mt-4 mb-4" />
                    )}
                  </div>

                  {/* Right side (alternates) */}
                  <div className={`${idx % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    {idx % 2 !== 0 && (
                      <TimelineItem item={item} isActive={item.isActive} position="right" />
                    )}
                  </div>

                  {/* Mobile version */}
                  <div className="md:hidden col-span-1">
                    <TimelineItem item={item} isActive={item.isActive} position="left" />
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
