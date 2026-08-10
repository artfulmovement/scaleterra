import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

Deno.serve(async (req) => {
  const cors = corsHeaders(req);
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return new Response("method not allowed", { status: 405, headers: cors });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "bad json" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
  }

  // Honeypot: real users never fill this hidden field.
  if (typeof body.website === "string" && body.website.length > 0) {
    return new Response(JSON.stringify({ ok: true }), { headers: { ...cors, "Content-Type": "application/json" } });
  }

  const s = (v: unknown, max = 300) => (typeof v === "string" ? v.slice(0, max).trim() : null);
  const lead = {
    name: s(body.name),
    business: s(body.business),
    email: s(body.email),
    locations: s(body.locations, 60),
    industry: s(body.industry, 60),
    revenue: typeof body.revenue === "number" && isFinite(body.revenue) ? Math.round(body.revenue) : null,
    note: s(body.note, 2000),
  };
  if (!lead.email && !lead.name) {
    return new Response(JSON.stringify({ error: "name or email required" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
  }

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { error } = await supabase.from("leads").insert(lead);
  if (error) {
    console.error("lead insert failed:", error.message);
    return new Response(JSON.stringify({ error: "store failed" }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
  }

  let tg = "skipped";
  const token = Deno.env.get("TG_BOT_TOKEN");
  const chatId = Deno.env.get("TG_CHAT_ID");
  if (token && chatId) {
    const fmt = (n: number | null) => (n == null ? "—" : n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${Math.round(n / 1e3)}K`);
    const text = [
      "🟢 New walkthrough request — scaleterra.ai",
      "",
      `Name: ${lead.name ?? "—"}`,
      `Business: ${lead.business ?? "—"}`,
      `Email: ${lead.email ?? "—"}`,
      `Industry: ${lead.industry ?? "—"} · Locations: ${lead.locations ?? "—"}`,
      `Annual revenue: ${fmt(lead.revenue)}`,
      lead.note ? `\nWhy now: ${lead.note}` : "",
    ].join("\n");
    try {
      const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      tg = r.ok ? "sent" : `failed:${r.status}`;
      if (!r.ok) console.error("telegram send failed:", await r.text());
    } catch (e) {
      tg = "failed";
      console.error("telegram send threw:", e);
    }
  }

  return new Response(JSON.stringify({ ok: true, tg }), { headers: { ...cors, "Content-Type": "application/json" } });
});
