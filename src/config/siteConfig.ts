// ============================================================
// CONFIGURAÇÃO CENTRALIZADA - EDITE AQUI PARA INTEGRAR COM CRM
// ============================================================

export interface CRMConfig {
  /** URL da API do CRM para criar leads */
  apiUrl: string;
  /** Token de autenticação Bearer */
  token: string;
  /** Origem do lead (ex: "Meta Ads", "Google Ads", "Orgânico") */
  origin: string;
  /** Status inicial do lead no CRM */
  status: string;
  /** Valor estimado padrão do lead */
  estimatedValue: number;
  /** Se tem captura */
  hasCapture: boolean;
  /** Se é local */
  isLocal: boolean;
  /** Template de interações - use {{campanha}} e {{anuncio}} como variáveis */
  interactionsTemplate: string;
}

export interface GoogleSheetsConfig {
  /** URL do Google Apps Script para salvar na planilha */
  scriptUrl: string;
  /** Ativar envio para Google Sheets */
  enabled: boolean;
}

export interface TrackingConfig {
  /** Disparar evento de Lead no Facebook Pixel ao submeter */
  facebookPixelEnabled: boolean;
}

export interface SiteConfig {
  crm: CRMConfig;
  googleSheets: GoogleSheetsConfig;
  tracking: TrackingConfig;
}

// ============================================================
// VALORES PADRÃO — ALTERE AQUI PARA CONFIGURAR RAPIDAMENTE
// ============================================================

const STORAGE_KEY = "doha_site_config";

const DEFAULT_CONFIG: SiteConfig = {
  crm: {
    apiUrl: "https://hub-doha.base44.app/api/entities/Lead",
    token: "b44u_58b68b028580651b7edacf2f265d36fc54f78111544678e59ab8f14d13f252e1",
    origin: "Meta Ads",
    status: "lead",
    estimatedValue: 0,
    hasCapture: false,
    isLocal: false,
    interactionsTemplate: "Meta Ads | {{campanha}} | {{anuncio}}",
  },
  googleSheets: {
    scriptUrl: "https://script.google.com/macros/s/AKfycbzyGndUciG4_l2lrOeQeDFDKpA6vUN3xZHILc--6lYVsbu1Y-ilyp0sDJeK5JU4pmMs9w/exec",
    enabled: true,
  },
  tracking: {
    facebookPixelEnabled: true,
  },
};

/** Carrega configuração salva no localStorage ou retorna o padrão */
export function loadConfig(): SiteConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge profundo com defaults para garantir que novos campos existam
      return {
        crm: { ...DEFAULT_CONFIG.crm, ...parsed.crm },
        googleSheets: { ...DEFAULT_CONFIG.googleSheets, ...parsed.googleSheets },
        tracking: { ...DEFAULT_CONFIG.tracking, ...parsed.tracking },
      };
    }
  } catch (e) {
    console.warn("Erro ao carregar config, usando padrão:", e);
  }
  return { ...DEFAULT_CONFIG };
}

/** Salva configuração no localStorage */
export function saveConfig(config: SiteConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error("Erro ao salvar config:", e);
  }
}

/** Reseta para configuração padrão */
export function resetConfig(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export { DEFAULT_CONFIG };
