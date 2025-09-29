import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Ons <span className="text-copper">Werkproces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van eerste contact tot eindoplevering: transparant, betrouwbaar en professioneel.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-copper/20 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={step.number}
                className="flex flex-col lg:flex-row items-center lg:space-x-12"
                data-testid={`process-step-${step.number}`}
              >
                <div className={`w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 order-2 lg:order-1 ${
                  index % 2 === 0 ? 'lg:text-right' : ''
                }`}>
                  <div className="bg-card rounded-xl p-8 border border-border hover-lift">
                    <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative flex-shrink-0 order-1 lg:order-2">
                  <div className="w-16 h-16 bg-copper rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className={`w-full lg:w-1/2 lg:pl-8 order-3 ${
                  index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'
                }`}>
                  <div className={`text-center ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <i className={`${step.icon} text-6xl text-copper/20`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
