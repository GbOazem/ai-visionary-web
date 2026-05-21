import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language";

const Terms = () => {
  const { language, setLanguage } = useLanguage();
  const isPt = language === "pt-BR";
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-16 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-[Orbitron]">{isPt ? "Termos de Serviço" : "Terms of Service"}</h1>
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>
        <p className="text-muted-foreground mb-8">{isPt ? "Última atualização: 21 de maio de 2026" : "Last updated: May 21, 2026"}</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "1. Escopo" : "1. Scope"}</h2>
            <p>
              {isPt
                ? "Estes termos regulam propostas, implementação, suporte e comunicações relacionadas entre a PG Intelligence e seus clientes."
                : "These terms govern service proposals, implementation, support, and related communications between PG Intelligence and its clients."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "2. Modelo de entrega" : "2. Delivery Model"}</h2>
            <p>
              {isPt
                ? "Escopo, cronograma, entregáveis e critérios de aceite são definidos em cada proposta comercial ou documento de trabalho."
                : "Project scope, timeline, deliverables, and acceptance criteria are defined in each commercial proposal or statement of work."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "3. Responsabilidades do cliente" : "3. Client Responsibilities"}</h2>
            <p>
              {isPt
                ? "O cliente deve fornecer aprovações em tempo hábil, acessos necessários e contexto de negócio adequado para execução."
                : "Clients must provide timely approvals, required access, and accurate business context needed for execution."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "4. Propriedade intelectual" : "4. Intellectual Property"}</h2>
            <p>
              {isPt
                ? "A titularidade e os termos de licenciamento dos entregáveis personalizados são definidos no contrato do projeto."
                : "Ownership and licensing terms for custom deliverables are established in the project agreement."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "5. Contato" : "5. Contact"}</h2>
            <p>
              {isPt
                ? "Para dúvidas legais, de privacidade ou contratuais, entre em contato por"
                : "For legal, privacy, or contract questions, contact"}
              {" "}
              <a className="text-primary hover:underline" href="mailto:contato@pgintelligence.com">
                contato@pgintelligence.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Terms;
