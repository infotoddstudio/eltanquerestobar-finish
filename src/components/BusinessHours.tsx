import React, { useState, useEffect } from 'react';
import { Clock, MapPin, RefreshCw } from 'lucide-react';
import { getOpeningHours, getCurrentStatus, formatOpeningHours } from '../services/googlePlacesService';
import { GOOGLE_CONFIG, validateGoogleConfig } from '../config/googleConfig';

interface BusinessHoursProps {
  placeId?: string;
}

const BusinessHours = ({ placeId }: BusinessHoursProps) => {
  const [hours, setHours] = useState<any>(null);
  const [currentStatus, setCurrentStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Función para obtener el horario
  const fetchBusinessHours = async () => {
    try {
      if (refreshing) setRefreshing(true);
      if (!refreshing) setLoading(true);
      setError(null);

      // Validar configuración
      const config = validateGoogleConfig();
      if (!config.isValid) {
        throw new Error(`Configuración incompleta: faltan ${config.missing.join(', ')}`);
      }

      // Obtener horario desde Google
      const hoursResponse = await getOpeningHours(placeId);
      
      if (hoursResponse.success) {
        setHours(hoursResponse.data);
        // Obtener estado actual
        const status = await getCurrentStatus(placeId);
        setCurrentStatus(status);
      } else {
        throw new Error(hoursResponse.error);
      }
    } catch (err) {
      console.error('Error fetching business hours:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchBusinessHours();

    // Recargar cada hora para mantener datos actualizados
    const interval = setInterval(fetchBusinessHours, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [placeId]);

  // Formatear horario para mostrar
  const formattedHours = hours ? formatOpeningHours(hours) : [];

  // Renderizado del componente
  if (loading && !refreshing) {
    return (
      <div className="bg-black/50 border border-white/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-[#f1021A]" />
          <h3 className="text-xl font-bold text-white">Horario</h3>
        </div>
        <div className="text-white/60 text-center py-4">
          <div className="animate-pulse">Cargando horario...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black/50 border border-white/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-[#f1021A]" />
          <h3 className="text-xl font-bold text-white">Horario</h3>
        </div>
        <div className="text-red-400 text-center py-4">
          <p className="text-sm">Error al cargar horario</p>
          <p className="text-xs mt-1">{error}</p>
          <button 
            onClick={fetchBusinessHours}
            className="mt-3 text-xs text-[#f1021A] hover:text-[#d01815] transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/50 border border-white/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#f1021A]" />
          <h3 className="text-xl font-bold text-white">Horario</h3>
        </div>
        
        {/* Estado actual */}
        {currentStatus && (
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${currentStatus.isOpen ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
            <div className={`w-2 h-2 rounded-full ${currentStatus.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`text-sm font-medium ${currentStatus.color}`}>
              {currentStatus.status}
            </span>
          </div>
        )}
      </div>

      {/* Horario de la semana */}
      {formattedHours.length > 0 && (
        <div className="space-y-2">
          {formattedHours.map((dayInfo: any, index: number) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
              <span className="text-white font-medium">
                {dayInfo.dayName}
              </span>
              <span className="text-white/60 text-sm">
                {dayInfo.hours}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Información adicional */}
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex items-center justify-between">
          <p className="text-xs text-white/40">
            Sincronizado con Google Business Profile
          </p>
          <button 
            onClick={fetchBusinessHours}
            disabled={refreshing}
            className="flex items-center gap-1 text-xs text-[#f1021A] hover:text-[#d01815] transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3 h-3 ${refreshing ? 'animate-spin' : ''}`} />
            {refreshing ? 'Actualizando...' : 'Actualizar'}
          </button>
        </div>
        
        {/* Información de configuración para desarrollo */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-3 p-2 bg-yellow-500/10 rounded text-xs text-yellow-400">
            <p>Place ID: {placeId || GOOGLE_CONFIG.PLACE_ID}</p>
            <p>API Key: {GOOGLE_CONFIG.API_KEY ? 'Configurada' : 'No configurada'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessHours;
