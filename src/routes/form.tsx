import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, User, CheckCircle2, AlertCircle, MessageCircle, Video } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/form")({
  head: () => ({
    meta: [
      { title: "Contacto — ETHOS Translate" },
      { name: "description", content: "Contáctanos para llevar tu curso a audiencias globales. Respuesta lo antes posible." },
      { property: "og:title", content: "Contacto — ETHOS Translate" },
      { property: "og:description", content: "Escríbenos y te ayudamos a escalar tu contenido internacionalmente." },
    ],
  }),
  component: FormPage,
});

type Errors = { name?: string; email?: string; phone?: string; message?: string };

function FormPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [videoMode, setVideoMode] = useState<"file" | "link">("file");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState("");
  const [videoError, setVideoError] = useState("");

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio";
    else if (form.name.length > 100) e.name = "Máximo 100 caracteres";

    if (!form.email.trim()) e.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Formato de email inválido";

    if (!form.phone.trim()) e.phone = "El teléfono es obligatorio";
    else if (!/^[\d\s+()-]{6,40}$/.test(form.phone)) e.phone = "Teléfono inválido";
    if (videoMode === "link" && videoLink.trim() && !/^https?:\/\/.+/.test(videoLink)) {
      setVideoError("El enlace debe empezar por http:// o https://");
    } else {
      setVideoError("");
    }

    return e
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    if (videoMode === "link" && videoLink.trim() && !/^https?:\/\/.+/i.test(videoLink)) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      let videoPath: string | undefined;
      let videoLinkToSend: string | undefined;

      if (videoMode === "file" && videoFile) {
        const signRes = await fetch("/api/public/create-video-upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: videoFile.name,
            size: videoFile.size,
            contentType: videoFile.type || "video/mp4",
          }),
        });
        if (!signRes.ok) {
          const data = await signRes.json().catch(() => ({}));
          throw new Error(data.error || "No se pudo preparar la subida del video");
        }
        const { path, token } = await signRes.json();
        const { error: upErr } = await supabase.storage
          .from("videos")
          .uploadToSignedUrl(path, token, videoFile, {
            contentType: videoFile.type || "video/mp4",
            upsert: false,
          });
        if (upErr) throw new Error("No se pudo subir el video: " + upErr.message);
        videoPath = path;
      } else if (videoMode === "link" && videoLink.trim()) {
        videoLinkToSend = videoLink.trim();
      }

      const res = await fetch("/api/public/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, videoPath, videoLink: videoLinkToSend }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar el mensaje");
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setVideoFile(null);
      setVideoLink("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section className="relative pt-40 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="relative max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur text-xs uppercase tracking-[0.25em] text-primary mb-6">
              <Mail className="w-3.5 h-3.5" /> Contáctanos
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.05]">
              Hablemos de tu <span className="italic text-gold-gradient">próximo lanzamiento</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg">
              Déjanos tus datos con tu video y te hacemos una demo personalizada para que veas como funciona lo antes posible.
            </p>
          </div>

          <form onSubmit={onSubmit} noValidate className="relative bg-card/60 border border-border rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
            <div className="space-y-6">
              <Field
                icon={<User className="w-4 h-4" />}
                label="Nombre completo"
                name="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                error={errors.name}
                placeholder="Tu nombre"
                autoComplete="name"
              />
              <Field
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                error={errors.email}
                placeholder="tu@email.com"
                autoComplete="email"
              />
              <Field
                icon={<Phone className="w-4 h-4" />}
                label="Teléfono"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                error={errors.phone}
                placeholder="+34 600 000 000"
                autoComplete="tel"
              />
              <Field
                icon={<MessageCircle className="w-4 h-4" />}
                label={<>Mensaje <span className="text-muted-foreground/50">(opcional)</span></>}
                name="message"
                value={form.message}
                onChange={(v) => setForm({...form, message: v})}
                placeholder="Escribe aqui tu mensaje"
                autoComplete="off"
              />
              <VideoField
                mode={videoMode}
                onModeChange={setVideoMode}
                file={videoFile}
                onFileChange={setVideoFile}
                link={videoLink}
                onLinkChange={setVideoLink}
                error={videoError}
