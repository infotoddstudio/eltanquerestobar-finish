import { Phone, MapPin, UtensilsCrossed, TreePalm, ShoppingBag, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-burger.jpg";

const chips = [
  { icon: TreePalm, label: "Terraza" },
  { icon: ShoppingBag, label: "Para llevar" },
  { icon: Sparkles, label: "Ambiente animado" },
  { icon: Users, label: "Ideal para grupos" },
];

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <img
      src={heroBg}
      alt="Hamburguesa artesanal y cerveza en El Tanque Restobar Teruel"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

    {/* Content */}
    <div className="relative z-10 container text-center flex flex-col items-center gap-6 pt-20 pb-32">
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-foreground max-w-4xl animate-fade-up">
        Hamburguesas artesanales y cervezas en el corazón de{" "}
        <span className="text-gradient-amber">Teruel</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
        Restobar en el Paseo del Óvalo para venir con amigos, picar nachos y cenar burgers de calidad.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Button variant="hero" size="xl" asChild>
          <a href="https://sites.google.com/view/cartaeltanque/home" target="_blank" rel="noopener noreferrer">
            <UtensilsCrossed className="size-5" /> Ver carta
          </a>
        </Button>
        <Button variant="heroOutline" size="xl" asChild>
          <a href="tel:+34662381665">
            <Phone className="size-5" /> Llamar ahora
          </a>
        </Button>
        <Button variant="heroOutline" size="xl" asChild>
          <a href="https://maps.google.com/?q=Paseo+del+Óvalo+14+Teruel" target="_blank" rel="noopener noreferrer">
            <MapPin className="size-5" /> Cómo llegar
          </a>
        </Button>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6 animate-fade-up" style={{ animationDelay: "0.45s" }}>
        {chips.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-sm text-muted-foreground border border-border">
            <Icon size={16} className="text-primary" /> {label}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
