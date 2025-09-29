import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Onze <span className="text-copper">Diensten</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Van complete dakinstallaties tot specialistisch metaalwerk - ontdek ons volledige aanbod aan dakwerkzaamheden.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, index) => (
              <Card 
                key={service.id}
                className="hover-lift border border-border overflow-hidden"
                data-testid={`service-detail-card-${service.id}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {service.detailedDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">Kenmerken:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <span className="w-2 h-2 bg-copper rounded-full flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/diensten/${service.id}`}>
                    <span className="text-copper font-semibold hover:text-primary transition-colors duration-200 flex items-center space-x-2 cursor-pointer">
                      <span>Meer details bekijken</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Welke dienst heeft u nodig?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Niet zeker welke oplossing het beste bij uw situatie past? Wij helpen u graag met professioneel advies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact">
              <span className="orange-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center space-x-2">
                <span>Gratis Adviesgesprek</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <a 
              href="tel:+31207123456"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              data-testid="services-phone-cta"
            >
              020 712 3456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
