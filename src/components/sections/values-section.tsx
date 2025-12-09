'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart, ChevronDown } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Missão',
    description:
      'Criar móveis planejados sob medida que transformam ambientes em espaços únicos e funcionais, unindo design sofisticado, qualidade superior e atendimento personalizado para superar as expectativas de cada cliente.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description:
      'Ser reconhecida como referência em móveis planejados de luxo em Santa Catarina, mantendo a tradição de excelência iniciada há mais de 70 anos e expandindo nossa presença com projetos que inspiram e encantam.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description:
      'Qualidade Superior • Tradição Familiar • Confiança e Credibilidade • Excelência no Atendimento • Compromisso com o Cliente • Inovação e Design • Respeito à História',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

export function ValuesSection() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4">
            Nossos Princípios
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-primary to-gold-primary mx-auto rounded-full mb-4 md:mb-6" />
          <p className="text-sm md:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Mais de 70 anos de tradição, excelência e compromisso com a qualidade
          </p>
        </motion.div>

        {/* Mobile: Ícones com Accordion */}
        <div className="md:hidden space-y-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isExpanded = expandedValue === index;

            return (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={false}
              >
                {/* Botão do Ícone */}
                <motion.button
                  onClick={() => setExpandedValue(isExpanded ? null : index)}
                  className="w-full p-6 flex flex-col items-center gap-3"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Ícone com gradiente vermelho */}
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Título */}
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xl font-bold text-neutral-900">
                      {value.title}
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
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Cards completos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-red-100 transition-colors duration-300">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-red-primary" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">
                    {value.title}
                  </h3>

                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
