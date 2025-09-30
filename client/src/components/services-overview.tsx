import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ServicesOverview() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Onze <span className="text-copper">Diensten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van complete dakinstallaties tot specialistisch metaalwerk - wij bieden de 
            volledige range aan dakwerkzaamheden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Link key={service.id} href={`/diensten/${service.id}`}>
              <div
                className="hover-lift bg-card rounded-xl overflow-hidden border border-border group cursor-pointer h-full"
                data-testid={`service-card-${service.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-copper text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Meer info →
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-copper transition-colors duration-200">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-copper font-semibold group-hover:text-primary transition-colors duration-200 flex items-center space-x-2">
                    <span>Meer informatie</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/diensten">
            <Button 
              className="copper-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-200 h-auto"
              data-testid="view-all-services"
            >
              Bekijk Alle Diensten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
