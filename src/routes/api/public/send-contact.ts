import { createFileRoute } from "@tanstack/react-router";
// force redeploy to pick up SERVICE_ROLE_JWT

const SUPABASE_STORAGE_URL = "https://rzqtkuwvitknnkdlnrxi.supabase.co";

function arrayBufferToBase64(buf: ArrayBuffer): string {
  // Chunked to avoid call-stack overflows on large files
  const bytes = new Uint8Array(buf);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + chunkSize)) as unknown as number[],
    );
  }
  return btoa(binary);
}

export const Route = createFileRoute("/api/public/send-contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, phone, message, videoPath, videoLink } = await request.json();

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
          const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
          if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
            return Response.json({ error: "Servicio de email no configurado" }, { status: 500 });
          }

          const safeName = String(name).replace(/[<>&]/g, "");
          const safeEmail = String(email).replace(/[<>&]/g, "");
          const safePhone = String(phone).replace(/[<>&]/g, "");
          const safeMessage = message ? String(message).replace(/[<>&]/g, "").replace(/\n/g, "<br/>") : "";

          let videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> <span style="color:#888;">— no adjuntado —</span></p>`;
          const attachments: Array<{ filename: string; content: string }> = [];

          if (videoPath && SUPABASE_SERVICE_ROLE_KEY) {
  const encodedPath = videoPath.split("/").map(encodeURIComponent).join("/");
  const storageHeaders = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
  };

  try {
    const dlRes = await fetch(
      `${SUPABASE_STORAGE_URL}/storage/v1/object/videos/${encodedPath}`,
      { headers: storageHeaders },
    );
    if (!dlRes.ok) {
      console.error("storage download failed:", dlRes.status, await dlRes.text());
      videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> se subió pero no se pudo adjuntar al correo. Ruta: <code>${videoPath}</code></p>`;
    } else {
      const buf = await dlRes.arrayBuffer();
      const filename = videoPath.split("/").pop() || "video.mp4";
      attachments.push({
        filename,
        content: arrayBufferToBase64(buf),
      });
      videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> adjunto al correo (<code>${filename}</code> · ${(buf.byteLength / (1024 * 1024)).toFixed(1)} MB)</p>`;
    }
  } catch (e) {
    console.error("download exception:", e);
    videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> se subió pero hubo un error al adjuntarlo. Ruta: <code>${videoPath}</code></p>`;
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