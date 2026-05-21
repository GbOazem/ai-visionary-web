import logo from "@/assets/pg-logo.png";
import LanguageToggle from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, Code2, Linkedin, Mail, MessageCircle, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";
import { useLanguage } from "@/lib/language";

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
            <Button size="sm" className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)] hover:opacity-90 hidden sm:inline-flex">
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
          <Button size="lg" className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)] hover:opacity-90 group">
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
            <div key={t.services[idx].title} className="group rounded-2xl p-px bg-gradient-to-b from-primary/40 via-border to-transparent hover:from-primary hover:via-primary/30 transition-all duration-500">
              <div className="rounded-2xl bg-card/80 backdrop-blur-md p-8 h-full">
                <Icon className="h-10 w-10 text-primary mb-5" />
                <h3 className="font-[Orbitron] text-xl mb-3">{t.services[idx].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.services[idx].desc}</p>
                <div className="flex flex-wrap gap-2">
                  {t.services[idx].tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-widest px-2.5 py-1 rounded-full border border-primary/30 text-primary/90">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
            <p className="text-xs tracking-[0.3em] text-primary mb-3">// {t.about}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{t.aboutTitle}</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">{t.aboutTextA}</p>
            <p className="text-muted-foreground leading-relaxed">{t.aboutTextB}</p>
          </div>
          <div className="relative rounded-2xl glow-border bg-card/60 backdrop-blur-md p-10">
            <img src={logo} alt="PG Intelligence" className="w-full max-w-sm mx-auto animate-float" />
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
            <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
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
