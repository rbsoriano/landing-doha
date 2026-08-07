import { ChevronDown } from "lucide-react";
import heroClient from "@/assets/FOTOS DOHA (3).webp";

const marqueeItems = [
  "+10 CLIENTES ATIVOS",
  "+2M EM VENDAS PARA OS NOSSOS CLIENTES",
  "+5 ANOS DE EXPERIÊNCIA",
];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const renderMarqueeContent = () => (
    <>
      {marqueeItems.map((item, i) => (
        <span key={i} className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
          <span className="font-heading font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase">{item}</span>
          <span className="text-primary font-bold px-1 md:px-2">•</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col lg:flex-row overflow-x-clip bg-background pt-16 sm:pt-20 lg:pt-0">

      {/* Left Side - Content */}
      <div className="relative z-10 w-full lg:w-[50%] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:pl-16 xl:pl-24 py-12 sm:py-16 lg:py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] md:h-[400px] bg-primary/20 lg:bg-primary/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 w-full text-center lg:text-left">


          <h1 className="fade-up text-[1.75rem] leading-[1.1] sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-heading font-black mb-4 sm:mb-6">
            Fazemos o seu restaurante vender{" "}
            <span className="text-gradient">15 reais</span> a cada{" "}
            <span className="text-gradient">UM</span> investido em{" "}
            <span className="text-gradient">Tráfego Pago.</span>
          </h1>

          <p className="fade-up fade-up-delay-1 text-sm sm:text-base md:text-lg text-white mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
            Esse é o resultado que geramos para os Donos de restaurante que utilizaram o nosso método, e alcançaram esse resultado em cerca de <strong>90 dias</strong>.
          </p>

          <button
            onClick={scrollToForm}
            className="fade-up fade-up-delay-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-primary-foreground font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_-5px_hsl(var(--primary)_/_0.5)] hover:shadow-[0_0_30px_-5px_hsl(var(--primary)_/_0.8)] uppercase tracking-wide"
          >
            Quero esse resultado no meu restaurante
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Right Side - Image with Angled Cut */}
      <div className="absolute top-0 right-0 z-0 w-full lg:w-[55%] h-full min-h-[50vh] lg:min-h-full">
        {/* We use an angled clip-path on desktop to recreate the dynamic split */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat hidden lg:block"
          style={{
            backgroundImage: `url("${heroClient}")`,
            backgroundPosition: 'center 20%',
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
            filter: 'brightness(0.35)',
          }}
        />
        {/* Mobile Background Image - Darkened significantly so text remains readable */}
        <div
          className="absolute inset-0 w-full h-full lg:hidden block pointer-events-none bg-cover bg-[left_center] bg-no-repeat"
          style={{
            backgroundImage: `url("${heroClient}")`,
            opacity: 0.15,
          }}
        />
        {/* Overlay gradient on right side for better blending on Desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-black/60 to-black/30 hidden lg:block pointer-events-none" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }} />
        {/* Bottom gradient on Mobile so text doesn't clash with the tapes */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent lg:hidden pointer-events-none" />
      </div>

      {/* Taped Marquee Banners */}
      {/* Positioned to slightly overlap the section below */}
      <div className="absolute -bottom-6 sm:-bottom-10 left-0 right-0 z-40 pointer-events-none flex flex-col justify-end">
        {/* Black banner - tilted back */}
        <div
          className="relative w-[110%] -ml-[5%] bg-[#0a0a0a] border-y border-white/10 py-2 sm:py-3 shadow-xl"
          style={{ transform: 'rotate(-2deg) scale(1.05)', transformOrigin: 'center' }}
        >
          <div className="flex animate-marquee-hero gap-4 sm:gap-6 text-white">
            {renderMarqueeContent()}
            {renderMarqueeContent()}
            {renderMarqueeContent()}
            {renderMarqueeContent()}
          </div>
        </div>

        {/* Gray/White banner - tilted forward */}
        <div
          className="relative z-10 w-[110%] -ml-[5%] bg-[#e5e5e5] py-1.5 sm:py-2 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] mt-2 sm:mt-4"
          style={{ transform: 'rotate(1.5deg) scale(1.05)', transformOrigin: 'center' }}
        >
          <div className="flex animate-marquee-hero-reverse gap-4 sm:gap-6 text-black">
            {renderMarqueeContent()}
            {renderMarqueeContent()}
            {renderMarqueeContent()}
            {renderMarqueeContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
