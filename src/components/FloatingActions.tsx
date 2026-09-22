import React, { useState } from 'react';
import { MessageCircle, Instagram, Sparkles, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside 
      aria-label="Ações rápidas de contato"
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* Floating Tooltip Bubble (can be dismissed or fades) */}
      {showTooltip && (
        <div 
          className="relative bg-white text-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-lg shadow-slate-900/10 text-xs font-semibold flex items-center gap-2 animate-bounce transition-all duration-300 max-w-[210px]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="leading-tight text-slate-700">
            Fale conosco no WhatsApp!
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200/90 rotate-45" />
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Floating Instagram Button */}
        <a
          id="floating-instagram-btn"
          href={CLINIC_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d-instagram w-11 h-11 rounded-full flex items-center justify-center text-white cursor-pointer group focus:outline-none focus:ring-4 focus:ring-pink-400/40 p-2 shadow-lg"
          title="Instagram da Clínica Antares"
          aria-label="Instagram da Clínica Antares"
        >
          <img 
            src="/assets/platforms/instagram.svg" 
            alt="Instagram" 
            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
          />
        </a>

        {/* Floating WhatsApp Button (Main CTA) */}
        <a
          id="floating-whatsapp-btn"
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d-whatsapp relative w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer group focus:outline-none focus:ring-4 focus:ring-emerald-400/40 p-3 shadow-xl"
          title="Agendar Consulta no WhatsApp"
          aria-label="Falar com a Clínica Antares no WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75" />
          
          <img 
            src="/assets/platforms/whatsapp.svg" 
            alt="WhatsApp" 
            className="w-7 h-7 object-contain group-hover:scale-110 transition-transform relative z-10" 
          />
        </a>
      </div>
    </aside>
  );
};
