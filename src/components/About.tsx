import { ArrowRight, Check } from "lucide-react";
import obraImg from "@/assets/engenharia-obra.jpg";
import { whatsappUrl } from "@/lib/ecco";

const points = [
  "Atendimento próximo",
  "Soluções sob medida",
  "Organização das etapas",
  "Comunicação objetiva",
];

export function About() {
  return (
    <section id="empresa" className="relative overflow-hidden surface-ink py-24 md:py-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="reveal relative">
          <img
            src={obraImg}
            alt="Engenheiro analisando plantas em obra ao entardecer"
            width={1200}
            height={1408}
            loading="lazy"
            className="w-full rounded-xl border border-white/10 object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="absolute -bottom-6 -right-2 rounded-xl border border-white/15 bg-ink/90 px-6 py-5 backdrop-blur md:right-6">
            <span className="eyebrow text-ink-foreground/50">Ecco+</span>
            <p className="mt-1 font-display text-lg font-semibold text-ink-foreground">
              Projetar. Executar. Manter.
            </p>
          </div>
        </div>

        <div className="reveal">
          <span className="eyebrow text-blueprint">Sobre a ECCO+</span>
          <h2 className="mt-3 text-3xl font-bold text-ink-foreground sm:text-4xl">
            Engenharia com comunicação simples e acompanhamento profissional.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-foreground/70">
            Nosso objetivo é transformar demandas técnicas em soluções claras, viáveis e bem
            executadas. Trabalhamos com transparência desde o primeiro contato, alinhando escopo,
            expectativas e próximos passos.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-foreground/85"
              >
                <Check size={16} className="text-accent" /> {p}
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-blueprint transition-colors hover:text-ink-foreground"
          >
            Converse com nossa equipe <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
