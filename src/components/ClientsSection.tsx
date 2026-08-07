import clientAncoradouro from "@/assets/ancoradouro.webp";
import clientSabores from "@/assets/client-sabores.webp";
import clientAcai from "@/assets/client-acai.webp";
import clientVolts from "@/assets/client-volts.webp";
import clientSantaPizza from "@/assets/santa-pizza.webp";
import clientTapiocaria from "@/assets/logotapiocariatambau.webp";
import clientFeijoada from "@/assets/logo_feijoadofabio.webp";
import clientBemcomer from "@/assets/bemcomerlogo.webp";
import clientCalzone from "@/assets/calzonelogo.webp";
import clientValentina from "@/assets/valentinalogo.webp";
import clientDoceCrianca from "@/assets/docecrianca.webp";
import clientHashi from "@/assets/hashi.webp";
import clientLionBurguers from "@/assets/lionburguers.webp";
import clientPizzaClock from "@/assets/pizzaclock.webp";
import clientVierbrauer from "@/assets/vierbrauer.webp";

const clients = [
  { name: "Ancoradouro", logo: clientAncoradouro },
  { name: "Hashi", logo: clientHashi },
  { name: "Vierbrauer", logo: clientVierbrauer },
  { name: "Doce Criança", logo: clientDoceCrianca },
  { name: "Sabores da Carol", logo: clientSabores },
  { name: "Açaí Tropical", logo: clientAcai },
  { name: "Volts Pizza House", logo: clientVolts },
  { name: "Santa Pizza", logo: clientSantaPizza },
  { name: "Tapiocaria Tambaú", logo: clientTapiocaria },
  { name: "Feijoada do Fábio", logo: clientFeijoada },
  { name: "Bem Comer", logo: clientBemcomer },
  { name: "Calzone", logo: clientCalzone },
  { name: "Valentina", logo: clientValentina },
  { name: "Lion Burguers", logo: clientLionBurguers },
  { name: "Pizza Clock", logo: clientPizzaClock },
];

const ClientsSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container text-center mb-10">
        <h2 className="fade-up text-3xl md:text-4xl font-heading font-bold mb-4">
          Alguns clientes que <span className="text-gradient">já escalamos</span>
        </h2>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="flex w-max animate-marquee will-change-transform">
          {/* Primeira metade */}
          {clients.map((client, i) => (
            <div
              key={`first-${i}`}
              className="flex-shrink-0 glass-card px-4 md:px-6 py-3 md:py-4 mx-3 md:mx-4 flex items-center justify-center min-w-[140px] md:min-w-[180px] min-h-[80px] md:min-h-[100px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain rounded-lg pointer-events-none"
              />
            </div>
          ))}
          {/* Segunda metade (duplicata exata para o loop perfeito) */}
          {clients.map((client, i) => (
            <div
              key={`second-${i}`}
              className="flex-shrink-0 glass-card px-4 md:px-6 py-3 md:py-4 mx-3 md:mx-4 flex items-center justify-center min-w-[140px] md:min-w-[180px] min-h-[80px] md:min-h-[100px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain rounded-lg pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center mt-10">
        <button
          onClick={scrollToForm}
          className="fade-up bg-primary text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-300 glow-sm hover:glow"
        >
          FALAR COM UM ESPECIALISTA
        </button>
      </div>
    </section>
  );
};

export default ClientsSection;
