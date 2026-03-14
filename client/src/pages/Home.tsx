import { CustomCursor } from '@/components/layout/CustomCursor';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

/**
 * Home page - Main portfolio page
 */
export default function Home() {
  return (
    <div className="min-h-screen dark:bg-[#0A0E1A] light:bg-white dark:text-[#F5F7FA] light:text-[#0F1A2E] transition-colors duration-300">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
