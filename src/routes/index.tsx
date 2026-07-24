import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Languages, Sparkles, Clock, ShieldCheck, TrendingUp, Check, ArrowRight, Play, Star, Quote, UserCheck, ThumbsUp, Volume2, VolumeX } from "lucide-react";
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
      <VideoShowcase />
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
          <li><a href="#footer" className="hover:text-primary transition">Contáctanos</a></li>
        </ul>
        <Link to="/form" className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-primary-foreground text-sm font-medium shadow-glow hover:scale-[1.03] transition">
          Obten tu DEMO personal <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
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
          <a href="https://ethostranslate.lovable.app/form" 
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition">
            Solicitar DEMO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a href="#video-muestra" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition">
            <Play className="w-4 h-4 text-primary" /> Ver muestra
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { k: "+180", v: "Cursos traducidos" },
            { k: "+50", v: "Idiomas y Dialectos" },
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
        <a href="https://ethostranslate.lovable.app/form" 
        className="text-sm text-primary font-medium border border-primary/40 rounded-full px-4 py-1.5">
          ¿No está tu idioma? Solicítalo →
        </a>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Languages, title: "Traducción de audio", desc: "Adaptación de idioma completa, manteniendo tu tono, humor y autoridad." },
    { icon: Play, title: "Subtitulado profesional", desc: "Subtítulos SRT/VTT sincronizados frame a frame, listos para Kajabi, Hotmart o Teachable." },
    { icon: UserCheck, title: "Contenido revisado", desc: "Clonación de tu voz en otro idiomas, revisado por profesionales nativos." },
    { icon: ThumbsUp, title: "Facil de implementar", desc: "En cuenstión de minutos podrás integrar el contenido adaptado en tu curso y empezar a venderlo internacionalmente." },
    { icon: Clock, title: "Entrega express", desc: "Cursos completos en 14 días. Modelo dedicado para cursos de alto volumen." },
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
        <p
          className="text-ml font-medium tracking-wide px-4 py-8 animate-shimmer" style={{
            backgroundImage:
              "linear-gradient(90deg, #7a5c1e 0%, #d4af37 20%, #7a5c1e 40%, #6b6e72 60%, #7a5c1e 80%, #8a8d91 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animationDuration: "10s",
          }}
        >
          Gracias a estos servicios, consigue más idiomas, más mercados, más ventas..
        </p>
              </div>
            </section>
          );
        }

