'use client'

import * as React from "react"
import { ExternalLink } from "lucide-react"

interface GoogleMapEmbedProps {
  className?: string
}

export function GoogleMapEmbed({ className = "" }: GoogleMapEmbedProps) {
  const mapsUrl = "https://www.google.com/maps?ll=-27.62977,-48.661946&z=18&t=m&hl=pt-PT&gl=US&mapclient=embed&cid=9840515860392962567"

  return (
    <div className={`relative w-full group ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.234!2d-48.661946!3d-27.62977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88908909a951ea07!2sMarcenaria%20Steinbach!5e0!3m2!1spt-BR!2sbr!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '300px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Marcenaria Steinbach em Palhoça, SC"
        className="rounded-lg"
      />

      {/* Overlay clicável */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:scale-105 z-10"
        aria-label="Abrir no Google Maps"
      >
        <ExternalLink className="w-4 h-4 text-red-600" />
        <span>Abrir no Maps</span>
      </a>
    </div>
  )
}
