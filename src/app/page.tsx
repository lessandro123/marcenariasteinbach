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
      <main className="pt-14 sm:pt-18 lg:pt-22">
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
