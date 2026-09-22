import React from 'react';
import { MessageCircle, Instagram, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AntaresLogo } from './AntaresLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#35050C]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Brand Clickable (Logo only) */}
        <button
          id="nav-brand-btn"
          onClick={() => onNavigate('inicio')}
          className="flex items-center group focus:outline-none cursor-pointer"
          title="Ir para o topo"
        >
          <AntaresLogo size="sm" showText={false} />
        </button>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Instagram */}
          <a
            id="nav-instagram-btn"
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-slate-200 hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            title="Instagram Oficial"
            aria-label="Instagram da Clínica Antares"
          >
            <img 
              src="/assets/platforms/instagram.svg" 
              alt="Instagram" 
              className="w-4 h-4 object-contain" 
            />
          </a>

          {/* Quick WhatsApp CTA Button */}
          <a
            id="nav-whatsapp-cta"
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-whatsapp text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-transform shadow-md cursor-pointer"
          >
            <img 
              src="/assets/platforms/whatsapp.svg" 
              alt="WhatsApp" 
              className="w-3.5 h-3.5 object-contain" 
            />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
