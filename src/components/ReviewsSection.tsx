import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  "Los nachos… de los mejores que he probado.",
  "Camareros atentos y trato amable.",
  "Hamburguesas de buena calidad, se nota en cada bocado.",
  "Buen sitio para cenar con amigos en el Óvalo.",
];

const ReviewsSection = () => (
  <section id="opiniones" className="section-padding bg-card">
    <div className="container max-w-3xl text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-4 text-foreground">
        Opiniones de <span className="text-primary">clientes</span>
      </h2>

      {/* Rating */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={20} className="fill-primary text-primary" />
          ))}
          <Star size={20} className="text-primary" />
        </div>
        <span className="text-lg font-display text-foreground">≈ 4,1/5</span>
      </div>
      <p className="text-xs text-muted-foreground mb-8">Basado en reseñas online, puede variar.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {reviews.map((r) => (
          <blockquote key={r} className="bg-secondary rounded-lg p-5 border border-border text-left">
            <p className="text-sm text-muted-foreground italic">"{r}"</p>
          </blockquote>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline" asChild>
          <a href="#" aria-label="Ver más en Google (enlace pendiente)">
            <ExternalLink size={16} /> Ver más en Google
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#" aria-label="Ver en TripAdvisor (enlace pendiente)">
            <ExternalLink size={16} /> Ver en TripAdvisor
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
