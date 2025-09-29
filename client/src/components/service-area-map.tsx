import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreaMap() {
  return (
    <section id="werkgebied" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Ons <span className="text-copper">Werkgebied</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wij zijn actief in Haarlem, Amsterdam en omliggende gemeenten. 
            Bekijk of wij ook bij u in de buurt werkzaam zijn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mb-4 text-copper/50 mx-auto" />
                  <p className="text-lg font-semibold mb-2">Interactieve Kaart</p>
                  <p className="text-sm">Haarlem & Amsterdam Werkgebied</p>
                  <p className="text-xs mt-4 text-muted-foreground">
                    Hier zou een interactieve kaart komen met onze projectlocaties
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Areas List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {SERVICE_AREAS.map((area, index) => (
                <div 
                  key={area.name}
                  className="bg-card rounded-xl p-6 border border-border hover-lift"
                  data-testid={`service-area-${index}`}
                >
                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-copper" />
                    <span>{area.name}</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="text-sm text-copper font-semibold">{area.projects}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-copper/5 rounded-xl border border-copper/20">
              <h4 className="font-bold text-primary mb-2">Buiten Ons Standaard Werkgebied?</h4>
              <p className="text-muted-foreground text-sm">
                Voor grote projecten reizen wij graag verder. Neem contact op voor de mogelijkheden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
