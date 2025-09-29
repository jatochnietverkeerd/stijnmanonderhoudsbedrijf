import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Heart, Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-copper" />,
      title: "Betrouwbaarheid",
      description: "20+ jaar ervaring en duizenden tevreden klanten spreken voor zich. Wij staan voor onze afspraken en kwaliteit."
    },
    {
      icon: <Award className="w-8 h-8 text-copper" />,
      title: "Vakmanschap",
      description: "Traditioneel vakmanschap gecombineerd met moderne technieken. Specialist in zink, koper en loodwerk."
    },
    {
      icon: <Users className="w-8 h-8 text-copper" />,
      title: "Persoonlijke Aanpak",
      description: "Elk project is uniek. Wij luisteren naar uw wensen en leveren maatwerk van de hoogste kwaliteit."
    },
    {
      icon: <Heart className="w-8 h-8 text-copper" />,
      title: "Transparantie",
      description: "Duidelijke communicatie, transparante prijzen en geen verrassingen achteraf. Zo doen wij zaken."
    }
  ];

  const team = [
    {
      name: "Meester Stijnman",
      role: "Oprichter & Hoofddakdekker",
      experience: "25+ jaar ervaring",
      specialty: "Specialist in traditioneel loodwerk en monumentenzorg",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Tom van der Berg",
      role: "Projectleider",
      experience: "15+ jaar ervaring",
      specialty: "Expert in zink- en koperwerk, projectmanagement",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Lars Janssen",
      role: "Dakdekker Specialist",
      experience: "12+ jaar ervaring",
      specialty: "Membrane dakbedekkingen en renovaties",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  const certifications = [
    {
      title: "VCA Gecertificeerd",
      description: "Veiligheid staat bij ons voorop. Al onze medewerkers beschikken over VCA certificering.",
      icon: "🛡️"
    },
    {
      title: "KvK Geregistreerd",
      description: "Officieel geregistreerd bij de Kamer van Koophandel onder nummer 12345678.",
      icon: "📋"
    },
    {
      title: "Lid Dakdekkers Vakbond",
      description: "Aangesloten bij de Nederlandse Dakdekkers Vakbond voor kwaliteitsborging.",
      icon: "🤝"
    },
    {
      title: "Verzekerd & Gebonden",
      description: "Volledig verzekerd en aangesloten bij het Waarborgfonds voor de Bouw.",
      icon: "🏛️"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Over <span className="text-copper">Stijnman</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Sinds 2004 uw vertrouwde partner voor alle dakwerkzaamheden in Haarlem en Amsterdam. 
              Van traditioneel vakmanschap tot moderne technieken.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                Ons <span className="text-copper">Verhaal</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Onderhoudsbedrijf Stijnman werd opgericht in 2004 door meester-dakdekker Stijnman 
                  met een simpele missie: het leveren van vakmanschap van de hoogste kwaliteit aan 
                  huiseigenaren in Haarlem en Amsterdam.
                </p>
                <p>
                  Wat begon als een eenmanszaak is uitgegroeid tot een gespecialiseerd team van 
                  ervaren dakdekkers. Wij combineren traditioneel vakmanschap met moderne technieken 
                  en materialen, waarbij kwaliteit en klanttevredenheid altijd centraal staan.
                </p>
                <p>
                  Onze specialiteit ligt in metaalwerk - zink, koper en loodwerk - waarbij wij 
                  zowel monumentale panden als moderne nieuwbouw bedienen. Met meer dan 
                  1.000 succesvol afgeronde projecten hebben wij ons bewezen als de meest 
                  betrouwbare dakspecialist in de regio.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Stijnman dakdekkers aan het werk op een traditioneel Nederlands dak"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Onze <span className="text-copper">Kernwaarden</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deze waarden vormen de basis van alles wat wij doen en bepalen hoe wij met 
              onze klanten en projecten omgaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border border-border" data-testid={`value-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Ons <span className="text-copper">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leer het ervaren team kennen dat uw dakproject tot een succes maakt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift border border-border" data-testid={`team-member-${index}`}>
                <CardContent className="p-0">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                    <p className="text-copper font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                    <p className="text-muted-foreground">{member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Certificeringen & <span className="text-copper">Kwaliteitsborging</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wij voldoen aan alle branchekwaliteitseisen en beschikken over de juiste 
              certificeringen voor professioneel dakwerk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift border border-border" data-testid={`certification-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Waarom Kiezen Voor <span className="text-copper">Onderhoudsbedrijf Stijnman?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Langste Garantie in de Regio</h3>
                    <p className="text-muted-foreground">15 jaar garantie op vakmanschap - veel langer dan de branchestandaard van 10 jaar.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Specialist in Metaalwerk</h3>
                    <p className="text-muted-foreground">Unieke expertise in zink, koper en loodwerk - perfect voor monumentale en exclusieve panden.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Lokale Kennis</h3>
                    <p className="text-muted-foreground">Diepgaande kennis van Haarlem en Amsterdam architectuur, klimaat en regelgeving.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Transparante Werkwijze</h3>
                    <p className="text-muted-foreground">Duidelijke communicatie, vaste contactpersoon en transparante prijsstelling zonder verrassingen.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-copper/5 rounded-2xl p-8 border border-copper/20">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-copper font-semibold">Succesvol Afgeronde Projecten</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Google Reviews</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">20+</div>
                    <div className="text-sm text-muted-foreground">Jaar Ervaring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Jaar Garantie</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">24u</div>
                    <div className="text-sm text-muted-foreground">Reactietijd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Klaar om Kennis te Maken?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ervaar zelf waarom zoveel klanten vertrouwen op Onderhoudsbedrijf Stijnman voor hun dakproject.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact">
              <Button 
                className="orange-gradient text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200 h-auto"
                data-testid="about-cta-contact"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Gratis Inspectie Aanvragen
              </Button>
            </Link>
            <a 
              href="tel:+31207123456"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              data-testid="about-phone-cta"
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
