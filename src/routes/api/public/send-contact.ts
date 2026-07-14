import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/send-contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const {
            name,
            email,
            phone,
            message,
            idioma,
            idiomaLabel,
            videoBase64,
            videoFilename,
            videoContentType,
            videoLink,
          } = await request.json();

          if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
            return Response.json({ error: "Nombre inválido" }, { status: 400 });
          }
          if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
            return Response.json({ error: "Email inválido" }, { status: 400 });
          }
          if (!phone || typeof phone !== "string" || phone.trim().length === 0 || phone.length > 40) {
            return Response.json({ error: "Teléfono inválido" }, { status: 400 });
          }
          if (message && (typeof message !== "string" || message.length > 5000)) {
            return Response.json({ error: "Mensaje inválido" }, { status: 400 });
          }
          if (idiomaLabel && (typeof idiomaLabel !== "string" || idiomaLabel.length > 100)) {
            return Response.json({ error: "Idioma inválido" }, { status: 400 });
          }
          // videoBase64 de un archivo de 25MB en base64 pesa ~33-34MB de texto; damos margen hasta 35MB
          if (videoBase64 && (typeof videoBase64 !== "string" || videoBase64.length > 35_000_000)) {
            return Response.json({ error: "Video demasiado grande" }, { status: 400 });
          }
          if (videoFilename && (typeof videoFilename !== "string" || videoFilename.length > 200)) {
            return Response.json({ error: "Nombre de video inválido" }, { status: 400 });
          }
          if (videoContentType && (typeof videoContentType !== "string" || !videoContentType.startsWith("video/"))) {
            return Response.json({ error: "Tipo de video inválido" }, { status: 400 });
          }
          if (videoLink && (typeof videoLink !== "string" || !/^https?:\/\/.+/i.test(videoLink) || videoLink.length > 1000)) {
            return Response.json({ error: "Enlace de video inválido" }, { status: 400 });
          }

          const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
          const RESEND_API_KEY = process.env.RESEND_API_KEY;
          if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
            return Response.json({ error: "Servicio de email no configurado" }, { status: 500 });
          }

          const safeName = String(name).replace(/[<>&]/g, "");
          const safeEmail = String(email).replace(/[<>&]/g, "");
          const safePhone = String(phone).replace(/[<>&]/g, "");
          const safeMessage = message ? String(message).replace(/[<>&]/g, "").replace(/\n/g, "<br/>") : "";
          const safeIdioma = idiomaLabel
            ? String(idiomaLabel).replace(/[<>&]/g, "")
            : idioma
            ? String(idioma).replace(/[<>&]/g, "")
            : "";

          let videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> <span style="color:#888;">— no adjuntado —</span></p>`;
          const attachments: Array<{ filename: string; content: string }> = [];

          if (videoBase64) {
            const filename = String(videoFilename || "video.mp4")
              .replace(/[^a-zA-Z0-9._-]/g, "_")
              .slice(0, 80);
            attachments.push({ filename, content: videoBase64 });
            const approxMB = ((videoBase64.length * 0.75) / (1024 * 1024)).toFixed(1);
            videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> adjunto al correo (<code>${filename}</code> · ~${approxMB} MB)</p>`;
          } else if (videoLink) {
            const safeLink = String(videoLink).replace(/[<>"]/g, "");
            videoBlock = `<p><strong style="color:#d4af37;">Video (enlace):</strong><br/><a href="${safeLink}" style="color:#d4af37;">${safeLink}</a></p>`;
          }

          const html = `
            <div style="font-family:Arial,sans-serif;background:#0a0a0a;color:#f5f5f5;padding:32px;">
              <h2 style="color:#d4af37;margin-top:0;">Nuevo mensaje de contacto</h2>
              <p><strong style="color:#d4af37;">Nombre:</strong> ${safeName}</p>
              <p><strong style="color:#d4af37;">Email:</strong> ${safeEmail}</p>
              <p><strong style="color:#d4af37;">Teléfono:</strong> ${safePhone}</p>
              ${safeIdioma ? `<p><strong style="color:#d4af37;">Idioma de traducción:</strong> ${safeIdioma}</p>` : ""}
              ${safeMessage ? `<p><strong style="color:#d4af37;">Mensaje:</strong><br/>${safeMessage}</p>` : ""}
              ${videoBlock}
              <hr style="border:none;border-top:1px solid #333;margin:24px 0;" />
              <p style="font-size:12px;color:#888;">Enviado desde el formulario de contacto de ETHOS Translate.</p>
            </div>
          `;

          const emailPayload: Record<string, unknown> = {
            from: "ETHOS Contact <onboarding@resend.dev>",
            to: ["ethostranslate@gmail.com"],
            reply_to: safeEmail,
            subject: `Nuevo mensaje de contacto - ${safeName}`,
            html,
          };
          if (attachments.length > 0) emailPayload.attachments = attachments;

          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify(emailPayload),
          });

          if (!res.ok) {
            const errText = await res.text();
            console.error("Resend error:", res.status, errText);
            return Response.json({ error: "No se pudo enviar el email" }, { status: 502 });
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("send-contact error:", err);
          return Response.json({ error: "Error interno" }, { status: 500 });
        }
      },
    },
  },
});