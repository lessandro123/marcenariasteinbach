'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MessageCircle,
  ChefHat,
  Bed,
  Sofa,
  Laptop,
  Bath,
  Shirt,
  Coffee,
  Wine,
  Sparkles,
  Monitor,
  BookOpen,
  MonitorCheck,
  Lightbulb,
  Frame,
  Droplets,
  Archive,
  Table,
  Wind,
  Flame,
  Thermometer,
  LucideIcon
} from 'lucide-react';
import { ProjetoDetalhes } from '@/lib/projetos-data';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

interface ProjetoDetalhesProps {
  projeto: ProjetoDetalhes;
}

// Mapa de ícones
const iconMap: Record<string, LucideIcon> = {
  ChefHat,
  Bed,
  Sofa,
  Laptop,
  Bath,
  Shirt,
  Coffee,
  Wine,
  Sparkles,
  Monitor,
  BookOpen,
  MonitorCheck,
  Lightbulb,
  Frame,
  Droplets,
  Archive,
  Table,
  Wind,
  Flame,
  Thermometer
};

export function ProjetoDetalhesSection({ projeto }: ProjetoDetalhesProps) {
  const whatsappNumber = '5548996055656'; // (48) 99605-5656
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(projeto.whatsappMessage)}`;

  return (
    <>
      {/* Hero Section com Imagem de Fundo + Conteúdo */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={projeto.imagemPrincipal}
            alt={projeto.title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay escuro para profundidade e legibilidade */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Conteúdo Centralizado */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {projeto.title}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                {projeto.heroDescription}
              </p>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* Funcionalidades */}
      <Section variant="default" className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className={`h-1 w-20 bg-gradient-to-r ${projeto.color} mx-auto mb-6`} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Funcionalidades e Elegância
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada detalhe é pensado para proporcionar a melhor experiência
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projeto.features.map((feature, index) => {
              const Icon = iconMap[feature.iconName] || ChefHat;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 border-gray-200 group`}>
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${projeto.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Galeria de Imagens - Regra 60-30-10 */}
      <Section variant="default" className="py-20 bg-white">
        {/* 60% - Background branco dominante */}
        <Container>
          {/* Header com 30% vermelho */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* 30% - Barra vermelha de destaque */}
            <div className="inline-block mb-4">
              <div className={`h-2 w-24 bg-gradient-to-r ${projeto.color} rounded-full mx-auto mb-6`} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Galeria do Projeto
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja mais detalhes e inspire-se com nossos projetos realizados
            </p>
          </motion.div>

          {/* Grid de Cards - 60% branco com 30% detalhes vermelhos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projeto.galeria.map((imagem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 border-gray-100 hover:border-red-500/50 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl">
                  <CardContent className="p-0 relative aspect-[4/3]">
                    <Image
                      src={imagem}
                      alt={`${projeto.title} - Imagem ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* 10% - Overlay sutil de acento */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* 10% - Badge de número com acento dourado */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {index + 1} / {projeto.galeria.length}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section variant="default" className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-4">
              <div className={`h-1 w-20 bg-gradient-to-r ${projeto.color} mx-auto mb-6`} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco e transforme seu espaço com a qualidade Steinbach
            </p>
            <Button
              asChild
              variant="whatsapp"
              size="lg"
              className="group shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg px-8 py-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Falar com Especialista
              </a>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
