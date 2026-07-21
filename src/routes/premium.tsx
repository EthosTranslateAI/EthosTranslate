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
  UserCheck,
  RotateCcw,
} from "lucide-react";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Plan Premium — ETHOS Translate" },
      { name: "description", content: "Traduce tu curso a hasta 3 idiomas con doblaje profesional project manager dedicado." },
    ],
  }),
  component: PlanPremium,
});

function PlanPremium() {
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
          <Sparkles className="w-3.5 h-3.5" /> Plan Premium — el más elegido
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium leading-[0.98] tracking-tight">
          Que tu curso suene<br />
          <span className="italic text-gold-gradient">nativo en 3 idiomas</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Doblaje profesional y un project manager dedicado a tu proyecto. Pensado para creadores que quieren escalar en serio, sin dejar de sonar como ellos mismos.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="text-3xl lg:text-4xl font-display text-gold-gradient">Desde €3.000</span>
          <span className="text-xs">según duración e idiomas</span>
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
    { t: "Traducción a hasta 3 idiomas", d: "Elige hasta 3 mercados para lanzar tu curso a la vez. Cada idioma se traduce y produce de forma independiente, cuidando tu tono y forma de enseñar." },
    { t: "Subtitulado + doblaje con IA", d: "Voz clonada de alta calidad que suena natural en el idioma de destino, acompañada de subtítulos profesionales. Tu audiencia te escucha como si hablaras su idioma de forma nativa." },
    { t: "Project manager dedicado", d: "Una persona de contacto directo durante todo el proyecto, coordinando revisiones y resolviendo dudas sin que tengas que perseguir a nadie." },
    { t: "3 rondas de revisión", d: "Espacio de sobra para ajustar tono, pronunciación o cualquier detalle antes de la entrega final." },
    { t: "Entrega en 14 días hábiles", d: "Plazo pensado para cursos de hasta 15 horas en varios idiomas a la vez. Si necesitas ir más rápido, la calculadora incluye una opción de entrega prioritaria." },
  ];

  return (
    <div>
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Qué incluye —</div>
      <h2 className="text-3xl lg:text-4xl font-display mb-6">
        Todo lo necesario para <span className="text-gold-gradient italic">escalar en varios mercados a la vez</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-12">
        El plan Premium está pensado para creadores que ya validaron que su curso funciona fuera de su idioma original y quieren dar el salto en serio: varios idiomas, doblaje que suena natural, y materiales completamente localizados. Es nuestro plan más elegido porque cubre todo lo que necesitas sin llegar a la complejidad de un proyecto a medida.
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
            Ya sabes en qué 2-3 mercados quieres vender y buscas lanzarlos juntos.
          </li>
          <li className="flex items-start gap-3">
            <UserCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            Quieres que tu curso suene doblado de forma profesional, no solo subtitulado.
          </li>
          <li className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            Tu curso dura hasta 15 horas y necesitas un proceso gestionado de principio a fin.
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            Prefieres tener un project manager dedicado en vez de coordinar tú mismo cada detalle.
          </li>
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          ¿Solo necesitas probar un mercado con subtítulos? El{" "}
          <Link to="/" className="text-primary hover:underline">
            plan Essential
          </Link>{" "}
          es más simple y directo. ¿Necesitas más de 3 idiomas, casting de voces o integración con tu LMS? Eso ya es terreno del{" "}
          <Link to="/" className="text-primary hover:underline">
            plan Custom
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

/* ---------- SIDEBAR: CALCULADORA DE PRECIO (multi-idioma) ---------- */

const LANGUAGES: { value: string; label: string; rate: number }[] = [
  { value: "en", label: "Inglés", rate: 10 },
  { value: "es", label: "Español", rate: 10 },
  { value: "fr", label: "Francés", rate: 10 },
  { value: "de", label: "Alemán", rate: 10 },
  { value: "pt", label: "Portugués", rate: 10 },
  { value: "it", label: "Italiano", rate: 10 },
  { value: "nl", label: "Neerlandés", rate: 10 },
  { value: "pl", label: "Polaco", rate: 10 },
  { value: "zh", label: "Chino (mandarín)", rate: 10 },
  { value: "ja", label: "Japonés", rate: 10 },
  { value: "ko", label: "Coreano", rate: 10 },
  { value: "ar", label: "Árabe", rate: 10 },
  { value: "ru", label: "Ruso", rate: 10 },
  { value: "hi", label: "Hindi", rate: 10 },
  { value: "tr", label: "Turco", rate: 10 },
  { value: "sv", label: "Sueco", rate: 10 },
  { value: "no", label: "Noruego", rate: 10 },
  { value: "da", label: "Danés", rate: 10 },
  { value: "fi", label: "Finlandés", rate: 10 },
  { value: "el", label: "Griego", rate: 10 },
  { value: "he", label: "Hebreo", rate: 10 },
  { value: "th", label: "Tailandés", rate: 10 },
  { value: "vi", label: "Vietnamita", rate: 10 },
  { value: "id", label: "Indonesio", rate: 10 },
  { value: "ro", label: "Rumano", rate: 10 },
  { value: "hu", label: "Húngaro", rate: 10 },
  { value: "cs", label: "Checo", rate: 10 },
  { value: "uk", label: "Ucraniano", rate: 10 },
  { value: "fa", label: "Persa", rate: 10 },
  { value: "bn", label: "Bengalí", rate: 10 },
].sort((a, b) => a.label.localeCompare(b.label, "es"));

const MAX_LANGS = 3;

// Elegir más idiomas apenas debería mover el precio: Premium ya incluye
// hasta 3 en el mismo plan, así que el incremento es pequeño, no un
// multiplicador agresivo por cada idioma añadido.
const BUNDLE_MULTIPLIER: Record<number, number> = { 1: 1, 2: 1.25, 3: 1.4 };

// El plan Premium cuesta siempre entre estos dos valores, sin excepción.
const MIN_PRICE = 3000;
const MAX_PRICE = 7500;

// A partir de 5h (el punto de anclaje del "Desde €3.000"), cada minuto
// adicional cuesta menos que los primeros — igual que el descuento por
// combinar idiomas, pero aplicado a la duración del curso. Así, 1 solo
// idioma a 15h no dispara el precio por sí solo.
const BASE_MINUTES = 5 * 60;
const EXTRA_MINUTE_FACTOR = 0.3;

function durationCost(minutes: number, rate: number) {
  if (minutes <= BASE_MINUTES) return minutes * rate;
  const extra = minutes - BASE_MINUTES;
  return BASE_MINUTES * rate + extra * rate * EXTRA_MINUTE_FACTOR;
}

function PriceCalculator() {
  const [hours, setHours] = useState(5);
  const [selectedLangs, setSelectedLangs] = useState<string[]>(["en"]);
  const [express, setExpress] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const toggleLang = (value: string) => {
    setSelectedLangs((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      if (prev.length >= MAX_LANGS) return prev;
      return [...prev, value];
    });
  };

  const selectedLabel = useMemo(() => {
    if (selectedLangs.length === 0) return "Selecciona idiomas (máx. 3)";
    const labels = selectedLangs.map((v) => LANGUAGES.find((l) => l.value === v)!.label);
    if (labels.length === 1) return labels[0];
    return `${labels[0]} +${labels.length - 1} más`;
  }, [selectedLangs]);

  const hardestRate = useMemo(() => {
    if (selectedLangs.length === 0) return 0;
    return Math.max(...selectedLangs.map((v) => LANGUAGES.find((l) => l.value === v)!.rate));
  }, [selectedLangs]);

  const { low, high } = useMemo(() => {
    if (selectedLangs.length === 0) return { low: 0, high: 0 };
    const minutes = hours * 60;
    const bundle = BUNDLE_MULTIPLIER[selectedLangs.length] ?? 1;
    const deliveryMultiplier = express ? 1.3 : 1;
    const base = durationCost(minutes, hardestRate) * bundle * deliveryMultiplier;
    const rawLow = Math.round((base * 0.9) / 10) * 10;
    const rawHigh = Math.round((base * 1.1) / 10) * 10;
    // Se acota siempre al rango real del plan: nunca por debajo de 3.000
    // ni por encima de 7.500, pase lo que pase con horas/idiomas/entrega.
    return {
      low: Math.min(Math.max(rawLow, MIN_PRICE), MAX_PRICE),
      high: Math.min(Math.max(rawHigh, MIN_PRICE), MAX_PRICE),
    };
  }, [hours, hardestRate, selectedLangs, express]);

  const atLimit = selectedLangs.length >= MAX_LANGS;

  return (
    <div className="rounded-3xl border border-border bg-card/60 p-8">
      <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">— Calculadora —</div>
      <h3 className="text-xl font-display mb-1">Aproxima tu presupuesto</h3>
      <p className="text-xs text-muted-foreground mb-8">Elige varios idiomas a la vez, como en el plan real.</p>

      {/* Horas */}
      <div className="mb-7">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium">Duración del curso</label>
          <span className="text-sm text-primary font-medium">{hours}h</span>
        </div>
        <input
          type="range"
          min={5}
          max={15}
          step={0.5}
          value={hours}
          onChange={(e) => setHours(parseFloat(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
          <span>5h</span>
          <span>15h (máx. Premium)</span>
        </div>
      </div>

      {/* Idiomas (multi-selección) */}
      <div className="mb-7" ref={langRef}>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium">Idiomas de destino</label>
          <span className="text-[11px] text-muted-foreground">{selectedLangs.length}/{MAX_LANGS}</span>
        </div>
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
            <span className="truncate">{selectedLabel}</span>
            <svg
              className={`w-3.5 h-3.5 text-primary transition-transform duration-200 flex-shrink-0 ${langOpen ? "rotate-100" : ""}`}
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
                {LANGUAGES.map((opt) => {
                  const checked = selectedLangs.includes(opt.value);
                  const disabled = !checked && atLimit;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      disabled={disabled}
                      onClick={() => toggleLang(opt.value)}
                      className={`w-full flex items-center gap-3 text-left text-sm px-4 py-2.5 transition ${
                        checked
                          ? "text-primary bg-primary/10"
                          : disabled
                          ? "text-muted-foreground/40 cursor-not-allowed"
                          : "text-foreground hover:bg-primary/5"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-[4px] border flex items-center justify-center flex-shrink-0 ${
                          checked ? "border-primary bg-gold-gradient" : "border-border"
                        }`}
                      >
                        {checked && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />}
                      </span>
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setLangOpen(false)}
                className="w-full text-center text-xs text-primary py-2.5 border-t border-primary/20 hover:bg-primary/5 transition"
              >
                Listo
              </button>
            </div>
          </div>
        </div>
        {atLimit ? (
          <p className="text-[11px] text-muted-foreground mt-2">
            Llegaste al máximo de este plan.{" "}
            <Link to="/" className="text-primary hover:underline">
              Custom
            </Link>{" "}
            permite 10+ idiomas simultáneos.
          </p>
        ) : (
          <p className="text-[11px] text-muted-foreground mt-2">Puedes elegir hasta 3 idiomas incluidos en el plan.</p>
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
            <div className="text-[10px] mt-0.5 opacity-70">14-17 días</div>
          </button>
          <button
            onClick={() => setExpress(true)}
            className={`text-sm px-4 py-3 rounded-xl border transition ${
              express ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
            }`}
          >
            Prioritaria
            <div className="text-[10px] mt-0.5 opacity-70">8-12 días</div>
          </button>
        </div>
      </div>

      {/* Resultado */}
      <div className="rounded-2xl bg-gold-gradient/10 border border-primary/30 p-6 text-center">
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Estimación</div>
        {selectedLangs.length === 0 ? (
          <div className="text-sm text-muted-foreground py-2">Selecciona al menos 1 idioma</div>
        ) : (
          <>
            <div className="text-3xl font-display text-gold-gradient">
              {low === high
                ? `€${low.toLocaleString("es-ES")}`
                : `€${low.toLocaleString("es-ES")} – €${high.toLocaleString("es-ES")}`}
            </div>
            <div className="text-[11px] text-muted-foreground mt-2">Precio final confirmado tras revisar tu material</div>
          </>
        )}
      </div>

      <button
        onClick={() => {
          setHours(5);
          setSelectedLangs(["en"]);
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
    { q: "¿Puedo elegir menos de 3 idiomas y pagar menos?", a: "Sí, el precio se calcula según cuántos idiomas y cuánta duración elijas. 3 idiomas es el máximo incluido en este plan, no un mínimo obligatorio." },
    { q: "¿Qué diferencia hay entre el doblaje IA de Premium y el subtitulado de Essential?", a: "Essential traduce con subtítulos escritos. Premium añade una voz doblada con clonación de tu propia voz, para que el curso suene hablado de forma natural en cada idioma." },
    { q: "¿Qué pasa si mi curso dura más de 15 horas?", a: "Se cotiza por hora adicional, o te recomendamos directamente el plan Custom, pensado para catálogos y cursos de mayor volumen." },
    { q: "¿Puedo pedir más de 3 idiomas en este plan?", a: "Premium incluye hasta 3. Si necesitas más, el plan Custom permite 10+ idiomas simultáneos con casting de voces a medida." },
    { q: "¿La estimación de la calculadora es el precio final?", a: "Es una aproximación. El precio final se confirma tras revisar la duración exacta y complejidad del contenido, normalmente en la misma llamada con tu project manager." },
  ];
  return (
    <section id="faq" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— FAQ —</div>
          <h2 className="text-4xl lg:text-5xl font-display">
            Preguntas sobre el <span className="text-gold-gradient italic">plan Premium</span>
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