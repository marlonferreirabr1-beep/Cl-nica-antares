import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, ThumbsUp, Sparkles, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import stars3DImg from '../assets/images/stars_3d_review_1790068745385.jpg';

export const ReviewSection: React.FC = () => {
  return (
    <section 
      id="avaliacoes"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#2B0309] via-[#3A050E] to-[#260308] overflow-hidden text-white"
    >
      {/* Warm celebratory background glow in bordeaux */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#780E20]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/15 backdrop-blur-md border border-amber-300/30 text-xs font-semibold text-amber-200 uppercase tracking-wider mb-3 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Sua Opinião Vale Ouro</span>
        </motion.div>

        {/* 3D 5 Stars in High Relief Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative my-3 w-40 sm:w-48 aspect-square rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/20 via-white/10 to-transparent border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        >
          <img
            src={stars3DImg}
            alt="5 Estrelas 3D de Alto Relevo da Clínica Antares Odontologia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Main Chamative Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mt-2 drop-shadow-md"
        >
          Seu sorriso merece 5 estrelas
        </motion.h2>

        {/* Glossy 3D Star icons row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="flex items-center gap-1.5 my-3"
        >
          {[1, 2, 3, 4, 5].map((s) => (
            <div 
              key={s}
              className="p-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xs transform hover:scale-115 transition-transform"
            >
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400 drop-shadow-sm" />
            </div>
          ))}
        </motion.div>

        {/* Explanatory Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-md mx-auto space-y-2 mb-6"
        >
          <p className="text-sm sm:text-base font-semibold text-white">
            Sua experiência é muito importante para nós.
          </p>
          <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
            Se você já foi atendido pela Clínica Antares, conte para outras pessoas como foi sua experiência.
          </p>
        </motion.div>

        {/* Botão Grande em Vermelho: ⭐ Avaliar no Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-sm px-2"
        >
          <a
            id="review-google-btn"
            href={CLINIC_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-bordeaux group relative w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-white font-bold text-base sm:text-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#7A1526]/30 shadow-xl"
          >
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1 shadow-sm group-hover:scale-110 transition-transform">
              <img 
                src="/assets/platforms/google.svg" 
                alt="Logo oficial Google" 
                className="w-full h-full object-contain"
              />
            </span>
            <span className="tracking-wide">Avaliar no Google</span>
            <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity ml-1" />
          </a>

          {/* Trust hint */}
          <p className="mt-3 text-[11px] text-slate-300">
            Leva menos de 1 minuto e ajuda nossa clínica a evoluir sempre mais.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
