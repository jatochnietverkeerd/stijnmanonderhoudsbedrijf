import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import FAQSection from "@/components/faq-section";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-copper" />,
      title: "Telefoon",
      content: "020 712 3456",
      subtitle: "Ma-Vr 08:00-18:00, Za 09:00-16:00",
      href: "tel:+31207123456",
      testId: "contact-phone"
    },
    {
      icon: <Mail className="w-6 h-6 text-copper" />,
      title: "Email",
      content: "info@onderhoudsbedrijfstijnman.nl",
      subtitle: "Reactie binnen 24 uur",
      href: "mailto:info@onderhoudsbedrijfstijnman.nl",
      testId: "contact-email"
    },
    {
      icon: <MapPin className="w-6 h-6 text-copper" />,
      title: "Werkgebied",
      content: "Haarlem & Amsterdam",
      subtitle: "En omliggende gemeenten",
      href: null,
      testId: "contact-location"
    }
  ];

  const businessHours = [
    { day: "Maandag - Vrijdag", hours: "08:00 - 18:00" },
    { day: "Zaterdag", hours: "09:00 - 16:00" },
    { day: "Zondag", hours: "Gesloten" },
    { day: "Spoeddienst", hours: "24/7 beschikbaar*" }
  ];

  const responseTimeInfo = [
    {
      title: "Telefonisch Contact",
      time: "Direct tijdens openingstijden",
      description: "Spreek direct met onze experts"
    },
    {
      title: "Email & Formulier",
      time: "Binnen 24 uur",
      description: "Gedetailleerde respons op uw vraag"
    },
    {
      title: "Gratis Inspectie",
      time: "Binnen 48 uur",
      description: "Afspraak op locatie ingepland"
    },
    {
      title: "Spoedreparaties",
      time: "Binnen 4 uur*",
      description: "Voor acute lekkages en stormschade"
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
              Neem <span className="text-copper">Contact</span> Op
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Klaar om aan de slag te gaan? Onze dakexperts staan klaar om u te helpen 
              met professioneel advies en een gratis dakinspectie.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Meerdere Manieren om <span className="text-copper">Contact</span> op te Nemen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kies de manier die het beste bij u past. Wij staan altijd klaar om u te helpen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift border border-border text-center" data-testid={method.testId}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                  {method.href ? (
                    <a 
                      href={method.href}
                      className="text-lg font-semibold text-copper hover:text-primary transition-colors duration-200 block mb-2"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <div className="text-lg font-semibold text-primary mb-2">{method.content}</div>
                  )}
                  <p className="text-muted-foreground text-sm">{method.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-copper" />
                  <span>Openingstijden</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-semibold text-primary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange/10 rounded-lg border border-orange/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>*Spoeddienst:</strong> Voor acute lekkages en stormschade zijn wij 24/7 bereikbaar. 
                    Extra tarieven kunnen van toepassing zijn buiten kantooruren.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Reactietijden</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {responseTimeInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                        <p className="text-copper font-medium text-sm mb-1">{info.time}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Vraag een <span className="text-copper">Gratis Inspectie</span> Aan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vul onderstaand formulier in en ontvang binnen 48 uur een transparante offerte. 
              Geen verplichtingen, volledig gratis.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Service Area Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Ons <span className="text-copper">Werkgebied</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wij bedienen klanten in heel Haarlem, Amsterdam en de omliggende gemeenten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift border border-border" data-testid="service-area-haarlem">
              <CardHeader>
                <CardTitle className="text-center">Haarlem</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <p className="text-muted-foreground mb-4">
                  Alle wijken inclusief Centrum, Noord, Zuid, Oost, West en Schalkwijk
                </p>
                <div className="text-copper font-semibold">25+ projecten dit jaar</div>
              </CardContent>
            </Card>

            <Card className="hover-lift border border-border" data-testid="service-area-amsterdam">
              <CardHeader>
                <CardTitle className="text-center">Amsterdam</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <p className="text-muted-foreground mb-4">
                  Centrum, Noord, Zuid, Oost, West en Zuidoost
                </p>
                <div className="text-copper font-semibold">20+ projecten dit jaar</div>
              </CardContent>
            </Card>

            <Card className="hover-lift border border-border" data-testid="service-area-surrounding">
              <CardHeader>
                <CardTitle className="text-center">Omliggende Gemeenten</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">🌳</div>
                <p className="text-muted-foreground mb-4">
                  Bloemendaal, Aerdenhout, Heemstede, Haarlemmermeer, Amstelveen
                </p>
                <div className="text-copper font-semibold">15+ projecten dit jaar</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border border-copper/20 bg-copper/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Buiten Ons Standaard Werkgebied?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Voor grote projecten (€15.000+) reizen wij graag verder. 
                  Neem contact op om de mogelijkheden te bespreken.
                </p>
                <a 
                  href="tel:+31207123456"
                  className="inline-flex items-center space-x-2 copper-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                  data-testid="contact-extended-area"
                >
                  <Phone className="w-5 h-5" />
                  <span>Bel voor Mogelijkheden</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Nog Vragen? <span className="text-copper">Wij Helpen Graag</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ons team staat klaar om al uw vragen te beantwoorden en u te helpen 
            met het beste advies voor uw dakproject.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+31207123456"
              className="copper-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              data-testid="final-contact-phone"
            >
              <Phone className="w-5 h-5 mr-2 inline" />
              Bel Nu: 020 712 3456
            </a>
            <a 
              href="mailto:info@onderhoudsbedrijfstijnman.nl"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              data-testid="final-contact-email"
            >
              <Mail className="w-5 h-5 mr-2 inline" />
              Email Ons
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
