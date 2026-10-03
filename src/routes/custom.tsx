import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Languages,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Check,
  ArrowRight,
  Users,
  Headphones,
  Mic,
  FileCheck,
  Globe2,
  Clock,
  Star,
  Quote,
  RotateCcw,
  Share2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import globeImg from "@/assets/globe.jpg";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "ETHOS — Plan Custom para imperios digitales" },
      {
        name: "description",
        content:
          "Localización a medida para creadores con catálogos grandes: 3+ idiomas, clonación de voz, equipo dedicado y SLA prioritario.",
      },
      { property: "og:title", content: "ETHOS — Plan Custom" },
      {
        property: "og:description",
        content: "Un equipo dedicado a llevar todo tu catálogo al mundo, en tus términos.",
      },
    ],
  }),
  component: CustomPlan,
});

function CustomPlan() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Included />
      <WhyCustom />
      <PriceEstimator />
      <Process />
      <Testimonial />
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
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-semibold tracking-wider text-gold-gradient leading-normal pb-1">ETHOS</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">Translate</span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <li><Link to="/" hash="servicios" className="hover:text-primary transition">Servicios</Link></li>
          <li><Link to="/" hash="precios" className="hover:text-primary transition">Precios</Link></li>
          <li><Link to="/" hash="testimonios" className="hover:text-primary transition">Casos</Link></li>
          <li><Link to="/" hash="footer" className="hover:text-primary transition">Contáctanos</Link></li>
        </ul>
        <a
          href="https://calendly.com/ethostranslate/llamada-informativa"
          className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-primary-foreground text-sm font-medium shadow-glow hover:scale-[1.03] transition"
        >
          Hablar con ventas <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur text-xs uppercase tracking-[0.25em] text-primary mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5" /> Plan Custom
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight pb-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Para creadores que ya <br />
          construyen un{" "}
          <span
            className="italic text-gold-gradient animate-shimmer"
            style={{
              backgroundImage: "linear-gradient(90deg, var(--gold-deep), var(--gold-bright), var(--gold-deep))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              paddingRight: "0.15em",
            }}
          >
            imperio digital
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Catálogos grandes, lanzamientos simultáneos en 3+ idiomas y necesidades que no entran en una plantilla.
          Diseñamos un plan de localización a tu medida, con un equipo dedicado full-time a tu marca.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <span className="text-3xl lg:text-4xl font-display text-gold-gradient leading-normal pb-1">Desde €2.000</span>
          <span className="text-xs">según duración, idiomas y doblaje</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="https://calendly.com/ethostranslate/llamada-informativa"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition"
          >
            Agendar llamada de estrategia <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="https://wa.me/+34688603317"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition"
          >
            WhatsApp directo
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { k: "3+", v: "Idiomas simultáneos" },
            { k: "24/7", v: "Soporte prioritario" },
            { k: "1", v: "Equipo dedicado" },
            { k: "SLA", v: "Con garantía" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl lg:text-4xl font-display text-gold-gradient leading-normal pb-1">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Included() {
  const items = [
    { icon: Globe2, title: "3+ idiomas simultáneos", desc: "Lanza tu curso o campaña en todos tus mercados a la vez, sin colas de producción." },
    { icon: Mic, title: "Doblaje con clonación de voz", desc: "Tu voz, entrenada y autorizada contractualmente, hablando cada idioma con naturalidad." },
    { icon: FileCheck, title: "Adaptación de exámenes y quizzes", desc: "Localizamos también la evaluación de tu curso, no solo el vídeo: exámenes, quizzes y materiales descargables." },
    { icon: Users, title: "Equipo dedicado full-time", desc: "Traductores, revisores y un project manager asignados en exclusiva a tu cuenta." },
    { icon: Headphones, title: "Soporte 24/7", desc: "Un canal directo con tu equipo, disponible todos los días, para lanzamientos que no pueden esperar." },
    { icon: Share2, title: "Contenido para redes sociales", desc: "Traducimos sin coste adicional tu contenido gratuito para redes (reels, shorts, posts y clips), para que tu marca también crezca en cada idioma." },
  ];

  return (
    <section className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Qué incluye —</div>
          <h2 className="text-4xl lg:text-6xl font-display leading-[1.15] pb-1">
            Todo lo que necesita un <span className="text-gold-gradient italic">catálogo grande</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {items.map((s) => (
            <div key={s.title} className="group relative bg-card p-10 hover:bg-secondary transition duration-500">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition" strokeWidth={1.2} />
              <h3 className="text-2xl font-display mb-3 leading-snug pb-0.5">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCustom() {
  return (
    <section className="relative py-28 px-6 lg:px-10 bg-card/40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Por qué Custom —</div>
          <h2 className="text-4xl lg:text-5xl font-display mb-6 leading-[1.15] pb-1">
            Un plan que crece <span className="text-gold-gradient italic">contigo</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Cuando tu catálogo supera las 15 horas de contenido, o lanzas en varios idiomas a la vez, un plan cerrado
            se queda corto. El plan Custom se construye alrededor de tu calendario de lanzamientos, no al revés.
          </p>
          <ul className="space-y-4">
            {[
              "Presupuesto y alcance definidos junto a tu equipo",
              "Prioridad de producción sobre otros clientes",
              "Un solo interlocutor para todo tu catálogo",
              "Contratos de confidencialidad reforzados",
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

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-8 bg-gold-gradient opacity-20 blur-3xl rounded-full" />
          <img src={globeImg} alt="Cobertura global de idiomas" width={1024} height={1024} loading="lazy" className="relative rounded-3xl border border-primary/20 shadow-elegant" />
          <div className="absolute -bottom-8 -left-8 bg-card border border-primary/30 rounded-2xl p-6 backdrop-blur-xl shadow-glow animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-display text-gold-gradient leading-normal pb-1">10+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">mercados a la vez</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CALCULADORA DE PRECIO ---------- */

// El plan Custom cuesta siempre entre estos dos valores, sin excepción.
const MIN_PRICE = 2000;
const MAX_PRICE = 3000;

// Reparto del margen (MAX_PRICE - MIN_PRICE = 1.000): 300 + 300 + 250 + 150.
// Con todo al mínimo da 2.000 y con todo al máximo da 3.000.
const HOURS_WEIGHT = 300;
const LANGS_WEIGHT = 300;
const DUBBING_WEIGHT = 250;
const EXPRESS_WEIGHT = 150;

const MIN_HOURS = 15;
const MAX_HOURS = 50;
const MIN_LANGS = 1;
const MAX_LANGS = 3;

const DUBBING_OPTIONS: { value: string; label: string; factor: number }[] = [
  { value: "subs", label: "Subtítulos", factor: 0 },
  { value: "ia", label: "Voz IA", factor: 0.5 },
  { value: "clone", label: "Clonación", factor: 1 },
];

function PriceEstimator() {
  const [hours, setHours] = useState(MIN_HOURS);
  const [langs, setLangs] = useState(MIN_LANGS);
  const [dubbing, setDubbing] = useState("subs");
  const [express, setExpress] = useState(false);

  const { low, high } = useMemo(() => {
    const hoursFactor = (hours - MIN_HOURS) / (MAX_HOURS - MIN_HOURS); // 0..1
    const langsFactor = (langs - MIN_LANGS) / (MAX_LANGS - MIN_LANGS); // 0..1
    const dubbingFactor = DUBBING_OPTIONS.find((d) => d.value === dubbing)!.factor; // 0..1
    const base =
      MIN_PRICE +
      hoursFactor * HOURS_WEIGHT +
      langsFactor * LANGS_WEIGHT +
      dubbingFactor * DUBBING_WEIGHT +
      (express ? EXPRESS_WEIGHT : 0); // siempre entre 2.000 y 3.000

    const clamp = (n: number) => Math.min(Math.max(n, MIN_PRICE), MAX_PRICE);
    const round10 = (n: number) => Math.round(n / 10) * 10;

    return {
      low: clamp(round10(base * 0.95)),
      high: clamp(round10(base * 1.05)),
    };
  }, [hours, langs, dubbing, express]);

  return (
    <section id="estimador" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Calculadora —</div>
          <h2 className="text-4xl lg:text-5xl font-display leading-[1.15] pb-1">
            Aproxima tu <span className="text-gold-gradient italic">presupuesto</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">Una estimación orientativa, en segundos.</p>
        </div>

        <div className="rounded-3xl border border-border bg-card/60 p-8">
          {/* Horas */}
          <div className="mb-7">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">Duración del catálogo</label>
              <span className="text-sm text-primary font-medium">{hours}h</span>
            </div>
            <input
              type="range"
              min={MIN_HOURS}
              max={MAX_HOURS}
              step={1}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value, 10))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>15h</span>
              <span>50h</span>
            </div>
          </div>

          {/* Idiomas */}
          <div className="mb-7">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">Número de idiomas</label>
              <span className="text-sm text-primary font-medium">{langs === MAX_LANGS ? `${MAX_LANGS}+` : langs}</span>
            </div>
            <input
              type="range"
              min={MIN_LANGS}
              max={MAX_LANGS}
              step={1}
              value={langs}
              onChange={(e) => setLangs(parseInt(e.target.value, 10))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>1</span>
              <span>3+</span>
            </div>
          </div>

          {/* Doblaje */}
          <div className="mb-7">
            <label className="text-sm font-medium mb-3 block">Nivel de doblaje</label>
            <div className="grid grid-cols-3 gap-2">
              {DUBBING_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setDubbing(opt.value)}
                  className={`text-sm px-3 py-3 rounded-xl border transition ${
                    dubbing === opt.value
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Entrega */}
          <div className="mb-8">
            <label className="text-sm font-medium mb-3 block">Tiempo de entrega</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setExpress(false)}
                className={`text-sm px-4 py-3 rounded-xl border transition ${
                  !express ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                Estándar
                <div className="text-[10px] mt-0.5 opacity-70">Según calendario</div>
              </button>
              <button
                onClick={() => setExpress(true)}
                className={`text-sm px-4 py-3 rounded-xl border transition ${
                  express ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                Prioritaria
                <div className="text-[10px] mt-0.5 opacity-70">SLA reforzado</div>
              </button>
            </div>
          </div>

          {/* Resultado */}
          <div className="rounded-2xl bg-gold-gradient/10 border border-primary/30 p-6 text-center">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Estimación</div>
            <div className="text-3xl font-display text-gold-gradient leading-normal pb-1">
              {low === high
                ? `€${low.toLocaleString("es-ES")}`
                : `€${low.toLocaleString("es-ES")} – €${high.toLocaleString("es-ES")}`}
            </div>
            <div className="text-[11px] text-muted-foreground mt-2">Propuesta cerrada tras la llamada de descubrimiento</div>
          </div>

          <button
            onClick={() => {
              setHours(MIN_HOURS);
              setLangs(MIN_LANGS);
              setDubbing("subs");
              setExpress(false);
            }}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition"
          >
            <RotateCcw className="w-3 h-3" /> Reiniciar
          </button>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Llamada de descubrimiento", d: "Analizamos tu catálogo actual, calendario de lanzamientos y mercados objetivo." },
    { n: "02", t: "Propuesta a medida", d: "Diseñamos alcance, idiomas, plazos y presupuesto ajustados a tu operación." },
    { n: "03", t: "Equipo dedicado", d: "Asignamos traductores, revisores nativos y un project manager exclusivo para tu cuenta." },
    { n: "04", t: "Producción continua", d: "Entregas escalonadas con SLA garantizado, sin frenar tu ritmo de publicación." },
  ];

  return (
    <section id="proceso" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Cómo empezamos —</div>
          <h2 className="text-4xl lg:text-6xl font-display leading-[1.15] pb-1">
            De la llamada al <span className="text-gold-gradient italic">primer idioma</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group">
              <div className="text-7xl font-display text-gold-gradient opacity-90 mb-4 leading-normal pb-1">{s.n}</div>
              <h3 className="text-xl font-display mb-3 leading-snug pb-0.5">{s.t}</h3>
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

function Testimonial() {
  return (
    <section className="relative py-28 px-6 lg:px-10 bg-card/40">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="w-10 h-10 text-primary/40 mx-auto mb-8" />
        <p className="text-2xl lg:text-3xl font-display leading-relaxed pb-1">
          Pasamos de traducir un curso suelto a tener a ETHOS como el equipo de localización de{" "}
          <span className="text-gold-gradient italic">todo nuestro catálogo</span>. El plan Custom fue el único
          que se adaptó a nuestro ritmo de lanzamientos.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div>
            <div className="font-medium">Marina Solís</div>
            <div className="text-xs text-muted-foreground mt-1">Fundadora, academia online con 3 cursos activos</div>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "¿Cómo se calcula el presupuesto del plan Custom?", a: "Según horas de contenido, número de idiomas, nivel de doblaje (subtítulos, voz IA o clonación) y plazos de entrega. Recibirás una propuesta cerrada tras la llamada de descubrimiento." },
    { q: "¿Puedo empezar con pocos idiomas y escalar después?", a: "Sí. Muchos clientes Custom empiezan con 3-4 idiomas prioritarios y van sumando mercados a medida que validan la demanda." },
    { q: "¿Qué significa 'equipo dedicado full-time'?", a: "Traductores, revisores y tu project manager trabajan en exclusiva para tu cuenta durante el periodo contratado, sin repartir su tiempo con otros clientes." },
    { q: "¿El SLA es realmente vinculante?", a: "Sí, los plazos de entrega quedan fijados por contrato, con condiciones específicas si no se cumplen." },
    { q: "¿Qué nivel de confidencialidad tiene este plan?", a: "El más alto de la agencia: NDA reforzado, entornos privados y cifrados, acceso restringido solo al equipo asignado a tu cuenta." },
  ];
  return (
    <section className="relative py-28 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— FAQ Custom —</div>
          <h2 className="text-4xl lg:text-5xl font-display leading-[1.15] pb-1">
            Antes de <span className="text-gold-gradient italic">hablar con ventas</span>
          </h2>
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
                <span className={`text-primary text-2xl transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <p className="overflow-hidden text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-28 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur text-xs uppercase tracking-[0.25em] text-primary mb-8">
          <ShieldCheck className="w-3.5 h-3.5" /> Sin compromiso
        </div>
        <h2 className="text-5xl lg:text-7xl font-display leading-[1.1] pb-2">
          Hablemos de tu <br />
          <span className="text-gold-gradient italic">catálogo completo</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Una llamada de 20 minutos para entender tu operación y armar una propuesta a medida, sin plantillas.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/ethostranslate/llamada-informativa"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gold-gradient text-primary-foreground font-medium text-lg shadow-glow hover:scale-[1.03] transition"
          >
            Agendar llamada <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/+34688603317"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition"
          >
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
    <section className="border-t border-border py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <div className="max-w-xs">
            <Link to="/" className="text-3xl font-display text-gold-gradient leading-normal pb-1 block">ETHOS</Link>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">Translate</div>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Soporte</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="https://wa.me/34688603317" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ethostranslate@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    soporte@ethostranslate.com
                  </a>
                </li>
                <li><Link to="/" hash="faq" className="hover:text-primary transition">Preguntas frecuentes</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Legal</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/privacidad" className="hover:text-primary transition">Privacidad</Link></li>
                <li><Link to="/terminos" className="hover:text-primary transition">Términos de servicio</Link></li>
                <li><Link to="/cookies" className="hover:text-primary transition">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ethos Translate · Tu curso, en todo el mundo
          </div>
          <div className="text-xs text-muted-foreground/70">Hecho con dedicación para creadores globales</div>
        </div>
      </div>
    </section>
  );
}