import { useState, type FormEvent } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowRight,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import { ECCO, whatsappUrl } from "@/lib/ecco";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";

function trackEventChannel(title: string) {
  if (title === "WhatsApp") trackWhatsAppClick("qrcode_whatsapp");
}

const inputClass =
  "mt-1.5 w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

const errorInputClass =
  "mt-1.5 w-full rounded-md border border-destructive bg-card px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-destructive focus:ring-2 focus:ring-destructive/25";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    const newErrors: Record<string, string> = {};
    if (!get("nome")) newErrors["nome"] = "Nome é obrigatório";
    if (!get("servico") || get("servico") === "") newErrors["servico"] = "Selecione um serviço";
    if (!get("mensagem")) newErrors["mensagem"] = "Descreva sua necessidade";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const texto = `${ECCO.defaultMessage}

*Nome:* ${get("nome")}
*Telefone:* ${get("telefone") || "Não informado"}
*Serviço:* ${get("servico")}
*Local:* ${get("local") || "Não informado"}

*Necessidade:*
${get("mensagem")}`;

    trackFormSubmit({ servico: get("servico"), local: get("local") || "nao_informado" });
    trackWhatsAppClick("formulario_contato");
    setSending(true);
    window.open(whatsappUrl(texto), "_blank", "noopener,noreferrer");
    setTimeout(() => setSending(false), 800);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contato" className="bg-secondary/50 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="mt-4 text-2xl font-bold">Sua mensagem foi preparada!</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Você será redirecionado para o WhatsApp da ECCO+ Engenharia. Caso não aconteça, clique{" "}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("formulario_contato")}
                className="text-primary underline"
              >
                aqui
              </a>
              .
            </p>
          </div>
          <div className="reveal space-y-5">
            <div>
              <span className="eyebrow text-primary">Canais diretos</span>
              <h3 className="mt-3 text-xl font-semibold">Aponte a câmera e fale com a ECCO+.</h3>
            </div>
            {[
              {
                value: whatsappUrl(),
                icon: MessageCircle,
                title: "WhatsApp",
                text: "Orçamentos e atendimento rápido.",
                cta: "Abrir WhatsApp",
              },
              {
                value: ECCO.instagramUrl,
                icon: Instagram,
                title: "Instagram",
                text: "Projetos, obras e novidades da empresa.",
                cta: "Abrir Instagram",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-5 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="rounded-lg border border-border bg-background p-2">
                  <QRCodeSVG
                    value={c.value}
                    size={92}
                    level="H"
                    bgColor="transparent"
                    fgColor="#152238"
                  />
                </div>
                <div>
                  <strong className="font-display text-base">{c.title}</strong>
                  <p className="mt-1 text-xs text-muted-foreground">{c.text}</p>
                  <a
                    href={c.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEventChannel(c.title)}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <c.icon size={14} /> {c.cta} <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
            <div className="surface-ink rounded-xl p-6">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 text-ink-foreground">
                  <Phone size={16} className="text-blueprint" /> {ECCO.whatsappDisplay}
                </li>
                <li className="flex items-center gap-3 text-ink-foreground">
                  <Instagram size={16} className="text-blueprint" /> {ECCO.instagramHandle}
                </li>
                <li className="flex items-center gap-3 text-ink-foreground">
                  <Mail size={16} className="text-blueprint" /> {ECCO.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="bg-secondary/50 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div className="reveal">
          <span className="eyebrow text-primary">Solicite um orçamento</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Conte brevemente o que você precisa.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Preencha os dados abaixo. Ao enviar, a mensagem será preparada automaticamente e aberta
            no WhatsApp da ECCO+ Engenharia.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className={errors["nome"] ? errorInputClass : inputClass}
                  aria-invalid={!!errors["nome"]}
                  aria-describedby={errors["nome"] ? "nome-error" : undefined}
                />
                {errors["nome"] && (
                  <p id="nome-error" className="mt-1.5 text-xs text-destructive">
                    {errors["nome"]}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className={inputClass}
                  aria-describedby="telefone-help"
                />
                <p id="telefone-help" className="mt-1.5 text-xs text-muted-foreground/70">
                  Opcional, mas nos ajuda a entrar em contato.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="servico" className="block text-sm font-medium">
                  Serviço de interesse
                </label>
                <select
                  id="servico"
                  name="servico"
                  required
                  defaultValue=""
                  className={errors["servico"] ? errorInputClass : inputClass}
                  aria-invalid={!!errors["servico"]}
                  aria-describedby={errors["servico"] ? "servico-error" : undefined}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Projetos</option>
                  <option>Obras</option>
                  <option>Manutenções</option>
                  <option>Outro serviço</option>
                </select>
                {errors["servico"] && (
                  <p id="servico-error" className="mt-1.5 text-xs text-destructive">
                    {errors["servico"]}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="local" className="block text-sm font-medium">
                  Cidade / Local da obra
                </label>
                <input
                  id="local"
                  name="local"
                  type="text"
                  placeholder="Cidade, bairro ou região"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="mensagem" className="block text-sm font-medium">
                Descreva sua necessidade
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                placeholder="Ex.: preciso de avaliação para reforma, elaboração de projeto..."
                className={`${inputClass} resize-y`}
                aria-invalid={!!errors["mensagem"]}
                aria-describedby={errors["mensagem"] ? "mensagem-error" : undefined}
              />
              {errors["mensagem"] && (
                <p id="mensagem-error" className="mt-1.5 text-xs text-destructive">
                  {errors["mensagem"]}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
            >
              <Send size={16} />
              {sending ? "Preparando..." : "Enviar pelo WhatsApp"}
            </button>

            <p className="mt-4 text-xs text-muted-foreground">
              Ao clicar em enviar, você será direcionado ao WhatsApp com a mensagem preenchida.
            </p>
          </form>
        </div>

        <aside className="reveal space-y-5">
          <div>
            <span className="eyebrow text-primary">Canais diretos</span>
            <h3 className="mt-3 text-xl font-semibold">Aponte a câmera e fale com a ECCO+.</h3>
          </div>

          {[
            {
              value: whatsappUrl(),
              icon: MessageCircle,
              title: "WhatsApp",
              text: "Orçamentos e atendimento rápido.",
              cta: "Abrir WhatsApp",
            },
            {
              value: ECCO.instagramUrl,
              icon: Instagram,
              title: "Instagram",
              text: "Projetos, obras e novidades da empresa.",
              cta: "Abrir Instagram",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-5 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="rounded-lg border border-border bg-background p-2">
                <QRCodeSVG
                  value={c.value}
                  size={92}
                  level="H"
                  bgColor="transparent"
                  fgColor="#152238"
                />
              </div>
              <div>
                <strong className="font-display text-base">{c.title}</strong>
                <p className="mt-1 text-xs text-muted-foreground">{c.text}</p>
                <a
                  href={c.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEventChannel(c.title)}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  <c.icon size={14} /> {c.cta} <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}

          <div className="surface-ink rounded-xl p-6">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-ink-foreground">
                <Phone size={16} className="text-blueprint" /> {ECCO.whatsappDisplay}
              </li>
              <li className="flex items-center gap-3 text-ink-foreground">
                <Instagram size={16} className="text-blueprint" /> {ECCO.instagramHandle}
              </li>
              <li className="flex items-center gap-3 text-ink-foreground">
                <Mail size={16} className="text-blueprint" /> {ECCO.email}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
