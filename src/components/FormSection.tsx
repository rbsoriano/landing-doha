declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzyGndUciG4_l2lrOeQeDFDKpA6vUN3xZHILc--6lYVsbu1Y-ilyp0sDJeK5JU4pmMs9w/exec";

const segmentos = [
  "Pizzarias", "Hamburguerias", "Churrascarias / Steakhouses",
  "Restaurante Japonês / Asiáticos", "Restaurante de massas e comida italiana",
  "Restaurante de comidas brasileiras", "Outros",
];

const faturamentos = [
  "Até 20 mil", "De 20 mil até 40 mil", "De 40 mil até 60 mil",
  "De 60 mil até 80 mil", "De 80 mil até 100 mil", "De 100 mil até 150 mil",
  "De 150 mil até 250 mil", "De 250 mil até 400 mil", "De 400 mil até 600 mil",
  "De 600 mil até 1 milhão", "Mais de 1 milhão",
];

const steps = [
  {
    number: 1,
    title: "Complete o formulário",
    desc: "Forneça suas informações no formulário ao lado. Garantimos a segurança total de seus dados. Serão usados apenas para contato.",
  },
  {
    number: 2,
    title: "Receba uma ligação personalizada",
    desc: "Em um prazo de até 5 minutos em horário comercial, um dos nossos especialistas entrará em contato diretamente para agendar a reunião mais importante com você.",
  },
];

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "", nome_empresa: "",
    faturamento_mensal: "", segmento: "",
    ja_investiu_trafego: null as boolean | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let { name, value } = e.target;
    if (name === "telefone") {
      value = value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);
      if (value.length > 2) value = `(${value.slice(0, 2)}) ` + value.slice(2);
      if (value.length > 10) value = value.slice(0, 10) + "-" + value.slice(10);
    }
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || submitted) return;
    if (!form.nome || !form.email || !form.telefone || !form.nome_empresa || !form.faturamento_mensal || !form.segmento || form.ja_investiu_trafego === null) {
      setError("Preencha todos os campos."); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Por favor, insira um e-mail válido."); return;
    }
    const phoneDigits = form.telefone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      setError("Por favor, insira um número de telefone válido com DDD."); return;
    }
    setLoading(true); setError("");
    const formData = new URLSearchParams();
    formData.append("nome", form.nome);
    formData.append("email", form.email);
    formData.append("telefone", form.telefone);
    formData.append("nome_empresa", form.nome_empresa);
    formData.append("faturamento_mensal", form.faturamento_mensal);
    formData.append("segmento", form.segmento);
    formData.append("ja_investiu_trafego", form.ja_investiu_trafego ? "Sim" : "Não");
    setTimeout(() => {
      setSubmitted(true); setLoading(false);
      if (typeof window.fbq === 'function') window.fbq('track', 'Purchase');
    }, 1500);
    fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: formData, mode: "no-cors" }).catch(() => {
      setSubmitted(false); setLoading(false);
      setError("Erro ao enviar. Verifique sua conexão e tente novamente.");
    });
  };

  const inputCls = "w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

  return (
    <section id="formulario" className="py-16 sm:py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
          <div className="fade-up">
            <span className="inline-block text-sm font-heading font-bold tracking-[0.2em] uppercase mb-4 text-primary">AVISO</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-10 leading-tight uppercase">
              NÃO SAIA AGORA!{" "}
              <span className="text-white/90">FALTAM</span>{" "}
              <span className="font-black text-gradient">POUCOS SEGUNDOS</span>{" "}
              <span className="text-white/90">PARA SEU RESTAURANTE</span>{" "}
              <span className="font-black text-gradient">MUDAR</span>.
            </h2>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={step.number} className={`fade-up fade-up-delay-${i + 1} rounded-2xl border border-white/10 bg-[hsl(0,0%,10%)] p-5 sm:p-6 transition-colors duration-300 hover:border-white/20`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-sm text-primary-foreground bg-primary">{step.number}</div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up fade-up-delay-2">
            {submitted ? (
              <div className="glass-card p-6 sm:p-8 md:p-10 text-center glow">
                <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3">Recebemos sua solicitação!</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">Nossa equipe entrará em contato com você em breve.</p>
                <p className="text-sm text-primary font-medium">Fique atento ao seu telefone e e-mail.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-6 md:p-8 space-y-4">
                <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2">Receber mais informações</h3>
                <div><label className="block text-xs text-muted-foreground mb-1 font-heading font-semibold uppercase tracking-wider">Nome</label><input name="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={handleChange} className={inputCls} /></div>
                <div><label className="block text-xs text-muted-foreground mb-1 font-heading font-semibold uppercase tracking-wider">Email</label><input name="email" type="email" placeholder="Seu melhor e-mail" value={form.email} onChange={handleChange} className={inputCls} /></div>
                <div><label className="block text-xs text-muted-foreground mb-1 font-heading font-semibold uppercase tracking-wider">Telefone</label><input name="telefone" type="tel" placeholder="Telefone" value={form.telefone} onChange={handleChange} className={inputCls} /></div>
                <div><label className="block text-xs text-muted-foreground mb-1 font-heading font-semibold uppercase tracking-wider">Nome da Empresa</label><input name="nome_empresa" type="text" placeholder="Nome da empresa" value={form.nome_empresa} onChange={handleChange} className={inputCls} /></div>
                <div><label className="block text-xs text-muted-foreground mb-1 font-heading font-semibold uppercase tracking-wider">Selecionar segmento</label>
                  <select name="segmento" value={form.segmento} onChange={handleChange} className={inputCls}><option value="">Qual o seu segmento?</option>{segmentos.map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
                <div><label className="block text-xs text-muted-foreground mb-1 font-heading font-semibold uppercase tracking-wider">Coloque seu faturamento atual</label>
                  <select name="faturamento_mensal" value={form.faturamento_mensal} onChange={handleChange} className={inputCls}><option value="">Faturamento</option>{faturamentos.map((f) => (<option key={f} value={f}>{f}</option>))}</select></div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Já investiu em tráfego pago?</p>
                  <div className="flex gap-3">
                    {[true, false].map((val) => (
                      <button type="button" key={String(val)} onClick={() => setForm((p) => ({ ...p, ja_investiu_trafego: val }))}
                        className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all ${form.ja_investiu_trafego === val ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-foreground hover:border-primary/50"}`}>
                        {val ? "Sim" : "Não"}
                      </button>
                    ))}
                  </div>
                </div>
                {error && <p className="text-destructive text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="w-full relative font-heading font-semibold text-lg py-4 rounded-xl transition-all duration-300 disabled:opacity-50 bg-primary text-primary-foreground border-2 border-primary hover:brightness-110 animate-pulse-light">
                  {loading ? (<span className="flex items-center justify-center gap-2"><svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Enviando...</span>) : (<span className="flex items-center justify-center gap-3">Receber mais informações</span>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
