import HeroSection from "@/components/hero-section";
import ValueProposition from "@/components/value-proposition";
import TrustBadges from "@/components/trust-badges";
import ServicesOverview from "@/components/services-overview";
import ProjectGallery from "@/components/project-gallery";
import ProcessTimeline from "@/components/process-timeline";
import Testimonials from "@/components/testimonials";
import ServiceAreaMap from "@/components/service-area-map";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <TrustBadges />
      <ValueProposition />
      <ServicesOverview />
      <ProjectGallery />
      <ProcessTimeline />
      <Testimonials />
      <ServiceAreaMap />
      <FAQSection />
      <FinalCTA />
      
      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Neem <span className="text-copper">Contact</span> Op
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Klaar om aan de slag te gaan? Vraag een gratis dakinspectie aan en ontvang binnen 48 uur een transparante offerte.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
