import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReservationWidgetProps {
  provider?: "opentable" | "gloriafood" | "custom";
  restaurantId?: string;
  className?: string;
}

const ReservationWidget = ({ 
  provider = "custom", 
  restaurantId, 
  className = "" 
}: ReservationWidgetProps) => {
  
  const handleWidgetClick = () => {
    switch (provider) {
      case "opentable":
        if (restaurantId) {
          window.open(`https://www.opentable.com/r/${restaurantId}`, '_blank');
        }
        break;
      case "gloriafood":
        if (restaurantId) {
          window.open(`https://www.gloriafood.es/restaurant/${restaurantId}`, '_blank');
        }
        break;
      default:
        // Abrir modal personalizado (ya implementado en el Navbar)
        document.dispatchEvent(new CustomEvent('openReservationModal'));
        break;
    }
  };

  if (provider === "opentable" && restaurantId) {
    return (
      <div className={`bg-background rounded-xl border border-border p-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-xl font-alfa-slab text-foreground mb-4">
            Reserva Online
          </h3>
          <p className="text-muted-foreground mb-6">
            Haz clic para reservar tu mesa a través de OpenTable
          </p>
          <Button 
            onClick={handleWidgetClick}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Reservar en OpenTable
          </Button>
        </div>
      </div>
    );
  }

  if (provider === "gloriafood" && restaurantId) {
    return (
      <div className={`bg-background rounded-xl border border-border p-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-xl font-alfa-slab text-foreground mb-4">
            Reserva Online
          </h3>
          <p className="text-muted-foreground mb-6">
            Haz clic para reservar tu mesa a través de GloriaFood
          </p>
          <Button 
            onClick={handleWidgetClick}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Reservar en GloriaFood
          </Button>
        </div>
      </div>
    );
  }

  // Widget personalizado por defecto
  return (
    <div className={`bg-background rounded-xl border border-border p-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-xl font-alfa-slab text-foreground mb-4">
          ¿Lista para disfrutar?
        </h3>
        <p className="text-muted-foreground mb-6">
          Reserva tu mesa ahora y asegura tu experiencia en El Tanque
        </p>
        <Button 
          onClick={handleWidgetClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Reservar Mesa
        </Button>
      </div>
    </div>
  );
};

export default ReservationWidget;
