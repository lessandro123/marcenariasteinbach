'use client'

import * as React from "react"
import { createContext, useContext, useState, ReactNode } from "react"

interface MenuContextType {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  toggleMenu: () => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export function MenuProvider({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <MenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}
