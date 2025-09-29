import { VALUE_PROPS } from "@/lib/constants";

export default function ValueProposition() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Waarom Kiezen Voor <span className="text-copper">Stijnman?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Onderhoudsbedrijf Stijnman onderscheidt zich door kwaliteit, vakmanschap en 
            betrouwbaarheid in elke fase van uw dakproject.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <div 
              key={prop.title}
              className="text-center hover-lift bg-card rounded-xl p-8 border border-border"
              data-testid={`value-prop-${index}`}
            >
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${prop.icon} text-copper text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
