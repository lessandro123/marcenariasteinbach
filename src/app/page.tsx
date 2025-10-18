import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  AmbientesShowcase,
  StatsSection,
  AboutSection,
  CompanySection
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-28">
        <HeroSection />
        <AmbientesShowcase />
        <StatsSection />
        <AboutSection />
        <CompanySection />
      </main>
      <Footer />
    </>
  );
}
