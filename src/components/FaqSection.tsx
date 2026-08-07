import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que exatamente a DOHA faz?",
    answer: "Somos uma assessoria especializada em marketing gastronômico. Ajudamos restaurantes, pizzarias, hamburguerias e negócios de alimentação a vender mais por meio de estratégias como tráfego pago, gestão de iFood, gestão de cardápio digital, criação de criativos e estruturação do comercial.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento.",
  },
  {
    question: "Em quanto tempo vou ver resultados?",
    answer: "Depende do estágio atual do seu negócio, estrutura interna e investimento. Mas, na maioria dos casos, nossos clientes começam a sentir o impacto positivo nas vendas em 30 a 60 dias.",
  },
  {
    question: "Vocês atendem qualquer tipo de restaurante?",
    answer: "Atendemos desde pequenas operações até grandes redes, desde que estejam dispostas a seguir um plano estratégico de crescimento.",
  },
  {
    question: "A DOHA cuida do meu Instagram e redes sociais?",
    answer: "Sim, mas com foco em performance. Não somos uma empresa de \"post bonitinho\". Nosso objetivo é transformar conteúdo e anúncios em vendas reais. Se não gerar resultado, não faz sentido estar ali.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <div className="fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase leading-tight mb-4">
              PERGUNTAS{" "}
              <span className="text-gradient">FREQUENTES</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Ficou com alguma dúvida sobre a DOHA? Talvez ela esteja aqui.
            </p>
          </div>
          <div className="space-y-3 fade-up fade-up-delay-1">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-[hsl(0,0%,10%)] overflow-hidden transition-colors duration-300 hover:border-white/20">
                <button onClick={() => toggle(index)} className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors duration-200">
                  <span className="flex-shrink-0 w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xs">?</span>
                  <span className="flex-1 text-white/90 text-sm font-medium">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-4 pl-[3.25rem]">
                      <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
