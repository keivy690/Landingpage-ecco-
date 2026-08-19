import { DraftingCompass, HardHat, Wrench, Check } from "lucide-react";

const services = [
  {
    icon: DraftingCompass,
    title: "Projetos",
    text: "Desenvolvimento e organização de soluções técnicas para apoiar decisões, planejamento e execução da sua obra.",
    items: [
      "Levantamento de necessidades",
      "Planejamento técnico",
      "Detalhamento e compatibilização",
    ],
  },
  {
    icon: HardHat,
    title: "Obras",
    text: "Acompanhamento e execução com foco em organização, controle das etapas e cumprimento do escopo definido.",
    items: ["Planejamento de execução", "Acompanhamento técnico", "Controle de etapas e qualidade"],
    featured: true,
  },
  {
    icon: Wrench,
    title: "Manutenções",
    text: "Atendimento técnico para correções, adequações e melhorias com foco em segurança, funcionalidade e durabilidade.",
    items: ["Diagnóstico técnico", "Correções e adequações", "Manutenção preventiva e corretiva"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl">
          <span className="eyebrow text-primary">O que fazemos</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Três frentes de atuação, um mesmo padrão técnico.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`reveal group rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                s.featured
                  ? "surface-ink border-transparent shadow-[var(--shadow-lift)]"
                  : "border-border bg-card shadow-[var(--shadow-soft)]"
              }`}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                  s.featured ? "bg-white/10 text-blueprint" : "bg-secondary text-primary"
                }`}
              >
                <s.icon size={22} />
              </div>
              <h3
                className={`mt-5 text-xl font-semibold ${s.featured ? "text-ink-foreground" : ""}`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  s.featured ? "text-ink-foreground/70" : "text-muted-foreground"
                }`}
              >
                {s.text}
              </p>
              <ul className="mt-6 space-y-2.5">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className={`flex items-start gap-2 text-sm ${
                      s.featured ? "text-ink-foreground/80" : "text-foreground/80"
                    }`}
                  >
                    <Check
                      size={15}
                      className={s.featured ? "mt-0.5 text-accent" : "mt-0.5 text-primary"}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
