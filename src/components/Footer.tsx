import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12 pb-24 lg:pb-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <span className="font-display text-2xl text-primary">EL TANQUE</span>
          <p className="text-sm text-muted-foreground mt-2">
            Tu punto de encuentro en el Paseo del Óvalo.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg text-foreground mb-3">Contacto</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><MapPin size={14} /> P.º del Óvalo, 14, Teruel</p>
            <a href="tel:+34662381665" className="flex items-center gap-2 hover:text-primary"><Phone size={14} /> +34 662 38 16 65</a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg text-foreground mb-3">Enlaces</h4>
          <div className="space-y-2 text-sm">
            <a href="https://sites.google.com/view/cartaeltanque/home" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary">Carta</a>
            <a href="/#contacto" className="block text-muted-foreground hover:text-primary">Contacto</a>
            <Link to="/legal" className="block text-muted-foreground hover:text-primary">Aviso legal</Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-lg text-foreground mb-3">Síguenos</h4>
          <a
            href="https://www.instagram.com/eltanquerestobar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <Instagram size={18} /> @eltanquerestobar
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} El Tanque Restobar. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
