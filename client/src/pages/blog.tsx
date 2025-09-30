import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";
import { useState } from "react";

const CATEGORIES = ["Alle", "Onderhoud", "Materialen", "Reparaties"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog", selectedCategory !== "Alle" ? selectedCategory : undefined],
    queryFn: async () => {
      const url = selectedCategory !== "Alle" 
        ? `/api/blog?category=${selectedCategory}`
        : "/api/blog";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      return response.json();
    },
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("nl-NL", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-blog-title">
              Kennis & <span className="text-copper">Advies</span>
            </h1>
            <p className="text-xl text-white/90" data-testid="text-blog-subtitle">
              Praktische tips en professioneel advies over dakonderhoud, materialen en renovaties
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-copper hover:bg-copper/90" : ""}
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                data-testid={`card-blog-${post.slug}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-copper text-white" data-testid={`badge-category-${post.slug}`}>
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2" data-testid={`text-title-${post.slug}`}>
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1" data-testid={`text-excerpt-${post.slug}`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt.toString())}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs"
                          data-testid={`badge-tag-${tag}`}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full group text-copper hover:text-copper hover:bg-copper/10"
                      data-testid={`link-read-${post.slug}`}
                    >
                      Lees verder
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Geen artikelen gevonden in deze categorie.
            </p>
          </div>
        )}
      </div>

      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Heeft u een <span className="text-copper">Dakprobleem?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Onze experts staan klaar om u te helpen met professioneel advies en oplossingen op maat.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange hover:bg-orange/90" data-testid="button-contact-cta">
              Neem contact op
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
