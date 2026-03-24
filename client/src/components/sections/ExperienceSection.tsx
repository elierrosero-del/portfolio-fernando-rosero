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
      className="py-20 md:py-32 relative overflow-hidden dark:bg-[#0A0E1A] light:bg-white"
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
          className="mb-16"
        >
          <SectionHeader
            title="Experiencia & Formación"
            description="Mi recorrido profesional y académico"
          />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center gap-3 mb-16 flex-wrap"
        >
          {[
            { label: 'Todos', value: 'all' as const },
            { label: 'Académica', value: 'academic' as const },
            { label: 'Laboral', value: 'professional' as const },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === tab.value
                  ? 'dark:bg-[#4A6FA8] light:bg-[#4A6FA8] text-white shadow-lg dark:shadow-[#4A6FA8]/30'
                  : 'dark:bg-[#141B2D] dark:text-[#C5CED9] dark:border dark:border-[#1F2E4D] light:bg-[#F3F4F6] light:text-[#4B5563] light:border light:border-[#D1D5DB] hover:dark:border-[#4A6FA8] hover:light:border-[#4A6FA8]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full dark:bg-gradient-to-b dark:from-[#4A6FA8] dark:via-[#4A6FA8] dark:to-transparent light:bg-gradient-to-b light:from-[#4A6FA8] light:via-[#4A6FA8] light:to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {displayedExperience.length === 0 ? (
              <motion.div variants={fadeUp} className="text-center py-16">
                <p className="text-lg dark:text-[#8B95A8] light:text-[#6B7280]">
                  No hay experiencia para mostrar en esta categoría
                </p>
              </motion.div>
            ) : (
              displayedExperience.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Desktop layout - alternating sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
                    {/* Left side content */}
                    <div className={idx % 2 === 0 ? 'text-right pr-8' : 'invisible'}>
                      {idx % 2 === 0 && (
                        <TimelineItem item={item} isActive={item.isActive} position="left" />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full flex-shrink-0 ring-4 transition-all duration-300 ${
                          item.isActive
                            ? 'dark:bg-[#4A6FA8] dark:ring-[#4A6FA8]/30 light:bg-[#4A6FA8] light:ring-[#4A6FA8]/30'
                            : 'dark:bg-[#141B2D] dark:ring-[#1F2E4D] light:bg-white light:ring-[#D1D5DB]'
                        }`}
                      />
                    </div>

                    {/* Right side content */}
                    <div className={idx % 2 !== 0 ? 'pl-8' : 'invisible'}>
                      {idx % 2 !== 0 && (
                        <TimelineItem item={item} isActive={item.isActive} position="right" />
                      )}
                    </div>
                  </div>

                  {/* Mobile layout - single column */}
                  <div className="md:hidden pl-8 relative">
                    {/* Vertical line for mobile */}
                    <div className="absolute left-1.5 top-0 bottom-0 w-0.5 dark:bg-gradient-to-b dark:from-[#4A6FA8] dark:to-transparent light:bg-gradient-to-b light:from-[#4A6FA8] light:to-transparent" />
                    {/* Dot for mobile */}
                    <div
                      className={`absolute -left-1 top-2 w-4 h-4 rounded-full ring-4 transition-all duration-300 ${
                        item.isActive
                          ? 'dark:bg-[#4A6FA8] dark:ring-[#4A6FA8]/30 light:bg-[#4A6FA8] light:ring-[#4A6FA8]/30'
                          : 'dark:bg-[#141B2D] dark:ring-[#1F2E4D] light:bg-white light:ring-[#D1D5DB]'
                      }`}
                    />
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
