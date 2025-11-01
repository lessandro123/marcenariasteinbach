import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  AmbientesShowcase,
  ArProjectsSection,
  StatsSection,
  AboutSection,
  ValuesSection,
  EcoPartnershipsSection,
  CompanySection,
  ContactFormSection
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 lg:pt-20">
        <HeroSection />
        <AmbientesShowcase />
        <ArProjectsSection />
        <StatsSection />
        <AboutSection />
        <ValuesSection />
        <CompanySection />
        <ContactFormSection />
        <EcoPartnershipsSection />
      </main>
      <Footer />
    </>
  );
}
