import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import nachosImg from "@/assets/nachos.png";
import smashImg from "@/assets/smash.png";
import nonnaImg from "@/assets/nonna.png";
import cheesecakeImg from "@/assets/tarta.png";

const items = [
  { img: nachosImg, title: "Nachos para compartir", desc: "Abundantes, perfectos para empezar." },
  { img: smashImg, title: "El Cuñao Smash", desc: "Jugosas, a la plancha con su costra." },
  { img: nonnaImg, title: "Nonna", desc: "La burger destacada por nuestros clientes." },
  { img: cheesecakeImg, title: "Tarta de queso casera", desc: "El final redondo para tu cena." },
];

const PopularSection = () => (
  <section className="section-padding bg-black">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-white">
        Lo más <span className="text-[#f1021A]">pedido</span>
      </h2>

      {/* Grid responsive: columna en móvil, múltiples en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl overflow-hidden bg-black/50 border border-white/20 group hover-glow-red transition-all duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-square">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="font-display text-lg md:text-xl text-white mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm text-white/60 mb-4">{item.desc}</p>
              <Button size="sm" variant="ghost" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                <a href="https://sites.google.com/view/cartaeltanque/home" target="_blank" rel="noopener noreferrer">
                  <UtensilsCrossed size={14} /> Ver en carta
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularSection;
