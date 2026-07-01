import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, User, CheckCircle2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/form")({
  head: () => ({
    meta: [
      { title: "Contacto — ETHOS Translate" },
      { name: "description", content: "Contáctanos para llevar tu curso a audiencias globales. Respuesta en menos de 4 horas hábiles." },
      { property: "og:title", content: "Contacto — ETHOS Translate" },
      { property: "og:description", content: "Escríbenos y te ayudamos a escalar tu contenido internacionalmente." },
    ],
  }),
  component: FormPage,
});

type Errors = { name?: string; email?: string; phone?: string };

function FormPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio";
    else if (form.name.length > 100) e.name = "Máximo 100 caracteres";

    if (!form.email.trim()) e.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Formato de email inválido";

    if (!form.phone.trim()) e.phone = "El teléfono es obligatorio";
    else if (!/^[\d\s+()-]{6,40}$/.test(form.phone)) e.phone = "Teléfono inválido";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/public/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar el mensaje");
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "" });
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
              Déjanos tus datos y te contactamos en menos de 4 horas hábiles.
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

function Field({
  icon, label, name, value, onChange, error, type = "text", placeholder, autoComplete,
}: {
  icon: React.ReactNode;
  label: string;
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
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-semibold tracking-wider text-gold-gradient">ETHOS</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">Translate</span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <li><Link to="/" hash="servicios" className="hover:text-primary transition">Servicios</Link></li>
          <li><Link to="/" hash="proceso" className="hover:text-primary transition">Proceso</Link></li>
          <li><Link to="/" hash="precios" className="hover:text-primary transition">Precios</Link></li>
          <li><Link to="/" hash="testimonios" className="hover:text-primary transition">Casos</Link></li>
        </ul>
        <Link to="/form" className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-primary-foreground text-sm font-medium shadow-glow hover:scale-[1.03] transition">
          Contáctanos <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        </Link>
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
          © {new Date().getFullYear()} Lumina Studio · Tu curso, en todo el mundo
        </div>
      </div>
    </footer>
  );
}
