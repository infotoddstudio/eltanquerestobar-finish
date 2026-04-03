import React from 'react';

const TickerBanner = () => {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Contenedor principal con altura fija */}
      <div className="relative h-20 flex items-center">
        {/* Track único con animación */}
        <div className="flex animate-slide-left whitespace-nowrap">
          {/* Contenido duplicado para loop infinito */}
          <div className="flex items-center gap-8">
            {/* Primer conjunto de elementos */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={`first-${index}`} className="flex items-center gap-4 flex-shrink-0">
                {/* Tanque SVG */}
                <div className="flex-shrink-0">
                  <svg 
                    width="80" 
                    height="53" 
                    viewBox="0 0 120 80" 
                    className="w-[60px] h-[40px] sm:w-[70px] sm:h-[47px] md:w-[80px] md:h-[53px] lg:w-[90px] lg:h-[60px]"
                  >
                    {/* Cuerpo del tanque */}
                    <rect x="20" y="30" width="80" height="25" rx="3" fill="#1a1a1a" />
                    <rect x="25" y="35" width="70" height="15" rx="2" fill="#2d2d2d" />
                    
                    {/* Torre del tanque */}
                    <rect x="85" y="15" width="15" height="20" rx="2" fill="#1a1a1a" />
                    <rect x="87" y="17" width="11" height="16" rx="1" fill="#2d2d2d" />
                    
                    {/* Cañón */}
                    <rect x="95" y="20" width="25" height="4" rx="1" fill="#f1021A" />
                    <rect x="96" y="21" width="23" height="2" rx="0.5" fill="#d01815" />
                    
                    {/* Ruedas con animación */}
                    <g className="animate-spin-slow">
                      <circle cx="35" cy="60" r="8" fill="#000" />
                      <circle cx="35" cy="60" r="6" fill="#333" />
                      <circle cx="35" cy="60" r="2" fill="#f1021A" />
                      <line x1="35" y1="52" x2="35" y2="68" stroke="#f1021A" strokeWidth="1" />
                      <line x1="27" y1="60" x2="43" y2="60" stroke="#f1021A" strokeWidth="1" />
                    </g>
                    
                    <g className="animate-spin-slow">
                      <circle cx="85" cy="60" r="8" fill="#000" />
                      <circle cx="85" cy="60" r="6" fill="#333" />
                      <circle cx="85" cy="60" r="2" fill="#f1021A" />
                      <line x1="85" y1="52" x2="85" y2="68" stroke="#f1021A" strokeWidth="1" />
                      <line x1="77" y1="60" x2="93" y2="60" stroke="#f1021A" strokeWidth="1" />
                    </g>
                    
                    {/* Detalles */}
                    <rect x="30" y="38" width="15" height="3" rx="1" fill="#f1021A" opacity="0.8" />
                    <circle cx="75" cy="42" r="2" fill="#f1021A" opacity="0.6" />
                    
                    {/* Efecto de movimiento */}
                    <path d="M 10 40 L 15 40 L 15 45 L 10 45 Z" fill="#f1021A" opacity="0.3" />
                    <path d="M 105 40 L 110 40 L 110 45 L 105 45 Z" fill="#f1021A" opacity="0.3" />
                  </svg>
                </div>
                
                {/* Texto */}
                <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider font-['Alfa_Slab_One'] whitespace-nowrap">
                  EL TANQUE
                </span>
                
                {/* Separador visual */}
                <div className="w-6 h-0.5 bg-[#f1021A] opacity-50 flex-shrink-0"></div>
              </div>
            ))}
            
            {/* Segundo conjunto duplicado para loop continuo */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={`second-${index}`} className="flex items-center gap-4 flex-shrink-0">
                {/* Tanque SVG */}
                <div className="flex-shrink-0">
                  <svg 
                    width="80" 
                    height="53" 
                    viewBox="0 0 120 80" 
                    className="w-[60px] h-[40px] sm:w-[70px] sm:h-[47px] md:w-[80px] md:h-[53px] lg:w-[90px] lg:h-[60px]"
                  >
                    {/* Cuerpo del tanque */}
                    <rect x="20" y="30" width="80" height="25" rx="3" fill="#1a1a1a" />
                    <rect x="25" y="35" width="70" height="15" rx="2" fill="#2d2d2d" />
                    
                    {/* Torre del tanque */}
                    <rect x="85" y="15" width="15" height="20" rx="2" fill="#1a1a1a" />
                    <rect x="87" y="17" width="11" height="16" rx="1" fill="#2d2d2d" />
                    
                    {/* Cañón */}
                    <rect x="95" y="20" width="25" height="4" rx="1" fill="#f1021A" />
                    <rect x="96" y="21" width="23" height="2" rx="0.5" fill="#d01815" />
                    
                    {/* Ruedas con animación */}
                    <g className="animate-spin-slow">
                      <circle cx="35" cy="60" r="8" fill="#000" />
                      <circle cx="35" cy="60" r="6" fill="#333" />
                      <circle cx="35" cy="60" r="2" fill="#f1021A" />
                      <line x1="35" y1="52" x2="35" y2="68" stroke="#f1021A" strokeWidth="1" />
                      <line x1="27" y1="60" x2="43" y2="60" stroke="#f1021A" strokeWidth="1" />
                    </g>
                    
                    <g className="animate-spin-slow">
                      <circle cx="85" cy="60" r="8" fill="#000" />
                      <circle cx="85" cy="60" r="6" fill="#333" />
                      <circle cx="85" cy="60" r="2" fill="#f1021A" />
                      <line x1="85" y1="52" x2="85" y2="68" stroke="#f1021A" strokeWidth="1" />
                      <line x1="77" y1="60" x2="93" y2="60" stroke="#f1021A" strokeWidth="1" />
                    </g>
                    
                    {/* Detalles */}
                    <rect x="30" y="38" width="15" height="3" rx="1" fill="#f1021A" opacity="0.8" />
                    <circle cx="75" cy="42" r="2" fill="#f1021A" opacity="0.6" />
                    
                    {/* Efecto de movimiento */}
                    <path d="M 10 40 L 15 40 L 15 45 L 10 45 Z" fill="#f1021A" opacity="0.3" />
                    <path d="M 105 40 L 110 40 L 110 45 L 105 45 Z" fill="#f1021A" opacity="0.3" />
                  </svg>
                </div>
                
                {/* Texto */}
                <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider font-['Alfa_Slab_One'] whitespace-nowrap">
                  EL TANQUE
                </span>
                
                {/* Separador visual */}
                <div className="w-6 h-0.5 bg-[#f1021A] opacity-50 flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerBanner;
