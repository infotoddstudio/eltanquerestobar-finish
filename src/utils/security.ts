// Utilidades de seguridad para validación y sanitización de inputs

// Sanitización contra XSS
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    // Eliminar scripts maliciosos
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Eliminar eventos on* maliciosos
    .replace(/on\w+\s*=/gi, '')
    // Eliminar javascript: URLs
    .replace(/javascript:/gi, '')
    // Eliminar etiquetas HTML peligrosas
    .replace(/<(iframe|object|embed|form|input|textarea|button|select|option)[^>]*>/gi, '')
    // Escapar caracteres especiales
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    // Limitar longitud
    .substring(0, 1000);
};

// Validación de email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Validación de teléfono (formato español)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Validación de nombre (solo letras y espacios)
export const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 50;
};

// Validación de mensajes
export const isValidMessage = (message: string): boolean => {
  const sanitized = sanitizeInput(message);
  return sanitized.length >= 10 && sanitized.length <= 1000;
};

// Rate limiting simple (memoria local)
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();

export const checkRateLimit = (
  identifier: string, 
  maxRequests: number = 5, 
  windowMs: number = 60000 // 1 minuto
): { allowed: boolean; remaining: number; resetTime: number } => {
  const now = Date.now();
  const userLimit = rateLimitStore.get(identifier);
  
  if (!userLimit || now - userLimit.lastReset > windowMs) {
    rateLimitStore.set(identifier, { count: 1, lastReset: now });
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
  }
  
  if (userLimit.count >= maxRequests) {
    return { 
      allowed: false, 
      remaining: 0, 
      resetTime: userLimit.lastReset + windowMs 
    };
  }
  
  userLimit.count++;
  return { 
    allowed: true, 
    remaining: maxRequests - userLimit.count, 
    resetTime: userLimit.lastReset + windowMs 
  };
};

// Validación de URL segura
export const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};

// Validación de longitud de campos
export const validateLength = (
  value: string, 
  minLength: number, 
  maxLength: number
): { isValid: boolean; error?: string } => {
  if (value.length < minLength) {
    return { isValid: false, error: `Debe tener al menos ${minLength} caracteres` };
  }
  
  if (value.length > maxLength) {
    return { isValid: false, error: `No puede tener más de ${maxLength} caracteres` };
  }
  
  return { isValid: true };
};

// Detección de patrones sospechosos
export const containsSuspiciousPatterns = (input: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\s*\(/i,
    /expression\s*\(/i,
    /@import/i,
    /vbscript:/i,
    /data:text\/html/i
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(input));
};

// Sanitización para nombres de archivo
export const sanitizeFileName = (fileName: string): string => {
  return fileName
    .replace(/[^a-zA-Z0-9.\-_]/g, '')
    .replace(/\.{2,}/g, '.')
    .toLowerCase()
    .substring(0, 255);
};

// Validación de datos de reserva
export const validateReservationData = (data: {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  people: number;
  notes?: string;
}) => {
  const errors: string[] = [];
  
  // Validar nombre
  if (!isValidName(data.name)) {
    errors.push('Nombre inválido');
  }
  
  // Validar teléfono
  if (!isValidPhone(data.phone)) {
    errors.push('Teléfono inválido');
  }
  
  // Validar email
  if (!isValidEmail(data.email)) {
    errors.push('Email inválido');
  }
  
  // Validar fecha
  const reservationDate = new Date(data.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (isNaN(reservationDate.getTime()) || reservationDate < today) {
    errors.push('Fecha inválida');
  }
  
  // Validar hora
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!timeRegex.test(data.time)) {
    errors.push('Hora inválida');
  }
  
  // Validar número de personas
  if (data.people < 1 || data.people > 20) {
    errors.push('Número de personas inválido (1-20)');
  }
  
  // Validar notas (opcional)
  if (data.notes && !isValidMessage(data.notes)) {
    errors.push('Notas inválidas');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: {
      ...data,
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email).toLowerCase(),
      phone: sanitizeInput(data.phone),
      notes: data.notes ? sanitizeInput(data.notes) : undefined
    }
  };
};
