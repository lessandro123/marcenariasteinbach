'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

export interface InfiniteCarouselProps {
  partners: Partner[];
  speed?: number;
}

export function InfiniteCarousel({ partners, speed = 30 }: InfiniteCarouselProps) {
  // Duplicar os parceiros para criar efeito infinito
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Gradiente sutil nas bordas para fade effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 z-10 pointer-events-none"></div>

      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: [0, -100 / 3 + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
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
              />
            </div>
          );

          return partner.url ? (
            <a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[160px] h-[100px] relative hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {imageContent}
            </a>
          ) : (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-[160px] h-[100px] relative hover:scale-105 transition-transform duration-300"
            >
              {imageContent}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
