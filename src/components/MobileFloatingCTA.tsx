import { Phone, MapPin } from "lucide-react";

const MobileFloatingCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex border-t border-border bg-background/95 backdrop-blur-md">
    <a
      href="tel:+34662381665"
      className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-primary-foreground bg-primary active:bg-primary/90"
      aria-label="Llamar ahora"
    >
      <Phone size={18} /> Llamar
    </a>
    <a
      href="https://maps.google.com/?q=Paseo+del+Óvalo+14+Teruel"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-foreground bg-secondary active:bg-secondary/80"
      aria-label="Cómo llegar"
    >
      <MapPin size={18} /> Cómo llegar
    </a>
  </div>
);

export default MobileFloatingCTA;
