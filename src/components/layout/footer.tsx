import * as React from "react"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Award } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function Footer() {
  return (
    <Section variant="dark" spacing="lg" className="border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Empresa */}
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-bold text-white mb-2">
                <span className="text-red-500">STEINBACH</span>
                <div className="text-base font-normal text-gray-300 -mt-1">
                  Marcenaria
                </div>
              </div>
              <div className="flex items-center space-x-2 text-red-primary">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">71 anos de tradição</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desde 1954, criamos móveis sob medida que transformam ambientes em experiências únicas. Tradição familiar, qualidade premium e inovação em cada projeto.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>(47) 3055-3500</div>
                  <div>(47) 99999-9999</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  contato@steinbach.com.br
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Rua das Palmeiras, 1500<br />
                  Centro - Blumenau, SC<br />
                  CEP: 89010-120
                </div>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Funcionamento</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div className="font-medium">Showroom</div>
                  <div>Segunda à Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                  <div className="text-gray-400 mt-1">Domingo: Fechado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links e Redes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Siga-nos</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <a href="#sobre" className="block hover:text-white transition-colors">
                  Nossa História
                </a>
                <a href="#projetos" className="block hover:text-white transition-colors">
                  Projetos Realizados
                </a>
                <a href="#contato" className="block hover:text-white transition-colors">
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Steinbach Marcenaria. Todos os direitos reservados. 
            <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0">
              CNPJ: 12.345.678/0001-90
            </span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com excelência artesanal desde 1954
          </p>
        </div>
      </Container>
    </Section>
  )
}