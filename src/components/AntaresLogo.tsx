import React from 'react';

interface AntaresLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  isHero?: boolean;
}

export const AntaresLogo: React.FC<AntaresLogoProps> = ({
  size = 'lg',
  className = '',
  isHero = false,
}) => {
  // Sizing definitions preserving the original aspect ratio (1280 x 1154)
  const sizeMap = {
    sm: 'w-24 max-h-12',
    md: 'w-36 max-h-16',
    lg: 'w-56 sm:w-64 max-h-28 sm:max-h-32',
    xl: 'w-64 sm:w-80 md:w-96 max-w-[92vw]',
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`relative inline-flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Ambient 3D luxury back-lighting & soft depth glow (does not touch or alter the logo itself) */}
      <div 
        className={`absolute rounded-full pointer-events-none transition-all duration-700 ${
          isHero 
            ? 'w-72 h-72 sm:w-96 sm:h-96 -top-6 bg-gradient-to-tr from-[#7A1526]/20 via-[#9B1B30]/15 to-amber-500/10 blur-3xl opacity-80' 
            : 'w-24 h-24 bg-[#7A1526]/15 blur-xl opacity-60'
        }`}
        aria-hidden="true"
      />

      {/* Official transparent logo image preserving all original design, typography, star, tooth & proportions */}
      <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
        <img
          src="/assets/antares_logo_original.png"
          alt="Clínica Antares Odontologia — Logo Oficial"
          className={`${currentSize} h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(122,21,38,0.22)]`}
          style={{ imageRendering: 'auto' }}
        />
      </div>
    </div>
  );
};
