'use client';

import * as React from 'react';
import Image from 'next/image';

const { memo, useMemo } = React;

export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

export interface InfiniteCarouselProps {
  partners: Partner[];
  speed?: number;
}

export const InfiniteCarousel = memo(function InfiniteCarousel({
  partners,
  speed = 8
}: InfiniteCarouselProps) {
  // Duplicar múltiplas vezes para garantir loop perfeito
  const duplicatedPartners = useMemo(
    () => {
      const repeated = [];
      for (let i = 0; i < 20; i++) {
        repeated.push(...partners);
      }
      console.log('🎨 CARROSSEL CONFIG:', {
        totalParceiros: partners.length,
        duplicacoes: 20,
        totalItens: repeated.length,
        speed: speed,
        duracao: `${speed * 20}s`
      });
      return repeated;
    },
    [partners, speed]
  );

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Gradiente sutil nas bordas para fade effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 z-10 pointer-events-none"></div>

      {/* Container com animação CSS pura */}
      <div
        className="flex gap-6 items-center animate-infinite-scroll"
        style={{
          animationDuration: `${speed * 20}s`,
          willChange: 'transform',
        } as React.CSSProperties}
      >
        {duplicatedPartners.map((partner, index) => {
          const imageContent = (
            <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-green-600/20">
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                fill
                className="object-contain p-2"
                quality={85}
                sizes="160px"
                loading="lazy"
                decoding="async"
              />
            </div>
          );

          return partner.url ? (
            <a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[140px] sm:w-[160px] h-[88px] sm:h-[100px] relative hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {imageContent}
            </a>
          ) : (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-[140px] sm:w-[160px] h-[88px] sm:h-[100px] relative hover:scale-105 transition-transform duration-300"
            >
              {imageContent}
            </div>
          );
        })}
      </div>
    </div>
  );
});
