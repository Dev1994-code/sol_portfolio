import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
// import { AppointmentSection } from "@/components/appointment-section"
import { ClinicInfoSection } from "@/components/clinic-info-section"
// import { ResourcesSection } from "@/components/resources-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProfessionalExperienceSection } from "@/components/professional-experience"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ServicesSection />
      {/* <AppointmentSection /> */}
      <ClinicInfoSection />
      {/* <ResourcesSection /> */}
      <ProfessionalExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
