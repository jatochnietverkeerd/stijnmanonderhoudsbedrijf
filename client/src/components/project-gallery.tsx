import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@shared/schema";

export default function ProjectGallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects", { featured: "true" }],
  });

  const filters = [
    { id: "all", label: "Alle Projecten" },
    { id: "zink", label: "Zink" },
    { id: "koper", label: "Koper" },
    { id: "pannen", label: "Dakpannen" }
  ];

  const filteredProjects = selectedFilter === "all" 
    ? projects 
    : projects.filter(project => project.serviceType === selectedFilter);

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
    <section id="projecten" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Recente <span className="text-copper">Projecten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek onze vakmanschap door een selectie van recent afgesloten projecten 
            in Haarlem en Amsterdam.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center space-x-4 mb-12">
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
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="hover-lift bg-card rounded-xl overflow-hidden border border-border"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative">
                <img 
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-copper text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {project.serviceType}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {project.location}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Opgeleverd: {project.completedDate}
                  </span>
                  <button 
                    className="text-copper font-semibold hover:text-primary transition-colors duration-200 flex items-center space-x-1"
                    data-testid={`view-project-${project.id}`}
                  >
                    <span>Bekijk Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projecten">
            <Button 
              className="copper-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-200 h-auto"
              data-testid="view-all-projects"
            >
              Bekijk Alle Projecten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
