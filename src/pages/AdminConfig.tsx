import { useState, useEffect } from "react";
import { loadConfig, saveConfig, resetConfig, DEFAULT_CONFIG, type SiteConfig } from "@/config/siteConfig";
import { Save, RotateCcw, Check, Eye, EyeOff, Copy, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminConfig = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);
  const [saved, setSaved] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    setConfig(loadConfig());
  }, []);

  const handleSave = () => {
    saveConfig(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    if (window.confirm("Tem certeza que deseja resetar todas as configurações para o padrão?")) {
      resetConfig();
      setConfig({ ...DEFAULT_CONFIG });
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(""), 1500);
  };

  const updateCRM = (key: keyof SiteConfig["crm"], value: any) => {
    setConfig((prev) => ({ ...prev, crm: { ...prev.crm, [key]: value } }));
  };

  const updateGoogleSheets = (key: keyof SiteConfig["googleSheets"], value: any) => {
    setConfig((prev) => ({ ...prev, googleSheets: { ...prev.googleSheets, [key]: value } }));
  };

  const updateTracking = (key: keyof SiteConfig["tracking"], value: any) => {
    setConfig((prev) => ({ ...prev, tracking: { ...prev.tracking, [key]: value } }));
  };

  const inputCls = "w-full bg-[hsl(0,0%,8%)] border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm font-mono";
  const labelCls = "block text-xs text-white/50 mb-1.5 font-semibold uppercase tracking-wider";
  const hintCls = "text-[11px] text-white/30 mt-1";

  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[hsl(0,0%,4%)]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              title="Voltar para o site"
            >
              <ArrowLeft className="w-5 h-5 text-white/70" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">Configurações</h1>
              <p className="text-xs text-white/40">Integração CRM & Tracking</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Resetar
            </button>
            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                saved
                  ? "bg-green-500 text-white"
                  : "bg-primary text-primary-foreground hover:brightness-110"
              }`}
            >
              {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              {saved ? "Salvo!" : "Salvar"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* CRM Section */}
        <section className="rounded-2xl border border-white/10 bg-[hsl(0,0%,7%)] overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">🔗 CRM (Base44)</h2>
              <p className="text-xs text-white/40 mt-0.5">Configuração de envio de leads para o CRM</p>
            </div>
          </div>
          <div className="p-6 space-y-5">
            {/* API URL */}
            <div>
              <label className={labelCls}>URL da API</label>
              <div className="flex gap-2">
                <input
                  value={config.crm.apiUrl}
                  onChange={(e) => updateCRM("apiUrl", e.target.value)}
                  placeholder="https://..."
                  className={inputCls}
                />
                <button
                  onClick={() => copyToClipboard(config.crm.apiUrl, "apiUrl")}
                  className="flex-shrink-0 p-3 rounded-xl border border-white/10 hover:border-white/30 transition-colors"
                  title="Copiar"
                >
                  {copied === "apiUrl" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white/50" />}
                </button>
              </div>
              <p className={hintCls}>Endpoint da API para criação de leads</p>
            </div>

            {/* Token */}
            <div>
              <label className={labelCls}>Token de Acesso</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type={showToken ? "text" : "password"}
                    value={config.crm.token}
                    onChange={(e) => updateCRM("token", e.target.value)}
                    placeholder="b44u_..."
                    className={inputCls}
                  />
                  <button
                    onClick={() => setShowToken(!showToken)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <button
                  onClick={() => copyToClipboard(config.crm.token, "token")}
                  className="flex-shrink-0 p-3 rounded-xl border border-white/10 hover:border-white/30 transition-colors"
                  title="Copiar"
                >
                  {copied === "token" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white/50" />}
                </button>
              </div>
              <p className={hintCls}>Bearer token para autenticação na API</p>
            </div>

            {/* Origin & Status */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Origem (origin)</label>
                <input
                  value={config.crm.origin}
                  onChange={(e) => updateCRM("origin", e.target.value)}
                  placeholder="Meta Ads"
                  className={inputCls}
                />
                <p className={hintCls}>Ex: Meta Ads, Google Ads, Orgânico</p>
              </div>
              <div>
                <label className={labelCls}>Status</label>
                <input
                  value={config.crm.status}
                  onChange={(e) => updateCRM("status", e.target.value)}
                  placeholder="lead"
                  className={inputCls}
                />
                <p className={hintCls}>Status inicial do lead no CRM</p>
              </div>
            </div>

            {/* Estimated Value */}
            <div>
              <label className={labelCls}>Valor Estimado (estimated_value)</label>
              <input
                type="number"
                value={config.crm.estimatedValue}
                onChange={(e) => updateCRM("estimatedValue", Number(e.target.value))}
                className={inputCls}
              />
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[hsl(0,0%,6%)] px-4 py-3">
                <span className="text-sm text-white/70">has_capture</span>
                <button
                  onClick={() => updateCRM("hasCapture", !config.crm.hasCapture)}
                  className={`w-11 h-6 rounded-full transition-colors duration-300 relative ${config.crm.hasCapture ? "bg-primary" : "bg-white/20"}`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${config.crm.hasCapture ? "translate-x-[22px]" : "translate-x-0.5"}`} />
                </button>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[hsl(0,0%,6%)] px-4 py-3">
                <span className="text-sm text-white/70">is_local</span>
                <button
                  onClick={() => updateCRM("isLocal", !config.crm.isLocal)}
                  className={`w-11 h-6 rounded-full transition-colors duration-300 relative ${config.crm.isLocal ? "bg-primary" : "bg-white/20"}`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${config.crm.isLocal ? "translate-x-[22px]" : "translate-x-0.5"}`} />
                </button>
              </div>
            </div>

            {/* Interactions Template */}
            <div>
              <label className={labelCls}>Template de Interações</label>
              <input
                value={config.crm.interactionsTemplate}
                onChange={(e) => updateCRM("interactionsTemplate", e.target.value)}
                placeholder="Meta Ads | {{campanha}} | {{anuncio}}"
                className={inputCls}
              />
              <p className={hintCls}>Use <code className="text-primary/70">{"{{campanha}}"}</code> e <code className="text-primary/70">{"{{anuncio}}"}</code> como variáveis (preenchidas via UTM)</p>
            </div>
          </div>
        </section>

        {/* Google Sheets Section */}
        <section className="rounded-2xl border border-white/10 bg-[hsl(0,0%,7%)] overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">📊 Google Sheets</h2>
              <p className="text-xs text-white/40 mt-0.5">Envio simultâneo para planilha</p>
            </div>
            <button
              onClick={() => updateGoogleSheets("enabled", !config.googleSheets.enabled)}
              className={`w-11 h-6 rounded-full transition-colors duration-300 relative ${config.googleSheets.enabled ? "bg-primary" : "bg-white/20"}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${config.googleSheets.enabled ? "translate-x-[22px]" : "translate-x-0.5"}`} />
            </button>
          </div>
          {config.googleSheets.enabled && (
            <div className="p-6">
              <label className={labelCls}>URL do Google Apps Script</label>
              <input
                value={config.googleSheets.scriptUrl}
                onChange={(e) => updateGoogleSheets("scriptUrl", e.target.value)}
                placeholder="https://script.google.com/macros/s/..."
                className={inputCls}
              />
              <p className={hintCls}>URL pública do web app do Apps Script</p>
            </div>
          )}
        </section>

        {/* Tracking Section */}
        <section className="rounded-2xl border border-white/10 bg-[hsl(0,0%,7%)] overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">📈 Tracking & Pixels</h2>
              <p className="text-xs text-white/40 mt-0.5">Eventos de conversão</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[hsl(0,0%,6%)] px-4 py-3">
              <div>
                <span className="text-sm text-white/70">Facebook Pixel - Evento Lead</span>
                <p className="text-[11px] text-white/30 mt-0.5">Dispara <code className="text-primary/70">fbq('track', 'Lead')</code> no submit</p>
              </div>
              <button
                onClick={() => updateTracking("facebookPixelEnabled", !config.tracking.facebookPixelEnabled)}
                className={`w-11 h-6 rounded-full transition-colors duration-300 relative flex-shrink-0 ${config.tracking.facebookPixelEnabled ? "bg-primary" : "bg-white/20"}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${config.tracking.facebookPixelEnabled ? "translate-x-[22px]" : "translate-x-0.5"}`} />
              </button>
            </div>
          </div>
        </section>

        {/* JSON Preview */}
        <section className="rounded-2xl border border-white/10 bg-[hsl(0,0%,7%)] overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">🔍 Preview do Payload</h2>
              <p className="text-xs text-white/40 mt-0.5">Exemplo do JSON enviado ao CRM</p>
            </div>
            <button
              onClick={() => copyToClipboard(JSON.stringify({
                name: "Nome do Lead",
                phone: "(83) 99999-9999",
                email: "email@exemplo.com",
                company: "Nome da Empresa",
                origin: config.crm.origin,
                status: config.crm.status,
                estimated_value: config.crm.estimatedValue,
                has_capture: config.crm.hasCapture,
                is_local: config.crm.isLocal,
                interactions: config.crm.interactionsTemplate
                  .replace("{{campanha}}", "nome-da-campanha")
                  .replace("{{anuncio}}", "nome-do-anuncio"),
              }, null, 2), "payload")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white/50 hover:text-white hover:border-white/30 transition-all"
            >
              {copied === "payload" ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
              {copied === "payload" ? "Copiado!" : "Copiar"}
            </button>
          </div>
          <div className="p-6">
            <pre className="text-xs text-white/60 font-mono bg-[hsl(0,0%,4%)] rounded-xl p-4 overflow-x-auto border border-white/5">
              {JSON.stringify({
                name: "{{nome}}",
                phone: "{{telefone}}",
                email: "{{email}}",
                company: "{{empresa}}",
                origin: config.crm.origin,
                status: config.crm.status,
                estimated_value: config.crm.estimatedValue,
                has_capture: config.crm.hasCapture,
                is_local: config.crm.isLocal,
                interactions: config.crm.interactionsTemplate,
              }, null, 2)}
            </pre>
          </div>
        </section>

        <div className="pb-8 text-center">
          <p className="text-[11px] text-white/20">As configurações são salvas no navegador (localStorage). Altere e clique em Salvar.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminConfig;
