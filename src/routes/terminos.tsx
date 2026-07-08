import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos de Servicio — ETHOS Translate" },
      { name: "description", content: "Términos y condiciones de servicio de ETHOS Translate." },
    ],
  }),
  component: TerminosPage,
});

function TerminosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative pt-40 pb-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-sm text-primary hover:underline">← Volver al inicio</Link>
          </div>

          <h1 className="text-4xl lg:text-5xl font-display mb-4">Términos de Servicio</h1>
          <p className="text-sm text-muted-foreground mb-12">Última actualización: 7 de julio de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">1. Aceptación de los términos</h2>
              <p>
                Al contratar los servicios de ETHOS Translate ("la agencia", "nosotros"), o al utilizar
                este sitio web, aceptas quedar vinculado por los presentes Términos de Servicio. Si no
                estás de acuerdo con alguna de estas condiciones, te rogamos que no utilices nuestros
                servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">2. Descripción de los servicios</h2>
              <p>
                ETHOS Translate ofrece servicios de traducción, subtitulado, doblaje y localización de
                cursos y contenido audiovisual, con el objetivo de ayudar a creadores a distribuir y
                vender su contenido en mercados internacionales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">3. Proceso de contratación</h2>
              <p>
                La contratación del servicio se formaliza a través del presupuesto acordado entre el
                cliente y la agencia, tras el análisis del contenido a traducir. El cliente se compromete
                a facilitar el material original (video, audio y/o materiales de apoyo) en condiciones
                adecuadas para su procesamiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">4. Plazos de entrega</h2>
              <p>
                Los plazos de entrega se acuerdan de forma individual según el volumen y complejidad del
                proyecto, y se especifican en el presupuesto o contrato correspondiente. La agencia se
                compromete a informar al cliente de cualquier retraso significativo respecto al plazo
                acordado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">5. Revisiones</h2>
              <p>
                El número de revisiones incluidas depende del plan contratado (Essential, Premium o
                Custom, según se detalla en nuestra página de precios). Las revisiones deben solicitarse
                dentro del plazo indicado tras la entrega, describiendo de forma concreta los cambios
                solicitados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">6. Devolución de intereses</h2>
              <p>
                El usuario dispone de 48 horas para reclamar su insatisfacción con el servicio ofrecido
                por la agencia. En caso de que la reclamación proceda, dicha insatisfacción deberá ser
                demostrada para que se ejecute el reembolso del 100% del capital invertido. Además, el
                curso deberá cumplir con al menos 10 horas de contenido traducido y haber sido traducido,
                como mínimo, a tres idiomas diferentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">7. Propiedad intelectual</h2>
              <p>
                El cliente conserva la titularidad de todos los derechos de propiedad intelectual sobre
                su contenido original. La agencia no adquiere ningún derecho de propiedad sobre el
                material entregado por el cliente, y se compromete a utilizarlo exclusivamente para la
                prestación del servicio contratado.
              </p>
              <p className="mt-3">
                El contenido traducido, subtitulado o doblado, una vez entregado y abonado en su
                totalidad, pasa a ser propiedad plena del cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">8. Confidencialidad</h2>
              <p>
                Toda la información y el contenido audiovisual compartido por el cliente se tratará de
                forma confidencial. La agencia y sus colaboradores no divulgarán, reproducirán ni
                utilizarán dicho contenido con fines distintos a la prestación del servicio contratado,
                salvo autorización expresa del cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">9. Obligaciones del cliente</h2>
              <p>El cliente se compromete a:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Facilitar contenido del cual sea titular de los derechos necesarios para su traducción y distribución.</li>
                <li>Proporcionar información veraz y completa para la correcta ejecución del servicio.</li>
                <li>Abonar el importe acordado en los plazos establecidos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">10. Limitación de responsabilidad</h2>
              <p>
                La agencia no se hace responsable de los resultados comerciales (ventas, conversiones,
                alcance de audiencia) que el cliente obtenga tras la traducción o localización de su
                contenido, ya que estos dependen de múltiples factores ajenos a la calidad del servicio
                prestado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">11. Modificación de los términos</h2>
              <p>
                La agencia se reserva el derecho de modificar estos Términos de Servicio en cualquier
                momento. Los cambios se publicarán en esta misma página, indicando la fecha de la última
                actualización. El uso continuado de nuestros servicios tras la publicación de cambios
                implica la aceptación de los mismos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">12. Ley aplicable y jurisdicción</h2>
              <p>
                Estos términos se rigen por la legislación española. Para la resolución de cualquier
                controversia derivada de la interpretación o cumplimiento de los presentes términos, las
                partes se someten a los juzgados y tribunales que resulten competentes según la
                normativa aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-3">13. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con estos Términos de Servicio, puedes escribirnos a{" "}
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