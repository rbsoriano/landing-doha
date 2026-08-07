import { Utensils, CheckCircle, TrendingUp, Gem } from "lucide-react";
import differentialsImg from "@/assets/8.webp";

const diffs = [
  { icon: Utensils, title: "Especialização exclusiva", desc: "100% focados em restaurantes e delivery. Conhecemos cada detalhe do seu mercado." },
  { icon: CheckCircle, title: "Estratégias validadas", desc: "Metodologia testada e comprovada com dezenas de restaurantes em todo o Brasil." },
  { icon: TrendingUp, title: "Crescimento previsível", desc: "Processos que geram resultados consistentes mês após mês, sem depender de sorte." },
  { icon: Gem, title: "Foco em margem", desc: "Não buscamos apenas volume. Otimizamos seu lucro real e ticket médio." },
];

const DifferentialsSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-[hsl(0,0%,6%)] relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Lado Esquerdo: Imagem */}
          <div className="w-full lg:w-[45%] fade-up relative order-2 lg:order-1">
             {/* Efeito de brilho atrás da imagem */}
             <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
             <img 
               src={differentialsImg} 
               alt="Diferenciais DOHA" 
               className="relative z-10 w-full h-auto rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] object-cover hover:scale-[1.02] transition-transform duration-500"
             />
          </div>

          {/* Lado Direito: Texto e Cards */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2">
            <h2 className="fade-up text-3xl md:text-5xl font-heading font-bold text-center lg:text-left mb-10">
              Por que escolher a <span className="text-gradient">DOHA</span>?
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {diffs.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={i}
                    className={`fade-up fade-up-delay-${i + 1} glass-card p-6 hover:border-primary/40 hover:glow-sm transition-all duration-300 group bg-background/50 backdrop-blur-md`}
                  >
                    <Icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading font-semibold text-lg mb-2">{d.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="fade-up fade-up-delay-4 text-center lg:text-left">
              <button
                onClick={scrollToForm}
                className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-300 glow-sm hover:glow w-full sm:w-auto"
              >
                COMEÇAR AGORA
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
