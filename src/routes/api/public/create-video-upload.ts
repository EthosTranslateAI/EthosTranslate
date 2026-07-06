import { createFileRoute } from "@tanstack/react-router";

const MAX_UPLOAD_BYTES = 200 * 1024 * 1024; // 200 MB hard cap
const ALLOWED_MIME_PREFIX = "video/";

export const Route = createFileRoute("/api/public/create-video-upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { filename, size, contentType } = await request.json();

          if (!filename || typeof filename !== "string" || filename.length > 200) {
            return Response.json({ error: "Nombre de archivo inválido" }, { status: 400 });
          }
          if (typeof size !== "number" || !Number.isFinite(size) || size <= 0 || size > MAX_UPLOAD_BYTES) {
            return Response.json({ error: "Tamaño de archivo inválido" }, { status: 400 });
          }
          if (!contentType || typeof contentType !== "string" || !contentType.startsWith(ALLOWED_MIME_PREFIX)) {
            return Response.json({ error: "Tipo de archivo no permitido" }, { status: 400 });
          }

          const cleanName = filename.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
          const path = `contact/${crypto.randomUUID()}-${cleanName}`;

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { data, error } = await supabaseAdmin.storage
            .from("videos")
            .createSignedUploadUrl(path);

          if (error || !data) {
            console.error("createSignedUploadUrl error:", error);
            return Response.json({ error: "No se pudo preparar la subida" }, { status: 502 });
          }

          return Response.json({ path: data.path, token: data.token });
        } catch (err) {
          console.error("create-video-upload error:", err);
          return Response.json({ error: "Error interno" }, { status: 500 });
        }
      },
    },
  },
});
