// Configuración para Google Places API
export const GOOGLE_CONFIG = {
  // Place ID de El Tanque Restobar (debe obtenerse desde Google Business Profile)
  PLACE_ID: process.env.REACT_APP_GOOGLE_PLACE_ID || 'ChIJY4R4K6sQg0R5J8X7Q8X7Q',
  
  // API Key de Google Maps (debe configurarse en variables de entorno)
  API_KEY: process.env.REACT_APP_GOOGLE_API_KEY || '',
  
  // URL base de la API
  BASE_URL: 'https://maps.googleapis.com/maps/api',
  
  // Campos que queremos obtener
  FIELDS: 'opening_hours,name,formatted_address,formatted_phone_number',
  
  // Configuración de caché (en minutos)
  CACHE_DURATION: 60, // 1 hora
};

// Función para validar la configuración
export const validateGoogleConfig = () => {
  const missing = [];
  
  if (!GOOGLE_CONFIG.PLACE_ID || GOOGLE_CONFIG.PLACE_ID === 'ChIJY4R4K6sQg0R5J8X7Q8X7Q') {
    missing.push('PLACE_ID');
  }
  
  if (!GOOGLE_CONFIG.API_KEY) {
    missing.push('API_KEY');
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
