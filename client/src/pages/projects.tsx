import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import type { Project } from "@shared/schema";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const { data: allProjects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filters = [
    { id: "all", label: "Alle Projecten" },
    { id: "zink", label: "Zink Dakwerk" },
    { id: "koper", label: "Koper Dakwerk" },
    { id: "pannen", label: "Dakpannen" },
    { id: "installaties", label: "Installaties" },
    { id: "onderhoud", label: "Onderhoud" },
    { id: "membrane", label: "Membrane" }
  ];

  const filteredProjects = selectedFilter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.serviceType === selectedFilter);

  if (isLoading) {
    return (
      <div className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-1/3 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-96 bg-muted rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Onze <span className="text-copper">Projecten</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Ontdek onze vakmanschap door een uitgebreide portfolio van afgeronde dakprojecten in Haarlem, Amsterdam en omliggende gemeenten.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? "bg-primary text-white hover:opacity-90"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                data-testid={`projects-filter-${filter.id}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-primary mb-4">Geen projecten gevonden</h3>
              <p className="text-muted-foreground">
                Er zijn momenteel geen projecten beschikbaar voor deze categorie.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="hover-lift overflow-hidden border border-border"
                  data-testid={`project-detail-${project.id}`}
                >
                  <div className="relative">
                    <img 
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-copper text-white capitalize">
                        {project.serviceType}
                      </Badge>
                    </div>
                    {project.featured === "true" && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange text-white">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-copper" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-copper" />
                        <span>Opgeleverd: {project.completedDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Uw project als volgende?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Laat u inspireren door onze projecten en start vandaag nog met uw eigen dakproject.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={() => {
                window.location.href = '/contact';
              }}
              className="orange-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-200 h-auto"
              data-testid="projects-cta-contact"
            >
              Gratis Inspectie Aanvragen
            </Button>
            <a 
              href="tel:+31207123456"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              data-testid="projects-phone-cta"
            >
              020 712 3456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
