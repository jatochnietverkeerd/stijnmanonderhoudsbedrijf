import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Calendar, User, ArrowLeft, Tag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) throw new Error("Failed to fetch blog post");
      return response.json();
    },
    enabled: !!slug,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("nl-NL", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="relative h-[400px] bg-muted">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-4 w-1/2 mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog post niet gevonden</h1>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-copper text-white mb-4" data-testid="badge-category">
                {post.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-post-title">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(post.publishedAt.toString())}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-copper hover:text-copper hover:bg-copper/10" data-testid="link-back-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Button>
          </Link>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  data-testid={`badge-tag-${tag}`}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-copper prose-strong:text-primary"
            data-testid="content-post-body"
          >
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Heeft u vragen over <span className="text-copper">Dakonderhoud?</span>
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Neem direct contact op met onze experts voor persoonlijk advies en een gratis inspectie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-orange hover:bg-orange/90" data-testid="button-contact-cta">
                    Neem contact op
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white hover:bg-white hover:text-primary backdrop-blur-sm"
                  asChild
                  data-testid="button-call-cta"
                >
                  <a href="tel:023-1234567">
                    <Phone className="w-4 h-4 mr-2" />
                    023-1234567
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
