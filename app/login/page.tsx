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

  async function google() {
    setErr("");
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "https://scaleterra.ai/demo/" },
    });
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
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ flex: 1, height: 1, background: "#E2E4EA" }} />
              <span style={{ fontSize: 12, color: "#9BA0AA", textTransform: "uppercase", letterSpacing: "0.08em" }}>or</span>
              <div style={{ flex: 1, height: 1, background: "#E2E4EA" }} />
            </div>
            <button
              type="button"
              onClick={google}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                fontSize: 15, fontWeight: 600, color: "#101114", background: "#FFFFFF",
                padding: 14, borderRadius: 100, border: "1.5px solid #E2E4EA", cursor: "pointer", fontFamily: "inherit",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              Continue with Google
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
