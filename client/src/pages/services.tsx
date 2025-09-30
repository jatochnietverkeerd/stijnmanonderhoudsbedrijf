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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Link key={service.id} href={`/diensten/${service.id}`}>
                <Card
                  className="hover-lift border border-border overflow-hidden cursor-pointer h-full group"
                  data-testid={`service-detail-card-${service.id}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-copper text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Meer info →
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-copper transition-colors duration-200">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <h3 className="font-semibold text-primary mb-2 text-sm">Kenmerken:</h3>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-copper text-sm font-medium">
                            +{service.features.length - 3} meer
                          </li>
                        )}
                      </ul>
                    </div>

                    <span className="text-copper font-semibold group-hover:text-primary transition-colors duration-200 flex items-center space-x-2 text-sm">
                      <span>Meer details bekijken</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
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
              <span className="copper-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-200 cursor-pointer flex items-center space-x-2">
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
