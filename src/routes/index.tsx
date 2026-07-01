import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Globe2, Languages, Sparkles, Clock, ShieldCheck, TrendingUp, Check, ArrowRight, Play, Star, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import influencerImg from "@/assets/influencer.jpg";
import globeImg from "@/assets/globe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ETHOS — La forma más rápida de escalar tu contenido" },
      { name: "description", content: "Llevamos tu curso al mundo. Traducción profesional, subtitulado, doblaje y localización de cursos de influencers a más de 30 idiomas." },
      { property: "og:title", content: "ETHOS — La forma más rápida de escalar tu contenido" },
      { property: "og:description", content: "Multiplica tus ventas internacionales. Traducimos cursos completos de influencers con calidad cinematográfica." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Showcase />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-display font-semibold tracking-wider text-gold-gradient">ETHOS</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">Translate</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <li><a href="#servicios" className="hover:text-primary transition">Servicios</a></li>
          <li><a href="#proceso" className="hover:text-primary transition">Proceso</a></li>
          <li><a href="#precios" className="hover:text-primary transition">Precios</a></li>
          <li><a href="#testimonios" className="hover:text-primary transition">Casos</a></li>
          <li><Link to="/form" className="hover:text-primary transition">Contáctanos</Link></li>
        </ul>
        <Link to="/form" className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-primary-foreground text-sm font-medium shadow-glow hover:scale-[1.03] transition">
          Cotizar ahora <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-32 lg:pt-44 lg:pb-40 overflow-hidden">
      <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur text-xs uppercase tracking-[0.25em] text-primary mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5" /> Agencia #1 en impulsar cursos a nivel internacional.
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-medium leading-[0.95] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Haz que tu contenido<br />
          llegue <span className="italic text-gold-gradient animate-shimmer" style={{ backgroundImage: "linear-gradient(90deg, var(--gold-deep), var(--gold-bright), var(--gold-deep))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}> mas lejos</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Traducción, adaptación de cursos y campañas de marketing para mercados internacionales sin perder la voz original del creador.<br />
          Vende y crece globalmente sin tener que grabar todo otra vez.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="mailto:ethostranslate@gmail.com?subject=Solicitud%20de%20DEMO&body=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20para%20un%20video%20de%20mi%20agencia." 
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition">
            Solicitar DEMO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a href="#showcase" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition">
            <Play className="w-4 h-4 text-primary" /> Ver muestra
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { k: "+180", v: "Cursos traducidos" },
            { k: "50+", v: "Idiomas y Dialectos" },
            { k: "98%", v: "Retención cliente" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl lg:text-4xl font-display text-gold-gradient">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Deutsch", "Português", "English", "Français", "Italiano"];
  return (
    <section className="border-y border-border bg-card/30 py-8 overflow-hidden">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-6">Idiomas más usados</div>
      <div className="flex gap-16 justify-center whitespace-nowrap text-2xl lg:text-3xl font-display text-muted-foreground/60">
        {items.map((i, idx) => (
          <span key={idx} className="hover:text-primary transition">{i}</span>
        ))}
      </div>
      <div className="mt-8 text-center">
        <span className="text-sm text-primary font-medium border border-primary/40 rounded-full px-4 py-1.5">
          ¿No está tu idioma? Solicítalo →
        </span>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Languages, title: "Traducción de audio", desc: "Adaptación de idioma completa, manteniendo tu tono, humor y autoridad." },
    { icon: Play, title: "Subtitulado profesional", desc: "Subtítulos SRT/VTT sincronizados frame a frame, listos para Kajabi, Hotmart o Teachable." },
    { icon: Sparkles, title: "Doblaje con IA + voz humana", desc: "Clonación de tu voz en otros idiomas, revisada por actores profesionales nativos." },
    { icon: Globe2, title: "Localización total", desc: "Workbooks, diapositivas, landing pages y emails. Tu curso entero, listo para vender." },
    { icon: Clock, title: "Entrega express", desc: "Cursos completos en 14 días. Modelo dedicado para influencers de alto volumen." },
    { icon: ShieldCheck, title: "NDA & confidencialidad", desc: "Tu contenido nunca sale de nuestro estudio. Acuerdos blindados desde el día uno." },
  ];

  return (
    <section id="servicios" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Nuestros servicios</div>
          <h2 className="text-4xl lg:text-6xl font-display">Todo lo que tu curso necesita para <span className="text-gold-gradient italic">conquistar mercados</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-card p-10 hover:bg-secondary transition duration-500">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition" strokeWidth={1.2} />
              <h3 className="text-2xl font-display mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Análisis & estrategia", d: "Estudiamos tu curso, audiencia objetivo y mercados con mayor potencial de conversión." },
    { n: "02", t: "Traducción experta", d: "Equipo de lingüistas nativos especializados en infoproductos y marketing digital." },
    { n: "03", t: "Producción audiovisual", d: "Doblaje, subtitulado y mezcla de audio en nuestro estudio con calidad broadcast." },
    { n: "04", t: "QA & entrega", d: "Triple revisión, sincronización perfecta y entrega lista para tu plataforma." },
  ];

  return (
    <section id="proceso" className="relative py-32 px-6 lg:px-10 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Cómo trabajamos</div>
          <h2 className="text-4xl lg:text-6xl font-display">Un proceso <span className="text-gold-gradient italic">impecable</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group">
              <div className="text-7xl font-display text-gold-gradient opacity-90 mb-4">{s.n}</div>
              <h3 className="text-xl font-display mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-gold-gradient opacity-20 blur-3xl rounded-full" />
          <img src={influencerImg} alt="Influencer grabando su curso" width={1024} height={1280} loading="lazy" className="relative rounded-3xl border border-primary/20 shadow-elegant" />
          <div className="absolute -bottom-8 -right-8 bg-card border border-primary/30 rounded-2xl p-6 backdrop-blur-xl shadow-glow animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-display text-gold-gradient">+340%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">ventas internacionales</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Más que traducir</div>
          <h2 className="text-4xl lg:text-5xl font-display mb-6">
            Convertimos tu curso en un <span className="text-gold-gradient italic">activo global</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            No solo traducimos palabras: trasladamos tu energía, tu marca y tu mensaje a cada cultura.
            El resultado es un curso que se siente nativo en cualquier idioma —y vende como tal.
          </p>
          <ul className="space-y-4">
            {[
              "Equipo dedicado de project manager + 3 lingüistas",
              "Glosario y guía de estilo personalizada por marca",
              "Voces clonadas con autorización legal completa",
              "Garantía de revisión ilimitada hasta tu visto bueno",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                </div>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden border border-primary/20">
        <img src={globeImg} alt="" width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="relative grid md:grid-cols-4 gap-12 p-16 lg:p-24">
          {[
            { k: "$12M+", v: "Generados para clientes" },
            { k: "180+", v: "Cursos lanzados" },
            { k: "30", v: "Idiomas activos" },
            { k: "14d", v: "Tiempo promedio" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-5xl lg:text-6xl font-display text-gold-gradient">{s.k}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-3">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Triplicamos ventas en Brasil en 60 días. Calidad de doblaje irreal —parece que yo mismo hablo portugués.", a: "Carlos Mendoza", r: "Mentor de ventas, 2.4M IG" },
    { q: "Llevaba años intentando entrar al mercado anglosajón. LUMINA lo logró en una semana de trabajo.", a: "Sofía Velarde", r: "Creadora de cursos de marca personal" },
    { q: "El proceso es de boutique de lujo. Project manager dedicada, entregas siempre antes de tiempo.", a: "Diego Aramburu", r: "Coach de productividad, 850k YT" },
  ];
  return (
    <section id="testimonios" className="relative py-32 px-6 lg:px-10 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Voces de creadores</div>
          <h2 className="text-4xl lg:text-6xl font-display">Resultados que <span className="text-gold-gradient italic">hablan</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.a} className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition group">
              <Quote className="w-10 h-10 text-primary/40 mb-6" />
              <p className="text-lg leading-relaxed mb-8">{t.q}</p>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <div className="font-medium">{t.a}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.r}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Essential",
      p: "$2,900",
      d: "Para cursos de hasta 5h",
      f: ["Traducción a 1 idioma", "Subtitulado profesional", "1 revisión incluida", "Entrega en 21 días"],
      cta: "Empezar",
      highlight: false,
    },
    {
      name: "Premium",
      p: "$6,500",
      d: "Para cursos hasta 15h",
      f: ["Traducción a 3 idiomas", "Subtitulado + doblaje IA", "Localización de materiales", "Project manager dedicado", "Revisiones ilimitadas", "Entrega en 14 días"],
      cta: "Plan más elegido",
      highlight: true,
    },
    {
      name: "Empire",
      p: "Custom",
      d: "Para imperios digitales",
      f: ["10+ idiomas simultáneos", "Doblaje con clonación de voz", "Suite completa de marketing", "Equipo dedicado fulltime", "SLA priority", "Soporte 24/7"],
      cta: "Hablar con ventas",
      highlight: false,
    },
  ];
  return (
    <section id="precios" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Inversión</div>
          <h2 className="text-4xl lg:text-6xl font-display">Planes <span className="text-gold-gradient italic">a tu medida</span></h2>
          <p className="mt-6 text-muted-foreground">Cada curso es único. Estos son nuestros puntos de partida.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-10 border transition ${p.highlight ? "border-primary bg-card shadow-glow scale-[1.02]" : "border-border bg-card/60 hover:border-primary/40"}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs uppercase tracking-widest">Más popular</div>
              )}
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{p.name}</div>
              <div className="text-5xl font-display text-gold-gradient mb-2">{p.p}</div>
              <div className="text-sm text-muted-foreground mb-8">{p.d}</div>
              <ul className="space-y-3 mb-10">
                {p.f.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`block text-center px-6 py-3 rounded-full font-medium transition ${p.highlight ? "bg-gold-gradient text-primary-foreground hover:scale-[1.03]" : "border border-primary/40 text-foreground hover:bg-primary/10"}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "¿En cuánto tiempo entregan un curso completo?", a: "Plan Premium: 14 días para cursos de hasta 15 horas. Empire: cronograma personalizado según volumen." },
    { q: "¿Puedo clonar mi voz de forma legal?", a: "Sí. Usamos tecnología con autorización contractual completa. Tú mantienes 100% el control de tu voz." },
    { q: "¿Trabajan con plataformas como Hotmart o Kajabi?", a: "Sí. Entregamos archivos en cualquier formato compatible con tu plataforma, listos para subir." },
    { q: "¿Qué pasa si no quedo satisfecho?", a: "Revisiones ilimitadas hasta tu aprobación. Si aún así no estás conforme, devolvemos el 100%." },
  ];
  return (
    <section className="relative py-32 px-6 lg:px-10 bg-card/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Preguntas</div>
          <h2 className="text-4xl lg:text-5xl font-display">Lo que más nos <span className="text-gold-gradient italic">preguntan</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-lg font-medium">{f.q}</span>
                <span className={`text-primary text-2xl transition ${open === i ? "rotate-45" : ""}`}>+</span>
              </div>
              {open === i && (
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-display leading-[1.05]">
          Tu próximo lanzamiento <br />
          ya tiene <span className="text-gold-gradient italic">audiencia global</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Agenda una llamada de 20 min. Sin compromiso. Te mostramos exactamente cómo llevaríamos tu curso al mundo.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hola@lumina.studio" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gold-gradient text-primary-foreground font-medium text-lg shadow-glow hover:scale-[1.03] transition">
            Agendar llamada <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://wa.me/" className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition">
            WhatsApp directo
          </a>
        </div>
        <div className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">Respuesta en menos de 4 horas hábiles</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
        <div>
          <div className="text-3xl font-display text-gold-gradient">ETHOS</div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">Translate</div>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lumina Studio · Tu curso, en todo el mundo
        </div>
      </div>
    </footer>
  );
}
