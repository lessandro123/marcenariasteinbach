'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Users, Hammer, Award, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const timeline = [
  {
    year: '1954',
    title: 'Fundação da Empresa',
    description: 'Início da tradição familiar com Germano José Steinbach, criando os primeiros móveis artesanais.',
    icon: Hammer,
    highlight: true
  },
  {
    year: '1975',
    title: 'Expansão do Negócio',
    description: 'Abertura do primeiro showroom e incorporação de técnicas modernas de marcenaria.',
    icon: Users,
    highlight: false
  },
  {
    year: '1995',
    title: 'Segunda Geração',
    description: 'Os filhos assumem a empresa, modernizando processos e expandindo o portfólio.',
    icon: Award,
    highlight: false
  },
  {
    year: '2010',
    title: 'Inovação Tecnológica',
    description: 'Investimento em maquinário de alta precisão e design 3D para projetos.',
    icon: Calendar,
    highlight: false
  },
  {
    year: '2025',
    title: 'Legacy Premium',
    description: 'Terceira geração mantém a tradição com visão contemporânea e sustentável.',
    icon: Heart,
    highlight: true
  }
]

function TimelineItem({ item, index }: { item: typeof timeline[0], index: number }) {
  const Icon = item.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} group`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-md ${
          item.highlight ? 'ring-2 ring-[var(--red-primary)]/20 bg-gradient-to-br from-white to-[var(--red-primary)]/5' : ''
        }`}>
          <div className={`text-2xl font-bold ${item.highlight ? 'text-[var(--red-primary)]' : 'text-red-600'} mb-2`}>
            {item.year}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Timeline Node */}
      <div className="flex-shrink-0 relative">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
          item.highlight 
            ? 'bg-gradient-to-br from-[var(--red-primary)] to-red-700 text-white' 
            : 'bg-white border-4 border-red-600 text-red-600'
        }`}>
          <Icon className="w-8 h-8" />
        </div>
        
        {/* Timeline Line */}
        {index < timeline.length - 1 && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
        )}
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1"></div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <Section id="sobre" className="relative overflow-hidden" spacing="xl">
      {/* Background Image com blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ferramentas-marcenaria.jpg"
          alt="Ferramentas de marcenaria artesanal - Tradição Steinbach"
          fill
          className="object-cover object-center blur-sm"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Overlay escuro suave */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Playfair_Display']">
            Nossa
            <span className="text-red-600"> História</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Três gerações dedicadas à arte da marcenaria. Uma jornada que começou em 1954
            e continua evoluindo, sempre mantendo os valores familiares e a paixão pela qualidade.
          </p>
          
          {/* Family Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--red-primary)] to-red-700 text-white rounded-full px-8 py-4 shadow-lg"
          >
            <Heart className="w-6 h-6" />
            <div className="text-left">
              <div className="font-bold text-lg">Tradição Familiar</div>
              <div className="text-sm opacity-90">3 Gerações • 70 Anos</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Banner dos Fundadores */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-gradient-to-br from-gray-50 via-white to-red-50/30 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--red-primary)]/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--gold-primary)]/10 to-transparent rounded-tl-full"></div>

            <div className="relative p-8 sm:p-12">
              {/* Título da seção */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="inline-block"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Playfair_Display'] mb-2">
                    Onde Tudo Começou
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-[var(--red-primary)] to-[var(--gold-primary)] mx-auto rounded-full"></div>
                </motion.div>
              </div>

              {/* Imagem dos Fundadores */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative group"
              >
                {/* Frame decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--red-primary)] to-[var(--gold-primary)] rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>

                {/* Container da imagem */}
                <div className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    {/* Efeito sépia/vintage overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-amber-900/15 z-10 mix-blend-multiply"></div>

                    <Image
                      src="/images/fundadores-steinbach.webp"
                      alt="Germano José Steinbach e Maria Valmira Assing Steinbach - Fundadores da Marcenaria Steinbach em 1954"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                      priority
                    />
                  </div>

                  {/* Legenda dentro do frame */}
                  <div className="mt-4 text-center">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      Germano José Steinbach e Maria Valmira Assing Steinbach
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4 text-red-600" />
                      Fundadores • 1954
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Citação ou texto adicional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-700 italic text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  &ldquo;Com dedicação e amor pelo ofício, iniciaram uma jornada que atravessaria gerações,
                  construindo não apenas móveis, mas histórias de família.&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16 mb-20">
          {timeline.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
              Nossos Valores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam cada projeto e nos conectam às nossas raízes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tradição',
                description: 'Técnicas artesanais transmitidas através de gerações',
                icon: '🏛️'
              },
              {
                title: 'Qualidade',
                description: 'Materiais premium e acabamento impecável',
                icon: '⭐'
              },
              {
                title: 'Inovação',
                description: 'Tecnologia moderna aliada ao saber tradicional',
                icon: '🚀'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center space-y-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 pt-8 border-t border-gray-100"
          >
            <p className="text-lg text-gray-700 mb-6">
              Conheça nosso showroom e viva essa experiência única
            </p>
            <a
              href="https://wa.me/5548996055656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="gold"
                size="lg"
                className="group shadow-xl hover:scale-105 transition-all duration-300"
              >
                Agendar Visita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}