'use client';

import { motion } from 'framer-motion';
import { Leaf, Trees, Recycle, Award } from 'lucide-react';
import { InfiniteCarousel, Partner } from '@/components/ui/infinite-carousel';

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

const partners: Partner[] = [
  {
    name: 'Arauco',
    logo: '/images/partners/arauco.webp',
  },
  {
    name: 'Duratex',
    logo: '/images/partners/duratex.jpg',
  },
  {
    name: 'Berneck',
    logo: '/images/partners/berneck.jpg',
  },
  {
    name: 'Guararapes',
    logo: '/images/partners/guararapes.jpg',
  },
  {
    name: 'Greenplac',
    logo: '/images/partners/greenplac.webp',
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
  return (
    <section className="py-24 bg-gradient-to-b from-green-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            Sustentabilidade
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Compromisso Ambiental
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
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
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
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
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold text-neutral-900 mb-2">
              Nossos Parceiros Certificados
            </h3>
            <p className="text-neutral-600">
              Trabalhamos com os maiores fornecedores de madeira sustentável do Brasil
            </p>
          </div>
          <InfiniteCarousel partners={partners} speed={8} />
        </motion.div>

        {/* Additional info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Juntos por um Futuro Sustentável
            </h3>
            <p className="text-lg text-green-50 max-w-3xl mx-auto">
              Há mais de 70 anos, unimos tradição e inovação. Hoje, nosso compromisso com a sustentabilidade garante que cada móvel não apenas embeleza seu lar, mas também respeita e preserva o meio ambiente para as próximas gerações.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
