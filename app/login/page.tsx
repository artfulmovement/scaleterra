"use client";

import { useEffect, useState } from "react";
import { Nav, Footer } from "../components/Chrome";
import { supabase } from "../lib/supabase";

const SHARED_USERNAME = "scaleterra";
const SHARED_EMAIL = "scaleterra@scaleterra.ai";

const INPUT: React.CSSProperties = {
  height: 46, background: "#FFFFFF", border: "1.5px solid #E2E4EA", borderRadius: 12,
  padding: "0 14px", fontSize: 15, fontFamily: "inherit", color: "#101114", outline: "none", width: "100%",
};

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) window.location.href = "/demo/";
    });
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    const email = id.trim().toLowerCase() === SHARED_USERNAME ? SHARED_EMAIL : id.trim();
    const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
    setBusy(false);
    if (error) {
      setErr("That login didn't work. Check the username and password.");
      return;
    }
    window.location.href = "/demo/";
  }

  return (
    <div>
      <Nav />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "90px 44px 110px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: 440, maxWidth: "100%" }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C", marginBottom: 18 }}>Log in</div>
          <h1 style={{ margin: "0 0 10px", fontSize: 40, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02 }}>See the product.</h1>
          <p style={{ margin: "0 0 30px", fontSize: 16, lineHeight: 1.55, color: "#4A4E56" }}>
            Sign in to view a live-data walkthrough of the operator console — a real client month, numbers populated.
          </p>
          <form onSubmit={submit} style={{ background: "#F6F7FA", borderRadius: 26, padding: 32, display: "flex", flexDirection: "column", gap: 18 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>Username or email</span>
              <input style={INPUT} value={id} onChange={(e) => setId(e.target.value)} autoComplete="username" autoFocus />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>Password</span>
              <input style={INPUT} type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" />
            </label>
            {err && <div style={{ fontSize: 14, color: "#B4231F", lineHeight: 1.45 }}>{err}</div>}
            <button
              type="submit"
              disabled={busy || !id || !pw}
              style={{
                fontSize: 16, fontWeight: 600, color: "#FFFFFF", background: "#101114", padding: 15,
                borderRadius: 100, border: "none", cursor: busy ? "wait" : "pointer", fontFamily: "inherit",
                opacity: !id || !pw ? 0.55 : 1,
              }}
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>
            <div style={{ fontSize: 13, lineHeight: 1.5, color: "#9BA0AA", textAlign: "center" }}>
              Don&apos;t have access? <a href="/contact/" style={{ color: "#2FA85C", fontWeight: 600 }}>Book a walkthrough</a> and we&apos;ll set you up.
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
