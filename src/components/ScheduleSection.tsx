import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import clock3DImg from '../assets/images/dental_clock_3d_1790068735044.jpg';

export const ScheduleSection: React.FC = () => {
  // Check clinic opening status based on Brazilian Maceió time (UTC-3)
  const status = useMemo(() => {
    try {
      const now = new Date();
      // Maceió timezone is America/Maceio (UTC-3)
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'America/Maceio', 
        hour: 'numeric', 
        minute: 'numeric', 
        weekday: 'short',
        hour12: false 
      };
      const formatter = new Intl.DateTimeFormat('pt-BR', options);
      const parts = formatter.formatToParts(now);
      const hourPart = parts.find(p => p.type === 'hour')?.value || '0';
      const minutePart = parts.find(p => p.type === 'minute')?.value || '0';
      const weekdayPart = parts.find(p => p.type === 'weekday')?.value || '';
      
      const hour = parseInt(hourPart, 10);
      const minute = parseInt(minutePart, 10);
      const isWeekend = weekdayPart.toLowerCase().startsWith('sáb') || weekdayPart.toLowerCase().startsWith('dom');

      if (isWeekend) {
        return {
          isOpen: false,
          label: 'Fechado no momento',
          sub: 'Reabre segunda-feira às 08h',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
        };
      }

      // Monday to Friday: 08h to 12h and 14h to 17h
      const timeInMinutes = hour * 60 + minute;
      const morningOpen = 8 * 60;
      const morningClose = 12 * 60;
      const afternoonOpen = 14 * 60;
      const afternoonClose = 17 * 60;

      const isMorning = timeInMinutes >= morningOpen && timeInMinutes < morningClose;
      const isAfternoon = timeInMinutes >= afternoonOpen && timeInMinutes < afternoonClose;

      if (isMorning || isAfternoon) {
        return {
          isOpen: true,
          label: 'Aberto agora',
          sub: isMorning ? 'Atendimento matutino até as 12h' : 'Atendimento vespertino até as 17h',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
        };
      } else if (timeInMinutes < morningOpen) {
        return {
          isOpen: false,
          label: 'Fechado no momento',
          sub: 'Reabre hoje às 08h',
          badgeColor: 'bg-slate-100 text-slate-700 border-slate-200'
        };
      } else if (timeInMinutes >= morningClose && timeInMinutes < afternoonOpen) {
        return {
          isOpen: false,
          label: 'Intervalo de Almoço',
          sub: 'Reabre hoje às 14h',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
        };
      } else {
        return {
          isOpen: false,
          label: 'Fechado no momento',
          sub: 'Reabre no próximo dia útil às 08h',
          badgeColor: 'bg-slate-100 text-slate-700 border-slate-200'
        };
      }
    } catch {
      return {
        isOpen: true,
        label: 'Atendimento Regular',
        sub: 'Segunda a Sexta nos turnos matutino e vespertino',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
      };
    }
  }, []);

  return (
    <section 
      id="horarios"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#2B0309] via-[#38050D] to-[#260308] overflow-hidden text-white"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#690D1C]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 right-0 w-80 h-80 bg-[#500813]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-200 uppercase tracking-wider mb-4 shadow-sm"
        >
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>Atendimento Odontológico</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-2xl sm:text-3xl font-extrabold text-center text-white tracking-tight leading-snug mb-6 drop-shadow-md"
        >
          Nosso horário de funcionamento
        </motion.h2>

        {/* Premium Dashboard Panel in Floating White Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card-floating-white w-full rounded-3xl p-5 sm:p-7 relative overflow-hidden text-slate-900 border border-white/90 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)]"
        >
          {/* Top metallic bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#7A1526]" />
              <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                Segunda a Sexta
              </span>
            </div>

            {/* Live status badge */}
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold ${status.badgeColor}`}>
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
              <span>{status.label}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* 3D Clock Element visual */}
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-[inset_0_1px_2px_rgba(255,255,255,1)]">
              <div className="w-28 h-28 sm:w-32 sm:h-32 relative rounded-full overflow-hidden p-1 bg-white shadow-md">
                <img
                  src={clock3DImg}
                  alt="Relógio elegante em 3D da Clínica Antares"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="mt-2 text-[11px] text-slate-500 font-medium text-center">
                {status.sub}
              </p>
            </div>

            {/* Shifts list */}
            <div className="flex flex-col gap-3">
              {/* Shift 1: Manhã */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between group hover:border-[#7A1526]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#7A1526]/10 text-[#7A1526] flex items-center justify-center font-bold text-sm">
                    1º
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">
                      Turno Matutino
                    </span>
                    <span className="font-heading font-bold text-base text-slate-900">
                      08h às 12h
                    </span>
                  </div>
                </div>
                <span className="text-lg">🕐</span>
              </div>

              {/* Shift 2: Tarde */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between group hover:border-[#7A1526]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#7A1526]/10 text-[#7A1526] flex items-center justify-center font-bold text-sm">
                    2º
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">
                      Turno Vespertino
                    </span>
                    <span className="font-heading font-bold text-base text-slate-900">
                      14h às 17h
                    </span>
                  </div>
                </div>
                <span className="text-lg">🕐</span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#7A1526]" />
              Atendimento com hora marcada
            </span>
            <span className="font-medium text-slate-700">Maceió • AL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
