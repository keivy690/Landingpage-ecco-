import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/ecco";
import { trackWhatsAppClick } from "@/lib/analytics";
import logoAsset from "@/assets/logo-ecco.png.asset.json";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#empresa", label: "Empresa" },
  { href: "#processo", label: "Como trabalhamos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-5">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="ECCO+ Engenharia">
          <img
            src={logoAsset.url}
            alt="ECCO+ Engenharia"
            className="h-9 w-auto object-contain sm:h-11 lg:h-14"
            width={400}
            height={300}
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-foreground/75 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          onClick={() => trackWhatsAppClick("header")}
          className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Solicitar orçamento
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-ink-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm font-medium text-ink-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsAppClick("menu_mobile")}
            className="mt-4 block rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
