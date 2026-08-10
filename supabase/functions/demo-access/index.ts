import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

const SHARED_DEMO_EMAIL = "scaleterra@scaleterra.ai";

Deno.serve(async (req) => {
  const cors = corsHeaders(req);
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  const auth = req.headers.get("Authorization") ?? "";
  const userClient = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: auth } },
  });
  const { data: { user }, error: userErr } = await userClient.auth.getUser();
  if (userErr || !user?.email) {
    return new Response(JSON.stringify({ error: "not signed in" }), { status: 401, headers: { ...cors, "Content-Type": "application/json" } });
  }

  const email = user.email.toLowerCase();
  const allowlist = (Deno.env.get("DEMO_ALLOWLIST") ?? "")
    .split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  if (email !== SHARED_DEMO_EMAIL && !allowlist.includes(email)) {
    return new Response(JSON.stringify({ error: "not authorized" }), { status: 403, headers: { ...cors, "Content-Type": "application/json" } });
  }

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: files, error: listErr } = await admin.storage.from("messina-demo").list("", { limit: 100, sortBy: { column: "name", order: "asc" } });
  if (listErr) {
    console.error("bucket list failed:", listErr.message);
    return new Response(JSON.stringify({ error: "list failed" }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
  }

  const items = [];
  for (const f of files ?? []) {
    if (f.name.startsWith(".")) continue;
    const { data: signed } = await admin.storage.from("messina-demo").createSignedUrl(f.name, 3600);
    if (signed?.signedUrl) items.push({ name: f.name, url: signed.signedUrl });
  }

  return new Response(JSON.stringify({ ok: true, items }), { headers: { ...cors, "Content-Type": "application/json" } });
});
