import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Check, Sparkles } from 'lucide-react';
import { DENTAL_PLANS } from '../data/clinicData';

export const PlansSection: React.FC = () => {
  return (
    <section 
      id="planos"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#280309] via-[#38050D] to-[#2B0309] overflow-hidden text-white"
    >
      {/* Ambient background blur & satin lighting */}
      <div 
        className="absolute top-1/3 right-0 w-80 h-80 bg-[#750E20]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-0 w-80 h-80 bg-[#500813]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-200 uppercase tracking-wider mb-3 shadow-sm"
        >
          <CreditCard className="w-3.5 h-3.5 text-amber-300" />
          <span>Convênios & Planos Parceiros</span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-2xl sm:text-3xl font-extrabold text-center text-white tracking-tight leading-snug drop-shadow-md"
        >
          Convênios e planos parceiros
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-slate-200 max-w-md mt-2 mb-8 leading-relaxed"
        >
          Pensando em facilitar o cuidado com o seu sorriso, nossa clínica é credenciada aos planos:
        </motion.p>

        {/* 12 Dental Plans Grid with Floating White Luxury Cards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {DENTAL_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: index * 0.04,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -4 }}
              className="card-floating-white p-3.5 sm:p-4 rounded-2xl flex flex-col items-center justify-between text-center relative group min-h-[125px] sm:min-h-[135px] border border-white/90 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              {/* Top micro pill indicator with plan color accent */}
              <div 
                className="w-7 h-1 rounded-full mb-2 transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: plan.accentColor }}
              />

              {/* Authentic Logo Display Container */}
              <div className="w-full h-12 sm:h-14 flex flex-col items-center justify-center p-1">
                {plan.logoUrl ? (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <img
                      src={plan.logoUrl}
                      alt={`Logo oficial ${plan.name}`}
                      className="max-h-8 sm:max-h-10 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      style={{ imageRendering: 'auto' }}
                    />
                    {plan.id === 'privian' && (
                      <span className="text-[9px] font-extrabold tracking-wider text-[#4A154B] uppercase mt-0.5">
                        Privian
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center px-2 py-1 rounded-lg bg-slate-50 border border-dashed border-slate-200 w-full h-full">
                    <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                      {plan.name}
                    </span>
                    <span className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">
                      Espaço Reservado
                    </span>
                  </div>
                )}
              </div>

              {/* Plan Metadata & Credenciamento */}
              <div className="mt-2 flex flex-col items-center w-full">
                <span className="font-heading font-semibold text-xs text-slate-800 tracking-tight group-hover:text-[#7A1526] transition-colors leading-tight truncate max-w-full">
                  {plan.name}
                </span>

                <div className="mt-1 inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                  <Check className="w-2.5 h-2.5" />
                  <span>Credenciado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-xs text-slate-300 flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Consulte coberturas e procedimentos cobertos pelo seu convênio</span>
        </motion.div>
      </div>
    </section>
  );
};
