import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Faq, FAQ_ITEMS } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";
import { useAnalytics } from "@/hooks/use-analytics";
import { ECCO } from "@/lib/ecco";

const title = "ECCO+ Engenharia | Projetos, Obras e Manutenções em Belém";
const description =
  "Engenharia civil em Belém (PA): projetos, execução de obras, reformas e manutenção predial com acompanhamento técnico. Peça seu orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "engenharia civil, projetos, obras, reformas, manutenção predial, Belém, Pará, ECCO+ Engenharia",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "ECCO+ Engenharia" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "ECCO+ Engenharia",
          description,
          telephone: `+${ECCO.whatsappNumber}`,
          email: ECCO.email,
          areaServed: "Belém, PA, Brasil",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Belém",
            addressRegion: "PA",
            addressCountry: "BR",
          },
          sameAs: [ECCO.instagramUrl, `https://wa.me/${ECCO.whatsappNumber}`],
          knowsAbout: [
            "Projetos de engenharia",
            "Execução de obras",
            "Reformas",
            "Manutenção predial",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  useAnalytics(["contato", "faq"]);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <section className="bg-[image:var(--gradient-primary)] py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <span className="eyebrow text-primary-foreground/70">Tem um projeto em mente?</span>
              <h2 className="mt-2 text-3xl font-bold text-primary-foreground">
                Fale com a ECCO+ Engenharia.
              </h2>
            </div>
            <a
              href="#contato"
              className="inline-flex shrink-0 items-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5"
            >
              Solicitar atendimento
            </a>
          </div>
        </section>
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
