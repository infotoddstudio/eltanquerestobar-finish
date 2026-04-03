import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

const Carta = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container max-w-2xl text-center">
        <h1 className="font-display text-5xl md:text-6xl mb-4 text-foreground">
          Nuestra <span className="text-primary">Carta</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Burgers artesanales, nachos para compartir, hot dogs, postres caseros y cervezas frías. Todo preparado al momento en el centro de Teruel.
        </p>
        <Button size="xl" asChild>
          <a href="https://sites.google.com/view/cartaeltanque/home" target="_blank" rel="noopener noreferrer">
            <UtensilsCrossed size={20} /> Ver carta completa
          </a>
        </Button>
      </div>
    </main>
    <Footer />
    <MobileFloatingCTA />
  </>
);

export default Carta;
