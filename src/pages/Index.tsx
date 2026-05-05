import logo from "@/assets/pg-logo.png";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, Target, Bot, Code2, Workflow, ArrowRight, Sparkles, Mail, MessageCircle, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid animate-grid pointer-events-none opacity-60" />

      {/* NAV */}
      <header className="relative z-20 border-b border-border/40 backdrop-blur-md bg-background/40">
        <nav className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="PG Intelligence" className="h-10 w-10 object-contain" />
            <span className="font-[Orbitron] text-sm tracking-[0.25em] text-gradient hidden sm:block">PG INTELLIGENCE</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#process" className="hover:text-primary transition-colors">Processo</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </div>
          <Button variant="default" size="sm" className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)] hover:opacity-90">
            Fale conosco
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 container pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-widest">TECNOLOGIA COM ALMA</span>
        </div>

        <div className="relative mx-auto w-fit mb-10">
          <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full animate-pulse-glow" />
          <img src={logo} alt="PG Intelligence" className="relative w-64 md:w-80 animate-float drop-shadow-[0_0_40px_hsl(200_100%_50%/0.5)]" />
        </div>

        <h1 className="font-[Orbitron] text-4xl md:text-7xl font-bold leading-[1.05] mb-6">
          <span className="text-gradient neon-text">O futuro</span>
          <br />
          construído por humanos.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Somos a PG Intelligence. Criamos sistemas inteligentes, sites de alta performance e automações
          que devolvem tempo ao seu negócio — com IA na engrenagem e alma no código.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)] hover:opacity-90 group">
            Iniciar projeto
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
            Ver serviços
          </Button>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Brain, label: "INTELIGÊNCIA" },
            { icon: Lightbulb, label: "INOVAÇÃO" },
            { icon: Target, label: "IMPACTO" },
          ].map((p) => (
            <div key={p.label} className="glow-border rounded-xl p-5 bg-card/40 backdrop-blur-sm">
              <p.icon className="mx-auto h-7 w-7 text-primary mb-2" />
              <p className="text-xs tracking-[0.2em] text-muted-foreground">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 container py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-primary mb-3">// O QUE FAZEMOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Soluções que pensam por você</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Bot,
              title: "Inteligência Artificial",
              desc: "Agentes, chatbots e modelos sob medida que entendem, aprendem e respondem como sua equipe.",
              tags: ["LLMs", "RAG", "Agentes"],
            },
            {
              icon: Code2,
              title: "Desenvolvimento Web",
              desc: "Sites e plataformas rápidas, escaláveis e com design futurista — feitas para converter.",
              tags: ["React", "Next", "Cloud"],
            },
            {
              icon: Workflow,
              title: "Automação",
              desc: "Conectamos suas ferramentas e eliminamos tarefas repetitivas com fluxos inteligentes.",
              tags: ["n8n", "APIs", "Workflows"],
            },
          ].map((s) => (
            <div key={s.title} className="group relative rounded-2xl p-px bg-gradient-to-b from-primary/40 via-border to-transparent hover:from-primary hover:via-primary/30 transition-all duration-500">
              <div className="relative h-full rounded-2xl bg-card/80 backdrop-blur-md p-8 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all" />
                <s.icon className="h-10 w-10 text-primary mb-5" />
                <h3 className="font-[Orbitron] text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] tracking-widest px-2.5 py-1 rounded-full border border-primary/30 text-primary/90">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 container py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-3">// SOBRE NÓS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Dois fundadores. Uma missão.</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A PG Intelligence nasceu da amizade e da obsessão por construir tecnologia que realmente serve às pessoas.
              Unimos engenharia de ponta, design futurista e inteligência artificial para resolver problemas reais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos lado a lado com cada cliente — pequenos times, grandes resultados. Sem ruído, sem promessa vazia.
              Só código, estratégia e impacto.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "100%", l: "Foco no cliente" },
                { n: "24/7", l: "Sistemas no ar" },
                { n: "∞", l: "Possibilidades" },
              ].map((s) => (
                <div key={s.l} className="text-center p-4 rounded-xl glow-border bg-card/40">
                  <div className="text-2xl font-[Orbitron] text-gradient">{s.n}</div>
                  <div className="text-[10px] tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl glow-border bg-card/60 backdrop-blur-md p-10 overflow-hidden scanline">
              <img src={logo} alt="PG Intelligence" className="w-full max-w-sm mx-auto animate-float" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative z-10 container py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-primary mb-3">// COMO TRABALHAMOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Do briefing ao deploy</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Descoberta", d: "Entendemos seu negócio, dores e objetivos." },
            { n: "02", t: "Estratégia", d: "Desenhamos a solução ideal com IA e automação." },
            { n: "03", t: "Construção", d: "Desenvolvemos com qualidade, velocidade e design." },
            { n: "04", t: "Evolução", d: "Monitoramos, otimizamos e escalamos com você." },
          ].map((step) => (
            <div key={step.n} className="relative rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors">
              <div className="font-[Orbitron] text-3xl text-primary/40 mb-3">{step.n}</div>
              <h3 className="font-[Orbitron] text-lg mb-2">{step.t}</h3>
              <p className="text-sm text-muted-foreground">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 container py-24">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center glow-border bg-gradient-to-br from-card/80 to-background/80 backdrop-blur-md">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Pronto para automatizar o futuro?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Conte sua ideia. Em poucos dias, te entregamos um plano com o caminho mais inteligente para chegar lá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[image:var(--gradient-cta)] text-primary-foreground border-0 shadow-[var(--shadow-glow)]">
                <Mail className="mr-2 h-4 w-4" /> contato@pgintelligence.com
              </Button>
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border/40 mt-12">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PG" className="h-8 w-8" />
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} PG Intelligence — Tecnologia com alma.</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
