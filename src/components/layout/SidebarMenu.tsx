'use client'

import * as React from "react"
import { Home, Layout, Users, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMenu } from "@/contexts/MenuContext"

const navigation = [
  { name: 'Início', href: '#inicio', icon: Home },
  { name: 'Ambientes', href: '#ambientes', icon: Layout },
  { name: 'Sobre Nós', href: '#sobre', icon: Users },
  { name: 'Projetos', href: '#projetos', icon: Briefcase },
  { name: 'Contato', href: '#contato', icon: Mail },
]

export function SidebarMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useMenu()

  return (
    <>
      {/* Overlay/Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Sidebar Menu */}
      <div
        className={cn(
          "fixed top-[58px] sm:top-[74px] lg:top-[90px] left-0 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out",
          "w-[240px] sm:w-[260px] lg:w-[280px] flex flex-col",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Navigation Items */}
        <nav className="px-4 py-3 bg-white overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "relative flex items-center px-3 py-2.5 text-gray-700 hover:text-red-600 hover:bg-gray-50",
                    "rounded-md text-base font-medium transition-colors group overflow-hidden"
                  )}
                >
                  <IconComponent className="h-5 w-5 mr-3 text-gray-500 group-hover:text-red-600 transition-colors" />
                  {item.name}

                  {/* Linha vermelha animada */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              )
            })}
          </div>
        </nav>
      </div>
    </>
  )
}