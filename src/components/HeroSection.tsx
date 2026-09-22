import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, ChevronDown } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AntaresLogo } from './AntaresLogo';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  return (
    <section 
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 overflow-hidden bg-gradient-to-b from-[#4A0713] via-[#35050C] to-[#260308]"
    >
      {/* Organic curved gradients & satin lighting */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#780E20]/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] bg-gradient-to-tr from-[#660C1B]/40 via-[#8B1227]/20 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#520915]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle organic white/silver diagonal curve accent in background */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <path d="M0,0 C30,40 70,60 100,100 L100,0 Z" fill="#FFFFFF" />
      </svg>

      <motion.div 
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center"
      >
        {/* Subtle pill tag in frosted glass */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-semibold text-rose-100 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Odontologia Especializada em Maceió</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="text-slate-200 font-normal flex items-center gap-1">
            <MapPin className="w-3 h-3 inline text-rose-300" /> Antares
          </span>
        </motion.div>

        {/* LOGO GRANDE DA CLÍNICA ANTARES ODONTOLOGIA COM HALO ILUMINADO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mb-4 relative"
        >
          {/* Subtle warm backlight glow behind official logo */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl transform scale-125 pointer-events-none" />
          <AntaresLogo size="xl" showText={true} isHero={true} />
        </motion.div>

        {/* Tagline & Description in high-contrast elegant typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-4 max-w-md mx-auto"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            {CLINIC_INFO.tagline}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
            {CLINIC_INFO.description}
          </p>
        </motion.div>

        {/* Micro highlights badge row with frosted luxury style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 pt-6 border-t border-white/15 w-full max-w-sm flex items-center justify-around text-xs text-slate-200 font-medium"
        >
          <div className="flex flex-col items-center">
            <span className="font-heading font-bold text-sm text-amber-300">5 Estrelas</span>
            <span className="text-slate-300 text-[11px]">Avaliação Google</span>
          </div>
          <span className="h-6 w-px bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="font-heading font-bold text-sm text-white">11+ Planos</span>
            <span className="text-slate-300 text-[11px]">Credenciados</span>
          </div>
          <span className="h-6 w-px bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="font-heading font-bold text-sm text-rose-200">Equipe</span>
            <span className="text-slate-300 text-[11px]">Especializada</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          id="hero-scroll-indicator"
          onClick={onScrollDown}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-6 p-2 text-slate-300 hover:text-white transition-colors focus:outline-none flex flex-col items-center gap-1 cursor-pointer"
          title="Deslize para baixo"
          aria-label="Deslizar para a próxima seção"
        >
          <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-300">Deslize</span>
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
};
