import React, { useState, useEffect } from 'react';
import { Clock, MapPin, RefreshCw } from 'lucide-react';
import { formatOpeningHours } from '../services/googlePlacesService';
import { GOOGLE_CONFIG, validateGoogleConfig } from '../config/googleConfig';

interface BusinessHoursProps {
  placeId?: string;
}

const BusinessHours = ({ placeId }: BusinessHoursProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean;
    status: string;
    color: string;
    message: string;
  } | null>(null);
  const [openingHours, setOpeningHours] = useState<any[]>([]);

  // Función segura para obtener datos del backend
  const fetchBusinessHours = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(GOOGLE_CONFIG.BACKEND_ENDPOINT, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Añadir headers de seguridad si es necesario
          'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'same-origin', // Solo mismo origen
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setOpeningHours(formatOpeningHours(data.data));
        setCurrentStatus({
          isOpen: data.isOpenNow || false,
          status: data.isOpenNow ? 'Abierto ahora' : 'Cerrado',
          color: data.isOpenNow ? 'text-green-500' : 'text-red-500',
          message: data.isOpenNow ? 
            'El restaurante está abierto' : 
            'El restaurante está cerrado',
        });
      } else {
        throw new Error(data.error || 'Error al cargar datos');
      }
    } catch (err) {
      console.error('Error fetching business hours:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Validar configuración (solo en desarrollo)
    const validation = validateGoogleConfig();
    if (!validation.isValid && process.env.NODE_ENV === 'development') {
      setError(`Configuración incompleta: ${validation.missing.join(', ')}`);
      setLoading(false);
      return;
    }
    
    fetchBusinessHours();
  }, [placeId]);

  if (loading) {
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

      {/* Horario semanal */}
      <div className="space-y-2">
        {openingHours.map((day, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-white/80">{day.dayName}</span>
            <span className="text-white/60">{day.hours}</span>
          </div>
        ))}
      </div>

      {/* Información adicional */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-white/40 text-center">
          Horario sincronizado con Google Business Profile
        </p>
        <button 
          onClick={fetchBusinessHours}
          className="mt-2 w-full text-xs text-white/40 hover:text-white/60 transition-colors flex items-center justify-center gap-1"
        >
          <RefreshCw size={12} />
          Actualizar horario
        </button>
      </div>
    </div>
  );
};

export default BusinessHours;
