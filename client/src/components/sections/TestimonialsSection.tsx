'use client';

import { getAllTestimonials, getFeaturedTestimonial } from '@/lib/data/testimonials';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TestimonialCard } from '../ui/TestimonialCard';

/**
 * Testimonials section component with featured + grid layout
 */
export function TestimonialsSection() {
  const featured = getFeaturedTestimonial();
  const allTestimonials = getAllTestimonials();
  const otherTestimonials = allTestimonials.filter((t) => !t.featured);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(otherTestimonials.length / itemsPerPage);
  const paginatedTestimonials = otherTestimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 glow-gold-tr pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold dark:text-[#8B95A8] light:text-[#6B7280] tracking-widest uppercase mb-4">
            Testimonios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-[#F5F7FA] light:text-[#0F1A2E] leading-tight mb-4">
            Lo que dicen de mi trabajo
          </h2>
          <p className="text-base dark:text-[#C5CED9] light:text-[#4B5563] max-w-2xl mx-auto">
            Opiniones de colegas y clientes sobre mi trabajo
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Featured Testimonial */}
          {featured && (
            <motion.div variants={fadeUp} className="mb-12">
              <div className="relative p-8 md:p-12 rounded-lg dark:bg-[#1A2340] light:bg-[#F3F4F6] dark:border dark:border-[#2DD4BF]/30 light:border light:border-[#D1D5DB]">
                {/* Quote Mark */}
                <div className="absolute top-6 left-8 text-6xl font-display dark:text-[#2DD4BF]/20 light:text-[#4A6FA8]/20">
                  "
                </div>

                <div className="relative z-10 space-y-6">
                  <p className="text-lg md:text-xl dark:text-[#F5F7FA] light:text-[#0F1A2E] leading-relaxed italic max-w-3xl">
                    {featured.content}
                  </p>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full dark:bg-[#2DD4BF]/20 light:bg-[#4A6FA8]/20 dark:border dark:border-[#2DD4BF] light:border light:border-[#4A6FA8] flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold dark:text-[#2DD4BF] light:text-[#4A6FA8]">
                          {featured.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold dark:text-[#F5F7FA] light:text-[#0F1A2E]">{featured.name}</p>
                        <p className="text-sm dark:text-[#8B95A8] light:text-[#6B7280]">
                          {featured.role} @ {featured.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-[#F59E0B] dark:text-[#F59E0B] light:text-[#D97706]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paginatedTestimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeUp}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 pt-8">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentPage
                      ? 'dark:bg-[#4A6FA8] light:bg-[#4A6FA8] w-8'
                      : 'dark:bg-[#1F2E4D] light:bg-[#D1D5DB] w-2'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
