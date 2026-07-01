import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/send-contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, phone } = await request.json();

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

          const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
          const RESEND_API_KEY = process.env.RESEND_API_KEY;
          if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
            return Response.json({ error: "Servicio de email no configurado" }, { status: 500 });
          }

          const safeName = name.replace(/[<>&]/g, "");
          const safeEmail = email.replace(/[<>&]/g, "");
          const safePhone = phone.replace(/[<>&]/g, "");

          const html = `
            <div style="font-family:Arial,sans-serif;background:#0a0a0a;color:#f5f5f5;padding:32px;">
              <h2 style="color:#d4af37;margin-top:0;">Nuevo mensaje de contacto</h2>
              <p><strong style="color:#d4af37;">Nombre:</strong> ${safeName}</p>
              <p><strong style="color:#d4af37;">Email:</strong> ${safeEmail}</p>
              <p><strong style="color:#d4af37;">Teléfono:</strong> ${safePhone}</p>
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
