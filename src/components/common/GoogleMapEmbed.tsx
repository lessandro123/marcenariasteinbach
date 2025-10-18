'use client'

import * as React from "react"

interface GoogleMapEmbedProps {
  className?: string
}

export function GoogleMapEmbed({ className = "" }: GoogleMapEmbedProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8!2d-48.8!3d-27.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88908909a951ea07!2sMarcenaria%20Steinbach!5e0!3m2!1spt-BR!2sbr!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '300px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Marcenaria Steinbach em Palhoça, SC"
        className="rounded-lg"
      />
    </div>
  )
}
