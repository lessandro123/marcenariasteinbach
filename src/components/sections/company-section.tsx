'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  MapPin,
  Award,
  Leaf,
  Ruler,
  Users,
  CheckCircle2,
  Home,
  Building2,
  ArrowRight
} from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed"

const diferenciais = [
  {
    icon: Ruler,
    title: 'Projetos 3D',
    description: 'Visualização realística antes da execução com tecnologia de ponta'
  },
  {
    icon: Award,
    title: 'Orçamento sem Compromisso',
    description: 'Consulta sem compromisso para seu projeto personalizado'
  },
  {
    icon: CheckCircle2,
    title: 'Entrega Garantida',
    description: '100% de confiança no prazo e qualidade acordados'
  },
  {
    icon: Leaf,
    title: 'Certificação FSC',
    description: 'Madeira de reflorestamento com responsabilidade ambiental'
  }
]

const ambientes = [
  { nome: 'Cozinhas', projetos: 126, icon: Home },
  { nome: 'Áreas de Serviço', projetos: 84, icon: Building2 },
  { nome: 'Home Office', projetos: 48, icon: Building2 },
  { nome: 'Banheiros', projetos: 32, icon: Home },
  { nome: 'Closets', projetos: 30, icon: Home },
  { nome: 'Home Theater', projetos: 28, icon: Building2 },
  { nome: 'Dormitórios', projetos: 20, icon: Home },
  { nome: 'Salas de Jantar', projetos: 14, icon: Home }
]

export function CompanySection() {
  return (
    <Section id="sobre-nos" className="bg-white" spacing="xl">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">
            Sobre
            <span className="text-red-600"> Nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma marcenaria familiar de Palhoça/SC, especializada em móveis planejados de luxo
            que transformam ambientes com elegância e funcionalidade.
          </p>
        </motion.div>

        {/* Company Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quem Somos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/sobre-nos-marcenaria.jpg)',
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-black/60" />

            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Quem Somos</h3>
              </div>
              <div className="space-y-4 text-gray-100 leading-relaxed">
                <p>
                  A <strong className="text-white font-bold">Marcenaria Steinbach</strong> é uma empresa familiar
                  com <strong className="text-red-600 font-bold">71 anos de história</strong>, passando por três gerações
                  que mantêm viva a tradição de criar móveis únicos e de alta qualidade.
                </p>
                <p>
                  Combinamos técnicas artesanais tradicionais com tecnologia de ponta, oferecendo
                  projetos 3D que permitem visualizar cada detalhe antes da execução.
                </p>
                <p>
                  Nossa equipe especializada atende cada cliente de forma personalizada, garantindo
                  que cada projeto reflita o estilo e as necessidades específicas de cada ambiente.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Localização e Atuação */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900">Nossa Atuação</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Localização</h4>
                <p className="text-gray-600">
                  Palhoça, Santa Catarina<br />
                  Atendendo toda a <strong>Grande Florianópolis</strong>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Ambientes que Transformamos</h4>
                <div className="grid grid-cols-2 gap-2">
                  {ambientes.map((ambiente) => (
                    <div
                      key={ambiente.nome}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{ambiente.nome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-red-100">
                <p className="text-sm text-gray-500 mb-4">
                  Mais de <strong className="text-red-600">650 projetos</strong> entregues com excelência
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seção de Localização - Mapa Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-red-600" />
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 font-['Playfair_Display']">
                Nossa Localização
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visite nosso showroom em Palhoça/SC e conheça de perto a qualidade dos nossos móveis planejados
            </p>
          </div>

          <GoogleMapEmbed className="h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200" />
        </motion.div>

        {/* Showcase do Showroom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-16 sm:mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Imagem principal */}
            <div className="relative aspect-[21/9] sm:aspect-[16/7] lg:aspect-[21/9]">
              <Image
                src="/images/showroom-fachada.png"
                alt="Fachada da Marcenaria Steinbach em Palhoça/SC"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-6 sm:p-8 lg:p-12">
                <Container>
                  <div className="max-w-3xl">
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 font-['Playfair_Display']"
                    >
                      Visite Nosso Espaço em Palhoça
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-base sm:text-lg text-gray-100 mb-6 max-w-2xl"
                    >
                      Conheça de perto nossos projetos, materiais e acabamentos.
                      Nossa equipe está pronta para transformar suas ideias em realidade.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-wrap gap-2 sm:gap-4"
                    >
                      <a
                        href="https://www.google.com/maps?ll=-27.62977,-48.661946&z=18&t=m&hl=pt-PT&gl=US&mapclient=embed&cid=9840515860392962567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "default", size: "default" }) + " bg-[var(--red-primary)] hover:bg-[var(--red-hover)] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer sm:px-6 sm:py-3 text-sm sm:text-base"}
                      >
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Ver Localização
                      </a>
                      <a
                        href="https://wa.me/5548996055656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="default"
                          className="bg-white/95 backdrop-blur-sm border-white text-gray-900 hover:bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 sm:px-6 sm:py-3 text-sm sm:text-base"
                        >
                          Agendar Visita
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                        </Button>
                      </a>
                    </motion.div>
                  </div>
                </Container>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--gold-primary)]/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 font-['Playfair_Display']">
            Nossos Diferenciais
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Sustentabilidade Destacada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 sm:p-12 shadow-lg border border-green-100 mb-16 overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/floresta-sustentabilidade.png"
              alt="Floresta certificada FSC - Madeira sustentável"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Overlay - Tom verde transparente */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-green-900/85"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <Leaf className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Compromisso com a Sustentabilidade
              </h3>
              <p className="text-lg text-white/95 mb-4">
                Trabalhamos exclusivamente com <strong className="text-green-200 font-bold">madeira certificada FSC</strong>,
                garantindo que cada móvel é produzido com responsabilidade ambiental e madeira de reflorestamento.
              </p>
              <p className="text-sm text-white/80">
                Certificação FSC - Forest Stewardship Council
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 shadow-lg"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
            Pronto para Transformar Seu Espaço?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar o ambiente dos seus sonhos
            com a qualidade e tradição Steinbach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5548996055656?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sem%20compromisso%20para%20m%C3%B3veis%20planejados."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="group w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Solicitar Orçamento sem Compromisso
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://wa.me/5548996055656?text=Ol%C3%A1!%20Gostaria%20de%20ver%20o%20portf%C3%B3lio%20de%20projetos%20da%20Marcenaria%20Steinbach."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Ver Nossos Projetos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
