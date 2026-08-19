import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcela Andrade",
    role: "Cliente residencial",
    text: "A ECCO+ conduziu a reforma do nosso apartamento com muita organização. Cada etapa foi explicada com clareza e o prazo combinado foi cumprido.",
  },
  {
    name: "Rodrigo Lima",
    role: "Gestor predial",
    text: "Contratamos o serviço de manutenção preventiva e a diferença foi imediata. Diagnóstico técnico preciso e atendimento sempre disponível.",
  },
  {
    name: "Ana Paula Ferreira",
    role: "Empresária",
    text: "O projeto da nossa loja saiu exatamente como planejamos. Equipe atenciosa, comunicação objetiva e acabamento impecável.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden surface-ink py-24 md:py-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl">
          <span className="eyebrow text-blueprint">Depoimentos</span>
          <h2 className="mt-3 text-3xl font-bold text-ink-foreground sm:text-4xl">
            A confiança de quem já construiu com a gente.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote size={26} className="text-accent" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-foreground/80">
                “{t.text}”
              </blockquote>
              <div className="mt-5 flex gap-1" aria-label="Avaliação 5 de 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-white/10 pt-4">
                <p className="font-display text-base font-semibold text-ink-foreground">{t.name}</p>
                <p className="text-xs text-ink-foreground/55">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
