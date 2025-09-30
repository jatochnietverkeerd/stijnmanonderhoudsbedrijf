import { useQuery } from "@tanstack/react-query";
import { Star, Play } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cream/30 via-white to-copper/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-copper font-semibold uppercase tracking-wide text-sm mb-4">REVIEWS</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Wat Onze <span className="text-copper">Klanten</span> Zeggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lees waarom onze klanten Onderhoudsbedrijf Stijnman aanbevelen voor hun dakwerkzaamheden.
          </p>
        </div>

        {/* Google Reviews Summary */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-6 bg-white border-2 border-copper/20 rounded-xl px-8 py-6 shadow-lg">
            <div className="flex items-center space-x-1 text-2xl">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-copper text-copper" />
              ))}
            </div>
            <div className="text-left border-l-2 border-copper/20 pl-6">
              <div className="text-3xl font-bold text-primary">4.9<span className="text-xl text-muted-foreground">/5</span></div>
              <div className="text-sm text-muted-foreground font-medium">Gebaseerd op 47 Google Reviews</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 border-2 border-border hover:border-copper/30 hover-lift shadow-sm hover:shadow-lg transition-all duration-300"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(parseInt(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-copper text-copper" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-base leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                <div className="w-14 h-14 copper-gradient rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video Testimonial Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Bekijk Video Getuigenissen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="relative bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer"
              data-testid="video-testimonial-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450" 
                alt="Video getuigenis tevreden klant dakproject" 
                className="w-full h-48 object-cover" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Familie Vermeulen</h4>
                <p className="text-sm text-muted-foreground">Complete dakrenovatie Haarlem</p>
              </div>
            </div>
            
            <div 
              className="relative bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer"
              data-testid="video-testimonial-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450" 
                alt="Video getuigenis zakelijke klant dak onderhoud" 
                className="w-full h-48 object-cover" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary">Restaurant De Gouden Leeuw</h4>
                <p className="text-sm text-muted-foreground">Zakelijk dakonderhoud Amsterdam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
