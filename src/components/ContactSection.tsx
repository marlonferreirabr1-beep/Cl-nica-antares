import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Instagram, MapPin, Phone, Copy, Check, Sparkles, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AntaresLogo } from './AntaresLogo';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CLINIC_INFO.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer 
      id="contato"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-between px-4 pt-16 pb-12 bg-gradient-to-b from-[#660C1D] via-[#520815] to-[#3B050E] text-white overflow-hidden"
    >
      {/* Subtle luxury light patterns in burgundy */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#9B1B30]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center my-auto">
        {/* Logo in White/Burgundy palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="inline-flex p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/30">
            <AntaresLogo size="md" />
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug"
        >
          Agende seu atendimento
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-white/90 text-sm sm:text-base font-normal max-w-md"
        >
          Estamos prontos para cuidar do seu sorriso.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 w-full max-w-sm flex flex-col gap-3.5 px-2"
        >
          {/* Botão Principal: WhatsApp */}
          <a
            id="contact-whatsapp-btn"
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-whatsapp group relative w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-white font-bold text-base sm:text-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40 shadow-xl"
          >
            <span className="p-1.5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img 
                src="/assets/platforms/whatsapp.svg" 
                alt="Logo oficial WhatsApp" 
                className="w-5 h-5 object-contain"
              />
            </span>
            <span className="tracking-wide">Falar pelo WhatsApp</span>
          </a>

          {/* Segundo Botão: Instagram */}
          <a
            id="contact-instagram-btn"
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-instagram group relative w-full py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 text-white font-semibold text-base cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-400/40 shadow-lg"
          >
            <span className="p-1 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <img 
                src="/assets/platforms/instagram.svg" 
                alt="Logo oficial Instagram" 
                className="w-5 h-5 object-contain rounded-md"
              />
            </span>
            <span className="tracking-wide">Acompanhar Instagram</span>
          </a>
        </motion.div>

        {/* Contact Details Card with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 w-full max-w-sm p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl flex flex-col gap-4 text-left"
        >
          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-rose-200" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/70 block font-semibold">
                Localização
              </span>
              <span className="text-sm font-bold text-white block">
                {CLINIC_INFO.address}
              </span>
              <a 
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold mt-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg transition-colors border border-white/15"
              >
                <span>Abrir no Google Maps</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="h-px bg-white/15" />

          {/* Phone / WhatsApp */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/70 block font-semibold">
                  Telefone / WhatsApp
                </span>
                <span className="text-base font-bold text-white block font-heading">
                  {CLINIC_INFO.phoneDisplay}
                </span>
              </div>
            </div>

            {/* Quick copy button */}
            <button
              id="copy-phone-btn"
              onClick={handleCopyPhone}
              className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors focus:outline-none"
              title="Copiar número de telefone"
              aria-label="Copiar telefone"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer copyright and credits */}
      <div className="relative z-10 w-full max-w-xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-white/60">
        <p>
          © {new Date().getFullYear()} Clínica Antares Odontologia. Todos os direitos reservados.
        </p>
        <p className="mt-1 text-[11px] text-white/40">
          Maceió — Alagoas • Saúde Bucal com Excelência
        </p>
      </div>
    </footer>
  );
};
