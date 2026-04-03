import { GOOGLE_CONFIG, GoogleApiResponse } from '../config/googleConfig';

// Cache simple para almacenar temporalmente los datos
const cache = new Map<string, { data: any; timestamp: number }>();

// Función para obtener datos del cache
const getCachedData = (key: string): any | null => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < GOOGLE_CONFIG.CACHE_DURATION * 60 * 1000) {
    return cached.data;
  }
  cache.delete(key);
  return null;
};

// Función para guardar datos en cache
const setCachedData = (key: string, data: any): void => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

// Función para obtener detalles del lugar desde Google Places API
export const getPlaceDetails = async (placeId?: string): Promise<GoogleApiResponse> => {
  const actualPlaceId = placeId || GOOGLE_CONFIG.PLACE_ID;
  
  // Verificar cache primero
  const cacheKey = `place_${actualPlaceId}`;
  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    // Construir URL de la API
    const url = `${GOOGLE_CONFIG.BASE_URL}/place/details/json?` +
      `place_id=${actualPlaceId}&` +
      `fields=${GOOGLE_CONFIG.FIELDS}&` +
      `key=${GOOGLE_CONFIG.API_KEY}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GoogleApiResponse = await response.json();
    
    // Guardar en cache si la respuesta es exitosa
    if (data.status === 'OK') {
      setCachedData(cacheKey, data);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching place details:', error);
    return {
      status: 'UNKNOWN_ERROR',
      error_message: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
};

// Función para obtener solo el horario
export const getOpeningHours = async (placeId?: string) => {
  const response = await getPlaceDetails(placeId);
  
  if (response.status === 'OK' && response.result) {
    return {
      success: true,
      data: response.result.opening_hours,
      placeInfo: {
        name: response.result.name,
        address: response.result.formatted_address,
        phone: response.result.formatted_phone_number,
      },
    };
  }
  
  return {
    success: false,
    error: response.error_message || 'Error al obtener horario',
  };
};

// Función para verificar si el negocio está abierto ahora
export const isOpenNow = async (placeId?: string): Promise<boolean> => {
  const response = await getPlaceDetails(placeId);
  
  return response.status === 'OK' && 
         response.result?.opening_hours?.open_now === true;
};

// Función para obtener el estado actual con mensaje
export const getCurrentStatus = async (placeId?: string) => {
  const response = await getPlaceDetails(placeId);
  
  if (response.status !== 'OK' || !response.result?.opening_hours) {
    return {
      isOpen: false,
      status: 'No disponible',
      color: 'text-gray-500',
      message: 'No se pudo verificar el estado',
    };
  }
  
  const { open_now } = response.result.opening_hours;
  
  return {
    isOpen: open_now,
    status: open_now ? 'Abierto ahora' : 'Cerrado',
    color: open_now ? 'text-green-500' : 'text-red-500',
    message: open_now ? 
      'El restaurante está abierto' : 
      'El restaurante está cerrado',
  };
};

// Función para formatear el horario para mostrar
export const formatOpeningHours = (openingHours: any) => {
  if (!openingHours) return [];
  
  // Usar weekday_text si está disponible (formato más legible)
  if (openingHours.weekday_text) {
    return openingHours.weekday_text.map((text: string, index: number) => ({
      day: index,
      dayName: getDayName(index),
      hours: text,
    }));
  }
  
  // Formatear desde periods si no hay weekday_text
  if (openingHours.periods) {
    return openingHours.periods.map((period: any, index: number) => ({
      day: period.open.day,
      dayName: getDayName(period.open.day),
      openTime: formatTime(period.open.time),
      closeTime: formatTime(period.close.time),
      hours: `${formatTime(period.open.time)} - ${formatTime(period.close.time)}`,
    }));
  }
  
  return [];
};

// Función auxiliar para obtener nombre del día
const getDayName = (dayIndex: number): string => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return days[dayIndex];
};

// Función auxiliar para formatear hora
const formatTime = (time: string): string => {
  if (!time || time.length !== 4) return time;
  
  const hours = time.substring(0, 2);
  const minutes = time.substring(2, 4);
  
  return `${hours}:${minutes}`;
};
