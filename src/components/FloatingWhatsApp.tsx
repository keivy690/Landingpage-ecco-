import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/ecco";
import { trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackWhatsAppClick("botao_flutuante")}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
    >
      <MessageCircle size={24} />
    </a>
  );
}
