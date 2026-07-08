import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — ETHOS Translate" },
      { name: "description", content: "Política de privacidad de ETHOS Translate." },
    ],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative pt-40 pb-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-sm text-primary hover:underline">← Volver al inicio</Link>
          </div>

          <h1 className="text-4xl lg:text-5xl font-display mb-4">Política de Privacidad</h1>
          <p className="text-sm text-muted-foreground mb-12">Última actualización: 7 de julio de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">1. Responsable del tratamiento</h2>
              <p>
                ETHOS Translate ("nosotros", "la agencia") es responsable del tratamiento de los datos
                personales que nos facilitas a través de este sitio web y de nuestros servicios de
                traducción, subtitulado, doblaje y localización de cursos online.
              </p>
              <p className="mt-3">
                Para cualquier consulta relacionada con esta política, puedes contactarnos en{" "}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ethostranslate@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                 className="text-primary hover:underline"
                >
               soporte@ethostranslate.com
              </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">2. Qué datos recopilamos</h2>
              <p>Recopilamos los siguientes datos cuando utilizas nuestro formulario de contacto o contratas nuestros servicios:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Datos de identificación:</strong> nombre completo, dirección de email, número de teléfono.</li>
                <li><strong>Contenido del proyecto:</strong> mensajes que nos envías, videos o enlaces a videos que nos facilitas para su traducción, subtitulado o doblaje.</li>
                <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, y datos de uso del sitio web recogidos de forma automática.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">3. Finalidad del tratamiento</h2>
              <p>Utilizamos tus datos para:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Responder a tus solicitudes de contacto y presupuesto.</li>
                <li>Prestar los servicios de traducción, subtitulado, doblaje y localización que contrates.</li>
                <li>Gestionar la relación contractual y facturación derivada de nuestros servicios.</li>
                <li>Enviarte comunicaciones relacionadas con tu proyecto (nunca marketing sin tu consentimiento expreso).</li>
                <li>Cumplir con obligaciones legales y fiscales aplicables.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">4. Base legal</h2>
              <p>
                El tratamiento de tus datos se basa en la ejecución de un contrato o medidas precontractuales
                (cuando solicitas presupuesto o contratas un servicio), en tu consentimiento expreso (cuando
                subes contenido audiovisual voluntariamente), y en nuestro interés legítimo en responder a
                consultas comerciales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">5. Conservación de los datos</h2>
              <p>
                Conservamos tus datos personales durante el tiempo necesario para cumplir con la finalidad
                para la que fueron recogidos, y posteriormente durante los plazos legalmente exigidos para
                atender posibles responsabilidades (generalmente hasta 5-6 años en materia fiscal y mercantil,
                según la legislación aplicable).
              </p>
              <p className="mt-3">
                Los archivos de video que nos facilitas para su procesamiento se eliminan de nuestros
                servidores de almacenamiento una vez finalizado y entregado el proyecto, salvo que acuerdes
                con nosotros un plazo de conservación distinto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">6. Con quién compartimos tus datos</h2>
              <p>No vendemos ni cedemos tus datos a terceros con fines comerciales. Podemos compartir datos con:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Proveedores de infraestructura técnica (por ejemplo, servicios de almacenamiento en la nube) que actúan como encargados del tratamiento bajo contrato.</li>
                <li>Colaboradores lingüísticos y de producción audiovisual estrictamente necesarios para ejecutar tu proyecto, sujetos a acuerdos de confidencialidad.</li>
                <li>Autoridades públicas cuando exista obligación legal de hacerlo.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">7. Transferencias internacionales</h2>
              <p>
                Dado que trabajamos con lingüistas y colaboradores en distintos países para ofrecer
                traducción a múltiples idiomas, algunos datos y contenidos pueden ser tratados fuera de tu
                país de residencia. En estos casos, adoptamos garantías adecuadas conforme a la normativa
                aplicable (como cláusulas contractuales tipo) para proteger tu información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">8. Tus derechos</h2>
              <p>Tienes derecho a:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Acceder a los datos personales que tenemos sobre ti.</li>
                <li>Solicitar la rectificación de datos inexactos.</li>
                <li>Solicitar la supresión de tus datos cuando ya no sean necesarios.</li>
                <li>Oponerte al tratamiento u solicitar su limitación.</li>
                <li>Solicitar la portabilidad de tus datos.</li>
              </ul>
              <p className="mt-3">
                Puedes ejercer estos derechos escribiéndonos a{" "}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ethostranslate@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                 className="text-primary hover:underline"
                >
               soporte@ethostranslate.com
              </a>. Si consideras que no hemos atendido tu solicitud correctamente, puedes presentar una
                reclamación ante la autoridad de control de protección de datos de tu país.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">9. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a
                accesos no autorizados, pérdida o alteración. No obstante, ningún sistema de transmisión o
                almacenamiento de datos es 100% seguro, por lo que no podemos garantizar seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">10. Cookies</h2>
              <p>
                Este sitio puede utilizar cookies técnicas necesarias para su funcionamiento. Para más
                información, consulta nuestra{" "}
                <Link to="/cookies" className="text-primary hover:underline">Política de Cookies</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">11. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política de privacidad periódicamente. Publicaremos cualquier cambio
                en esta misma página, indicando la fecha de la última actualización.
              </p>
            </section>

            <section>
                <h2 className="text-2xl font-display text-foreground mb-3">12. Devolución de intereses</h2>
                <p>
                    El usuario dispone de 48 horas para reclamar su insatisfacción con el servicio ofrecido por la agencia. 
                    En caso de que la reclamación proceda, dicha insatisfacción deberá ser demostrada para que se ejecute 
                    el reembolso del 100% del capital invertido. Además, el curso deberá cumplir con al menos 10 horas de 
                    contenido traducido y haber sido traducido, como mínimo, a tres idiomas diferentes.
                </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}