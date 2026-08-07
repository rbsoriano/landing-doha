const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzyGndUciG4_l2lrOeQeDFDKpA6vUN3xZHILc--6lYVsbu1Y-ilyp0sDJeK5JU4pmMs9w/exec";

export type LeadFormData = {
  nome: string;
  email: string;
  telefone: string;
  nome_empresa: string;
  faturamento_mensal: string;
  segmento: string;
  ja_investiu_trafego: boolean;
};

function formatTimestamp(): string {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

async function postOnce(payload: Record<string, string>): Promise<boolean> {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) return false;

  const text = (await response.text()).trim();
  if (!text) return true;

  try {
    const data = JSON.parse(text) as { success?: boolean; ok?: boolean; result?: string };
    return data.success === true || data.ok === true || data.result === "success";
  } catch {
    return text.toLowerCase().includes("success") || text.toLowerCase().includes("ok");
  }
}

export async function submitLeadForm(form: LeadFormData): Promise<void> {
  const payload = {
    nome: form.nome,
    email: form.email,
    telefone: form.telefone,
    nome_empresa: form.nome_empresa,
    faturamento_mensal: form.faturamento_mensal,
    segmento: form.segmento,
    ja_investiu_trafego: form.ja_investiu_trafego ? "Sim" : "Não",
    data_envio: formatTimestamp(),
    timestamp: new Date().toISOString(),
  };

  try {
    const ok = await postOnce(payload);
    if (ok) return;
  } catch {
    // fall through to retry
  }

  await new Promise((r) => setTimeout(r, 800));

  const ok = await postOnce(payload);
  if (!ok) {
    throw new Error("Falha ao registrar no Google Sheets.");
  }
}
