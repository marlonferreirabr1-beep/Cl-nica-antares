import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, ExternalLink, Sparkles, Compass } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section 
      id="localizacao"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#260308] via-[#38050D] to-[#2B0309] overflow-hidden text-white"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#700E1E]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#540813]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-200 uppercase tracking-wider mb-4 shadow-sm"
        >
          <Compass className="w-3.5 h-3.5 text-amber-300" />
          <span>Fácil Acesso & Localização</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md"
        >
          Como chegar à nossa clínica
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-slate-200 text-sm sm:text-base font-normal max-w-md"
        >
          Estamos localizados no bairro Antares em Maceió, com fácil acesso e ambiente planejado para o seu conforto.
        </motion.p>

        {/* 3D Map Visual Card Floating in White */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 w-full max-w-sm"
        >
          <div className="card-floating-white p-5 rounded-3xl border border-white/90 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)] text-left flex flex-col gap-4 text-slate-900">
            {/* Visual Pinpoint Badge */}
            <div className="relative h-36 rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/80 p-3 flex flex-col justify-between">
              {/* Subtle map pattern lines */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#7A1526 1px, transparent 1px), radial-gradient(#7A1526 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1526]/10 via-transparent to-amber-500/10 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A1526] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-slate-200/60">
                  Maceió • AL
                </span>
                <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Antares
                </span>
              </div>

              {/* Pin Centerpiece with pulse beacon */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="relative">
                  <span className="absolute -inset-2 rounded-full bg-[#7A1526]/20 animate-ping" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7A1526] to-[#9B1B30] text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 fill-current text-white drop-shadow-sm" />
                  </div>
                </div>
                <span className="font-heading font-bold text-xs text-slate-900 mt-1.5 drop-shadow-xs">
                  Clínica Antares Odontologia
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                <span className="text-[10px] text-slate-500">
                  Toque no botão abaixo para abrir o mapa direto
                </span>
              </div>
            </div>

            {/* Address Details */}
            <div className="flex items-start gap-3 pt-1">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#7A1526]">
                <Navigation className="w-5 h-5 text-[#7A1526]" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  Endereço
                </span>
                <span className="text-sm font-bold text-slate-800 block">
                  {CLINIC_INFO.address}
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Maceió — Alagoas
                </span>
              </div>
            </div>

            {/* Main Action Button to open Google Maps link directly */}
            <a
              id="open-google-maps-btn"
              href={CLINIC_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-bordeaux group relative w-full py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2.5 text-white font-bold text-sm sm:text-base cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#7A1526]/30 shadow-lg"
            >
              <MapPin className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">Abrir Localização no Google Maps</span>
              <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity ml-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
