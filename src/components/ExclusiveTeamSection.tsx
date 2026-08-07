import { ArrowUpRight } from "lucide-react";

const ExclusiveTeamSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-24 bg-primary text-black overflow-hidden relative">
      <div className="container px-4 sm:px-6 relative z-10 text-center max-w-5xl mx-auto">
        <span className="inline-block text-sm sm:text-base font-bold tracking-widest uppercase mb-4 text-black/70">
          Receba um time exclusivo
        </span>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-8 leading-[1.2] uppercase text-black">
          A ASSESSORIA DOHA ESTRUTURA O <br className="hidden md:block" /> MARKETING DO SEU RESTAURANTE <br className="hidden md:block" /> COM BASE NA SUA <span className="font-black">NECESSIDADE</span>
        </h2>
        
        <p className="text-base sm:text-lg font-medium mb-10 leading-relaxed max-w-3xl mx-auto text-black/80">
          Tenha um time de especialistas ao seu lado ou terceirize totalmente seu marketing e setor comercial com a DOHA. Sem dor de cabeça com contratações, gestão de equipe, riscos trabalhistas ou burocracias você foca no seu restaurante, e a gente foca em fazer ele crescer.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <button 
            onClick={scrollToForm}
            className="group flex items-center justify-center gap-2 bg-black text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 animate-pulse-light uppercase"
          >
            Quero mais informações
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
          
          <div className="flex items-center gap-3 font-semibold text-sm sm:text-base text-black">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-100"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-black border-2 border-transparent"></span>
            </span>
            Especialistas online agora
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveTeamSection;
