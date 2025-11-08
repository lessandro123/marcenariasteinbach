'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface Partner {
  name: string;
  logo: string;
}

export interface InfiniteCarouselProps {
  partners: Partner[];
  speed?: number;
}

export function InfiniteCarousel({ partners, speed = 30 }: InfiniteCarouselProps) {
  // Duplicar os parceiros para criar efeito infinito
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>

      <motion.div
        className="flex gap-16 items-center"
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
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-[200px] h-[100px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              fill
              className="object-contain"
              quality={85}
              sizes="200px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
