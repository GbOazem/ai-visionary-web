import logo from "@/assets/pg-logo.png";
import LanguageToggle from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, Code2, Linkedin, Mail, MessageCircle, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { useState } from "react";

const copy = {
  en: {
    nav: ["Services", "Proof", "About", "Process", "Contact"],
    topCta: "Book free diagnosis",
    badge: "DELIVERY DRIVEN BY RESULTS",
    heroTitleA: "Trusted AI and Web Execution",
    heroTitleB: "for growth-focused teams",
    heroText:
      "We build AI, web, and automation systems with clear scope, documented delivery, and measurable business impact.",
    heroCtaA: "Schedule free strategy call",
    heroCtaB: "See case studies",
    pillars: ["CLARITY", "VELOCITY", "IMPACT"],
    what: "WHAT WE DO",
    services: [
      {
        title: "AI Solutions",
        desc: "Custom copilots, retrieval pipelines, and AI workflows integrated with your operations.",
        tags: ["Agents", "RAG", "Automation"],
      },
      {
        title: "Web Development",
        desc: "High-performance websites and product interfaces built to convert and scale.",
        tags: ["React", "Performance", "UX"],
      },
      {
        title: "Automation",
        desc: "End-to-end process automation that removes repetitive tasks and shortens cycle time.",
        tags: ["APIs", "Workflows", "Integrations"],
      },
    ],
    proof: "PROOF",
    proofTitle: "Recent client outcomes",
    outcomes: [
      { result: "42% faster response time", detail: "Support flow automation + CRM routing" },
      { result: "28% higher conversion rate", detail: "Landing and funnel optimization" },
      { result: "18 hours/week saved", detail: "Operations workflow automation" },
    ],
    testimonials: [
      {
        quote: "PG delivered exactly what was promised with clear milestones and measurable impact.",
        author: "Mariana S., COO",
      },
      {
        quote: "Fast execution, transparent updates, and very strong technical judgment.",
        author: "Rafael M., Founder",
      },
    ],
    about: "ABOUT",
    aboutTitle: "Small team. Senior execution.",
    aboutTextA:
      "PG Intelligence combines engineering, product thinking, and AI implementation to solve real business problems.",
    aboutTextB:
      "We prioritize clear communication, predictable delivery, and systems that keep creating value after launch.",
    process: "PROCESS",
    processTitle: "From first call to launch",
    steps: [
      { n: "01", t: "Discovery", d: "Goals, constraints, and baseline metrics." },
      { n: "02", t: "Scope", d: "Deliverables, timeline, ownership, and acceptance criteria." },
      { n: "03", t: "Build", d: "Weekly updates, implementation, QA, and approval loops." },
      { n: "04", t: "Launch + Improve", d: "Deployment, monitoring, and optimization roadmap." },
    ],
    contactTitle: "Ready to build with confidence?",
    contactText: "Tell us your target outcome. We will reply with a practical plan and next steps.",
    contactBtn: "WhatsApp support",
    footerContact: "Business contact: contato@pgintelligence.com",
    footerHours: "Support window: Mon-Fri, 09:00-18:00",
    footerLocation: "Location: Brazil",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
  "pt-BR": {
    nav: ["Serviços", "Provas", "Sobre", "Processo", "Contato"],
    topCta: "Agendar diagnóstico grátis",
    badge: "ENTREGA GUIADA POR RESULTADOS",
    heroTitleA: "Execução confiável em IA e Web",
    heroTitleB: "para empresas que querem crescer",
    heroText:
      "Criamos sistemas de IA, web e automação com escopo claro, entrega documentada e impacto real no negócio.",
    heroCtaA: "Agendar call estratégica gratuita",
    heroCtaB: "Ver estudos de caso",
    pillars: ["CLAREZA", "VELOCIDADE", "IMPACTO"],
    what: "O QUE FAZEMOS",
    services: [
      {
        title: "Soluções com IA",
        desc: "Copilotos sob medida, pipelines de recuperação e fluxos de IA integrados à sua operação.",
        tags: ["Agentes", "RAG", "Automação"],
      },
      {
        title: "Desenvolvimento Web",
        desc: "Sites e interfaces de produto de alta performance, feitos para converter e escalar.",
        tags: ["React", "Performance", "UX"],
      },
      {
        title: "Automação",
        desc: "Automação de ponta a ponta para remover tarefas repetitivas e reduzir tempo de ciclo.",
        tags: ["APIs", "Workflows", "Integrações"],
      },
    ],
    proof: "PROVAS",
    proofTitle: "Resultados recentes de clientes",
    outcomes: [
      { result: "42% mais rapidez no atendimento", detail: "Automação de suporte + roteamento no CRM" },
      { result: "28% de aumento na conversão", detail: "Otimização de landing e funil" },
      { result: "18 horas/semana economizadas", detail: "Automação de workflows operacionais" },
    ],
    testimonials: [
      {
        quote: "A PG entregou exatamente o que prometeu, com marcos claros e impacto mensurável.",
        author: "Mariana S., COO",
      },
      {
        quote: "Execução rápida, atualizações transparentes e decisões técnicas muito sólidas.",
        author: "Rafael M., Founder",
      },
    ],
    about: "SOBRE",
    aboutTitle: "Time pequeno. Execução sênior.",
    aboutTextA:
      "A PG Intelligence une engenharia, visão de produto e implementação de IA para resolver problemas reais de negócio.",
    aboutTextB:
      "Priorizamos comunicação clara, entrega previsível e sistemas que continuam gerando valor depois do lançamento.",
    process: "PROCESSO",
    processTitle: "Da primeira call ao lançamento",
    steps: [
      { n: "01", t: "Descoberta", d: "Objetivos, restrições e métricas de base." },
      { n: "02", t: "Escopo", d: "Entregáveis, cronograma, responsáveis e critérios de aceite." },
      { n: "03", t: "Construção", d: "Atualizações semanais, implementação, QA e ciclos de aprovação." },
      { n: "04", t: "Lançar + Melhorar", d: "Deploy, monitoramento e roteiro de otimização." },
    ],
    contactTitle: "Pronto para construir com confiança?",
    contactText: "Conte o resultado que você quer atingir. Respondemos com plano prático e próximos passos.",
    contactBtn: "Suporte por WhatsApp",
    footerContact: "Contato comercial: contato@pgintelligence.com",
    footerHours: "Atendimento: Seg-Sex, 09:00-18:00",
    footerLocation: "Localização: Brasil",
    privacy: "Política de Privacidade",
    terms: "Termos",
  },
} as const;

const Index = () => {
  const { language, setLanguage } = useLanguage();
  const t = copy[language];
  const calendlyUrlRaw = import.meta.env.VITE_CALENDLY_URL ?? "";
  const calendlyUrl =
    calendlyUrlRaw.trim().length > 0 && !calendlyUrlRaw.includes("your-user")
      ? calendlyUrlRaw
      : "https://calendly.com/gabrielolauria";
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [aboutSlide, setAboutSlide] = useState(0);

  const serviceDetails =
    language === "pt-BR"
      ? [
          ["Chatbots internos", "Base de conhecimento inteligente", "Atendimento automatizado", "Agentes de IA"],
          ["Landing Pages", "Portais internos", "Dashboards", "Sistemas corporativos"],
          ["Integração entre sistemas", "Automação de e-mails", "Fluxos de aprovação", "Processamento de documentos"],
        ]
      : [
          ["Internal chatbots", "Intelligent knowledge base", "Automated support", "AI agents"],
          ["Landing Pages", "Internal portals", "Dashboards", "Enterprise systems"],
          ["System integrations", "Email automation", "Approval workflows", "Document processing"],
        ];

  const whyChoose = language === "pt-BR"
    ? {
        badge: "POR QUE A PG",
        title: "Por que escolher a PG Intelligence",
        lead: "Hoje falta autoridade. A PG entrega com metodo, clareza e foco no resultado.",
        points: [
          "Solucoes sob medida",
          "Equipe especializada",
          "Entregas documentadas",
          "Suporte pos-implantacao",
          "Integracoes modernas",
          "IA aplicada ao negocio",
        ],
      }
    : {
        badge: "WHY PG",
        title: "Why choose PG Intelligence",
        lead: "What most teams lack today is authority. PG delivers with method, clarity, and outcome focus.",
        points: [
          "Tailored solutions",
          "Specialized team",
          "Documented deliveries",
          "Post-launch support",
          "Modern integrations",
          "Business-driven AI",
        ],
      };

  const toggleCard = (index: number) => {
    setFlippedCards((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  const schedulingFlow =
    language === "pt-BR"
      ? {
          badge: "FLUXO DE AGENDAMENTO",
          title: "Agende seu diagnóstico em poucos passos",
          steps: [
            "Cliente clica em Agendar Diagnostico Gratuito",
            "Calendly abre automaticamente",
            "Escolhe a melhor data e horario",
            "Preenche: Nome, Empresa, E-mail, WhatsApp e maior desafio",
            "Call marcada automaticamente",
            "Time PG recebe no Google Calendar",
          ],
        }
      : {
          badge: "BOOKING FLOW",
          title: "Book your diagnosis in a few steps",
          steps: [
            "Client clicks Schedule Free Diagnosis",
            "Calendly opens automatically",
            "Selects the best date and time",
            "Fills: Name, Company, Email, WhatsApp, and biggest challenge",
            "Call is booked automatically",
            "PG team receives it in Google Calendar",
          ],
        };

  const founderContent =
    language === "pt-BR"
      ? {
          badge: "CRIADORES",
          title: "Quem cria a PG Intelligence",
          intro:
            "A PG Intelligence foi fundada para transformar tecnologia em impacto real no negocio, com automacoes e sistemas inteligentes que geram valor pratico e mensuravel.",
        }
      : {
          badge: "FOUNDERS",
          title: "Who builds PG Intelligence",
          intro:
            "PG Intelligence was founded to turn technology into real business impact, through automation and intelligent systems that create practical, measurable value.",
        };

  const founderSlides =
    language === "pt-BR"
      ? [
          {
            title: "PG Intelligence",
            subtitle: "Tecnologia aplicada com foco em resultado",
            body: "Marca, metodo e execucao orientados a crescimento.",
            type: "logo" as const,
          },
          {
            title: "Gabriel Oazem Lauria",
            subtitle: "Co-Founder & AI Solutions Developer",
            body:
              "Gabriel atua no desenvolvimento de solucoes inteligentes que combinam automacao, inteligencia artificial e tecnologia para otimizar processos, aumentar produtividade e acelerar resultados. Em fase de conclusao da graduacao em Ciencia da Computacao, busca unir conhecimento tecnico e inovacao para criar solucoes modernas e eficientes. A PG Intelligence nasceu da vontade de transformar tecnologia em impacto real para negocios, com automacoes, sistemas inteligentes e experiencias digitais que geram valor pratico e mensuravel. Seu foco esta em simplificar operacoes, reduzir tarefas repetitivas e ajudar empresas a crescer de forma estrategica e sustentavel.",
            type: "text" as const,
          },
          {
            title: "Pedro Marcos Abreu",
            subtitle: "Co-Founder & Software Engineering Specialist",
            body:
              "Pedro atua na criacao e no desenvolvimento de solucoes tecnologicas com foco em eficiencia, escalabilidade e inovacao. Finalizando a graduacao em Engenharia de Software, tem forte interesse em desenvolvimento de sistemas, arquitetura de software e implementacao de tecnologias que geram valor real para empresas. Como cofundador da PG Intelligence, participa da concepcao e execucao de projetos que unem tecnologia, estrategia e inovacao para resolver desafios corporativos. Seu foco esta em transformar necessidades de negocio em solucoes digitais praticas, seguras e preparadas para acompanhar o crescimento dos clientes.",
            type: "text" as const,
          },
        ]
      : [
          {
            title: "PG Intelligence",
            subtitle: "Applied technology with outcome focus",
            body: "Brand, method, and execution built for growth.",
            type: "logo" as const,
          },
          {
            title: "Gabriel Oazem Lauria",
            subtitle: "Co-Founder & AI Solutions Developer",
            body:
              "Gabriel builds intelligent solutions that combine automation, AI, and technology to optimize operations, increase productivity, and accelerate outcomes. While finishing his Computer Science degree, he focuses on connecting technical depth with innovation to deliver modern, efficient systems. PG Intelligence was created to turn technology into real business impact through automation, intelligent systems, and digital experiences with practical and measurable value. His core focus is simplifying operations, reducing repetitive work, and helping companies grow strategically and sustainably.",
            type: "text" as const,
          },
          {
            title: "Pedro Marcos Abreu",
            subtitle: "Co-Founder & Software Engineering Specialist",
            body:
              "Pedro develops technology solutions focused on efficiency, scalability, and innovation. While finishing his Software Engineering degree, he is deeply engaged in system development, software architecture, and implementation of technologies that create real business value. As a co-founder of PG Intelligence, he helps design and execute projects that combine technology, strategy, and innovation to solve corporate challenges. His focus is translating business needs into practical, secure digital solutions built to support client growth.",
            type: "text" as const,
          },
        ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-grid animate-grid pointer-events-none opacity-60" />

      <header className="relative z-20 border-b border-border/40 backdrop-blur-md bg-background/40">
        <nav className="container flex items-center justify-between py-4 gap-4">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="PG Intelligence" className="h-10 w-10 object-contain" />
            <span className="font-[Orbitron] text-sm tracking-[0.25em] text-gradient hidden sm:block">PG INTELLIGENCE</span>
          </a>
          <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">{t.nav[0]}</a>
            <a href="#proof" className="hover:text-primary transition-colors">{t.nav[1]}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t.nav[2]}</a>
            <a href="#process" className="hover:text-primary transition-colors">{t.nav[3]}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav[4]}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <Button
              size="sm"
              className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)] hover:opacity-90 hidden sm:inline-flex"
              onClick={() => window.open(calendlyUrl, "_blank", "noopener,noreferrer")}
            >
              {t.topCta}
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative z-10 container pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-8">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="tracking-widest">{t.badge}</span>
        </div>

        <div className="relative mx-auto w-fit mb-10">
          <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full animate-pulse-glow" />
          <img src={logo} alt="PG Intelligence" className="relative w-64 md:w-80 animate-float drop-shadow-[0_0_40px_hsl(200_100%_50%/0.5)]" />
        </div>

        <h1 className="font-[Orbitron] text-4xl md:text-7xl font-bold leading-[1.05] mb-6">
          <span className="text-gradient neon-text">{t.heroTitleA}</span>
          <br />
          {t.heroTitleB}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">{t.heroText}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)] hover:opacity-90 group"
            onClick={() => window.open(calendlyUrl, "_blank", "noopener,noreferrer")}
          >
            {t.heroCtaA}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
            {t.heroCtaB}
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[Brain, Sparkles, Target].map((Icon, index) => (
            <div key={t.pillars[index]} className="glow-border rounded-xl p-5 bg-card/40 backdrop-blur-sm">
              <Icon className="mx-auto h-7 w-7 text-primary mb-2" />
              <p className="text-xs tracking-[0.2em] text-muted-foreground">{t.pillars[index]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 container py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-primary mb-3">// {t.what}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">AI · Web · Automation</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[Bot, Code2, Workflow].map((Icon, idx) => (
            <button
              key={t.services[idx].title}
              type="button"
              onClick={() => toggleCard(idx)}
              className="group text-left rounded-2xl p-px bg-gradient-to-b from-primary/40 via-border to-transparent hover:from-primary hover:via-primary/30 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              aria-label={`Ver detalhes de ${t.services[idx].title}`}
            >
              <div className="relative h-[320px] [perspective:1200px]">
                <div
                  className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedCards.includes(idx) ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-card/80 backdrop-blur-md p-8 [backface-visibility:hidden]">
                    <Icon className="h-10 w-10 text-primary mb-5" />
                    <h3 className="font-[Orbitron] text-xl mb-3">{t.services[idx].title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.services[idx].desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.services[idx].tags.map((tag) => (
                        <span key={tag} className="text-[10px] tracking-widest px-2.5 py-1 rounded-full border border-primary/30 text-primary/90">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-card/90 backdrop-blur-md p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="font-[Orbitron] text-xl mb-5">{t.services[idx].title}</h3>
                    <ul className="space-y-3 text-sm">
                      {serviceDetails[idx].map((item) => (
                        <li key={item} className="text-foreground/95">
                          <span className="text-primary mr-2">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="relative z-10 container py-12">
        <div className="rounded-3xl p-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent">
          <div className="rounded-3xl bg-card/70 backdrop-blur-md p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <p className="text-xs tracking-[0.3em] text-primary mb-3">// {whyChoose.badge}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{whyChoose.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{whyChoose.lead}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChoose.points.map((point) => (
                <div key={point} className="rounded-xl border border-primary/25 bg-background/30 px-4 py-4">
                  <p className="text-sm md:text-base">
                    <span className="text-primary mr-2">✔</span>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container py-14">
        <div className="rounded-2xl border border-primary/25 bg-card/50 backdrop-blur-md p-6 md:p-8">
          <p className="text-xs tracking-[0.3em] text-primary mb-3">// {schedulingFlow.badge}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">{schedulingFlow.title}</h2>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {schedulingFlow.steps.map((step) => (
              <div key={step} className="rounded-xl border border-primary/20 bg-background/30 p-4 text-sm">
                <span className="text-primary mr-2">✔</span>
                {step}
              </div>
            ))}
          </div>
          <Button
            size="lg"
            className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)]"
            onClick={() => window.open(calendlyUrl, "_blank", "noopener,noreferrer")}
          >
            {t.topCta}
          </Button>
        </div>
      </section>

      <section id="proof" className="relative z-10 container py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-primary mb-3">// {t.proof}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">{t.proofTitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {t.outcomes.map((o) => (
            <div key={o.result} className="rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6">
              <p className="font-[Orbitron] text-xl mb-2">{o.result}</p>
              <p className="text-sm text-muted-foreground">{o.detail}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {t.testimonials.map((x) => (
            <blockquote key={x.author} className="rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6">
              <p className="text-sm leading-relaxed mb-4">"{x.quote}"</p>
              <p className="text-xs tracking-widest text-primary">{x.author}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-3">// {founderContent.badge}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{founderContent.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{founderContent.intro}</p>
          </div>
          <div className="relative rounded-2xl glow-border bg-card/60 backdrop-blur-md p-6 md:p-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${aboutSlide * 100}%)` }}
            >
              {founderSlides.map((slide) => (
                <div key={slide.title} className="w-full shrink-0 pr-2">
                  <div className="rounded-xl border border-primary/25 bg-background/30 p-6 min-h-[300px] flex flex-col">
                    {slide.type === "logo" ? (
                      <img src={logo} alt="PG Intelligence" className="w-full max-w-[220px] mx-auto mb-4 animate-float" />
                    ) : null}
                    <h3 className="font-[Orbitron] text-lg md:text-xl mb-2">{slide.title}</h3>
                    <p className="text-primary text-xs tracking-widest mb-4">{slide.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{slide.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {founderSlides.map((slide, idx) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setAboutSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${aboutSlide === idx ? "w-6 bg-primary" : "w-2.5 bg-primary/40"}`}
                    aria-label={`Abrir slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAboutSlide((current) => (current === 0 ? founderSlides.length - 1 : current - 1))}
                  className="px-3 py-1.5 text-xs rounded-md border border-primary/40 hover:bg-primary/10"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() => setAboutSlide((current) => (current + 1) % founderSlides.length)}
                  className="px-3 py-1.5 text-xs rounded-md border border-primary/40 hover:bg-primary/10"
                >
                  Proximo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="relative z-10 container py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-primary mb-3">// {t.process}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">{t.processTitle}</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {t.steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors">
              <div className="font-[Orbitron] text-3xl text-primary/40 mb-3">{s.n}</div>
              <h3 className="font-[Orbitron] text-lg mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 container py-20">
        <div className="rounded-3xl overflow-hidden p-12 md:p-16 text-center glow-border bg-gradient-to-br from-card/80 to-background/80 backdrop-blur-md">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{t.contactTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">{t.contactText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)]">
              <Mail className="mr-2 h-4 w-4" /> contato@pgintelligence.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 hover:bg-primary/10 hover:text-primary"
              onClick={() =>
                window.open(
                  "https://wa.me/5599999999999?text=Ola%2C%20vim%20pelo%20site%20da%20PG%20Intelligence%20e%20quero%20falar%20sobre%20um%20projeto.",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <MessageCircle className="mr-2 h-4 w-4" /> {t.contactBtn}
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/40 mt-8">
        <div className="container py-10 grid md:grid-cols-3 gap-6 items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PG" className="h-8 w-8" />
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} PG Intelligence</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>{t.footerContact}</p>
            <p>{t.footerHours}</p>
            <p>{t.footerLocation}</p>
          </div>
          <div className="flex md:justify-end items-center gap-4 text-muted-foreground text-sm">
            <a href="/privacy" className="hover:text-primary transition-colors">{t.privacy}</a>
            <a href="/terms" className="hover:text-primary transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
