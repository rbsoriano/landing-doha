const TeamSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary py-16 md:py-20 overflow-hidden">
      <div className="container text-center max-w-3xl mx-auto">
        <span className="inline-block text-sm font-heading font-bold tracking-[0.2em] uppercase mb-4 text-black/70">
          RECEBA UM TIME EXCLUSIVO
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase leading-tight mb-6 text-black">
          A <span className="font-black">ASSESSORIA DOHA</span> ESTRUTURA O MARKETING DO SEU RESTAURANTE COM BASE NA SUA{" "}
          <span className="font-black">NECESSIDADE</span>
        </h2>

        <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Tenha um time de especialistas ao seu lado ou terceirize totalmente seu marketing e setor comercial com a DOHA. Sem dor de cabeça com contratações, gestão de equipe, riscos trabalhistas ou burocracias — você foca no seu restaurante, e a gente foca em fazer ele crescer.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-black text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 uppercase tracking-wide"
        >
          Quero mais informações
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
