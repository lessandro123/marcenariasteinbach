'use client'

import * as React from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { WhatsAppIcon } from "@/components/icons"
import { useMenu } from "@/contexts/MenuContext"

export function Header() {
  const { mobileMenuOpen, toggleMenu } = useMenu()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b-2 border-red-primary z-50 overflow-x-hidden">
      {/* Mobile/Desktop menu button - Left Corner */}
      <button
        type="button"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-gray-700 hover:text-red-600 rounded-md transition-colors duration-300 z-10 min-h-[48px] min-w-[48px] flex items-center justify-center"
        onClick={toggleMenu}
      >
        <span className="sr-only">Abrir menu principal</span>
        {mobileMenuOpen ? (
          <X className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1} />
        ) : (
          <Menu className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1} />
        )}
      </button>

      {/* CTA Button - Right Corner */}
      <a
        href="https://wa.me/5547999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10"
      >
        <Button variant="whatsapp" size="sm" className="shadow-lg px-3 sm:px-4 lg:px-5 min-h-[48px] min-w-[48px] sm:h-10 lg:h-11">
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </Button>
      </a>

      <Container>
        <div className="flex items-center justify-center h-14 sm:h-16 lg:h-20">
          {/* Logo - Center */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="block">
              <Image
                src="/logo-marcenaria-transparente.png"
                alt="Steinbach Marcenaria"
                width={160}
                height={56}
                className="h-9 sm:h-11 lg:h-13 w-auto"
                priority
              />
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}