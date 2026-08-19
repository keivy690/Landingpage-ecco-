import { ECCO } from "@/lib/ecco";
import logoAsset from "@/assets/logo-ecco.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="surface-ink border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center">
          <img
            src={logoAsset.url}
            alt="ECCO+ Engenharia"
            className="h-9 w-auto object-contain sm:h-11"
            width={400}
            height={300}
          />
        </div>
        <p className="text-sm text-ink-foreground/60">Projetos • Obras • Manutenções</p>
        <p className="text-xs text-ink-foreground/40">
          © {new Date().getFullYear()} ECCO+ Engenharia. Todos os direitos reservados. ·{" "}
          {ECCO.email}
        </p>
      </div>
    </footer>
  );
}
