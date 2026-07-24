import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  Languages,
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  FileText,
  RotateCcw,
} from "lucide-react";

export const Route = createFileRoute("/essential")({
  head: () => ({
    meta: [
      { title: "Plan Essential — ETHOS Translate" },
      { name: "description", content: "Traduce tu curso a un idioma con subtitulado profesional. El punto de partida ideal para dar tu primer paso internacional." },
    ],
  }),
  component: PlanEssential,
});

function PlanEssential() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <MainContent />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-semibold tracking-wider text-gold-gradient">ETHOS</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">Translate</span>
        </Link>
        <Link
          to="/"
          hash="precios"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition" />
          Volver a planes
        </Link>
      </nav>
    </header>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur text-xs uppercase tracking-[0.25em] text-primary mb-8">
          <Sparkles className="w-3.5 h-3.5" /> Plan Essential
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium leading-[0.98] tracking-tight">
          Tu primer paso hacia<br />
          <span className="italic text-gold-gradient">audiencia internacional</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Traducimos tu curso a un idioma con subtitulado profesional. La forma más simple y directa de probar un nuevo mercado, sin complicaciones ni grandes inversiones.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="text-3xl lg:text-4xl font-display text-gold-gradient">Desde $900</span>
          <span className="text-xs">según duración e idioma</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- MAIN: DESCRIPCIÓN + SIDEBAR ---------- */

function MainContent() {
  return (
    <section className="relative py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-start">
        <Description />
        <aside className="lg:sticky lg:top-28 space-y-6">
          <PaymentOptions />
          <PriceCalculator />
        </aside>
      </div>
    </section>
  );
}

