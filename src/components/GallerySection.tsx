import { useState } from "react";
import nachosImg from "@/assets/nachos.png";
import bravasImg from "@/assets/bravas.png";
import bravas1Img from "@/assets/bravas1.png";
import smashImg from "@/assets/smash.png";
import pulledImg from "@/assets/pulled.png";
import nonnaImg from "@/assets/nonna.png";
import tartaImg from "@/assets/tarta.png";
import tarta1Img from "@/assets/tarta1.png";

type Filter = "Todos" | "Burgers" | "Nachos & Entrantes" | "Postres" | "Local & Terraza";

const photos: { src: string; alt: string; filter: Filter[] }[] = [
  // Burgers
  { src: smashImg, alt: "Smash burger", filter: ["Burgers"] },
  { src: nonnaImg, alt: "Nonna burger", filter: ["Burgers"] },
  { src: pulledImg, alt: "La Pulled burger", filter: ["Burgers"] },
  
  // Nachos & Entrantes
  { src: nachosImg, alt: "Nachos para compartir", filter: ["Nachos & Entrantes"] },
  { src: bravasImg, alt: "Patatas bravas de la casa", filter: ["Nachos & Entrantes"] },
  { src: bravas1Img, alt: "Patatas bravas especiales", filter: ["Nachos & Entrantes"] },
  
  // Postres
  { src: tartaImg, alt: "Tarta de queso casera", filter: ["Postres"] },
  { src: tarta1Img, alt: "Tarta de queso especial", filter: ["Postres"] },
];

const filters: Filter[] = ["Todos", "Burgers", "Nachos & Entrantes", "Postres", "Local & Terraza"];

const GallerySection = () => {
  const [active, setActive] = useState<Filter>("Todos");
  const filtered = active === "Todos" ? photos : photos.filter((p) => p.filter.includes(active));

  return (
    <section id="galeria" className="section-padding">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-8 text-foreground">
          <span className="text-primary">Galería</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((p, i) => (
            <div key={i} className="break-inside-avoid rounded-xl overflow-hidden">
              <img 
                src={p.src} 
                alt={p.alt} 
                loading="lazy" 
                width={800} 
                height={800} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
