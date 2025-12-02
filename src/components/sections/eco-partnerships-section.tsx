'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Trees, Recycle, Award } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const partnerships = [
  {
    icon: Award,
    title: 'Certificação FSC',
    subtitle: 'Forest Stewardship Council',
    description:
      'Trabalhamos exclusivamente com madeira certificada FSC, garantindo que cada móvel é produzido com madeira de reflorestamento e total responsabilidade ambiental.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Trees,
    title: 'Madeira Sustentável',
    subtitle: 'Reflorestamento Responsável',
    description:
      'Toda nossa matéria-prima é proveniente de áreas de reflorestamento certificadas, contribuindo para a preservação das florestas nativas e biodiversidade.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Recycle,
    title: 'Gestão de Resíduos',
    subtitle: 'Economia Circular',
    description:
      'Implementamos práticas de gestão responsável de resíduos, reciclando e reutilizando materiais sempre que possível, minimizando nosso impacto ambiental.',
    color: 'from-teal-500 to-cyan-600',
  },
];

const partners = [
  {
    name: 'Arauco',
    logo: '/images/partners/arauco.webp',
    url: 'https://www.arauco.cl/',
  },
  {
    name: 'Duratex',
    logo: '/images/partners/duratex.jpg',
    url: 'https://www.duratex.com.br/',
  },
  {
    name: 'Berneck',
    logo: '/images/partners/berneck.jpg',
    url: 'https://www.berneck.com.br/',
  },
  {
    name: 'Guararapes',
    logo: '/images/partners/guararapes.jpg',
    url: 'https://www.guararapes.com.br/',
  },
  {
    name: 'Greenplac',
    logo: '/images/partners/greenplac.webp',
    url: 'https://www.greenplac.com.br/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

export function EcoPartnershipsSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    })
  );

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image - Full Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/floresta-sustentabilidade.png"
          alt="Floresta certificada FSC - Sustentabilidade"
          fill
          className="object-cover object-center blur-sm"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Overlay escuro suave */}
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Compromisso Ambiental
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto font-bold">
            Qualidade e responsabilidade ambiental caminham juntas. Nosso compromisso com o meio ambiente é tão importante quanto a excelência dos nossos móveis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {partnerships.map((partnership) => {
            const Icon = partnership.icon;
            return (
              <motion.div
                key={partnership.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${partnership.color} rounded-t-2xl`}></div>

                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${partnership.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-1">
                      {partnership.title}
                    </h3>
                    <p className="text-sm font-medium text-green-600 mb-4">
                      {partnership.subtitle}
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      {partnership.description}
                    </p>
                  </div>

                  {/* Hover effect decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partners Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl font-bold text-white mb-1">
              Nossos Parceiros Certificados
            </h3>
            <p className="text-sm text-white font-medium">
              Trabalhamos com os maiores fornecedores de madeira sustentável do Brasil
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            <Carousel
              opts={{
                align: 'center',
                loop: true,
                slidesToScroll: 1,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {partners.map((partner) => (
                  <CarouselItem
                    key={partner.name}
                    className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-square bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1 hover:scale-105 hover:border-green-600/30 transition-all duration-300 flex items-center justify-center border border-green-600/10 cursor-pointer"
                      >
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          width={90}
                          height={90}
                          className="object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-0 -translate-x-8 bg-white/95 hover:bg-white border-green-600/30 text-green-700 shadow-md size-8" />
              <CarouselNext className="right-0 translate-x-8 bg-white/95 hover:bg-white border-green-600/30 text-green-700 shadow-md size-8" />
            </Carousel>
          </div>
        </motion.div>

        {/* Mensagem Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">
            Juntos por um Futuro Sustentável
          </h3>
          <p className="text-lg text-white max-w-3xl mx-auto font-bold">
            Há mais de 70 anos, unimos tradição e inovação. Hoje, nosso compromisso com a sustentabilidade garante que cada móvel não apenas embeleza seu lar, mas também respeita e preserva o meio ambiente para as próximas gerações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