function Description() {
  const included = [
    { t: "Traducción a 1 idioma", d: "Elige el idioma de destino entre más de 30 disponibles. Traducción especializada en contenido educativo, cuidando tu tono y forma de enseñar." },
    { t: "Subtitulado profesional", d: "Archivos SRT/VTT sincronizados frame a frame, listos para subir directo a Kajabi, Hotmart, Teachable o cualquier plataforma que uses." },
    { t: "1 ronda de revisión", d: "Revisamos el resultado contigo. Si algo no encaja con tu forma de hablar, lo ajustamos antes de la entrega final." },
    { t: "Entrega en 5-7 días hábiles", d: "Un plazo pensado para cursos de hasta 5 horas, sin sacrificar calidad por velocidad." },
    { t: "Soporte incluido", d: "Acompañamiento por email durante todo el proceso, desde que nos envías el material hasta que recibes los archivos finales." },
  ];

  return (
    <div>
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Qué incluye —</div>
      <h2 className="text-3xl lg:text-4xl font-display mb-6">
        Todo lo necesario para <span className="text-gold-gradient italic">lanzar en un nuevo idioma</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-12">
        El plan Essential está pensado para creadores que quieren validar un mercado internacional antes de escalar. Sin doblaje, sin adaptación de materiales extra: nos enfocamos en lo esencial para que tu curso sea comprensible y vendible en otro idioma, rápido y sin fricciones.
      </p>

      <div className="space-y-8 mb-16">
        {included.map((item) => (
          <div key={item.t} className="flex gap-5">
            <div className="mt-1 w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{item.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-border bg-card/60 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">— Ideal para ti si —</div>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <Languages className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            Quieres probar un mercado nuevo antes de invertir en doblaje.
          </li>
          <li className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            Tu curso dura hasta 5 horas y necesitas moverte rápido.
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            Prefieres subtítulos claros antes que voz doblada, al menos por ahora.
          </li>
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          ¿Necesitas doblaje, varios idiomas o adaptar materiales del curso? Echa un vistazo al{" "}
          <Link to="/premium" className="text-primary hover:underline">
            plan Premium
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

/* ---------- SIDEBAR: OPCIONES DE PAGO ---------- */

function PaymentOptions() {
  return (
    <div className="rounded-3xl border border-primary/30 bg-card p-8 shadow-glow">
      <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">— Empezar —</div>
      <h3 className="text-xl font-display mb-6">Elige cómo quieres avanzar</h3>

      <div className="space-y-4">
        <a
          href="https://calendly.com/ethostranslate/llamada-informativa"
          className="group flex items-center gap-4 rounded-2xl border border-primary/40 p-5 hover:bg-primary/10 transition"
        >
          <div className="w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="font-medium">Agendar llamada</div>
            <div className="text-xs text-muted-foreground">20 min, sin compromiso</div>
          </div>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition" />
        </a>

        <a
          href="https://wa.me/+34688603317"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-border p-5 hover:border-primary/40 transition"
        >
          <div className="w-11 h-11 rounded-full bg-secondary border border-primary/30 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="font-medium">Hablar por WhatsApp</div>
            <div className="text-xs text-muted-foreground">Respuesta en menos de 4h hábiles</div>
          </div>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition" />
        </a>
      </div>
    </div>
  );
}

/* ---------- SIDEBAR: CALCULADORA DE PRECIO ---------- */

const LANGUAGES: { value: string; label: string; rate: number }[] = [
  { value: "en", label: "Inglés", rate: 7 },
  { value: "es", label: "Español", rate: 5.5 },
  { value: "fr", label: "Francés", rate: 6 },
  { value: "de", label: "Alemán", rate: 6 },
  { value: "pt", label: "Portugués", rate: 6 },
  { value: "it", label: "Italiano", rate: 6 },
  { value: "nl", label: "Neerlandés", rate: 6 },
  { value: "pl", label: "Polaco", rate: 6 },
  { value: "zh", label: "Chino (mandarín)", rate: 7 },
  { value: "ja", label: "Japonés", rate: 7 },
  { value: "ko", label: "Coreano", rate: 7 },
  { value: "ar", label: "Árabe", rate: 7 },
  { value: "ru", label: "Ruso", rate: 7 },
  { value: "hi", label: "Hindi", rate: 7 },
  { value: "tr", label: "Turco", rate: 7 },
  { value: "sv", label: "Sueco", rate: 7 },
  { value: "no", label: "Noruego", rate: 7 },
  { value: "da", label: "Danés", rate: 7 },
  { value: "fi", label: "Finlandés", rate: 7 },
  { value: "el", label: "Griego", rate: 7 },
  { value: "he", label: "Hebreo", rate: 7 },
  { value: "th", label: "Tailandés", rate: 7 },
  { value: "vi", label: "Vietnamita", rate: 7 },
  { value: "id", label: "Indonesio", rate: 7 },
  { value: "ro", label: "Rumano", rate: 7 },
  { value: "hu", label: "Húngaro", rate: 7 },
  { value: "cs", label: "Checo", rate: 7 },
  { value: "uk", label: "Ucraniano", rate: 7 },
  { value: "fa", label: "Persa", rate: 7 },
  { value: "bn", label: "Bengalí", rate: 7 },
].sort((a, b) => a.label.localeCompare(b.label, "es"));

// El plan Essential cuesta siempre entre estos dos valores, sin excepción.
const MIN_PRICE = 900;
const MAX_PRICE = 2400;

function PriceCalculator() {
  const [hours, setHours] = useState(2);
  const [lang, setLang] = useState("en");
  const [express, setExpress] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.value === lang)!;

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const { low, high } = useMemo(() => {
    const minutes = hours * 60;
    const multiplier = express ? 1.3 : 1;
    const base = minutes * activeLang.rate * multiplier;
    const rawLow = Math.round((base * 0.9) / 10) * 10;
    const rawHigh = Math.round((base * 1.1) / 10) * 10;
    // Se acota siempre al rango real del plan: nunca por debajo de 900
    // ni por encima de 2400, pase lo que pase con horas/idioma/entrega.
    return {
      low: Math.min(Math.max(rawLow, MIN_PRICE), MAX_PRICE),
      high: Math.min(Math.max(rawHigh, MIN_PRICE), MAX_PRICE),
    };
  }, [hours, activeLang, express]);

  return (
    <div className="rounded-3xl border border-border bg-card/60 p-8">
      <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">— Calculadora —</div>
      <h3 className="text-xl font-display mb-1">Aproxima tu presupuesto</h3>
      <p className="text-xs text-muted-foreground mb-8">Una estimación orientativa, en segundos.</p>

      {/* Horas */}
      <div className="mb-7">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium">Duración del curso</label>
          <span className="text-sm text-primary font-medium">{hours}h</span>
        </div>
        <input
          type="range"
          min={2}
          max={5}
          step={0.5}
          value={hours}
          onChange={(e) => setHours(parseFloat(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
          <span>2h</span>
          <span>5h (máx. Essential)</span>
        </div>
      </div>

      {/* Idioma */}
      <div className="mb-7" ref={langRef}>
        <label className="text-sm font-medium mb-3 block">Idioma de destino</label>
        <div
          className={`rounded-xl border transition ${
            langOpen ? "border-primary bg-primary/10" : "border-border bg-background hover:border-primary/40"
          }`}
        >
          <button
            type="button"
            onClick={() => setLangOpen((v) => !v)}
            className="w-full flex items-center justify-between text-sm px-4 py-3"
          >
            <span className="truncate">{activeLang.label}</span>
            <svg
              className={`w-3.5 h-3.5 text-primary transition-transform duration-200 flex-shrink-0 ${langOpen ? "rotate-180" : ""}`}
              viewBox="0 0 12 8"
              fill="none"
            >
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              langOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="max-h-56 overflow-y-auto scrollbar-thin-gold border-t border-primary/20 py-1.5">
                {LANGUAGES.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setLang(opt.value);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-left text-sm px-4 py-2.5 transition ${
                      lang === opt.value ? "text-primary bg-primary/10" : "text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {opt.label}
                    {lang === opt.value && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {activeLang.rate === 7 && (
          <p className="text-[11px] text-muted-foreground mt-2">
            ¿Necesitas más de un idioma como este?{" "}
            <Link to="/premium" className="text-primary hover:underline">
              Premium incluye hasta 3
            </Link>
            .
          </p>
        )}
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
            <div className="text-[10px] mt-0.5 opacity-70">5-7 días</div>
          </button>
          <button
            onClick={() => setExpress(true)}
            className={`text-sm px-4 py-3 rounded-xl border transition ${
              express ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
            }`}
          >
            Express
            <div className="text-[10px] mt-0.5 opacity-70">3-4 días</div>
          </button>
        </div>
      </div>

      {/* Resultado */}
      <div className="rounded-2xl bg-gold-gradient/10 border border-primary/30 p-6 text-center">
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Estimación</div>
        <div className="text-3xl font-display text-gold-gradient">
          {low === high ? `$${low.toLocaleString()}` : `$${low.toLocaleString()} – $${high.toLocaleString()}`}
        </div>
        <div className="text-[11px] text-muted-foreground mt-2">Precio final confirmado tras revisar tu material</div>
      </div>

      <button
        onClick={() => {
          setHours(2);
          setLang("en");
          setExpress(false);
          setLangOpen(false);
        }}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition"
      >
        <RotateCcw className="w-3 h-3" /> Reiniciar
      </button>
    </div>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "¿Qué pasa si mi curso dura más de 5 horas?", a: "Sin problema, simplemente se cotiza por hora adicional o te recomendamos el plan Premium, pensado para cursos de hasta 15 horas." },
    { q: "¿El plan Essential incluye doblaje?", a: "No, Essential incluye subtitulado profesional. Si buscas doblaje con voz IA o clonación de voz, es parte del plan Premium." },
    { q: "¿Puedo pedir más de un idioma en este plan?", a: "El plan Essential incluye 1 idioma. Si necesitas varios, cada idioma adicional se cotiza aparte o puedes revisar el plan Premium, que incluye hasta 3." },
    { q: "¿Cómo les envío el material de mi curso?", a: "Tras agendar la llamada o escribirnos por WhatsApp, te compartimos un enlace seguro para subir tus videos y guiones si los tienes." },
    { q: "¿La estimación de la calculadora es el precio final?", a: "Es una aproximación. El precio final se confirma tras revisar la duración exacta y complejidad del contenido, normalmente en la misma llamada." },
  ];
  return (
    <section id="faq" className="relative py-2 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— FAQ —</div>
          <h2 className="text-4xl lg:text-5xl font-display">
            Preguntas sobre el <span className="text-gold-gradient italic">plan Essential</span>
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

/* ---------- FOOTER (idéntico a la landing) ---------- */

function Footer() {
  return (
    <section id="footer" className="border-t border-border py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <div className="max-w-xs">
            <div className="text-3xl font-display text-gold-gradient">ETHOS</div>
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
                <li>
                  <a href="#faq" className="hover:text-primary transition">
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Legal</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacidad" className="hover:text-primary transition">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/terminos" className="hover:text-primary transition">
                    Términos de servicio
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-primary transition">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ethos Translate · Tu curso, en todo el mundo</div>
          <div className="text-xs text-muted-foreground/70">Hecho con dedicación para creadores globales</div>
        </div>
      </div>
    </section>
  );
}