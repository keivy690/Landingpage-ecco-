import { useState } from "react";
import { FolderOpen, Images, Play, X } from "lucide-react";
import aramis1 from "@/assets/clientes/aramis/aramis-01-web.jpeg";
import aramis2 from "@/assets/clientes/aramis/aramis-02-web.jpeg";
import aramis3 from "@/assets/clientes/aramis/aramis-03-web.jpeg";
import aramis4 from "@/assets/clientes/aramis/aramis-04-web.jpeg";
import aramis5 from "@/assets/clientes/aramis/aramis-05-web.jpeg";
import urban1 from "@/assets/clientes/urban/urban-01.jpeg";
import urban2 from "@/assets/clientes/urban/urban-02.jpeg";
import urban3 from "@/assets/clientes/urban/urban-03.jpeg";
import urban4 from "@/assets/clientes/urban/urban-04.jpeg";
import urban5 from "@/assets/clientes/urban/urban-05.jpeg";
import urban6 from "@/assets/clientes/urban/urban-06.jpeg";
import urban7 from "@/assets/clientes/urban/urban-07.jpeg";
import urban8 from "@/assets/clientes/urban/urban-08.jpeg";
import urban9 from "@/assets/clientes/urban/urban-09.jpeg";
import urbanVideo from "@/assets/clientes/urban/urban-video.mp4";

type PortfolioImage = { src: string; alt: string };
type PortfolioClient = {
  id: "aramis" | "urban";
  name: string;
  description: string;
  cover: string;
  images: PortfolioImage[];
  video?: { src: string; label: string };
};

const clients: PortfolioClient[] = [
  {
    id: "aramis",
    name: "ARAMIS",
    description: "Registros da execução de obra, infraestrutura e instalações técnicas.",
    cover: aramis5,
    images: [
      { src: aramis5, alt: "Fachada da loja ARAMIS" },
      { src: aramis1, alt: "Instalação de climatização e infraestrutura na obra ARAMIS" },
      { src: aramis2, alt: "Execução da infraestrutura técnica na obra ARAMIS" },
      { src: aramis3, alt: "Equipe ECCO+ em execução na obra ARAMIS" },
      { src: aramis4, alt: "Detalhe das instalações técnicas realizadas para a ARAMIS" },
    ],
  },
  {
    id: "urban",
    name: "URBAN",
    description: "Registros da obra comercial concluída, incluindo fachada, ambientação e acabamentos internos.",
    cover: urban2,
    images: [
      { src: urban2, alt: "Fachada da loja URBAN concluída" },
      { src: urban1, alt: "Ambiente interno da loja URBAN concluída" },
      { src: urban3, alt: "Exposição e acabamento interno da loja URBAN" },
      { src: urban4, alt: "Iluminação e mobiliário da loja URBAN" },
      { src: urban5, alt: "Área de exposição da loja URBAN" },
      { src: urban6, alt: "Provadores da loja URBAN" },
      { src: urban7, alt: "Corredor e acabamento dos provadores URBAN" },
      { src: urban8, alt: "Balcão e iluminação da loja URBAN" },
      { src: urban9, alt: "Exposição de produtos da loja URBAN" },
    ],
    video: { src: urbanVideo, label: "Vídeo da obra URBAN" },
  },
];

export function Gallery() {
  const [openClient, setOpenClient] = useState<PortfolioClient | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const closeGallery = () => {
    setOpenClient(null);
    setSelectedPhoto(null);
  };

  return (
    <section id="galeria" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-2xl">
          <span className="eyebrow text-primary">Portfólio</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Serviços realizados pela nossa equipe.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça os projetos organizados por cliente e acompanhe registros reais das execuções em obra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <button
              key={client.id}
              type="button"
              onClick={() => setOpenClient(client)}
              className="reveal group relative min-h-80 overflow-hidden rounded-xl border border-border bg-ink text-left shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <img src={client.cover} alt="" width={1600} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-[linear-gradient(160deg,oklch(0.16_0.04_253_/_0.28),oklch(0.12_0.04_253_/_0.9))]" />
              <span className="relative flex h-full min-h-80 flex-col justify-between p-6 text-ink-foreground">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"><FolderOpen size={16} aria-hidden="true" /> Cliente</span>
                <span>
                  <span className="eyebrow text-ink-foreground/65">Pasta de imagens</span>
                  <strong className="mt-2 block font-display text-3xl font-semibold tracking-wide">{client.name}</strong>
                  <span className="mt-2 flex items-center gap-2 text-sm text-ink-foreground/80"><Images size={16} aria-hidden="true" /> {client.images.length} registros da obra{client.video ? " + vídeo" : ""}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {openClient && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/90 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`Obra realizada para ${openClient.name}`}>
          <div className="mx-auto max-w-6xl rounded-2xl bg-background p-5 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="eyebrow text-primary">Cliente</span>
                <h3 className="mt-2 text-3xl font-bold">{openClient.name}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{openClient.description}</p>
              </div>
              <button type="button" onClick={closeGallery} className="rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:bg-muted" aria-label="Fechar galeria"><X size={20} aria-hidden="true" /></button>
            </div>

            {openClient.video && (
              <section className="mt-7 overflow-hidden rounded-xl border border-border bg-ink p-3">
                <div className="mb-3 flex items-center gap-2 px-1 text-sm font-semibold text-ink-foreground"><Play size={16} aria-hidden="true" /> {openClient.video.label}</div>
                <video controls preload="metadata" className="max-h-[520px] w-full rounded-lg bg-black" aria-label={openClient.video.label}>
                  <source src={openClient.video.src} type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
              </section>
            )}

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {openClient.images.map((photo, index) => (
                <button key={photo.alt} type="button" onClick={() => setSelectedPhoto(index)} className="group overflow-hidden rounded-lg border border-border bg-card text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  <img src={photo.src} alt={photo.alt} width={1200} height={1600} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="block p-3 text-xs text-muted-foreground">Abrir imagem {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
          {selectedPhoto !== null && (
            <button type="button" onClick={() => setSelectedPhoto(null)} className="fixed inset-0 z-10 grid cursor-zoom-out place-items-center bg-black/80 p-5" aria-label="Fechar imagem ampliada">
              <img src={openClient.images[selectedPhoto].src} alt={openClient.images[selectedPhoto].alt} className="relative z-20 max-h-full max-w-full rounded-lg object-contain shadow-2xl" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
