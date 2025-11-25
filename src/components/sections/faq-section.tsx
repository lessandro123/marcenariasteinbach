'use client';

import { motion } from 'framer-motion';
import Accordion, { type AccordionItem } from '@/components/ui/accordion';
import { faqData } from '@/lib/faq-data';
import { getFAQByCategoria } from '@/lib/faq-por-categoria';

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
      ease: [0.6, 0.05, 0.01, 0.99] as const,
    },
  },
};

interface FaqSectionProps {
  categoria?: string;
}

export default function FaqSection({ categoria }: FaqSectionProps) {
  // Se categoria for fornecida, usa FAQs específicas. Senão, usa FAQs genéricas
  const faqDataToUse = categoria ? getFAQByCategoria(categoria) : faqData;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-[2px] bg-red-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos móveis planejados, processo de compra,
            garantias e muito mais. Nossa equipe está sempre pronta para atendê-lo.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {faqDataToUse.map((category) => {
            // Converter FAQItems para AccordionItems
            const accordionItems: AccordionItem[] = category.items.map((item) => ({
              id: item.id,
              title: item.question,
              content: item.answer,
            }));

            return (
              <motion.div key={category.id} variants={itemVariants}>
                {/* Category Title */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <div className="w-16 h-[2px] bg-red-primary"></div>
                </div>

                {/* Accordion */}
                <Accordion items={accordionItems} allowMultiple={false} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-red-50 to-gold-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você e criar o projeto dos seus sonhos.
            Entre em contato agora mesmo!
          </p>
          <a
            href="https://wa.me/5548999999999?text=Olá! Gostaria de mais informações sobre móveis planejados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-primary hover:bg-red-hover text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
