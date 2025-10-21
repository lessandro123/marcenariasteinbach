'use client'

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowRight,
  ChefHat,
  Bed,
  Sofa,
  Laptop,
  Bath,
  Shirt,
  Flame,
  Wine,
  CheckCircle2,
  type LucideIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const ambientes = [
  {
    id: 'cozinha',
    title: 'Cozinha Premium',
    description: 'Funcionalidade e elegância em cada detalhe',
    features: ['Ilha central', 'Marcenaria sob medida', 'Acabamentos premium'],
    image: '/images/cozinha-premium-hdr.jpg',
    color: 'from-red-600 to-red-800',
    icon: ChefHat
  },
  {
    id: 'dormitorio',
    title: 'Dormitório Sob Medida',
    description: 'Conforto e organização personalizados',
    features: ['Closet integrado', 'Cabeceira exclusiva', 'Móveis planejados'],
    image: '/images/dormitorio-sob-medida.jpg',
    color: 'from-amber-600 to-amber-800',
    icon: Bed
  },
  {
    id: 'sala',
    title: 'Sala de Estar',
    description: 'Ambiente acolhedor para momentos especiais',
    features: ['Estante integrada', 'Painel TV', 'Mesa de centro exclusiva'],
    image: '/images/sala-estar.webp',
    color: 'from-emerald-600 to-emerald-800',
    icon: Sofa
  },
  {
    id: 'escritorio',
    title: 'Home Office',
    description: 'Produtividade com design sofisticado',
    features: ['Mesa executiva', 'Estante funcional', 'Iluminação integrada'],
    image: '/images/home-office.webp',
    color: 'from-blue-600 to-blue-800',
    icon: Laptop
  },
  {
    id: 'banheiro',
    title: 'Banheiro Premium',
    description: 'Móveis resistentes à umidade',
    features: ['Gabinete sob medida', 'Espelheira exclusiva', 'Nichos integrados'],
    image: '/images/banheiro-premium.jpg',
    color: 'from-teal-600 to-teal-800',
    icon: Bath
  },
  {
    id: 'lavanderia',
    title: 'Área de Serviço',
    description: 'Organização e praticidade',
    features: ['Armários superiores', 'Bancada funcional', 'Varal retrátil'],
    image: '/images/lavanderia-premium.jpg',
    color: 'from-purple-600 to-purple-800',
    icon: Shirt
  },
  {
    id: 'varanda',
    title: 'Varanda Gourmet',
    description: 'Lazer ao ar livre com estilo',
    features: ['Churrasqueira integrada', 'Bancada externa', 'Móveis resistentes'],
    image: '/images/varanda-gourmet-renan.webp',
    color: 'from-orange-600 to-orange-800',
    icon: Flame
  },
  {
    id: 'adega',
    title: 'Adega Climatizada',
    description: 'Sofisticação para apreciadores',
    features: ['Controle de temperatura', 'Iluminação LED', 'Design exclusivo'],
    image: '/images/adega-climatizada-renan.webp',
    color: 'from-red-800 to-red-900',
    icon: Wine
  }
]

export function AmbientesShowcase() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const goToSlide = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <Section id="ambientes" className="bg-gray-50" spacing="xl">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">
            Ambientes que
            <span className="text-red-600"> Inspiram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada ambiente é único. Criamos soluções sob medida que refletem seu estilo de vida
            e maximizam a funcionalidade do seu espaço.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mb-8">
          <div className="max-w-7xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
            <CarouselContent>
              {ambientes.map((ambiente) => (
                <CarouselItem key={ambiente.id}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative h-auto min-h-[480px] sm:min-h-[600px] lg:h-[700px]">
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0">
                        <Image
                          src={ambiente.image}
                          alt={ambiente.title}
                          fill
                          className="object-cover object-center"
                          quality={90}
                          priority
                        />
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-r opacity-85 sm:opacity-85 lg:opacity-90",
                          ambiente.color
                        )} />
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex items-center justify-center py-4 sm:py-8 lg:py-12">
                        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
                          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-12 items-center lg:items-center">
                            {/* Text Content - 2 columns on large screens */}
                            <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-white space-y-1.5 sm:space-y-3 lg:space-y-5 lg:col-span-2 text-center lg:text-left w-full"
                            >
                              <div>
                                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-1 sm:mb-2 lg:mb-3">
                                  <ambiente.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white flex-shrink-0" />
                                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-['Playfair_Display'] leading-tight">
                                    {ambiente.title}
                                  </h3>
                                </div>
                                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 mb-1 sm:mb-3 lg:mb-5">
                                  {ambiente.description}
                                </p>
                              </div>

                              <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                                {ambiente.features.map((feature, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3"
                                  >
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white flex-shrink-0" />
                                    <span className="text-[10px] sm:text-sm lg:text-base xl:text-lg text-white">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>

                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="pt-2 sm:pt-3 lg:pt-5"
                              >
                                <Button
                                  variant="gold"
                                  size="sm"
                                  className="group shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-base h-9 sm:h-10 px-3 sm:px-4"
                                >
                                  Ver Projetos
                                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </motion.div>
                            </motion.div>

                            {/* Image Preview - Visible on all screens */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                              className="block w-full lg:col-span-3"
                            >
                              <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] max-h-[160px] sm:max-h-[240px] lg:max-h-none rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-white/20 floating-shadow bg-black/20 backdrop-blur-sm">
                                <Image
                                  src={ambiente.image}
                                  alt={ambiente.title}
                                  fill
                                  className="object-cover"
                                  quality={90}
                                />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="left-2 sm:left-4 bg-black/50 hover:bg-black/70 border-none text-white size-10 sm:size-12" />
            <CarouselNext className="right-2 sm:right-4 bg-black/50 hover:bg-black/70 border-none text-white size-10 sm:size-12" />
          </Carousel>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4 sm:mt-6 lg:mt-8">
            {ambientes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === current
                    ? "bg-red-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {ambientes.map((ambiente, index) => (
            <Card
              key={ambiente.id}
              className={cn(
                "p-6 cursor-pointer transition-all duration-300 hover:scale-105",
                current === index ? "ring-2 ring-red-600 bg-red-50" : ""
              )}
              onClick={() => goToSlide(index)}
            >
              <div className={cn(
                "w-12 h-12 rounded-lg mb-4 bg-gradient-to-br flex items-center justify-center",
                ambiente.color
              )}>
                <ambiente.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{ambiente.title}</h4>
              <p className="text-sm text-gray-600">{ambiente.description}</p>
            </Card>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
