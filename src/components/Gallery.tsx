import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

const photos = [
  { src: g1, tag: "Obras", alt: "Fachada de edifício residencial entregue pela ECCO+ Engenharia" },
  { src: g2, tag: "Estrutura", alt: "Execução de estrutura em concreto armado com equipe em obra" },
  { src: g3, tag: "Projetos", alt: "Engenheiro analisando projeto técnico em prancha" },
  { src: g4, tag: "Acabamento", alt: "Interior comercial finalizado após reforma" },
  { src: g5, tag: "Manutenções", alt: "Técnico realizando manutenção elétrica e hidráulica" },
  { src: g6, tag: "Cobertura", alt: "Serviço de cobertura e impermeabilização concluído" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl">
          <span className="eyebrow text-primary">Galeria</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Serviços realizados pela nossa equipe.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Um recorte de projetos, obras e manutenções executados com planejamento e acompanhamento
            técnico do início ao fim.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={p.tag + i}
              style={{ transitionDelay: `${i * 70}ms` }}
              className="reveal group relative overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,var(--ink),transparent)] p-4">
                <span className="eyebrow text-[0.6rem] text-ink-foreground/70">{p.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
