"use client";

import { useState } from "react";
import { Nav, Footer, MONO } from "../components/Chrome";
import { money } from "../lib/content";

const EXPECT = [
  { no: "01", t: "You talk, we listen", d: "How the business runs, what you do by hand every week, and where the day disappears." },
  { no: "02", t: "We name what we'd check first", d: "Based on the sector and your size — labor against demand, price integrity, unbilled work." },
  { no: "03", t: "One month of numbers", d: "Read by an operator, not a script. Every finding carries a dollar figure." },
  { no: "04", t: "You decide", d: "Keep going with us or take the findings and act on them yourself. No annual contract." },
];

const FIELDS = ["Your name", "Business name", "Email", "Locations"];
const INDUSTRY_CHIPS = ["Restaurant", "Retail", "Salon & spa", "Insurance", "Medical & dental", "Something else"];

export default function Contact() {
  const [ind, setInd] = useState(0);
  const [revenue, setRevenue] = useState(1800000);

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
            {FIELDS.map((f) => (
              <div key={f} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>{f}</div>
                <div style={{ height: 44, background: "#FFFFFF", border: "1.5px solid #E2E4EA", borderRadius: 12 }} />
              </div>
            ))}
          </div>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>What made you look into this?</div>
            <div style={{ height: 88, background: "#FFFFFF", border: "1.5px solid #E2E4EA", borderRadius: 12 }} />
          </div>
          {/* Submit intentionally non-wired: no backend / destination yet. */}
          <div style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", background: "#2FA85C", padding: 17, borderRadius: 100, textAlign: "center", cursor: "default", opacity: 0.85 }}>Request my walkthrough</div>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: "#9BA0AA", textAlign: "center" }}>We only win when you win. If there&apos;s nothing worth finding, you owe us nothing.</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
