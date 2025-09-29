import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone, Clock, Shield, Star } from "lucide-react";

export default function FinalCTA() {
  const handleRequestInspection = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.1'><rect x='36' y='36' width='4' height='4' rx='2'/><rect x='0' y='0' width='4' height='4' rx='2'/><rect x='18' y='18' width='4' height='4' rx='2'/></g></g></svg>")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Klaar voor een <span className="text-copper">Nieuw Dak?</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Begin vandaag nog met uw dakproject. Onze experts staan klaar om u te helpen 
            met professioneel advies en een gratis inspectie.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              onClick={handleRequestInspection}
              className="w-full sm:w-auto orange-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-200 h-auto"
              data-testid="final-cta-inspection"
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Plan Gratis Inspectie
            </Button>
            <a 
              href="tel:+31207123456" 
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center space-x-2"
              data-testid="final-cta-phone"
            >
              <Phone className="w-5 h-5" />
              <span>Bel Direct: 020 712 3456</span>
            </a>
          </div>
          
          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-copper" />
              <span>Reactie binnen 24 uur</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-copper" />
              <span>15 jaar garantie</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-copper" />
              <span>4.9/5 Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
