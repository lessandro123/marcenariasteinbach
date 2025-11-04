'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

// Cube 3D Icon Component - Isometric
function Cube3DIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Isometric Cube */}
      {/* Top face */}
      <path
        d="M 50 20 L 75 35 L 50 50 L 25 35 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Left face */}
      <path
        d="M 25 35 L 25 65 L 50 80 L 50 50 Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Right face */}
      <path
        d="M 50 50 L 50 80 L 75 65 L 75 35 Z"
        fill="currentColor"
        opacity="0.75"
      />

      {/* Edges for definition */}
      <path
        d="M 50 20 L 75 35 L 50 50 L 25 35 Z M 25 35 L 25 65 L 50 80 M 50 80 L 75 65 L 75 35"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

export function ArProjectsSection() {
  return (
    <Section id="projetos-3d" className="bg-white" spacing="xl">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - VR/AR Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main VR Icon with Gradient Background */}
            <div className="relative bg-gradient-to-br from-red-50 via-amber-50 to-red-50 rounded-3xl p-12 lg:p-16 shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-red-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>

              {/* VR Image */}
              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/vr-headset.jpg"
                      alt="Pessoa usando óculos de realidade virtual para visualizar projetos em 3D"
                      width={320}
                      height={320}
                      className="w-64 h-64 lg:w-80 lg:h-80 object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Icons */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1] as const
                    }}
                    className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl"
                  >
                    <Sparkles className="w-8 h-8 text-amber-600" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1] as const,
                      delay: 0.5
                    }}
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                  >
                    <Cube3DIcon className="w-12 h-12 text-red-600" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1] as const,
                      delay: 1
                    }}
                    className="absolute top-1/2 -right-8 bg-white rounded-2xl p-3 shadow-xl"
                  >
                    <Eye className="w-8 h-8 text-red-600" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Tecnologia de Ponta</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-['Playfair_Display']">
              Visualize Seu Projeto em
              <span className="text-red-600"> Realidade Aumentada</span>
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Experimente uma nova forma de planejar seus móveis sob medida. Com nossa tecnologia de
              <strong className="text-red-600"> Realidade Aumentada</strong>, você visualiza seu projeto
              de forma realista antes mesmo da execução, garantindo que cada detalhe esteja perfeito.
            </p>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              {[
                {
                  title: "Visualização Realista em 3D",
                  description: "Veja como seus móveis ficarão no ambiente real com precisão fotorrealística"
                },
                {
                  title: "Alterações em Tempo Real",
                  description: "Teste diferentes acabamentos, cores e configurações instantaneamente"
                },
                {
                  title: "Tomada de Decisão Segura",
                  description: "Aprove cada detalhe do projeto antes de iniciar a produção"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <a
                href="https://wa.me/5548996055656?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20projeto%20em%203D/Realidade%20Aumentada."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="gold"
                  size="lg"
                  className="group shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Solicitar Projeto em 3D
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
