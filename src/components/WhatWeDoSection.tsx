import { useRef } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import photo7 from "@/assets/7.webp";
import photoCardapio from "@/assets/9d215070-afc0-4e1f-88cc-c2e7177562d5.webp";
import photoFotos from "@/assets/FOTOS DOHA.webp";

const serviceCards = [
  {
    title: "MÍDIA",
    titleHighlight: "PAGA",
    image: photo7,
    items: [
      { text: "Gestão dos seus anúncios no Instagram e Facebook", bold: ["Instagram", "Facebook"] },
      { text: "Impactamos seu público ideal com anúncios feitos para quem tem fome de comprar", bold: ["público ideal", "fome de comprar"] },
      { text: "Transformamos desconhecidos em clientes fiéis com tráfego direcionado e estratégia afiada", bold: ["clientes fiéis", "tráfego", "estratégia afiada"] },
    ],
  },
  {
    title: "GESTÃO DE",
    titleHighlight: "CARDÁPIO DIGITAL E IFOOD",
    image: photoCardapio,
    imageClassName: "object-cover object-[-100px_center]",
    items: [
      { text: "Catalogagem inteligente e engenharia de cardápio para aumentar o ticket médio", bold: ["engenharia de cardápio", "ticket médio"] },
      { text: "Otimização completa do iFood: SEO, banners, promoções e ranqueamento", bold: ["iFood", "SEO", "ranqueamento"] },
      { text: "Design profissional de cardápio e fotos que geram desejo e vendem mais", bold: ["Design profissional", "vendem mais"] },
    ],
  },
  {
    title: "RELATÓRIOS E",
    titleHighlight: "ACOMPANHAMENTO",
    image: photoFotos,
    items: [
      { text: "Monitoramos os indicadores mais importantes do seu restaurante e te entregamos análises semanais para tomada de decisão rápida", bold: ["indicadores", "importantes", "análises semanais"] },
      { text: "Controle total da sua performance com reuniões semanais de alinhamento", bold: ["Controle total", "reuniões semanais"] },
    ],
  },
];

const renderBoldText = (text: string, boldWords: string[]) => {
  let result = text;
  boldWords.forEach(word => {
    result = result.replace(word, `<strong class="text-white">${word}</strong>`);
  });
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

const WhatWeDoSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = scrollContainerRef.current;

      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      const isAtStart = scrollLeft <= 10;

      if (direction === "right" && isAtEnd) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      if (direction === "left" && isAtStart) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        return;
      }

      // Scroll by 80% of the container width to show the next card
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="container px-0 sm:px-4">
        {/* Header */}
        <div className="text-center mb-4 px-4">
          <span className="inline-block text-sm font-heading font-bold tracking-[0.2em] uppercase mb-4 text-primary fade-up">
            O QUE FAZEMOS?
          </span>
        </div>
        <div className="text-center mb-12 px-4 max-w-4xl mx-auto">
          <h2 className="fade-up text-3xl md:text-5xl font-heading font-black mb-4 uppercase leading-tight">
            A ASSESSORIA <span className="text-primary">DOHA</span> DESENHA UMA ESTRATÉGIA DE MARKETING EXCLUSIVA PARA A <span className="text-primary">SUA NECESSIDADE</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative fade-up fade-up-delay-1 group/carousel">

          {/* Scroll Buttons - Hidden on mobile, visible on desktop hover */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-black hover:border-primary/50 transition-all duration-300 hidden md:flex backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-black hover:border-primary/50 transition-all duration-300 hidden md:flex backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 px-4 sm:px-8 xl:px-12 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {serviceCards.map((card, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[82vw] sm:w-[85vw] md:w-[85vw] lg:w-[75vw] xl:w-[900px] snap-center flex flex-col md:flex-row rounded-[2rem] border border-white/10 bg-[hsl(0,0%,8%)] overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-2xl"
              >
                {/* Text Side */}
                <div className="p-8 md:p-10 lg:p-12 xl:p-14 flex-1 flex flex-col justify-center">
                  <h3 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl mb-8 uppercase leading-tight">
                    {card.title} <span className="text-primary">{card.titleHighlight}</span>
                  </h3>

                  <div className="space-y-6">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1 w-6 h-6 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
                          <Check className="w-4 h-4 text-primary stroke-[3]" />
                        </div>
                        <p className="text-white/60 text-sm md:text-base leading-relaxed">
                          {renderBoldText(item.text, item.bold)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative h-[250px] sm:h-[300px] md:h-auto md:w-[40%] lg:w-[45%] shrink-0 overflow-hidden bg-black">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-90 ${card.imageClassName || 'object-cover'}`}
                  />
                  {/* Blending gradients to make the image blend smoothly into the card background */}
                  <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(0,0%,8%)] to-transparent z-10" />
                  <div className="md:hidden absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(0,0%,8%)] to-transparent z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;
