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
      className={`flex items-start gap-4 md:gap-8 group flex-row md:items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Node */}
      <div className="flex-shrink-0 relative">
        <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
          item.highlight
            ? 'bg-gradient-to-br from-[var(--red-primary)] to-red-700 text-white'
            : 'bg-white border-2 md:border-4 border-red-600 text-red-600'
        }`}>
          <Icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>

        {/* Timeline Line */}
        {index < timeline.length - 1 && (
          <div className="absolute top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-16 md:h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 text-left ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`inline-block p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:max-w-md ${
          item.highlight ? 'ring-2 ring-[var(--red-primary)]/20 bg-gradient-to-br from-white to-[var(--red-primary)]/5' : ''
        }`}>
          <div className={`text-xl md:text-2xl font-bold ${item.highlight ? 'text-[var(--red-primary)]' : 'text-red-600'} mb-2`}>
            {item.year}
          </div>
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">
            {item.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Spacer for opposite side - only on desktop */}
      <div className="hidden md:block flex-1"></div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <Section id="sobre" className="relative overflow-hidden" spacing="xl">
      {/* Background Image - Desktop */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/images/ferramentas-marcenaria.jpg"
          alt="Ferramentas de marcenaria artesanal - Tradição Steinbach"
          fill
          className="object-cover object-center blur-sm"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Background Image - Mobile */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src="/images/ferramentas-detalhe-mobile.jpg"
          alt="Detalhes de ferramentas de marcenaria artesanal"
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
          className="text-center mb-12 md:mb-24 lg:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8 font-['Playfair_Display']">
            Nossa
            <span className="text-red-600"> História</span>
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-12 px-4">
            Três gerações dedicadas à arte da marcenaria. Uma jornada que começou em 1954
            e continua evoluindo, sempre mantendo os valores familiares e a paixão pela qualidade.
          </p>

          {/* Family Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 md:space-x-3 lg:space-x-4 bg-gradient-to-r from-[var(--red-primary)] to-red-700 text-white rounded-full px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 shadow-lg"
          >
            <Heart className="w-5 h-5 md:w-6 md:h-6" />
            <div className="text-left">
              <div className="font-bold text-base md:text-lg">Tradição Familiar</div>
              <div className="text-xs md:text-sm opacity-90">3 Gerações • 70 Anos</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Banner dos Fundadores */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12 md:mb-20 lg:mb-28"
        >
          <div className="relative bg-gradient-to-br from-gray-50 via-white to-red-50/30 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--red-primary)]/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--gold-primary)]/10 to-transparent rounded-tl-full"></div>

            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Título da seção */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="inline-block"
                >
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 font-['Playfair_Display'] mb-2 lg:mb-4">
                    Onde Tudo Começou
                  </h3>
                  <div className="h-1 w-24 lg:w-32 bg-gradient-to-r from-[var(--red-primary)] to-[var(--gold-primary)] mx-auto rounded-full"></div>
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
                <div className="relative bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl">
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
                  <div className="mt-3 md:mt-4 lg:mt-6 text-center">
                    <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-900 mb-1">
                      Germano José Steinbach e Maria Valmira Assing Steinbach
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-2">
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
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
                <p className="text-gray-700 italic text-xs md:text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed">
                  &ldquo;Com dedicação e amor pelo ofício, iniciaram uma jornada que atravessaria gerações,
                  construindo não apenas móveis, mas histórias de família.&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-16 lg:space-y-20 mb-12 md:mb-20 lg:mb-28">
          {timeline.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>

        {/* Values Section - Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-['Playfair_Display']">
              Nossos Valores
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-primary to-gold-primary mx-auto rounded-full mb-6" />
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
              Princípios que guiam cada projeto e nos conectam às nossas raízes
            </p>
          </motion.div>
        </div>

        {/* Values Cards - Independentes e Flutuantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
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
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 md:p-10 text-center h-full flex flex-col items-center justify-center hover:scale-105 border border-gray-100">
                {/* Ícone */}
                <div className="text-5xl md:text-6xl mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>

                {/* Título */}
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-5">
                  {value.title}
                </h4>

                {/* Divisor Decorativo */}
                <div className="w-16 h-1 bg-gradient-to-r from-red-primary to-gold-primary rounded-full mb-4 md:mb-5" />

                {/* Descrição */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Mantida Separada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg p-8 md:p-10 border border-white/20 text-center max-w-3xl mx-auto"
        >
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 px-4 leading-relaxed">
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
      </Container>
    </Section>
  )
}