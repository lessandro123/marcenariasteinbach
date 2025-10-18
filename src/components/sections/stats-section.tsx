'use client'

import * as React from "react"
import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Users, Award, Shield } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const stats = [
  {
    id: 'years',
    icon: Calendar,
    number: 71,
    suffix: '',
    label: 'Anos de Tradição',
    description: 'Desde 1954 criando móveis únicos',
    color: 'text-red-500'
  },
  {
    id: 'satisfaction',
    icon: Users,
    number: 99,
    suffix: '%',
    label: 'Satisfação dos Clientes',
    description: 'Excelência reconhecida pelos clientes',
    color: 'text-[var(--red-primary)]'
  },
  {
    id: 'projects',
    icon: Award,
    number: 650,
    suffix: '+',
    label: 'Projetos Realizados',
    description: 'Sonhos transformados em realidade',
    color: 'text-emerald-500'
  },
  {
    id: 'confidence',
    icon: Shield,
    number: 100,
    suffix: '%',
    label: 'Confiança Premium',
    description: 'Garantia e qualidade assegurada',
    color: 'text-blue-500'
  }
]

function useCountAnimation(end: number, start: number = 0, duration: number = 2000) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (end - start) * easeOutQuart)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, start, end, duration])

  return { count, setIsVisible }
}

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  const { count, setIsVisible } = useCountAnimation(stat.number, 0, 2500)
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      // Delay each counter based on index
      setTimeout(() => setIsVisible(true), index * 200)
    }
  }, [inView, index, setIsVisible])

  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center space-y-4 group"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`w-16 h-16 mx-auto rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 ${stat.color}`}
      >
        <Icon className="w-8 h-8" />
      </motion.div>

      {/* Number */}
      <div className="space-y-2">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          {count}{stat.suffix}
        </div>
        <div className="text-lg sm:text-xl font-semibold text-[var(--red-primary)]">
          {stat.label}
        </div>
        <div className="text-sm sm:text-base text-gray-300 max-w-xs mx-auto">
          {stat.description}
        </div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <Section variant="dark" spacing="xl" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Playfair_Display']">
            Números que
            <span className="text-[var(--red-primary)]"> Falam por Si</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de seis décadas construindo confiança, qualidade e satisfação. 
            Cada número representa nossa dedicação à excelência.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Faça parte dessa história de sucesso
          </p>
          <div className="inline-flex items-center space-x-2 bg-[var(--red-primary)]/20 backdrop-blur-sm rounded-full px-6 py-3 border border-[var(--red-primary)]/30">
            <Award className="w-5 h-5 text-[var(--red-primary)]" />
            <span className="text-[var(--red-primary)] font-semibold">
              Próximo projeto: O seu
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}