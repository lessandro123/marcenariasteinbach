import * as React from "react"
import { cn } from "@/lib/utils"

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    variant?: "default" | "dark" | "gold" | "wood"
    spacing?: "sm" | "md" | "lg" | "xl"
  }
>(({ className, variant = "default", spacing = "lg", ...props }, ref) => {
  const variantClasses = {
    default: "bg-white text-gray-900",
    dark: "bg-gray-900 text-white",
    gold: "bg-gradient-to-br from-red-600 to-red-800 text-white",
    wood: "bg-wood-gradient text-white"
  }

  const spacingClasses = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-24",
    xl: "py-24 sm:py-32"
  }

  return (
    <section
      ref={ref}
      className={cn(
        "w-full",
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    />
  )
})
Section.displayName = "Section"

export { Section }