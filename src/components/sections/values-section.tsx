'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

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
      ease: [0, 0, 0.2, 1],
    },
  },
};

export function ValuesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Nossos Princípios
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mais de 70 anos de tradição, excelência e compromisso com a qualidade
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-red-primary" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                    {value.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
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
