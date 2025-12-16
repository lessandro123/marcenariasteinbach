'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Trees, Recycle, Award, ChevronDown } from 'lucide-react';
import { InfiniteCarousel } from '@/components/ui/infinite-carousel';

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
  const [expandedPartnership, setExpandedPartnership] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image - Full Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/compromisso-ambiental-bg.jpg"
          alt="Compromisso ambiental - Sustentabilidade"
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

        {/* Mobile: Accordion com Ícones */}
        <div className="md:hidden space-y-4">
          {partnerships.map((partnership, index) => {
            const Icon = partnership.icon;
            const isExpanded = expandedPartnership === index;

            return (
              <motion.div
                key={partnership.title}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden"
                initial={false}
              >
                {/* Botão do Ícone */}
                <motion.button
                  onClick={() => setExpandedPartnership(isExpanded ? null : index)}
                  className="w-full p-6 flex flex-col items-center gap-3"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Ícone com gradiente */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${partnership.color} rounded-full shadow-lg flex items-center justify-center`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Título + Chevron */}
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xl font-bold text-neutral-900">
                      {partnership.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-neutral-600" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Conteúdo Expansível */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-4" />
                        <p className="text-sm font-medium text-green-600 mb-3">
                          {partnership.subtitle}
                        </p>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {partnership.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Grid 3 colunas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden md:grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-10"
        >
          {partnerships.map((partnership) => {
            const Icon = partnership.icon;
            return (
              <motion.div
                key={partnership.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${partnership.color} rounded-t-2xl`}></div>

                  {/* Icon with gradient background */}
                  <div className="relative mb-3 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r ${partnership.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-neutral-900 mb-0.5 sm:mb-1">
                      {partnership.title}
                    </h3>
                    <p className="text-sm font-medium text-green-600 mb-3 sm:mb-4">
                      {partnership.subtitle}
                    </p>
                    <p className="text-xs sm:text-base text-neutral-600 leading-snug sm:leading-relaxed">
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

          <InfiniteCarousel
            partners={partners}
            speed={0.15}
          />
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
