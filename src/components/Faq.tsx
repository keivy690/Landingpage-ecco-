import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export const FAQ_ITEMS = [
  {
    q: "Quais serviços a ECCO+ Engenharia oferece?",
    a: "Atuamos com projetos de engenharia, execução e gestão de obras, reformas e manutenção predial preventiva e corretiva, sempre com acompanhamento técnico responsável.",
  },
  {
    q: "Em quais cidades vocês atendem?",
    a: "Atendemos Belém e toda a região metropolitana do Pará. Para obras fora dessa área, avaliamos a demanda caso a caso — basta nos chamar no WhatsApp com a localização.",
  },
  {
    q: "Como funciona o orçamento? É cobrado?",
    a: "O primeiro contato e a estimativa inicial são gratuitos. Após entender o escopo, agendamos uma visita técnica e enviamos uma proposta detalhada com prazos e etapas.",
  },
  {
    q: "Em quanto tempo recebo a proposta?",
    a: "Na maioria dos casos, respondemos no mesmo dia útil e enviamos a proposta formal em até 3 dias úteis após a visita técnica ou o recebimento das informações do projeto.",
  },
  {
    q: "Vocês acompanham a obra do início ao fim?",
    a: "Sim. Fazemos planejamento, cronograma, acompanhamento da execução e relatórios de andamento, garantindo controle de qualidade, prazos e custos em todas as etapas.",
  },
  {
    q: "É possível contratar apenas o projeto ou apenas a execução?",
    a: "Sim. Você pode contratar somente o projeto técnico, somente a execução da obra ou o pacote completo, conforme a necessidade e o estágio do seu empreendimento.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <div className="reveal text-center">
          <span className="eyebrow text-primary">Dúvidas frequentes</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Perguntas que recebemos com frequência
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Se a sua dúvida não estiver aqui, fale com a gente pelo WhatsApp — respondemos rápido.
          </p>
        </div>

        <div className="reveal mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold transition-colors hover:bg-secondary/50 sm:px-7"
                  >
                    {item.q}
                    <span className="shrink-0 text-primary">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!isOpen}
                  className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-7"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
