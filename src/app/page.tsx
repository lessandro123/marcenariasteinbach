import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  AmbientesShowcase,
  ArProjectsSection,
  StatsSection,
  AboutSection,
  CompanySection,
  ContactFormSection
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-28">
        <HeroSection />
        <AmbientesShowcase />
        <ArProjectsSection />
        <StatsSection />
        <AboutSection />
        <CompanySection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
