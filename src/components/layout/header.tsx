'use client'

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SidebarMenu } from "./SidebarMenu"
import { WhatsAppIcon } from "@/components/icons"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-t-[4px] border-b-[3px] border-red-primary z-50">
      {/* Mobile/Desktop menu button - Left Corner */}
      <button
        type="button"
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 text-gray-700 rounded-md transition-colors z-10 ${
          mobileMenuOpen ? 'hover:text-red-600' : ''
        }`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="sr-only">Abrir menu principal</span>
        {mobileMenuOpen ? (
          <X className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1} />
        ) : (
          <Menu className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1} />
        )}
      </button>

      {/* CTA Button - Right Corner */}
      <a
        href="https://wa.me/5547999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
      >
        <Button variant="whatsapp" size="lg" className="shadow-lg px-4 sm:px-5 lg:px-6">
          <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        </Button>
      </a>

      <Container>
        <div className="flex items-center justify-center h-20 sm:h-24 lg:h-28">
          {/* Logo - Center */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="block">
              <Image
                src="/logo-marcenaria-transparente.png"
                alt="Steinbach Marcenaria"
                width={200}
                height={70}
                className="h-12 sm:h-14 lg:h-16 w-auto"
                priority
              />
            </a>
          </div>
        </div>
      </Container>

      {/* Sidebar Menu */}
      <SidebarMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  )
}