function Process() {
  const steps = [
    { n: "01", t: "Análisis & estrategia", d: "Estudiamos tu curso, audiencia objetivo y mercados con mayor potencial de conversión." },
    { n: "02", t: "Traducción experta", d: "Contamos con lingüistas nativos especializados en marketing digital." },
    { n: "03", t: "Producción audiovisual", d: "Doblaje, subtitulado y mezcla de audio en nuestro estudio con calidad broadcast." },
    { n: "04", t: "QA & entrega", d: "Triple revisión, sincronización perfecta y entrega lista para tu plataforma." },
  ];

  return (
    <section id="proceso" className="relative py-18 px-6 lg:px-10 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Cómo trabajamos —</div>
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
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Más que traducir —</div>
          <h2 className="text-4xl lg:text-5xl font-display mb-6">
            El mundo está listo para <span className="text-gold-gradient italic">escucharte</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nuestro sistema permite que tu audiencia internacional te escuche como si estuvieras hablando su idioma de forma natural, sin necesidad de volver a grabar cursos, vídeos o clases completas.
          </p>
          <ul className="space-y-4">
            {[
              "Otros creadores ya están vendiendo mundialmente",
              "Garantía de revisión ilimitada hasta tu visto bueno",
              "Haz crecer tu negocio sin complicaciones",
              "Tu voz no debería tener fronteras",
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
            { k: "+560k", v: "Generados para clientes" },
            { k: "180+", v: "Cursos lanzados" },
            { k: "+50", v: "Idiomas activos" },
            { k: "7d", v: "Tiempo promedio" },
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

function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [lang, setLang] = useState("es");

  const languages = [
    { code: "es", label: "Español", flagUrl: "https://flagcdn.com/es.svg", src: "/assets/video-es.mp4" },
    { code: "en", label: "English", flagUrl: "https://flagcdn.com/gb.svg", src: "/assets/video-en.mp4" },
    { code: "ch", label: "Chino", flagUrl: "https://flagcdn.com/cn.svg", src: "/assets/video-ch.mp4" },
    { code: "de", label: "Deutsch", flagUrl: "https://flagcdn.com/de.svg", src: "/assets/video-de.mp4" },
  ];

  const activeLang = languages.find((l) => l.code === lang)!;

  const formatTime = (t: number) => {
    if (!isFinite(t)) return "00:00";
    const m = Math.floor(t / 60).toString().padStart(2, "0");
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * duration;
  };

  const selectLang = (code: string) => {
    if (code === lang) return;
    setLang(code);
    setPlaying(false);
    setProgress(0);
    setCurrent(0);
    // pequeño delay para que el <video> recargue el nuevo src antes de reproducir
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (v) {
        v.load();
      }
    });
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      setCurrent(v.currentTime);
      setProgress((v.currentTime / v.duration) * 100 || 0);
    };
    const onMeta = () => setDuration(v.duration);
    const onEnd = () => setPlaying(false);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnd);
    };
  }, [lang]);

  return (
    <section id="video-muestra" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Video de muestra —</div>
          <h2 className="text-4xl lg:text-6xl font-display">
            Escúchalo <span className="text-gold-gradient italic">en cualquier idioma</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            El mismo fragmento de curso, doblado por ETHOS a 4 idiomas distintos.
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-center w-fit mx-auto">
          {/* --- Selector de idiomas --- */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => selectLang(l.code)}
                className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition flex-shrink-0 md:flex-shrink w-full ${
                  lang === l.code
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border bg-card/60 hover:border-primary/40"
                }`}
              >
                <img src={l.flagUrl} alt={l.label} className="w-7 h-5 object-cover rounded-sm shadow-sm" />
                <div className="flex-1">
                  <div className={`font-medium ${lang === l.code ? "text-primary" : "text-foreground"}`}>
                    {l.label}
                  </div>
                </div>
                {lang === l.code && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* --- Video más pequeño, mismo ratio 16:9 --- */}
          <div className="max-w-xl w-full mx-auto md:mx-0">
            <div
              className="relative group rounded-3xl overflow-hidden border border-primary/20 shadow-elegant bg-black"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="absolute -inset-6 bg-gold-gradient opacity-10 blur-3xl rounded-full pointer-events-none" />

              <video
                ref={videoRef}
                key={activeLang.code}
                className="w-full aspect-video object-cover relative"
                poster={influencerImg}
                onClick={togglePlay}
                playsInline
              >
                <source src={activeLang.src} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

              {/* esquinas HUD */}
              {["top-3 left-3 border-t border-l", "top-3 right-3 border-t border-r", "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-6 h-6 border-primary/60 pointer-events-none transition-opacity duration-500 ${hovering || !playing ? "opacity-100" : "opacity-0"}`} />
              ))}

              {/* badge idioma activo */}
              <div className={`absolute top-4 left-6 flex items-center gap-2 transition-opacity duration-500 ${hovering || !playing ? "opacity-100" : "opacity-0"}`}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                <img src={activeLang.flagUrl} alt={activeLang.label} className="w-4 h-3 object-cover rounded-sm" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary/90"></span>
              </div>

              {/* botón play central */}
              {!playing && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-glow hover:scale-110 transition"
                  aria-label="Reproducir video"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  <Play className="w-6 h-6 text-primary-foreground relative translate-x-0.5" fill="currentColor" />
                </button>
              )}

              {/* controles inferiores */}
              <div className={`absolute bottom-0 inset-x-0 px-4 pb-4 pt-8 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 ${hovering || !playing ? "opacity-100" : "opacity-0"}`}>
                <div
                  className="relative h-1 rounded-full bg-white/20 cursor-pointer mb-3 overflow-hidden"
                  onClick={handleSeek}
                >
                  <div
                    className="absolute inset-y-0 left-0 bg-gold-gradient rounded-full transition-[width] duration-150"
                    style={{ width: `${progress}%` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-glow transition-[left] duration-150"
                    style={{ left: `calc(${progress}% - 5px)` }}
                  />
                </div>

                 <div className="flex items-center justify-between">
                 <button onClick={toggleMute} className="text-foreground hover:text-primary transition">
                  {muted ? (
                   <VolumeX className="w-4 h-4" />
                 ) : (
                   <Volume2 className="w-4 h-4" />
                 )}
               </button>
               <span className="text-[9px] font-mono tracking-widest text-muted-foreground">
                  {formatTime(current)} / {formatTime(duration)}
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Triplicamos ventas en Francia en 60 días. Calidad de doblaje excelente —parece que yo mismo hablo francés.", a: "Eneko Ipinza", r: "Mentor de ventas" },
    { q: "Llevaba años intentando entrar al mercado anglosajón. ETHOS lo logró en una semana de trabajo.", a: "Ugaitz Ugalde", r: "Creador de cursos de marca personal" },
    { q: "El proceso es de boutique de lujo. Project manager dedicada, entregas siempre antes de tiempo.", a: "Darik Rodriguez", r: "Coach de productividad" },
  ];
  return (
    <section id="testimonios" className="relative py-32 px-6 lg:px-10 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Voces de creadores —</div>
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
      p: "Essential",
      d: "Para cursos de hasta 5h",
      price: "900€ - 2,400€",
      priceNote: "según duración e idioma",
      f: ["Traducción a 1 idioma", "Subtitulado profesional", "1 revisión incluida", "Entrega en 5-7 días hábiles", "Soporte incluido"],
      cta: "Empezar",
      to:"/essential",
      highlight: false,
    },
    {
      p: "Premium",
      d: "Para cursos hasta 15h",
      price: "3,000€ - 6,000€",
      priceNote: "según duración e idiomas",
      f: ["Traducción a 3 idiomas", "Subtitulado + doblaje IA", "Project manager dedicado", "3 revisiones incluidas", "Entrega en 10 días hábiles"],
      cta: "Plan más elegido",
      to:"/premium",
      highlight: true,
    },
    {
      p: "Custom",
      d: "Para imperios digitales",
      price: "Presupuesto a medida",
      priceNote: null,
      f: ["10+ idiomas simultáneos", "Doblaje con clonación de voz", "Adaptación de exámenes, quizzes...", "Equipo dedicado fulltime", "SLA priority", "Soporte 24/7"],
      cta: "Hablar con ventas",
      to:"/custom",
      highlight: false,
    },
  ];

  return (
    <section id="precios" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Inversión —</div>
          <h2 className="text-4xl lg:text-6xl font-display">Planes <span className="text-gold-gradient italic">a tu medida</span></h2>
          <p className="mt-6 text-muted-foreground">Cada curso es único. Estos son nuestros puntos de partida.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.p} className={`relative rounded-3xl p-10 border transition ${plan.highlight ? "border-primary bg-card shadow-glow scale-[1.02]" : "border-border bg-card/60 hover:border-primary/40"}`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs uppercase tracking-widest">Más popular</div>
              )}
              <div className="text-5xl font-display text-gold-gradient mb-2">{plan.p}</div>
              <div className="text-sm text-muted-foreground mb-2">{plan.d}</div>

              <div className="mb-5 pb-5 border-b border-border">
                <div className="text-1xl lg:text-2xl font-display text-foreground">{plan.price}</div>
                {plan.priceNote && (
                  <div className="text-xs text-muted-foreground mt-1.5">{plan.priceNote}</div>
                )}
              </div>

              <ul className="space-y-3 mb-10">
                {plan.f.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <Link to={plan.to} className={`block text-center px-6 py-3 rounded-full font-medium transition ${plan.highlight ? "bg-gold-gradient text-primary-foreground hover:scale-[1.03]" : "border border-primary/40 text-foreground hover:bg-primary/10"}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-md mx-auto text-center text-base text-primary font-medium">
          Cada precio se puede adaptar a un presupuesto
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "¿En cuánto tiempo entregan un curso completo?", a: "Plan Premium: 14 días para cursos de hasta 15 horas. Custom: cronograma personalizado según volumen." },
    { q: "¿Puedo clonar mi voz de forma legal?", a: "Sí. Usamos tecnología con autorización contractual completa. Tú mantienes 100% el control de tu voz." },
    { q: "¿Trabajan con plataformas como Hotmart o Kajabi?", a: "Sí. Entregamos archivos en cualquier formato compatible con tu plataforma, listos para subir." },
    { q: "¿Qué pasa si no quedo satisfecho?", a: "Revisiones ilimitadas hasta tu aprobación. Si aún así no estás conforme, devolvemos el 100%." },
  ];
  return (
    <section id="faq" className="relative py-32 px-6 lg:px-10 bg-card/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— FAQ —</div>
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
          <a href="https://calendly.com/ethostranslate/llamada-informativa" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gold-gradient text-primary-foreground font-medium text-lg shadow-glow hover:scale-[1.03] transition">
            Agendar llamada <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/+34688603317"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition">
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
    <section id="footer" className="border-t border-border py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          {/* Marca */}
          <div className="max-w-xs">
            <div className="text-3xl font-display text-gold-gradient">ETHOS</div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">Translate</div>
          </div>

          {/* Columnas de enlaces */}
          <div className="flex gap-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Soporte</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a 
                  href="https://wa.me/34688603317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition">Contacto</a></li>
                <li><a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ethostranslate@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                 className="hover:text-primary transition"
                >
               soporte@ethostranslate.com
              </a></li>
                <li><a href="#faq" className="hover:text-primary transition">Preguntas frecuentes</a></li>
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
          <div className="text-xs text-muted-foreground/70">
            Hecho con dedicación para creadores globales
          </div>
        </div>
      </div>
    </section>
  );
}