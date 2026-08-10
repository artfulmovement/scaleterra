"use client";

import { useState } from "react";
import { Nav, Footer, MONO } from "../components/Chrome";
import { money } from "../lib/content";
import { FUNCTIONS_URL } from "../lib/supabase";

const EXPECT = [
  { no: "01", t: "You talk, we listen", d: "How the business runs, what you do by hand every week, and where the day disappears." },
  { no: "02", t: "We name what we'd check first", d: "Based on the sector and your size — labor against demand, price integrity, unbilled work." },
  { no: "03", t: "One month of numbers", d: "Read by an operator, not a script. Every finding carries a dollar figure." },
  { no: "04", t: "You decide", d: "Keep going with us or take the findings and act on them yourself. No annual contract." },
];

const INDUSTRY_CHIPS = ["Restaurant", "Retail", "Salon & spa", "Insurance", "Medical & dental", "Something else"];

const INPUT: React.CSSProperties = {
  height: 44, background: "#FFFFFF", border: "1.5px solid #E2E4EA", borderRadius: 12,
  padding: "0 13px", fontSize: 15, fontFamily: "inherit", color: "#101114", outline: "none", width: "100%",
};

export default function Contact() {
  const [ind, setInd] = useState(0);
  const [revenue, setRevenue] = useState(1800000);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [locations, setLocations] = useState("");
  const [note, setNote] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "busy" | "sent" | "error">("idle");

  async function submit() {
    if (status === "busy" || status === "sent") return;
    if (!name.trim() && !email.trim()) {
      setStatus("error");
      return;
    }
    setStatus("busy");
    try {
      const r = await fetch(`${FUNCTIONS_URL}/walkthrough-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, business, email, locations,
          industry: INDUSTRY_CHIPS[ind], revenue, note, website,
        }),
      });
      setStatus(r.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const submitLabel =
    status === "sent" ? "Thanks — we'll be in touch within one business day"
    : status === "busy" ? "Sending…"
    : "Request my walkthrough";

  return (
    <div>
      <Nav />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "76px 44px 88px", display: "grid", gridTemplateColumns: "minmax(400px,1fr) minmax(0,560px)", gap: 64, alignItems: "start" }}>
        {/* Left — pitch + what to expect */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Book a walkthrough</div>
          <div style={{ fontSize: "clamp(44px,5.2vw,74px)", fontWeight: 700, lineHeight: 0.96, letterSpacing: "-0.05em", textWrap: "balance" }}>One hour. We&apos;ll tell you what we&apos;d look at first.</div>
          <div style={{ fontSize: 19, lineHeight: 1.6, color: "#4A4E56", maxWidth: 560, textWrap: "pretty" }}>The overview meeting is with the operator who would run your account. We learn how your business runs and where your time is going, then take one month of your numbers and show you what we find.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, paddingTop: 8 }}>
            {EXPECT.map((e) => (
              <div key={e.no} style={{ borderTop: "1px solid #E9EBEF", padding: "20px 0", display: "flex", gap: 22, alignItems: "flex-start" }}>
                <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.1em", color: "#2FA85C", paddingTop: 4, flex: "none" }}>{e.no}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em" }}>{e.t}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.55, color: "#5B5F68", textWrap: "pretty" }}>{e.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{ background: "#F6F7FA", borderRadius: 26, padding: 36, display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.03em" }}>Tell us about your business</div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: "#5B5F68" }}>Nothing you send is shared. We&apos;ll come back with times and, if you want it, a general profit leak report for your sector.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {([
              ["Your name", name, setName, "name"],
              ["Business name", business, setBusiness, "organization"],
              ["Email", email, setEmail, "email"],
              ["Locations", locations, setLocations, "off"],
            ] as [string, string, (v: string) => void, string][]).map(([label, val, set, ac]) => (
              <label key={label} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>{label}</span>
                <input style={INPUT} value={val} onChange={(e) => set(e.target.value)} autoComplete={ac} disabled={status === "sent"} />
              </label>
            ))}
          </div>
          {/* Honeypot — hidden from humans, bots fill it */}
          <input value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: -9999, height: 1, width: 1, opacity: 0 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>Industry</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {INDUSTRY_CHIPS.map((label, n) => (
                <div
                  key={label}
                  onClick={() => setInd(n)}
                  style={{
                    fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 100, cursor: "pointer",
                    background: n === ind ? "#101114" : "#FFFFFF",
                    color: n === ind ? "#FFFFFF" : "#3D4046",
                    border: `1.5px solid ${n === ind ? "#101114" : "#E2E4EA"}`,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>Annual revenue</div>
              <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em" }}>{money(revenue)}</div>
            </div>
            <input
              type="range" min={250000} max={10000000} step={50000} value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#2FA85C", height: 4, cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9BA0AA" }}>
              <div>$250K</div><div>$10M</div>
            </div>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>What made you look into this?</span>
            <textarea
              value={note} onChange={(e) => setNote(e.target.value)} disabled={status === "sent"}
              style={{ height: 88, background: "#FFFFFF", border: "1.5px solid #E2E4EA", borderRadius: 12, padding: "10px 13px", fontSize: 15, fontFamily: "inherit", color: "#101114", outline: "none", resize: "vertical", width: "100%" }}
            />
          </label>
          <div
            onClick={submit}
            style={{
              fontSize: 16, fontWeight: 600, color: "#FFFFFF",
              background: status === "sent" ? "#101114" : "#2FA85C",
              padding: 17, borderRadius: 100, textAlign: "center",
              cursor: status === "sent" ? "default" : "pointer",
            }}
          >
            {submitLabel}
          </div>
          {status === "error" && (
            <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#B4231F", textAlign: "center" }}>
              That didn&apos;t go through — add at least a name or email and try again.
            </div>
          )}
          <div style={{ fontSize: 13, lineHeight: 1.5, color: "#9BA0AA", textAlign: "center" }}>We only win when you win. If there&apos;s nothing worth finding, you owe us nothing.</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
