import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles, Smile, Award, ZoomIn, X, ExternalLink, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

const CLINIC_GALLERY = [
  {
    id: 1,
    url: '/assets/about_clinic_instagram.png',
    alt: 'Clínica Antares Odontologia — Cuidar do seu sorriso é cuidar de você',
    title: 'Cuidar do seu sorriso é cuidar de você'
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/6TJhfQnH/Screenshot-20260922-065426-Instagram.png',
    alt: 'Clínica Antares Odontologia — Especialidades e Atendimento',
    title: 'Excelência e Dedicação ao Seu Sorriso'
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/k54h4BcV/Screenshot-20260922-065651-Instagram.png',
    alt: 'Clínica Antares Odontologia — Estrutura e Cuidado',
    title: 'Ambiente Moderno e Acolhedor'
  }
];

export const AboutSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CLINIC_GALLERY.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + CLINIC_GALLERY.length) % CLINIC_GALLERY.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % CLINIC_GALLERY.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + CLINIC_GALLERY.length) % CLINIC_GALLERY.length);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const highlights = [
    {
      icon: Smile,
      title: 'Conforto',
      desc: 'Ambiente leve e acolhedor',
      color: 'from-rose-50 to-white',
      border: 'border-rose-100',
      iconColor: 'text-[#7A1526]'
    },
    {
      icon: ShieldCheck,
      title: 'Segurança',
      desc: 'Máxima proteção e higiene',
      color: 'from-slate-50 to-white',
      border: 'border-slate-100',
      iconColor: 'text-slate-800'
    },
    {
      icon: Award,
      title: 'Qualidade',
      desc: 'Tecnologia e precisão',
      color: 'from-amber-50 to-white',
      border: 'border-amber-100',
      iconColor: 'text-amber-700'
    }
  ];

  return (
    <section 
      id="clinica"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#260308] via-[#38050D] to-[#2B0309] overflow-hidden text-white"
    >
      {/* Background satin gradients and organic curves */}
      <div 
        className="absolute top-1/2 left-0 w-80 h-80 bg-[#6E0D1D]/25 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 right-0 w-96 h-96 bg-[#8B1227]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative organic wave lines */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-200 uppercase tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Conheça Nossa Clínica</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading text-2xl sm:text-3xl font-extrabold text-center text-white tracking-tight leading-snug drop-shadow-md"
        >
          Cuidar do seu sorriso é cuidar de você.
        </motion.h2>

        {/* Visual Image Container with 3D Carousel Card and Interactive Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative my-6 w-full max-w-sm"
        >
          {/* 3D Visual Card Interactive Floating on Deep Bordeaux */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="group cursor-pointer relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/20 via-white/10 to-transparent p-2.5 border border-white/30 shadow-[0_24px_50px_rgba(0,0,0,0.5),0_10px_20px_rgba(50,5,12,0.3)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
          >
            <div className="relative aspect-[740/800] rounded-2xl overflow-hidden bg-black/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={CLINIC_GALLERY[currentImageIndex].url}
                  alt={CLINIC_GALLERY[currentImageIndex].alt}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </AnimatePresence>
              
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

              {/* Top Navigation & Status Bar */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-white backdrop-blur-md bg-black/60 px-3 py-1 rounded-full border border-white/20 shadow-sm">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Clínica Antares
                </span>

                <span className="text-[11px] font-bold text-white backdrop-blur-md bg-black/60 px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
                  {currentImageIndex + 1} / {CLINIC_GALLERY.length}
                </span>
              </div>

              {/* Carousel Previous / Next Arrows */}
              <button
                id="gallery-prev-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all z-20 focus:outline-none cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Imagem anterior"
                title="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                id="gallery-next-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all z-20 focus:outline-none cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Próxima imagem"
                title="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom info banner */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-medium text-white backdrop-blur-md bg-black/60 px-3 py-1.5 rounded-xl border border-white/25 shadow-sm z-10">
                <span className="truncate max-w-[190px] sm:max-w-[220px]">
                  {CLINIC_GALLERY[currentImageIndex].title}
                </span>
                <span className="flex items-center gap-1 text-white/90 font-semibold whitespace-nowrap text-[10px] sm:text-[11px]">
                  <Maximize2 className="w-3 h-3 text-rose-300" />
                  Ampliar
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnails Row for Fast Switching Between the 3 Images */}
          <div className="mt-3 flex items-center justify-center gap-2.5">
            {CLINIC_GALLERY.map((item, index) => {
              const isActive = index === currentImageIndex;
              return (
                <button
                  key={item.id}
                  id={`gallery-thumb-${index}`}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 p-0.5 ${
                    isActive 
                      ? 'ring-2 ring-rose-300 scale-105 shadow-[0_8px_16px_rgba(0,0,0,0.4)] bg-white/40' 
                      : 'opacity-60 hover:opacity-100 ring-1 ring-white/20 bg-white/10'
                  }`}
                  aria-label={`Ver foto ${index + 1}`}
                  title={item.title}
                >
                  <img
                    src={item.url}
                    alt={`Miniatura ${index + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#7A1526]/20 pointer-events-none rounded-lg" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Action Pill below thumbnails */}
          <div className="mt-2.5 text-center">
            <button
              id="open-clinic-image-btn"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-100 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer backdrop-blur-md shadow-sm"
            >
              <ZoomIn className="w-3.5 h-3.5 text-rose-300" />
              <span>Toque na imagem para ver em tela cheia ({currentImageIndex + 1} de {CLINIC_GALLERY.length})</span>
            </button>
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm sm:text-base text-slate-200 font-normal leading-relaxed px-2"
        >
          {CLINIC_INFO.aboutText}
        </motion.p>

        {/* 3 Pillars in Floating White Cards for High Contrast & Sophistication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-floating-white p-3 sm:p-4 rounded-2xl flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] sm:text-xs text-slate-600 leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Full-Screen Lightbox Modal to Open the Image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#7A1526] to-[#9B1B30] text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="font-heading font-bold text-sm">
                    Clínica Antares ({currentImageIndex + 1} de {CLINIC_GALLERY.length})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    id="open-original-image-link"
                    href={CLINIC_GALLERY[currentImageIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Abrir imagem original em nova aba"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Nova aba</span>
                  </a>

                  <button
                    id="close-image-modal-btn"
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors focus:outline-none cursor-pointer"
                    aria-label="Fechar visualização"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Preview Container with In-Modal Navigation */}
              <div className="relative p-2 sm:p-4 bg-slate-950 flex items-center justify-center min-h-[350px] max-h-[75vh] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={CLINIC_GALLERY[currentImageIndex].url}
                    alt={CLINIC_GALLERY[currentImageIndex].alt}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-md"
                  />
                </AnimatePresence>

                {/* Modal Previous Arrow */}
                <button
                  id="modal-prev-btn"
                  type="button"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all z-20 focus:outline-none cursor-pointer hover:scale-110 active:scale-95"
                  aria-label="Imagem anterior"
                  title="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Modal Next Arrow */}
                <button
                  id="modal-next-btn"
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all z-20 focus:outline-none cursor-pointer hover:scale-110 active:scale-95"
                  aria-label="Próxima imagem"
                  title="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom footer bar */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2 truncate max-w-[240px] sm:max-w-xs">
                  <span className="font-semibold text-[#7A1526]">
                    {CLINIC_GALLERY[currentImageIndex].title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {CLINIC_GALLERY.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentImageIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        dotIdx === currentImageIndex 
                          ? 'w-5 bg-[#7A1526]' 
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Ir para foto ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
