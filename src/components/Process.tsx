const steps = [
  { n: "01", t: "Contato", d: "Você apresenta sua necessidade pelo formulário ou WhatsApp." },
  { n: "02", t: "Entendimento", d: "Levantamos informações para compreender o escopo do serviço." },
  {
    n: "03",
    t: "Proposta",
    d: "Apresentamos a melhor solução técnica e comercial para o projeto.",
  },
  { n: "04", t: "Execução", d: "Seguimos com planejamento, acompanhamento e comunicação." },
];

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-primary">Como trabalhamos</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Um processo simples, técnico e transparente.
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-border md:block"
            aria-hidden
          />
          {steps.map((s, i) => (
            <li
              key={s.n}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal relative rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <span className="font-display text-3xl font-bold text-primary/25">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