/>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                {status !== "sending" && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />}
              </button>

              {status === "success" && (
                <div className="flex items-start gap-3 p-4 rounded-2xl border border-primary/40 bg-primary/10 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>¡Gracias por contactarnos! Te responderemos pronto.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-start gap-3 p-4 rounded-2xl border border-destructive/40 bg-destructive/10 text-sm">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{errorMsg || "No pudimos enviar el mensaje. Inténtalo de nuevo."}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function VideoField({
  mode, onModeChange, file, onFileChange, link, onLinkChange, error,
}: {
  mode: "file" | "link";
  onModeChange: (m: "file" | "link") => void;
  file: File | null;
  onFileChange: (f: File | null) => void;
  link: string;
  onLinkChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        <Video className="w-4 h-4 text-primary" />
        Video
      </label>

      <div className="relative inline-flex p-1 rounded-full bg-background/60 border border-border mb-3">
  {/* Fondo que se desliza */}
  <div
    className="absolute top-1 bottom-1 left-1 rounded-full bg-gold-gradient transition-transform duration-300 ease-out"
    style={{
      width: "calc(50% - 4px)",
      transform: mode === "link" ? "translateX(100%)" : "translateX(0%)",
    }}
  />

        <button
          type="button"
          onClick={() => onModeChange("file")}
          className={`relative z-10 flex-1 px-4 whitespace-nowrap py-1.5 rounded-full text-xs transition-colors duration-300 ${
            mode === "file" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Subir archivo
        </button>
        <button
          type="button"
          onClick={() => onModeChange("link")}
          className={`relative z-10 flex-1 px-4 py-1.5 rounded-full whitespace-nowrap text-xs transition-colors duration-300 ${
            mode === "link" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Pegar enlace
        </button>
      </div>

      {mode === "file" ? (
        <div>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
            className="w-full text-sm text-muted-foreground file:mr-4 file:px-4 file:py-2.5 file:rounded-full file:border-0 file:bg-gold-gradient file:text-primary-foreground file:cursor-pointer cursor-pointer"
          />
          {file && (
            <p className="mt-2 text-xs text-muted-foreground">
              {file.name} · {(file.size / (1024 * 1024)).toFixed(1)} MB
            </p>
          )}
        </div>
      ) : (
        <input
          type="url"
          value={link}
          onChange={(e) => onLinkChange(e.target.value)}
          placeholder="https://youtube.com/... o https://drive.google.com/..."
          className={`w-full px-5 py-3.5 rounded-2xl bg-background/60 border ${error ? "border-destructive/60" : "border-border"} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition`}
        />
      )}

      {error && <p className="mt-2 text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</p>}
    </div>
  );
}

function Field({
  icon, label, name, value, onChange, error, type = "text", placeholder, autoComplete,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        <span className="text-primary">{icon}</span>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={`w-full px-5 py-3.5 rounded-2xl bg-background/60 border ${error ? "border-destructive/60" : "border-border"} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition`}
      />
      {error && <p className="mt-2 text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</p>}
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <nav className="relative max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-semibold tracking-wider text-gold-gradient">ETHOS</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">Translate</span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <li><Link to="/" hash="servicios" className="hover:text-primary transition">Servicios</Link></li>
          <li><Link to="/" hash="proceso" className="hover:text-primary transition">Proceso</Link></li>
          <li><Link to="/" hash="precios" className="hover:text-primary transition">Precios</Link></li>
          <li><Link to="/" hash="testimonios" className="hover:text-primary transition">Casos</Link></li>
        </ul>
      </nav>
    </header>
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
          © {new Date().getFullYear()} Ethos Translate · Tu curso, en todo el mundo
        </div>
      </div>
    </footer>
  );
}
