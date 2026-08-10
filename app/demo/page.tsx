"use client";

import { useEffect, useState } from "react";
import { Nav, Footer } from "../components/Chrome";
import { supabase, FUNCTIONS_URL } from "../lib/supabase";

type Item = { name: string; url: string };

function labelFor(name: string): string {
  return name
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Demo() {
  const [state, setState] = useState<"loading" | "anon" | "denied" | "ready">("loading");
  const [items, setItems] = useState<Item[]>([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setState("anon");
        return;
      }
      const r = await fetch(`${FUNCTIONS_URL}/demo-access`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (r.status === 401 || r.status === 403) {
        setState("denied");
        return;
      }
      const d = await r.json().catch(() => ({ items: [] }));
      setItems(d.items ?? []);
      setState("ready");
    })();
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "/login/";
  }

  return (
    <div>
      <Nav />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "56px 44px 90px", minHeight: 480 }}>
        {state === "loading" && <div style={{ fontSize: 16, color: "#6B6F78", padding: "80px 0", textAlign: "center" }}>Loading…</div>}

        {state === "anon" && (
          <div style={{ maxWidth: 480, margin: "60px auto", textAlign: "center" }}>
            <h1 style={{ margin: "0 0 12px", fontSize: 34, fontWeight: 700, letterSpacing: "-0.035em" }}>This page needs a login.</h1>
            <p style={{ margin: "0 0 26px", fontSize: 16, lineHeight: 1.55, color: "#4A4E56" }}>The product walkthrough is available to partners and invited prospects.</p>
            <a href="/login/" style={{ display: "inline-block", fontSize: 16, fontWeight: 600, color: "#FFFFFF", background: "#101114", padding: "14px 28px", borderRadius: 100 }}>Log in</a>
          </div>
        )}

        {state === "denied" && (
          <div style={{ maxWidth: 480, margin: "60px auto", textAlign: "center" }}>
            <h1 style={{ margin: "0 0 12px", fontSize: 34, fontWeight: 700, letterSpacing: "-0.035em" }}>This account isn&apos;t on the list.</h1>
            <p style={{ margin: "0 0 26px", fontSize: 16, lineHeight: 1.55, color: "#4A4E56" }}>
              <a href="/contact/" style={{ color: "#2FA85C", fontWeight: 600 }}>Book a walkthrough</a> and we&apos;ll set you up.
            </p>
            <button onClick={signOut} style={{ fontSize: 15, fontWeight: 600, color: "#3D4046", background: "none", border: "1.5px solid #E2E4EA", padding: "12px 24px", borderRadius: 100, cursor: "pointer", fontFamily: "inherit" }}>Sign out</button>
          </div>
        )}

        {state === "ready" && (
          <>
            <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 32, flexWrap: "wrap", marginBottom: 30 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C", marginBottom: 12 }}>Product walkthrough</div>
                <h1 style={{ margin: 0, fontSize: "clamp(32px,3.4vw,46px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02 }}>The operator console, on a real client month.</h1>
              </div>
              <button onClick={signOut} style={{ fontSize: 14, fontWeight: 600, color: "#3D4046", background: "none", border: "1.5px solid #E2E4EA", padding: "10px 20px", borderRadius: 100, cursor: "pointer", fontFamily: "inherit", flex: "none" }}>Sign out</button>
            </div>

            {items.length === 0 ? (
              <div style={{ background: "#F6F7FA", borderRadius: 22, padding: "70px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 10 }}>The walkthrough capture is being prepared.</div>
                <div style={{ fontSize: 15, color: "#5B5F68" }}>You&apos;re signed in and on the list — check back shortly.</div>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {items.map((it, n) => (
                    <button
                      key={it.name}
                      onClick={() => setTab(n)}
                      style={{
                        fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 100, cursor: "pointer", fontFamily: "inherit",
                        background: n === tab ? "#101114" : "#FFFFFF",
                        color: n === tab ? "#FFFFFF" : "#3D4046",
                        border: `1.5px solid ${n === tab ? "#101114" : "#E2E4EA"}`,
                      }}
                    >
                      {labelFor(it.name)}
                    </button>
                  ))}
                </div>
                <div style={{ border: "1.5px solid #E9EBEF", borderRadius: 22, overflow: "hidden", background: "#FFFFFF" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={items[tab].url} alt={labelFor(items[tab].name)} style={{ width: "100%", display: "block" }} />
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
