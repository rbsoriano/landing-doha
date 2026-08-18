import LazyImage from "@/components/LazyImage";
import photoTeam from "@/assets/FOTOS DOHA (3).webp";
import photoOffice from "@/assets/857bfa55-ec52-4247-b8dd-d8422af77582-Photoroom.webp";
import photoCulture from "@/assets/6.webp";

const photos = [
  { src: photoTeam, alt: "Time DOHA", label: "TIME DOHA", rotate: "-4deg" },
  { src: photoOffice, alt: "Escritório DOHA", label: "ESCRITÓRIO", rotate: "3deg" },
  { src: photoCulture, alt: "Nossa Cultura DOHA", label: "NOSSA CULTURA", rotate: "-2deg" },
];

const InstitutionalSection = () => {
  return (
    <section className="py-20 md:py-28 overflow-hidden bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-[45%] fade-up">
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {photos.map((photo, i) => (
                <div
                  key={photo.label}
                  className="relative bg-white p-2 pb-12 rounded shadow-2xl w-[75%] sm:w-[65%] md:w-[60%] hover:scale-105 transition-transform duration-500"
                  style={{
                    transform: `rotate(${photo.rotate}) translateX(${i % 2 === 0 ? "-15px" : "15px"})`,
                  }}
                >
                  <LazyImage
                    src={photo.src}
                    alt={photo.alt}
                    width={480}
                    height={320}
                    className="w-full h-44 sm:h-52 md:h-56 object-cover rounded-sm"
                  />
                  <p
                    className="absolute bottom-3 left-0 right-0 text-center font-heading font-black text-black text-sm md:text-base italic tracking-wide"
                    style={{ fontFamily: "'Permanent Marker', cursive" }}
                  >
                    {photo.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[55%]">
            <span className="inline-block text-sm font-heading font-bold tracking-[0.2em] uppercase mb-4 text-primary fade-up">
              QUEM SOMOS
            </span>

            <h2 className="fade-up text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight text-center lg:text-left">
              <span className="text-white">LÍDER</span> EM{" "}
              <span className="text-gradient">MARKETING GASTRONÔMICO</span> E PARCEIRA DO{" "}
              <span className="font-black">SEU SUCESSO</span>.
            </h2>

            <div className="space-y-6 text-white/70 text-base leading-relaxed">
              <p className="fade-up fade-up-delay-1">
                Na <strong className="text-white">DOHA Assessoria</strong>, não somos apenas uma agência; somos especialistas em escalar o faturamento de negócios gastronômicos. Nascemos da paixão por transformar restaurantes, aplicando estratégias validadas que garantem um novo patamar de sucesso, previsibilidade e reconhecimento no mercado.
              </p>
              <p className="fade-up fade-up-delay-2">
                Com uma <strong className="text-white">estrutura 100% presencial</strong> e uma <strong className="text-white">equipe de +10 profissionais</strong> altamente qualificados, a DOHA Assessoria é a parceira estratégica que seu restaurante precisa.
              </p>
              <p className="fade-up fade-up-delay-3">
                Nosso time multidisciplinar, composto por gestores de tráfego, designers e <strong className="text-white">especialistas em marketing digital</strong>, trabalha em sinergia para garantir que cada aspecto da sua presença online e offline seja otimizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
