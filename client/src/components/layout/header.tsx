import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Diensten", href: "/diensten" },
    { name: "Projecten", href: "/projecten" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    return location.startsWith(href) && href !== "/";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" data-testid="logo-link">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              Onderhoudsbedrijf <span className="text-copper">Stijnman</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`nav-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                <span
                  className={`text-foreground hover:text-primary transition-colors duration-200 ${
                    isActive(item.href) ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+31207123456"
              className="hidden sm:flex items-center space-x-2 orange-gradient text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
              data-testid="header-phone-link"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">020 712 3456</span>
            </a>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  data-testid="mobile-menu-trigger"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-${item.name.toLowerCase().replace(" ", "-")}`}
                    >
                      <span
                        className={`text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 ${
                          isActive(item.href) ? "text-primary" : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <a
                      href="tel:+31207123456"
                      className="flex items-center space-x-3 orange-gradient text-white px-6 py-3 rounded-lg"
                      data-testid="mobile-phone-link"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">020 712 3456</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
