/**
 * Rastreamento de eventos/conversões via Google Tag Manager + GA4.
 *
 * IDs (opcionais — sem eles o rastreamento vira no-op silencioso):
 * - VITE_GTM_ID: container do Google Tag Manager (GTM-XXXXXXX)
 * - VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY ou VITE_GA4_ID: measurement ID GA4 (G-XXXXXXX)
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTM_ID = import.meta.env["VITE_GTM_ID"] as string | undefined;
const GA4_ID = (import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] ??
  import.meta.env["VITE_GA4_ID"]) as string | undefined;

let initialized = false;

function pushDataLayer(entry: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(entry);
}

export function initAnalytics() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer ?? [];

  if (GTM_ID) {
    pushDataLayer({ "gtm.start": Date.now(), event: "gtm.js" });
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(s);
  }

  if (GA4_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { page_path: window.location.pathname });
  }
}

/** Envia um evento para o dataLayer (GTM) e para o GA4 (gtag). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  pushDataLayer({ event: name, ...params });
  window.gtag?.("event", name, params);
}

/** Conversão: clique em qualquer canal de WhatsApp. */
export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", {
    event_category: "conversao",
    event_label: location,
    location,
  });
}

/** Conversão: envio do formulário de orçamento. */
export function trackFormSubmit(params: Record<string, unknown> = {}) {
  trackEvent("generate_lead", {
    event_category: "conversao",
    form: "orcamento",
    ...params,
  });
}

/** Engajamento: usuário rolou até a seção de CTA/contato. */
export function trackCtaView(section: string) {
  trackEvent("cta_scroll_view", { event_category: "engajamento", section });
}
