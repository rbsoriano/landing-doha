import dohaLogo from "@/assets/706676282_17996413025951372_5192069832327466493_n-removebg-preview.webp";

const methodLabels = [
  { text: "Engajamento", top: "12%", left: "0", align: "right" as const },
  { text: "Retenção", top: "12%", right: "0", align: "left" as const },
  { text: "Ativação", top: "70%", left: "0", align: "right" as const },
  { text: "Aquisição", top: "70%", right: "0", align: "left" as const },
  { text: "Indicação", top: "82%", right: "15%", align: "left" as const },
];

const ServicesSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="metodologia" className="relative py-20 md:py-28 bg-[hsl(0,0%,5%)] overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-heading font-bold tracking-[0.2em] uppercase mb-4 text-primary fade-up">
            O MÉTODO DOHA
          </span>

          <h2 className="fade-up text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 leading-[1.1] uppercase">
            EXISTE UM <span className="text-gradient font-black">MÉTODO COMPROVADO</span>
            <br />
            PARA QUE SEU RESTAURANTE
            <br />
            <span className="font-black">NUNCA PARE</span> DE <span className="text-gradient font-black">VENDER</span>
          </h2>

          <p className="fade-up fade-up-delay-1 text-muted-foreground text-base sm:text-lg mb-16 italic">
            Se você seguir, irá manter seu negócio <strong className="text-white not-italic">faturando todos os dias</strong>.
          </p>
        </div>

        {/* Logo with glowing effect and labels */}
        <div className="fade-up fade-up-delay-2 relative max-w-xl mx-auto mb-16" style={{ minHeight: '520px' }}>

          {/* Animated glow rings */}
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-green-500/25 animate-pulse" />
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-green-500/15" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[480px] md:h-[480px] rounded-full border border-green-500/8" style={{ animation: 'pulse 4s ease-in-out infinite' }} />

          {/* Center glow */}
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-green-500/25 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] md:w-[170px] md:h-[170px] bg-green-400/35 blur-[50px] rounded-full pointer-events-none" />

          {/* DOHA Logo - centered */}
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={dohaLogo}
              alt="Método DOHA"
              className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] object-contain hover:scale-110 transition-transform duration-500"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(132, 204, 22, 0.5)) drop-shadow(0 0 60px rgba(132, 204, 22, 0.3))',
              }}
            />
          </div>

          {/* Method Labels with connecting lines */}
          {methodLabels.map((label, i) => (
            <div
              key={label.text}
              className="absolute flex items-center gap-2"
              style={{
                top: label.top,
                ...(label.align === "right" ? { left: label.left } : { right: label.right }),
              }}
            >
              {label.align === "right" && (
                <>
                  <span className="text-white/80 font-heading font-semibold text-xs sm:text-sm md:text-base tracking-wide">
                    {label.text}
                  </span>
                  <span className="text-primary font-bold">———</span>
                </>
              )}
              {label.align === "left" && (
                <>
                  <span className="text-primary font-bold">———</span>
                  <span className="text-white/80 font-heading font-semibold text-xs sm:text-sm md:text-base tracking-wide">
                    {label.text}
                  </span>
                </>
              )}
            </div>
          ))}

          {/* Monetização button at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500/30 bg-[hsl(0,0%,8%)]" style={{ boxShadow: '0 0 20px rgba(132, 204, 22, 0.15)' }}>
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-heading font-bold text-primary text-sm md:text-base tracking-wide">
                Monetização
              </span>
            </div>
          </div>
        </div>

        <div className="fade-up fade-up-delay-3 text-center">
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-primary text-primary-foreground font-heading font-bold text-sm sm:text-base px-8 py-5 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_0_20px_-5px_hsl(var(--primary)_/_0.5)] hover:shadow-[0_0_30px_-5px_hsl(var(--primary)_/_0.8)] uppercase tracking-wide"
          >
            QUERO ESSE MÉTODO NO MEU RESTAURANTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
