import { createFileRoute } from "@tanstack/react-router";

const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024; // 25 MB (Gmail limit)

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
          const SUPABASE_URL = process.env.SUPABASE_URL;
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

          if (videoPath && SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
            const encodedPath = videoPath.split("/").map(encodeURIComponent).join("/");
            const storageHeaders = {
              apikey: SUPABASE_SERVICE_ROLE_KEY,
              Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            };
            const SUPABASE_SERVICE_ROLE_JWT = process.env.SERVICE_ROLE_JWT;

            // 1) Try to download the file so we can attach it directly
            let attached = false;
            let fileSize = 0;
            try {
              const dlRes = await fetch(
                `${SUPABASE_URL}/storage/v1/object/videos/${encodedPath}`,
                { headers: storageHeaders },
              );
              if (!dlRes.ok) {
                const errText = await dlRes.text();
                console.error("storage download failed:", dlRes.status, errText);
                videoBlock = `<p style="color:#e0645a;font-size:12px;"><strong>DEBUG download:</strong> status ${dlRes.status} — ${errText.replace(/[<>&]/g, "")}</p>`;
              } else {
                const contentLength = Number(dlRes.headers.get("content-length") || 0);
                if (contentLength && contentLength > MAX_ATTACHMENT_BYTES) {
                  fileSize = contentLength;
                } else {
                  const buf = await dlRes.arrayBuffer();
                  fileSize = buf.byteLength;
                  if (buf.byteLength <= MAX_ATTACHMENT_BYTES) {
                    const filename = videoPath.split("/").pop() || "video.mp4";
                    attachments.push({
                      filename,
                      content: arrayBufferToBase64(buf),
                    });
                    attached = true;
                    videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> adjunto al correo (<code>${filename}</code> · ${(buf.byteLength / (1024 * 1024)).toFixed(1)} MB)</p>`;
                  }
                }
              }
            } catch (e) {
              console.error("download exception:", e);
            }

            // 2) If not attached (too large or download failed), generate a signed URL
            if (!attached) {
              try {
                const signRes = await fetch(
                 `${SUPABASE_URL}/storage/v1/object/sign/videos/${encodedPath}`,
                  {
                    method: "POST",
                    headers: {
                      apikey: SERVICE_ROLE_JWT!,
                      Authorization: `Bearer ${SERVICE_ROLE_JWT}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ expiresIn: 60 * 60 * 24 * 7 }),
                  },
                );
                if (!signRes.ok) {
                  const errText = await signRes.text();
                  console.error("sign url failed:", signRes.status, errText);
                  videoBlock = `<p><strong style="color:#d4af37;">Video:</strong> subido a <code>${videoPath}</code> (no se pudo generar el enlace firmado)</p>
                  <p style="color:#e0645a;font-size:12px;"><strong>DEBUG sign:</strong> status ${signRes.status} — ${errText.replace(/[<>&]/g, "")}</p>`;
                } else {
                  const { signedURL, signedUrl } = await signRes.json();
                  const path = signedURL || signedUrl;
                  const fullUrl = path?.startsWith("http") ? path : `${SUPABASE_URL}/storage/v1${path}`;
                  const sizeNote = fileSize > MAX_ATTACHMENT_BYTES
                    ? `<p style="color:#e0b84a;">⚠️ El video pesa ${(fileSize / (1024 * 1024)).toFixed(1)} MB y supera el límite de 25 MB de Gmail, así que no se pudo adjuntar. Descárgalo desde el enlace:</p>`
                    : `<p style="color:#e0b84a;">⚠️ No se pudo adjuntar el archivo. Descárgalo desde el enlace:</p>`;
                  videoBlock = `${sizeNote}<p><strong style="color:#d4af37;">Video (enlace firmado):</strong><br/><a href="${fullUrl}" style="color:#d4af37;">${fullUrl}</a><br/><span style="font-size:12px;color:#888;">Válido durante 7 días.</span></p>`;
                }
              } catch (e) {
                console.error("sign url exception:", e);
              }
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
