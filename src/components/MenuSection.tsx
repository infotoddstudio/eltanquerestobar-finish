import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

const categories = [
  {
    name: "Entrantes para compartir",
    items: ["Nachos con queso y jalapeños", "Patatas bravas de la casa", "Alitas de pollo", "Fingers de pollo", "Tequeños"],
  },
  {
    name: "Hamburguesas",
    items: ["Smash Burger clásica", "Nonna Burger", "Burger BBQ", "Chicken Burger", "Veggie Burger"],
  },
  {
    name: "Hot Dogs",
    items: ["Hot Dog clásico", "Hot Dog con cheddar y bacon", "Hot Dog especial de la casa"],
  },
  {
    name: "Postres",
    items: ["Tarta de queso casera", "Brownie con helado", "Coulant de chocolate"],
  },
  {
    name: "Bebidas",
    items: ["Cervezas artesanales y de grifo", "Refrescos", "Cócteles", "Vinos"],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="carta" className="section-padding bg-black">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-white">
          Nuestra <span className="text-[#f1021A]">Carta</span>
        </h2>
        <p className="text-center text-white/60 mb-10 max-w-lg mx-auto">
          Nachos, burgers y cerveza en el centro de Teruel.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? "bg-[#f1021A] text-white shadow-[0_0_15px_rgba(241,2,26,0.3)]"
                  : "bg-white/10 text-white/60 hover:text-white border border-white/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="max-w-md mx-auto bg-black/50 rounded-xl border border-white/20 p-6">
          <ul className="space-y-3">
            {categories[active].items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f1021A] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild className="bg-[#f1021A] hover:bg-[#d01815] text-white">
            <a href="https://sites.google.com/view/cartaeltanque/home" target="_blank" rel="noopener noreferrer">
              <UtensilsCrossed size={18} /> Consulta la carta completa
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
