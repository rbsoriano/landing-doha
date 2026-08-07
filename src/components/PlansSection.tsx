import chartImage from "@/assets/Screenshot_1-Photoroom.webp";

const PlansSection = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="fade-up">
            <span className="inline-block text-sm font-heading font-bold tracking-[0.2em] uppercase mb-4 text-primary">
              PLANOS PERSONALIZADOS
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase leading-tight mb-6">
              VOCÊ <span className="text-primary">ESCOLHE</span> A{" "}
              <span className="text-primary">SOLUÇÃO CERTA</span>{" "}
              PARA A FASE QUE SEU RESTAURANTE{" "}
              <span className="text-primary">VIVE HOJE</span>.
            </h2>

            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md">
              Oferecemos os nossos serviços por{" "}
              <span className="text-white font-semibold">planos flexíveis</span>.
              Você escolhe{" "}
              <span className="text-white font-semibold">conforme sua condição atual</span>.
              O mais importante é continuar apostando em estratégias que trazem resultado.
            </p>
          </div>

          {/* Right column - Chart visual */}
          <div className="fade-up fade-up-delay-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Chart Image */}
              <div className="relative w-full overflow-hidden">
                <img 
                  src={chartImage} 
                  alt="Gráfico de Crescimento DOHA" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(132,204,22,0.2)]"
                />
              </div>

              {/* Glow effect behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
