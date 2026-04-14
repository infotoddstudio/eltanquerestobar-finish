// Configuración para Google Places API - MOVIDA A BACKEND POR SEGURIDAD
export const GOOGLE_CONFIG = {
  // URL base de la API - SOLO PARA REFERENCIA
  BASE_URL: 'https://maps.googleapis.com/maps/api',
  
  // Campos que queremos obtener - SOLO PARA REFERENCIA
  FIELDS: 'opening_hours,name,formatted_address,formatted_phone_number',
  
  // Configuración de caché (en minutos)
  CACHE_DURATION: 60, // 1 hora
  
  // IMPORTANTE: PLACE_ID y API_KEY han sido movidos al backend
  // por seguridad para evitar exposición en frontend
  BACKEND_ENDPOINT: '/api/places/hours', // Endpoint seguro del servidor
};

// Función para validar la configuración (solo para desarrollo)
export const validateGoogleConfig = () => {
  // En producción, toda la validación se hace en backend
  if (process.env.NODE_ENV === 'production') {
    return {
      isValid: true, // Siempre válido en producción (backend maneja)
      missing: [],
      message: 'Configuración manejada por backend'
    };
  }
  
  // En desarrollo, verificar que tengamos endpoint
  const missing = [];
  
  if (!GOOGLE_CONFIG.BACKEND_ENDPOINT) {
    missing.push('BACKEND_ENDPOINT');
  }
  
  return {
    isValid: missing.length === 0,
    missing,
  };
};

// Tipos para TypeScript
export interface GooglePlaceDetails {
  place_id: string;
  name: string;
  formatted_address: string;
  formatted_phone_number?: string;
  opening_hours?: {
    open_now: boolean;
    periods?: Array<{
      open: { day: number; time: string };
      close: { day: number; time: string };
    }>;
    weekday_text?: string[];
  };
}

export interface GoogleApiResponse {
  status: 'OK' | 'ZERO_RESULTS' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR';
  result?: GooglePlaceDetails;
  error_message?: string;
}
