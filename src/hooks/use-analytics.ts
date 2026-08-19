import { useEffect } from "react";
import { initAnalytics, trackCtaView } from "@/lib/analytics";

/** Inicializa GTM/GA4 e dispara evento quando o usuário rola até as seções de CTA. */
export function useAnalytics(sectionIds: string[] = ["contato"]) {
  useEffect(() => {
    initAnalytics();

    if (!("IntersectionObserver" in window)) return;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            trackCtaView(id);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
