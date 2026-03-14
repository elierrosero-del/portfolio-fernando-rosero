'use client';

import { getAllTestimonials, getFeaturedTestimonial } from '@/lib/data/testimonials';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TestimonialCard } from '../ui/TestimonialCard';

/**
 * Testimonials section component
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
        <SectionHeader
          eyebrow="Lo que Dicen"
          title="Testimonios"
          description="Opiniones de colegas y clientes sobre mi trabajo"
        />

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
              <div className="relative p-8 md:p-12 rounded border-2 border-gold-default bg-navy-panel/50 shadow-lg shadow-gold-default/20">
                {/* Quote Mark */}
                <div className="absolute top-4 left-6 text-7xl font-display text-gold-default/10">
                  "
                </div>

                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-cream mb-6 leading-relaxed italic">
                    {featured.content}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-default/20 border border-gold-default flex items-center justify-center">
                      <span className="text-sm font-semibold text-gold-default">
                        {featured.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-cream">{featured.name}</p>
                      <p className="text-sm text-steel-light">
                        {featured.role} @ {featured.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Testimonials Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {paginatedTestimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeUp}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div variants={fadeUp} className="flex justify-center gap-3 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentPage
                      ? 'bg-gold-default w-8'
                      : 'bg-steel-dark hover:bg-steel-light'
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
