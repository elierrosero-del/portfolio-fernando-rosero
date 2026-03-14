import { useEffect, useState } from 'react';

/**
 * Hook to track which section is currently in view
 * @param sectionIds - Array of section IDs to track
 * @returns The ID of the currently active section
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        const sectionStart = offsetTop;
        const sectionEnd = offsetTop + offsetHeight;

        if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
