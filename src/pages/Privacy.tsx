import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language";

const Privacy = () => {
  const { language, setLanguage } = useLanguage();
  const isPt = language === "pt-BR";
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-16 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-[Orbitron]">{isPt ? "Política de Privacidade" : "Privacy Policy"}</h1>
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>
        <p className="text-muted-foreground mb-8">{isPt ? "Última atualização: 21 de maio de 2026" : "Last updated: May 21, 2026"}</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "1. Dados que coletamos" : "1. Data We Collect"}</h2>
            <p>
              {isPt
                ? "Podemos coletar informações de contato (nome, email, telefone), detalhes do projeto e dados técnicos necessários para entrega do serviço."
                : "We may collect contact information (name, email, phone), project details you share, and technical data required for service delivery."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "2. Como usamos os dados" : "2. How We Use Data"}</h2>
            <p>
              {isPt
                ? "Usamos os dados para comunicação, estimativa e entrega dos serviços, suporte e melhoria de qualidade. Não vendemos dados pessoais."
                : "We use data to communicate, estimate and deliver services, provide support, and improve quality. We do not sell personal data."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "3. Compartilhamento de dados" : "3. Data Sharing"}</h2>
            <p>
              {isPt
                ? "Compartilhamos dados apenas com provedores confiáveis de infraestrutura e ferramentas necessários para executar o serviço contratado, sob dever de confidencialidade e segurança."
                : "We only share data with trusted infrastructure or tooling providers needed to execute the contracted service, under confidentiality and security obligations."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "4. Segurança" : "4. Security"}</h2>
            <p>
              {isPt
                ? "Aplicamos controle de acesso, princípio de menor privilégio e salvaguardas operacionais para proteger dados dos clientes."
                : "We apply access control, least-privilege practices, and operational safeguards to protect client data."}
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-2">{isPt ? "5. Seus direitos" : "5. Your Rights"}</h2>
            <p>
              {isPt
                ? "Você pode solicitar acesso, correção ou exclusão de dados entrando em contato por"
                : "You can request data access, correction, or deletion by contacting"}
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

export default Privacy;
