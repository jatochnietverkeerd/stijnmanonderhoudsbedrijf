import { Phone } from "lucide-react";

export default function StickyContact() {
  return (
    <div className="sticky-contact">
      <a
        href="tel:+31207123456"
        className="w-14 h-14 copper-gradient text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        data-testid="sticky-contact-phone"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
