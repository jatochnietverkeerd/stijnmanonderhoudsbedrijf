import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Phone, MessageCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params.serviceId;
  
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Dienst niet gevonden</h1>
          <Link href="/diensten">
            <Button variant="outline">Terug naar diensten</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRequestQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no contact section on this page, navigate to contact page
      window.location.href = '/contact';
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Link href="/diensten">
              <span className="hover:text-primary transition-colors cursor-pointer">Diensten</span>
            </Link>
            <span>/</span>
            <span className="text-primary">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/diensten">
                <Button variant="ghost" className="mb-6 -ml-4" data-testid="back-to-services">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Terug naar diensten
                </Button>
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {service.detailedDescription}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={handleRequestQuote}
                  className="orange-gradient text-white px-8 py-3 hover:opacity-90 transition-opacity duration-200"
                  data-testid="service-request-quote"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Offerte Aanvragen
                </Button>
                <a href="tel:+31207123456">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto px-8 py-3"
                    data-testid="service-phone-cta"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    020 712 3456
                  </Button>
                </a>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Kenmerken</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Materials */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Materialen</h3>
                <ul className="space-y-4">
                  {service.materials.map((material, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{material}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Werkproces</h3>
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-copper text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Klaar voor <span className="text-copper">{service.title}?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Vraag een gratis inspectie aan en ontvang binnen 48 uur een transparante offerte op maat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={handleRequestQuote}
              className="orange-gradient text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200 h-auto"
              data-testid="service-detail-cta"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Gratis Inspectie Aanvragen
            </Button>
            <a 
              href="tel:+31207123456"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              data-testid="service-detail-phone"
            >
              <Phone className="w-5 h-5 mr-2 inline" />
              020 712 3456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
