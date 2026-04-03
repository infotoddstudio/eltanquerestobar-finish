import { Store, ShoppingBag, Truck, TreePalm } from "lucide-react";

const services = [
  { icon: Store, title: "Comer en el local", desc: "Ambiente industrial-moderno en pleno centro." },
  { icon: ShoppingBag, title: "Para llevar", desc: "Prepárate tu cena para casa." },
  { icon: Truck, title: "Delivery", desc: "Disponible según zona y plataformas." },
  { icon: TreePalm, title: "Terraza", desc: "Disfruta del Paseo del Óvalo al aire libre." },
];

const ServicesSection = () => (
  <section className="section-padding">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground">
        Nuestros <span className="text-primary">servicios</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center bg-card rounded-xl p-6 border border-border hover-glow-amber transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
