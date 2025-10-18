'use client'

import * as React from "react"
import { Home, Layout, Users, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: 'Início', href: '#inicio', icon: Home },
  { name: 'Ambientes', href: '#ambientes', icon: Layout },
  { name: 'Sobre Nós', href: '#sobre', icon: Users },
  { name: 'Projetos', href: '#projetos', icon: Briefcase },
  { name: 'Contato', href: '#contato', icon: Mail },
]

export function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  return (
    <>
      {/* Overlay/Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Menu */}
      <div
        className={cn(
          "fixed top-[81px] sm:top-[97px] lg:top-[113px] left-0 h-[calc(100vh-81px)] sm:h-[calc(100vh-97px)] lg:h-[calc(100vh-113px)] bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out",
          "w-[280px] sm:w-[320px] lg:w-[360px] flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-4 bg-white overflow-y-auto">
          <div className="space-y-2">
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "relative flex items-center px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50",
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