import { Camera, Utensils, Smartphone } from "lucide-react";
import img1 from "@/assets/DSC04207.webp";
import img2 from "@/assets/DSC04172.webp";
import img3 from "@/assets/DSC04164.webp";
import img4 from "@/assets/DSC04149.webp";
import img5 from "@/assets/DSC04129.webp";
import img6 from "@/assets/DSC04102.webp";
import img7 from "@/assets/43-DSC04526.webp";
import img8 from "@/assets/38-DSC04529.webp";
import img9 from "@/assets/47-DSC04524.webp";
import img10 from "@/assets/41-DSC04527.webp";
import img11 from "@/assets/35-DSC04530.webp";

const photos = [
  { src: img1, alt: "Foto Profissional de Gastronomia 1" },
  { src: img2, alt: "Foto Profissional de Gastronomia 2" },
  { src: img3, alt: "Foto Profissional de Gastronomia 3" },
  { src: img7, alt: "Foto Profissional de Gastronomia 7" },
  { src: img4, alt: "Foto Profissional de Gastronomia 4" },
  { src: img5, alt: "Foto Profissional de Gastronomia 5" },
  { src: img8, alt: "Foto Profissional de Gastronomia 8" },
  { src: img9, alt: "Foto Profissional de Gastronomia 9" },
  { src: img10, alt: "Foto Profissional de Gastronomia 10" },
  { src: img6, alt: "Foto Profissional de Gastronomia 6" },
  { src: img11, alt: "Foto Profissional de Gastronomia 11" },
];

const PhotographySection = () => {
  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden border-t border-white/5">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">

          
          <h2 className="fade-up fade-up-delay-1 text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 leading-[1.1]">
            Comemos primeiro <span className="text-gradient">com os olhos.</span>
          </h2>
          
          <p className="fade-up fade-up-delay-2 text-muted-foreground text-lg sm:text-xl mb-8">
            Produzimos fotos profissionais de alto padrão que geram desejo imediato. 
            É assim que transformamos seu cardápio em uma máquina de vendas irresistível.
          </p>

          <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Utensils className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-white text-sm">Gestão de Cardápio</p>
                <p className="text-muted-foreground text-xs">Engenharia e Design</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-white text-sm">Gestão de iFood</p>
                <p className="text-muted-foreground text-xs">Otimização e Vendas</p>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Columns Masonry - Layout Perfeito */}
        <div className="columns-2 md:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 break-inside-avoid"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhotographySection;
