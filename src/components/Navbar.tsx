import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReservationModal from "@/components/ReservationModal";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Carta", href: "/#carta" },
  { label: "Sobre nosotros", href: "/#nosotros" },
  { label: "Galería", href: "/#galeria" },
  { label: "Opiniones", href: "/#opiniones" },
  { label: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleOpenReservation = () => setIsReservationOpen(true);
    document.addEventListener('openReservationModal', handleOpenReservation);
    return () => document.removeEventListener('openReservationModal', handleOpenReservation);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-alfa-slab text-2xl md:text-3xl text-[#f1021A] tracking-wider">
          EL TANQUE
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button 
            size="sm" 
            onClick={() => setIsReservationOpen(true)}
            className="bg-[#f1021A] hover:bg-[#d01815] text-white"
          >
            <Calendar size={14} /> Reservar
          </Button>
          <Button size="sm" asChild className="bg-black border border-white/20 hover:bg-white hover:text-black text-white">
            <a href="tel:+34662381665" aria-label="Llamar ahora">
              <Phone className="size-4" /> Llamar
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-white/20 animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-lg font-display tracking-wide text-white hover:text-[#f1021A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button 
              size="sm" 
              onClick={() => setIsReservationOpen(true)}
              className="bg-[#f1021A] hover:bg-[#d01815] text-white w-full"
            >
              <Calendar size={14} /> Reservar Mesa
            </Button>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </nav>
  );
};

export default Navbar;
