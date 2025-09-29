import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const services = [
    "Complete Dakinstallaties",
    "Dakonderhoud & Reparaties", 
    "Zink Dakbedekking",
    "Koper Dakwerk",
    "Loodwerk",
    "Membrane Dakbedekking"
  ];

  const quickLinks = [
    { name: "Over Ons", href: "/over-ons" },
    { name: "Projecten", href: "/projecten" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/contact#faq" }
  ];

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Onderhoudsbedrijf <span className="text-copper">Stijnman</span>
            </h3>
            <p className="text-white/80 mb-6">
              Uw vertrouwde partner voor alle dakwerkzaamheden in Haarlem en Amsterdam. 
              20+ jaar ervaring, 15 jaar garantie.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-copper" />
                <a 
                  href="tel:+31207123456"
                  className="hover:text-copper transition-colors"
                  data-testid="footer-phone"
                >
                  020 712 3456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-copper" />
                <a 
                  href="mailto:info@onderhoudsbedrijfstijnman.nl"
                  className="hover:text-copper transition-colors"
                  data-testid="footer-email"
                >
                  info@onderhoudsbedrijfstijnman.nl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-copper" />
                <span>Haarlem, Nederland</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Onze Diensten</h4>
            <ul className="space-y-3 text-white/80">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/diensten">
                    <span className="hover:text-copper transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Informatie</h4>
            <ul className="space-y-3 text-white/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="hover:text-copper transition-colors duration-200 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Certifications */}
          <div>
            <h4 className="text-lg font-bold mb-6">Certificeringen</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-copper rounded-full"></span>
                <span>VCA Gecertificeerd</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-copper rounded-full"></span>
                <span>KvK Geregistreerd</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-copper rounded-full"></span>
                <span>Lid Dakdekkers Vakbond</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Volg Ons</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-copper/20 hover:bg-copper rounded-full flex items-center justify-center transition-colors duration-200"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-copper/20 hover:bg-copper rounded-full flex items-center justify-center transition-colors duration-200"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-copper/20 hover:bg-copper rounded-full flex items-center justify-center transition-colors duration-200"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Onderhoudsbedrijf Stijnman. Alle rechten voorbehouden.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-copper transition-colors duration-200">
                Privacybeleid
              </a>
              <a href="#" className="hover:text-copper transition-colors duration-200">
                Algemene Voorwaarden
              </a>
              <a href="#" className="hover:text-copper transition-colors duration-200">
                Cookie Beleid
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
