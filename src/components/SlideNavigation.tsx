import React from 'react';
import { SECTIONS } from '../data/clinicData';

interface SlideNavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  activeSection,
  onNavigate,
}) => {
  return (
    <nav 
      aria-label="Navegação por seções"
      className="fixed right-3 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-2.5 p-2 rounded-full bg-[#35050C]/85 backdrop-blur-xl border border-white/15 shadow-2xl"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            id={`nav-dot-${section.id}`}
            onClick={() => onNavigate(section.id)}
            className="group relative flex items-center justify-end p-1.5 focus:outline-none cursor-pointer"
            aria-label={`Ir para a seção ${section.title}`}
          >
            {/* Tooltip Label */}
            <span 
              className={`absolute right-7 px-2.5 py-1 text-xs font-semibold rounded-md whitespace-nowrap pointer-events-none transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                isActive 
                  ? 'bg-white text-[#7A1526] shadow-lg' 
                  : 'bg-black/80 text-white shadow'
              }`}
            >
              {section.title}
            </span>

            {/* Dot indicator with 3D ring */}
            <span
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-3.5 h-3.5 bg-white ring-4 ring-rose-300/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] scale-110'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
