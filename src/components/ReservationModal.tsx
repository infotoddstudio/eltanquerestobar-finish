import { useState } from "react";
import { Calendar, Clock, Users, Phone, Mail, X, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RESTAURANT_CONFIG, formatWhatsAppMessage, generateWhatsAppUrl } from "@/config/restaurant";

interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const ReservationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"
  ];

  const guestOptions = [
    { value: "1", label: "1 persona" },
    { value: "2", label: "2 personas" },
    { value: "3", label: "3 personas" },
    { value: "4", label: "4 personas" },
    { value: "5", label: "5 personas" },
    { value: "6", label: "6 personas" },
    { value: "7", label: "7 personas" },
    { value: "8", label: "8+ personas" }
  ];

  const handleInputChange = (field: keyof ReservationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    return formData.name && formData.phone && formData.date && formData.time && formData.guests;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar por WhatsApp (activo por defecto)
      if (RESTAURANT_CONFIG.notifications.whatsapp) {
        const message = formatWhatsAppMessage(formData);
        const whatsappUrl = generateWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
      }

      // Enviar SMS (necesita backend)
      if (RESTAURANT_CONFIG.notifications.sms) {
        // await fetch('/api/send-sms', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     to: RESTAURANT_CONFIG.phone,
        //     message: formatWhatsAppMessage(formData)
        //   })
        // });
      }

      // Enviar Email (necesita backend)
      if (RESTAURANT_CONFIG.notifications.email) {
        // await fetch('/api/send-email', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     to: RESTAURANT_CONFIG.email,
        //     subject: `Nueva Reserva - ${RESTAURANT_CONFIG.name}`,
        //     message: formatWhatsAppMessage(formData)
        //   })
        // });
      }

      // Simulación de procesamiento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error al enviar reserva:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      notes: ""
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-alfa-slab text-foreground">Reservar Mesa</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={resetForm}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Teléfono *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-medium text-foreground">
                    Fecha *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-medium text-foreground">
                    Hora *
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)} required>
                      <SelectTrigger className="pl-10 w-full">
                        <SelectValue placeholder="Selecciona hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-sm font-medium text-foreground">
                  Número de personas *
                </Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)} required>
                    <SelectTrigger className="pl-10 w-full">
                      <SelectValue placeholder="¿Cuántos?" />
                    </SelectTrigger>
                    <SelectContent>
                      {guestOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm font-medium text-foreground">
                  Notas adicionales
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Alguna alergia, celebración especial, preferencia de mesa..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  rows={3}
                  className="w-full resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetForm}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting || !validateForm()}
                >
                  {isSubmitting ? "Reservando..." : "Confirmar Reserva"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-alfa-slab text-foreground mb-3">
                {RESTAURANT_CONFIG.messages.confirmTitle}
              </h3>
              <p className="text-muted-foreground mb-6">
                {RESTAURANT_CONFIG.messages.confirmMessage}
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-medium text-foreground mb-2">Detalles de tu reserva:</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><span className="font-medium">Nombre:</span> {formData.name}</p>
                  <p><span className="font-medium">Teléfono:</span> {formData.phone}</p>
                  <p><span className="font-medium">Fecha:</span> {formData.date}</p>
                  <p><span className="font-medium">Hora:</span> {formData.time}</p>
                  <p><span className="font-medium">Personas:</span> {formData.guests}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={resetForm}
                  className="flex-1"
                >
                  Cerrar
                </Button>
                <Button 
                  onClick={() => {
                    const message = formatWhatsAppMessage(formData);
                    const whatsappUrl = generateWhatsAppUrl(message);
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
