import { Button } from "@/components/ui/button";
import { ClipboardCheck, Phone, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleRequestInspection = () => {
    // Scroll to contact section or open contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Premium roofing project in Haarlem with traditional Dutch architecture" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-shadow animate-fade-in leading-tight">
            Haarlem's Meest <span className="text-copper">Vertrouwde</span> Dakspecialist
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cream mb-6 sm:mb-8 text-shadow animate-fade-in"
             style={{ animationDelay: '0.2s' }}>
            Expert vakmanschap in alle soorten dakwerk—20+ jaar bescherming voor uw huis
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12 animate-fade-in"
               style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={handleRequestInspection}
              className="w-full sm:w-auto copper-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity duration-200 h-auto shadow-lg"
              data-testid="hero-request-inspection"
            >
              <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Gratis Dakinspectie Aanvragen
            </Button>
            <a
              href="tel:+31207123456"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center space-x-2"
              data-testid="hero-phone-cta"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>020 712 3456</span>
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8 text-white/90 animate-fade-in" 
               style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 bg-copper rounded-full"></span>
              <span className="font-semibold">20+ Jaar Ervaring</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 bg-copper rounded-full"></span>
              <span className="font-semibold">VCA Gecertificeerd</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 bg-copper rounded-full"></span>
              <span className="font-semibold">15 Jaar Garantie</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
