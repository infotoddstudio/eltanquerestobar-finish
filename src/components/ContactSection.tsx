import { Phone, MapPin, Clock, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const schedule = [
  { day: "Lunes", hours: "18:00 – 1:00" },
  { day: "Martes", hours: "18:00 – 1:00" },
  { day: "Miércoles", hours: "18:00 – 1:00" },
  { day: "Jueves", hours: "18:00 – 1:00" },
  { day: "Viernes", hours: "18:00 – 2:00" },
  { day: "Sábado", hours: "18:00 – 2:00" },
  { day: "Domingo", hours: "18:00 – 1:00" },
];

const faqs = [
  { q: "¿Se puede reservar?", a: "Llámanos y te confirmamos disponibilidad." },
  { q: "¿Hay opciones para compartir?", a: "Sí: nachos, patatas y entrantes." },
  { q: "¿Delivery?", a: "Disponible según zona y plataforma." },
];

const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="contacto" className="section-padding bg-card">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground">
          Contacto y <span className="text-primary">horarios</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Dirección</p>
                <p className="text-sm text-muted-foreground">P.º del Óvalo, 14, 44001 Teruel</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Teléfono</p>
                <a href="tel:+34662381665" className="text-sm text-primary hover:underline">+34 662 38 16 65</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-2">Horario</p>
                <table className="text-sm text-muted-foreground">
                  <tbody>
                    {schedule.map((s) => (
                      <tr key={s.day}>
                        <td className="pr-4 py-0.5">{s.day}</td>
                        <td>{s.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground/70 mt-2 italic">
                  El horario puede variar en festivos. Recomendamos llamar antes.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild>
                <a href="tel:+34662381665"><Phone size={16} /> Llamar ahora</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://maps.google.com/?q=Paseo+del+Óvalo+14+Teruel" target="_blank" rel="noopener noreferrer">
                  <MapPin size={16} /> Cómo llegar
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.instagram.com/eltanquerestobar" target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} /> Ver Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border h-80 lg:h-auto">
            <iframe
              title="Ubicación El Tanque Restobar Teruel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.5!2d-1.1065!3d40.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPaseo+del+%C3%93valo+14+Teruel!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-xl mx-auto">
          <h3 className="font-display text-2xl text-center mb-6 text-foreground">Preguntas frecuentes</h3>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-secondary rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left text-sm font-medium text-foreground"
                >
                  {faq.q}
                  <ChevronDown size={16} className={`text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground animate-fade-in">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
