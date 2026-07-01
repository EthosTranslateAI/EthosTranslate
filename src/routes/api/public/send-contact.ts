import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/send-contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, phone, message, videoPath, videoLink } = await request.json();

          // Server-side validation
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
          if (videoPath && (typeof videoPath !== "string" || videoPath.length > 500)) {
            return Response.json({ error: "Ruta de video inválida" }, { status: 400 });
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

          // Build the video block: signed URL for uploaded files (7 days),
          // or the raw link the user pasted.
          let videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> <span style="color:#888;">— no adjuntado —</span></p>`;
          if (videoPath) {
            try {
              const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
              const { data, error } = await supabaseAdmin
                .storage
                .from("videos")
                .createSignedUrl(videoPath, 60 * 60 * 24 * 7); // 7 días
              if (error || !data?.signedUrl) {
                console.error("createSignedUrl error:", error);
                videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> subido a <code>${videoPath}</code> (no se pudo generar el enlace firmado)</p>`;
              } else {
                videoBlock = `<p><strong style="color:#d4af37;">Video (archivo subido):</strong><br/><a href="${data.signedUrl}" style="color:#d4af37;">${data.signedUrl}</a><br/><span style="font-size:12px;color:#888;">Enlace válido durante 7 días.</span></p>`;
              }
            } catch (e) {
              console.error("signed url exception:", e);
            }
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
              ${safeMessage ? `<p><strong style="color:#d4af37;">Mensaje:</strong><br/>${safeMessage}</p>` : ""}
              ${videoBlock}
              <hr style="border:none;border-top:1px solid #333;margin:24px 0;" />
              <p style="font-size:12px;color:#888;">Enviado desde el formulario de contacto de ETHOS Translate.</p>
            </div>
          `;

          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify({
              from: "ETHOS Contact <onboarding@resend.dev>",
              to: ["ethostranslate@gmail.com"],
              reply_to: safeEmail,
              subject: `Nuevo mensaje de contacto - ${safeName}`,
              html,
            }),
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
