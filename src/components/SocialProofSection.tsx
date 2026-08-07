import { useState } from "react";
import { X } from "lucide-react";
import prova1 from "@/assets/prova1.webp";
import prova2 from "@/assets/prova2.webp";
import prova3 from "@/assets/prova3.webp";
import prova4 from "@/assets/prova4.webp";
import prova5 from "@/assets/prova5.webp";
import prova6 from "@/assets/prova6.webp";
import prova7 from "@/assets/prova7.webp";

const provas = [prova1, prova2, prova3, prova4, prova5, prova6, prova7];

const SocialProofSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="resultados" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="fade-up text-3xl md:text-5xl font-heading font-bold mb-4">
              Resultados que <span className="text-gradient">falam por si</span>
            </h2>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mb-12">
            {provas.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`fade-up fade-up-delay-${(i % 4) + 1} break-inside-avoid mb-4 rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:glow-sm transition-all duration-300 cursor-pointer`}
              >
                <img src={img} alt={`Resultado cliente ${i + 1}`} className="w-full h-auto block" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="fade-up text-center">
            <button
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-300 glow-sm hover:glow"
            >
              QUERO ESSES RESULTADOS
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Resultado ampliado"
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default SocialProofSection;
