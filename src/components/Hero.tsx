import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, Clock, MessageCircle } from "lucide-react";
import { ConstructionAnimation } from "./ConstructionAnimation";
import { whatsappUrl } from "@/lib/ecco";
import { trackWhatsAppClick } from "@/lib/analytics";

const stages = [
  "Preparando terreno...",
  "Executando fundação...",
  "Erguendo estrutura...",
  "Montando lajes...",
  "Executando alvenaria...",
  "Instalando cobertura...",
  "Aplicando acabamentos...",
  "Finalizando paisagismo...",
  "Projeto concluído.",
];

export function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % stages.length), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden surface-ink pb-24 pt-32 md:pb-32 md:pt-40"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--blueprint)_35%,transparent),transparent_65%)] blur-2xl" />

      {/* Animação ao fundo, posicionada à direita */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[55%] lg:w-[60%] overflow-hidden">
        <ConstructionAnimation
          className="h-full w-full opacity-40 md:opacity-50"
          preserveAspectRatio="xMidYMid slice"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_75%,transparent)_35%,transparent_100%)] md:bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_70%,transparent)_30%,transparent_60%,color-mix(in_oklab,var(--ink)_35%,transparent)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--ink)_85%,transparent),transparent)]" />
        <div className="absolute inset-y-0 left-0 w-24 bg-[linear-gradient(to_right,var(--ink),transparent)] md:hidden" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="reveal is-visible max-w-2xl">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-ink-foreground/70">
              Engenharia • Projetos • Execução
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
              Soluções de engenharia com{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                planejamento, precisão e confiança.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">
              Da concepção ao acompanhamento da obra, a ECCO+ Engenharia entrega soluções técnicas
              para projetos, obras e manutenções — com atendimento próximo e foco em resultado.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              >
                Quero um orçamento <ArrowRight size={16} />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero")}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-white/5"
              >
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
              {[
                ["Projetos", "Planejamento técnico"],
                ["Obras", "Execução organizada"],
                ["Manutenções", "Soluções eficientes"],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="font-display text-lg font-semibold text-ink-foreground">{t}</dt>
                  <dd className="mt-1 text-xs text-ink-foreground/55">{d}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2.5">
                <BadgeCheck size={18} className="text-blueprint" />
                <span className="font-display text-xs font-semibold text-ink-foreground">
                  Registro CREA/PA
                </span>
              </div>
              <div className="flex items-center gap-6 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-ink-foreground">5+</p>
                  <p className="text-xs text-ink-foreground/55">Anos de experiência</p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="font-display text-2xl font-bold text-ink-foreground">150+</p>
                  <p className="text-xs text-ink-foreground/55">Obras concluídas</p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <Clock size={16} className="mb-1 text-accent" />
                  <p className="font-display text-sm font-semibold text-ink-foreground">
                    Resposta rápida
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal is-visible mt-10 inline-flex items-center gap-3 rounded-md border border-white/10 bg-ink/60 px-4 py-3 backdrop-blur-sm">
              <span className="eyebrow text-ink-foreground/50">Etapa</span>
              <span className="font-display text-sm font-semibold text-blueprint">
                {stages[stage]}
              </span>
            </div>
          </div>

          {/* Espaço reservado para manter a coluna direita vazia e a animação visível ao fundo */}
          <div className="pointer-events-none hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
