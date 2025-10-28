import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/contexts/MenuContext";
import { SidebarMenu } from "@/components/layout/SidebarMenu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "STEINBACH Marcenaria | Móveis Sob Medida Premium - 71 Anos de Tradição",
    template: "%s | STEINBACH Marcenaria"
  },
  description: "Móveis sob medida premium em Blumenau. 71 anos de tradição familiar, desde 1954. Cozinhas, dormitórios, closets e ambientes completos. Orçamento grátis!",
  keywords: ["marcenaria", "móveis sob medida", "Blumenau", "cozinha planejada", "closet", "dormitório", "móveis premium", "tradição familiar"],
  authors: [{ name: "STEINBACH Marcenaria" }],
  creator: "STEINBACH Marcenaria",
  publisher: "STEINBACH Marcenaria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://steinbach-marcenaria.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "STEINBACH Marcenaria | Móveis Sob Medida Premium",
    description: "71 anos criando móveis únicos em Blumenau. Tradição familiar, qualidade premium e design personalizado. Transforme seu ambiente!",
    url: '/',
    siteName: 'STEINBACH Marcenaria',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STEINBACH Marcenaria - Móveis Sob Medida Premium',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STEINBACH Marcenaria | 71 Anos de Tradição',
    description: 'Móveis sob medida premium em Blumenau. Qualidade e tradição desde 1954.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FurnitureStore"],
    "name": "Marcenaria Steinbach",
    "description": "Marcenaria familiar com 71 anos de tradição especializada em móveis planejados de luxo. Cozinhas, closets, dormitórios e ambientes completos sob medida.",
    "image": "https://steinbach-marcenaria.com.br/logo-marcenaria.jpg",
    "logo": "https://steinbach-marcenaria.com.br/logo-marcenaria-transparente.png",
    "url": "https://steinbach-marcenaria.com.br",
    "telephone": "+55-47-99999-9999",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Palhoça",
      "addressLocality": "Palhoça",
      "addressRegion": "SC",
      "postalCode": "",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.6,
      "longitude": -48.8
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -27.6,
        "longitude": -48.8
      },
      "geoRadius": "50000",
      "name": "Grande Florianópolis"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Marcenaria+Steinbach/data=!4m2!3m1!1s0x0:0x88908909a951ea07"
    ],
    "foundingDate": "1954",
    "slogan": "71 anos criando móveis únicos"
  };

  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <MenuProvider>
          <SidebarMenu />
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
