import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/clinicData';

export const TeamSection: React.FC = () => {
  return (
    <section 
      id="equipe"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#2B0309] via-[#3A050E] to-[#280309] overflow-hidden text-white"
    >
      {/* Background decoration & satin lighting */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#780E20]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 right-0 w-80 h-80 bg-[#5A0A16]/20 rounded-full blur-3xl pointer-events-none"
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
          <Users className="w-3.5 h-3.5 text-amber-300" />
          <span>Corpo Clínico</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-2xl sm:text-3xl font-extrabold text-center text-white tracking-tight leading-snug mb-2 drop-shadow-md"
        >
          Conheça nossa equipe!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-slate-200 max-w-md mb-8"
        >
          Profissionais qualificados e especializados para cuidar do seu sorriso com máxima dedicação.
        </motion.p>

        {/* Individual Cards: Floating White Luxury Cards on Bordeaux Background */}
        <div className="w-full flex flex-col gap-3.5">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="card-floating-white p-4 sm:p-5 rounded-2xl relative overflow-hidden group"
            >
              {/* Subtle top wine accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#7A1526]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* 3D Medical Monogram Seal */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-rose-50 via-slate-50 to-slate-200 border border-slate-300/80 flex items-center justify-center shadow-[0_6px_14px_-2px_rgba(15,23,42,0.1),inset_0_1px_1px_rgba(255,255,255,1)] group-hover:scale-105 transition-transform">
                    <span className="font-heading font-bold text-sm sm:text-base text-[#7A1526] tracking-wider">
                      {member.initials}
                    </span>
                  </div>
                  {/* Verified dental badge */}
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1526]" />
                  </div>
                </div>

                {/* Professional Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 truncate">
                      {member.name}
                    </h3>
                    {/* CRO Official Badge */}
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7A1526] bg-[#7A1526]/10 border border-[#7A1526]/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      <Award className="w-3 h-3" />
                      {member.cro}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-700 mt-0.5">
                    {member.role}
                  </p>

                  {member.highlight && (
                    <p className="text-[11px] text-slate-500 mt-1 font-normal">
                      {member.highlight}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
