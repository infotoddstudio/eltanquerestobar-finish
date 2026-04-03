export default function ElTanqueHero() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        {/* Background grid/noise feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,2,26,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:54px_54px]" />

        {/* Floating stickers */}
        <div className="absolute right-[4%] sm:right-[8%] top-[16%] sm:top-[20%] rotate-[10deg] rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm md:text-base font-black uppercase shadow-xl animate-pulse">
          Cerveza fría aquí
        </div>
        <div className="absolute left-[6%] sm:left-[10%] bottom-[10%] sm:bottom-[14%] rotate-[8deg] bg-white text-black px-3 py-2 sm:px-5 sm:py-3 rounded-2xl text-xs sm:text-sm md:text-sm font-extrabold uppercase shadow-2xl">
          Smash • Nachos • Birra
        </div>

        <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 w-full max-w-7xl pt-16 sm:pt-20 md:pt-28">
          {/* Left */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="text-[3.5rem] leading-[1.1] sm:text-[4rem] sm:leading-[1.05] md:text-[5.5rem] md:leading-[1.0] lg:text-[9rem] lg:leading-[0.95] xl:text-[11rem] xl:leading-[0.9] font-black uppercase tracking-[-0.02em] sm:tracking-[-0.04em] md:tracking-[-0.06em] font-['Alfa_Slab_One'] w-full">
                <div className="animate-[slideUp_0.8s_ease-out] mb-2 md:mb-4">AL PIE</div>
                <div className="animate-[slideUp_1s_ease-out] text-[#f1021A] mb-2 md:mb-4">DEL</div>
                <div className="animate-[slideUp_1.2s_ease-out]">CAÑON</div>
              </div>
            </div>

            {/* Stickers flotantes alrededor del título - Solo en móvil/tablet */}
            <div className="lg:hidden absolute top-0 right-0 w-[120px] h-[120px]">
              {/* Sticker - SMASH */}
              <div className="absolute top-[10px] right-[20px] rotate-[-6deg] bg-white text-black px-3 py-1 rounded-full text-xs font-black uppercase shadow-2xl animate-pulse z-20"
                   style={{ animationDelay: '0.2s' }}>
                SMASH
              </div>

              {/* Sticker - 100% REAL */}
              <div className="absolute top-[50px] right-[5px] rotate-[8deg] bg-black text-white px-2 py-1 rounded-full text-xs font-black uppercase shadow-2xl animate-pulse z-20"
                   style={{ animationDelay: '0.5s' }}>
                100% REAL
              </div>

              {/* Sticker - EL FLOW SE SIRVE AQUÍ */}
              <div className="absolute top-[90px] right-[15px] rotate-[-4deg] bg-[#f1021A] text-white px-2 py-1 rounded-full text-xs font-black uppercase shadow-2xl animate-pulse z-20"
                   style={{ animationDelay: '0.8s' }}>
                EL FLOW
              </div>
            </div>

            <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-base sm:text-base md:text-lg text-white/80 font-medium leading-relaxed">
              Un restobar con actitud. Hamburguesas artesanales, cerveza helada y una experiencia visual que se siente grande desde que entras.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-4 justify-center sm:justify-start">
              <a href="#carta" className="rounded-full bg-[#f1021A] text-white px-6 py-4 sm:px-7 sm:py-4 text-sm sm:text-sm md:text-base font-black uppercase shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300 text-center">
                Ver carta
              </a>
              <button 
                onClick={() => document.dispatchEvent(new CustomEvent('openReservationModal'))}
                className="rounded-full border-2 border-white px-6 py-4 sm:px-7 sm:py-4 text-sm sm:text-sm md:text-base font-black uppercase hover:bg-white hover:text-black transition duration-300 text-center"
              >
                Reservar ya
              </button>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start text-[10px] sm:text-xs font-bold uppercase text-white/60">
              <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 sm:px-3 sm:py-1">Ambiente brutal</span>
              <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 sm:px-3 sm:py-1">Ideal para grupos</span>
              <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 sm:px-3 sm:py-1">Terraza</span>
              <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 sm:px-3 sm:py-1">Para llevar</span>
              <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 sm:px-3 sm:py-1">Ambiente animado</span>
            </div>
          </div>

          {/* Right - Solo stickers en desktop */}
          <div className="relative min-h-[200px] hidden lg:block">
            {/* Sticker - SMASH */}
            <div className="absolute right-[20%] top-[15%] rotate-[-6deg] bg-white text-black px-4 py-2 rounded-full text-sm md:text-base font-black uppercase shadow-2xl animate-pulse z-20"
                 style={{ animationDelay: '0.2s' }}>
              SMASH
            </div>

            {/* Sticker - 100% REAL */}
            <div className="absolute right-[10%] top-[35%] rotate-[8deg] bg-black text-white px-3 py-2 rounded-full text-xs md:text-sm font-black uppercase shadow-2xl animate-pulse z-20"
                 style={{ animationDelay: '0.5s' }}>
              100% REAL
            </div>

            {/* Sticker - EL FLOW SE SIRVE AQUÍ */}
            <div className="absolute right-[15%] top-[55%] rotate-[-4deg] bg-[#f1021A] text-white px-3 py-2 rounded-full text-xs md:text-sm font-black uppercase shadow-2xl animate-pulse z-20"
                 style={{ animationDelay: '0.8s' }}>
              EL FLOW SE SIRVE AQUÍ
            </div>

            {/* Sticker adicional - estilo streetwear */}
            <div className="absolute right-[8%] bottom-[20%] rotate-[12deg] bg-white text-black px-3 py-1.5 rounded-lg text-xs md:text-sm font-extrabold uppercase shadow-2xl animate-pulse z-20"
                 style={{ animationDelay: '1.1s' }}>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#f1021A] rounded-full"></div>
                <span>PREMIUM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
