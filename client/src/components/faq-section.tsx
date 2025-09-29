import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Veelgestelde <span className="text-copper">Vragen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vind antwoorden op de meest gestelde vragen over onze diensten en werkwijze.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
                data-testid={`faq-${index}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left hover:bg-muted/30 transition-colors duration-200 flex items-center justify-between"
                  data-testid={`faq-toggle-${index}`}
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-copper transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openIndex === index && (
                  <div 
                    className="px-6 pb-6 text-muted-foreground animate-fade-in"
                    data-testid={`faq-content-${index}`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
