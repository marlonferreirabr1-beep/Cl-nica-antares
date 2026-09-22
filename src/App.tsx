import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { SlideNavigation } from './components/SlideNavigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { PlansSection } from './components/PlansSection';
import { ReviewSection } from './components/ReviewSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { FloatingActions } from './components/FloatingActions';
import { SECTIONS } from './data/clinicData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to target section
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
    const nextIndex = (currentIndex + 1) % SECTIONS.length;
    handleNavigate(SECTIONS[nextIndex].id);
  };

  // IntersectionObserver to observe which slide is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.2,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for carousel feel (ArrowDown, ArrowUp)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
        if (currentIndex < SECTIONS.length - 1) {
          e.preventDefault();
          handleNavigate(SECTIONS[currentIndex + 1].id);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
        if (currentIndex > 0) {
          e.preventDefault();
          handleNavigate(SECTIONS[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  // Current slide index for progress indicator
  const currentSlideIndex = SECTIONS.findIndex((s) => s.id === activeSection) + 1;

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#35050C] text-slate-100 selection:bg-[#9B1B30] selection:text-white relative overflow-x-hidden font-sans"
    >
      {/* Top Reading / Slide Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9B1B30] via-rose-500 to-amber-400 z-50 transition-all duration-300"
        style={{ width: `${(currentSlideIndex / SECTIONS.length) * 100}%` }}
        role="progressbar"
        aria-valuenow={currentSlideIndex}
        aria-valuemin={1}
        aria-valuemax={SECTIONS.length}
      />

      {/* Persistent Glassy Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Desktop Vertical Slide Indicator */}
      <SlideNavigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Mobile Slide Pill (Floating indicator showing slide number) */}
      <div className="fixed bottom-4 left-4 z-40 md:hidden bg-[#38050D]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/15 shadow-xl flex items-center gap-1.5">
        <span className="text-rose-400 font-bold">{currentSlideIndex}</span>
        <span className="text-white/40">/</span>
        <span className="text-white/70">{SECTIONS.length}</span>
        <span className="text-white/40">•</span>
        <span className="text-white/90 truncate max-w-[100px]">
          {SECTIONS.find(s => s.id === activeSection)?.title}
        </span>
      </div>

      {/* Vertical Cinematic Sections */}
      <main className="w-full">
        {/* Slide 1: Hero */}
        <HeroSection onScrollDown={handleScrollDown} />

        {/* Slide 2: Conheça nossa clínica */}
        <AboutSection />

        {/* Slide 3: Nossa equipe */}
        <TeamSection />

        {/* Slide 4: Planos Odontológicos */}
        <PlansSection />

        {/* Slide 5: Horário de funcionamento */}
        <ScheduleSection />

        {/* Slide 6: Contato & Agendamento */}
        <ContactSection />

        {/* Slide 7: Localização & Como Chegar */}
        <LocationSection />

        {/* Slide 8: Avalie no Google (Última parte do bio site) */}
        <ReviewSection />
      </main>

      {/* Floating 3D WhatsApp & Instagram Action Buttons */}
      <FloatingActions />
    </div>
  );
}
