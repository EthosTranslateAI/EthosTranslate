import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — ETHOS Translate" },
      { name: "description", content: "Política de cookies de ETHOS Translate." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative pt-40 pb-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-sm text-primary hover:underline">← Volver al inicio</Link>
          </div>

          <h1 className="text-4xl lg:text-5xl font-display mb-4">Política de Cookies</h1>
          <p className="text-sm text-muted-foreground mb-12">Última actualización: 7 de julio de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">1. Qué son las cookies</h2>
              <p>
                Las cookies son pequeños archivos de texto que un sitio web almacena en tu navegador
                cuando lo visitas. Se utilizan habitualmente para que el sitio funcione correctamente,
                recordar tus preferencias o analizar cómo se utiliza el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">2. Cookies que utilizamos</h2>
              <p>
                Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para su
                funcionamiento. Estas cookies no requieren tu consentimiento previo conforme a la
                normativa aplicable, ya que son imprescindibles para navegar por el sitio y utilizar sus
                funciones básicas.
              </p>
              <p className="mt-3">
                Actualmente, ETHOS Translate no utiliza cookies de analítica, publicidad ni seguimiento
                de terceros. Si en el futuro incorporamos herramientas de este tipo (por ejemplo, para
                medir el rendimiento del sitio), actualizaremos esta política y solicitaremos tu
                consentimiento cuando sea legalmente necesario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">3. Cookies técnicas necesarias</h2>
              <p>Estas cookies permiten funciones esenciales como:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Mantener la sesión activa mientras completas el formulario de contacto.</li>
                <li>Recordar tus preferencias básicas de navegación dentro del sitio.</li>
                <li>Garantizar la seguridad y el correcto funcionamiento de los formularios.</li>
              </ul>
              <p className="mt-3">
                Sin estas cookies, algunas funciones del sitio (como el envío del formulario de
                contacto) podrían no funcionar correctamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">4. Almacenamiento de archivos</h2>
              <p>
                Cuando subes un video a través de nuestro formulario de contacto, este se almacena de
                forma segura en nuestro proveedor de almacenamiento en la nube (Supabase) con el único
                fin de procesar tu solicitud. Este almacenamiento no funciona mediante cookies en tu
                navegador, sino como una transferencia directa de archivo a nuestro servidor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">5. Cómo gestionar las cookies</h2>
              <p>
                Puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier momento.
                Ten en cuenta que, si bloqueas las cookies técnicas necesarias, es posible que algunas
                partes del sitio, como el formulario de contacto, dejen de funcionar correctamente.
              </p>
              <p className="mt-3">Puedes gestionar las cookies desde la configuración de tu navegador:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                <li>Safari: Preferencias → Privacidad</li>
                <li>Firefox: Opciones → Privacidad y Seguridad</li>
                <li>Microsoft Edge: Configuración → Cookies y permisos del sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">6. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política de cookies periódicamente, especialmente si
                incorporamos nuevas herramientas al sitio web. Cualquier cambio se publicará en esta
                misma página, indicando la fecha de la última actualización.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">7. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con esta política de cookies, puedes escribirnos a{" "}
                <a href="mailto:soporte@ethostranslate.com" className="text-primary hover:underline">
                  soporte@ethostranslate.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}