// Configuración de contacto para El Tanque Restobar
export const RESTAURANT_CONFIG = {
  // Contacto principal
  phone: "+34662381665",
  email: "eltanquerestobar@email.com", // Cambiar por email real
  name: "El Tanque Restobar",
  
  // WhatsApp
  whatsapp: {
    number: "34662381665",
    message: "¡Hola! Me gustaría hacer una reserva en El Tanque Restobar."
  },
  
  // Configuración de envío
  notifications: {
    whatsapp: true,    // Activo - abre WhatsApp automáticamente
    email: false,      // Necesita backend
    sms: false         // Necesita backend
  },
  
  // Mensajes personalizados
  messages: {
    whatsappTitle: "🍔 NUEVA RESERVA - EL TANQUE 🍔",
    confirmTitle: "¡Reserva Enviada!",
    confirmMessage: "Hemos abierto WhatsApp con tu reserva. Por favor envía el mensaje para confirmar.",
    successMessage: "Te contactaremos pronto para confirmar los detalles de tu reserva."
  }
};

// Formatea el mensaje de WhatsApp
export const formatWhatsAppMessage = (formData: any) => {
  const config = RESTAURANT_CONFIG;
  
  let message = `*${config.messages.whatsappTitle}*\n\n`;
  message += `📅 *Fecha:* ${formData.date}\n`;
  message += `⏰ *Hora:* ${formData.time}\n`;
  message += `👥 *Personas:* ${formData.guests}\n`;
  message += `👤 *Nombre:* ${formData.name}\n`;
  message += `📱 *Teléfono:* ${formData.phone}\n`;
  
  if (formData.email) {
    message += `📧 *Email:* ${formData.email}\n`;
  }
  
  if (formData.notes) {
    message += `📝 *Notas:* ${formData.notes}\n`;
  }
  
  message += `\n🔔 *Por favor confirmar esta reserva a la brevedad posible*`;
  
  return message;
};

// Genera URL de WhatsApp
export const generateWhatsAppUrl = (message: string) => {
  const config = RESTAURANT_CONFIG;
  return `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(message)}`;
};
