import { MapPin, Beef, Users, TreePalm } from "lucide-react";

const bullets = [
  { icon: MapPin, text: "Estamos en P.º del Óvalo, 14 (centro de Teruel)." },
  { icon: Beef, text: "Burgers artesanales y cocina americana." },
  { icon: Users, text: "Nachos y platos para compartir como sello de la casa." },
  { icon: TreePalm, text: "Terraza para disfrutar el paseo." },
];

const AboutSection = () => (
  <section id="nosotros" className="section-padding bg-card">
    <div className="container max-w-3xl text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
        Sobre <span className="text-primary">nosotros</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        En El Tanque apostamos por <strong className="text-foreground">hamburguesas hechas al momento</strong>, entrantes para compartir y buen ambiente para alargar la noche con una cerveza fría.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {bullets.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 text-left bg-secondary rounded-lg p-4 border border-border">
            <Icon size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
