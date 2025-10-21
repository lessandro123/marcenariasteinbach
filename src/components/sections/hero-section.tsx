'use client'

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Phone, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function HeroSection() {
  return (
    <Section
      className="relative min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-72px)] lg:min-h-screen flex items-center justify-center overflow-hidden"
      spacing="xl"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#8b4513]">
        <Image
          src="/hero-living-room.jpg"
          alt="Sala de estar luxuosa com móveis sob medida Steinbach"
          fill
          className="object-cover object-center sm:object-[center_15%] scale-100 sm:scale-105 lg:scale-110"
          quality={85}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>

      <Container className="relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 px-2 sm:px-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-red-primary/20 backdrop-blur-sm rounded-full px-6 py-3 border border-red-primary/30"
          >
            <Award className="w-5 h-5 text-[var(--red-primary)]" />
            <span className="text-[var(--red-primary)] font-semibold text-sm">
              71 Anos de Excelência
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="text-white font-['Playfair_Display']">
                STEINBACH
              </span>
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[var(--red-primary)] font-light font-['Playfair_Display'] -mt-1 sm:-mt-2">
                Marcenaria Premium
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Transformamos sonhos em móveis únicos.
              <span className="text-[var(--red-primary)] font-medium">
                &nbsp;Tradição familiar desde 1954.
              </span>
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center"
          >
            <Button 
              variant="gold" 
              size="xl" 
              className="group shadow-2xl min-w-[200px] hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Orçamento Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document.getElementById('ambientes')?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
        >
          <div className="w-1 h-3 bg-[var(--red-primary)] rounded-full mt-2"></div>
        </motion.button>
      </motion.div>
    </Section>
  )
}