import { Shield, Award, CheckCircle2 } from "lucide-react";

export default function TrustBadges() {
  const certifications = [
    {
      name: "VCA Gecertificeerd",
      description: "Veiligheid, Gezondheid en Milieu",
      icon: Shield,
      color: "text-blue-600"
    },
    {
      name: "KvK Geregistreerd",
      description: "Officieel geregistreerd bedrijf",
      icon: CheckCircle2,
      color: "text-green-600"
    },
    {
      name: "Vakbond Lid",
      description: "Dakdekkers Vakbond Nederland",
      icon: Award,
      color: "text-copper"
    }
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Erkend & Gecertificeerd
            </p>
            <h3 className="text-2xl font-bold text-primary">
              Kwaliteit & Veiligheid Gegarandeerd
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center space-x-3 bg-white rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-12 h-12 ${cert.color} bg-opacity-10 rounded-full flex items-center justify-center`}>
                  <cert.icon className={`w-6 h-6 ${cert.color}`} />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{cert.name}</div>
                  <div className="text-xs text-muted-foreground">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}