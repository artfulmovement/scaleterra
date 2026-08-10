"use client";

import { useEffect, useRef, useState } from "react";
import {
  INDUSTRIES,
  TICKER,
  STATS,
  INTEGRATIONS,
  SERVICES,
  LEDGER,
  SEGMENTS,
  money,
} from "./lib/content";

const MONO = "ui-monospace,SFMono-Regular,Menlo,monospace";

function Wordmark({ size = 22, dotSize = 33 }: { size?: number; dotSize?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", fontSize: size, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1 }}>
      scale<span style={{ color: "#2FA85C" }}>terra</span>
      <span style={{ fontSize: dotSize, lineHeight: 0, position: "relative", top: 1, marginLeft: 1 }}>.</span>
    </div>
  );
}

const STEPS = [
  { when: "Hour one", t: "One hour to understand your business", d: "A single overview meeting. We learn how the business actually runs, then plug into the point of sale, scheduling, calendar and books you already use. Nothing new to install.", hours: "1", hoursNote: "Overview meeting", bar: "5%", barNote: "Margin recovered" },
  { when: "Week one", t: "We find the leaks", d: "Where labor drifts past what the work justifies. Where discounts and fees stack up. The money that never shows until the monthly close.", hours: "0", hoursNote: "Nothing asked of you", bar: "38%", barNote: "Leaks priced and ranked" },
  { when: "Weeks two to four", t: "We take the repetitive work off you", d: "The counting, reconciling and reporting you redo every week gets automated or handed to us — about 28 hours a month back.", hours: "0", hoursNote: "28 hrs/mo handed back", bar: "74%", barNote: "Fixes in place" },
  { when: "Ongoing", t: "You keep the margin", d: "Plain-language calls you can act on this week, and a partner who checks the numbers with you. Dollars kept, not a wall of charts.", hours: "0", hoursNote: "We watch it for you", bar: "100%", barNote: "Held and monitored" },
];

export default function Home() {
  const [revenue, setRevenue] = useState(1800000);
  const [ind, setInd] = useState(0);
  const [tick, setTick] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  const spinStart = () => {
    if (timer.current) clearInterval(timer.current);
    setSpinning(true);
    timer.current = setInterval(() => setTick((t) => (t + 1) % TICKER.length), 520);
  };
  const spinStop = () => {
    if (timer.current) clearInterval(timer.current);
    setSpinning(false);
  };
  const pickDot = (n: number) => {
    if (timer.current) clearInterval(timer.current);
    setTick(n);
    setSpinning(false);
  };

  const industry = INDUSTRIES[ind];
  const lo = revenue * industry.lo;
  const hi = revenue * industry.hi;
  const mid = (lo + hi) / 2;
  const leak = TICKER[tick];
  const revenueLabel = money(revenue);

  return (
    <div style={{ background: "#FFFFFF", color: "#101114" }}>
      {/* NAV */}
      <div style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid #EDEEF1" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "18px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
          <a href="/" style={{ display: "flex", flexDirection: "column", gap: 4, flex: "none", color: "#101114" }}>
            <Wordmark />
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6F78", whiteSpace: "nowrap" }}>Ops intelligence, sharpened</div>
          </a>
          <div data-nav="1" style={{ display: "flex", gap: 28, fontSize: 15, fontWeight: 500, color: "#3D4046", whiteSpace: "nowrap", flex: "none" }}>
            <a href="/what-we-do/" style={{ color: "#3D4046" }}>What we do</a>
            <a href="/industries/" style={{ color: "#3D4046" }}>Industries</a>
            <a href="/results/" style={{ color: "#3D4046" }}>Results</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flex: "none" }}>
            <a href="/login/" style={{ fontSize: 15, fontWeight: 500, color: "#3D4046", whiteSpace: "nowrap" }}>Log in</a>
            <a href="/contact/" style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", background: "#101114", padding: "12px 22px", borderRadius: 100, whiteSpace: "nowrap" }}>Book a walkthrough</a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "64px 44px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(420px,1fr) minmax(0,620px)", gap: 56, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 30, position: "relative", paddingTop: 6, minWidth: 0 }}>
            <div style={{ position: "absolute", inset: "-24px -16px auto -16px", height: 420, overflow: "hidden", pointerEvents: "none", opacity: spinning ? 0.16 : 0, transition: "opacity 320ms ease", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "8px 24px", alignContent: "start", fontSize: 14, fontWeight: 500, color: "#2FA85C" }}>
              {TICKER.map((t, i) => (
                <div key={i} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.text}</div>
              ))}
            </div>
            <div style={{ position: "relative", display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, background: "#E8F8EE", borderRadius: 100, padding: "9px 18px" }}>
              <div style={{ width: 7, height: 7, borderRadius: 100, background: "#2FA85C" }} />
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.02em", color: "#2FA85C" }}>Ops intelligence for independent business · 50+ yrs operating</div>
            </div>
            <div style={{ position: "relative", fontSize: "clamp(48px,6.2vw,88px)", fontWeight: 700, lineHeight: 0.94, letterSpacing: "-0.05em", textWrap: "balance" }}>
              You&apos;re already making the money. <span style={{ color: "#2FA85C" }}>You&apos;re just losing some of it.</span>
            </div>
            <div style={{ position: "relative", fontSize: 20, lineHeight: 1.55, color: "#4A4E56", maxWidth: 560, textWrap: "pretty" }}>
              We have run and sold businesses like yours, so we understand your operation in days, not quarters. We find the money leaking out of your costs, the revenue you&apos;re losing to prices set too low and marketing that doesn&apos;t pay for itself, and we automate the work you redo every week. You get back your margin and your time.
            </div>
            <div style={{ position: "relative", display: "flex", gap: 12, alignItems: "center" }}>
              <a href="/contact/" style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", background: "#2FA85C", padding: "17px 30px", borderRadius: 100 }}>Book a walkthrough</a>
              <a href="/what-we-do/" style={{ fontSize: 16, fontWeight: 600, color: "#101114", border: "1.5px solid #DCDEE4", padding: "15px 28px", borderRadius: 100 }}>See how it works</a>
            </div>
          </div>

          {/* PROFIT LEAK SCANNER */}
          <div onMouseEnter={spinStart} onMouseLeave={spinStop} style={{ position: "relative", boxSizing: "border-box", width: "100%", maxWidth: 620, aspectRatio: "1/1", minHeight: 520, marginBottom: 58, background: "#0B0C0E", borderRadius: 32, padding: 7, cursor: "default", boxShadow: "0 44px 100px -24px rgba(11,12,14,0.55)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(520px 420px at 78% 8%, rgba(47,168,92,0.34), transparent 72%)", opacity: spinning ? 1 : 0.45, transition: "opacity 400ms ease", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />
            <div style={{ position: "relative", height: "100%", border: "1px solid #23262B", borderRadius: 26, overflow: "hidden", display: "flex", flexDirection: "column", background: "transparent" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "22px 26px 20px", borderBottom: "1px solid #1C1F24", background: "rgba(11,12,14,0.6)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5FD693" }}>What we find most</div>
                  <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1, color: "#FFFFFF" }}>Profit Leak Scanner</div>
                </div>
                <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5FD693" }}>{spinning ? "Scanning" : "Live scan"}</div>
              </div>
              <div style={{ position: "relative", flex: 1, padding: "36px 34px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, minWidth: 0 }}>
                <div style={{ position: "absolute", left: 0, right: 0, top: 12 + (tick % 6) * 62, height: 2, background: "linear-gradient(90deg, transparent, rgba(95,214,147,0.85), transparent)", opacity: spinning ? 1 : 0, transition: "top 460ms cubic-bezier(.4,0,.2,1), opacity 300ms ease", pointerEvents: "none" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#0B0C0E", background: "#5FD693", borderRadius: 100, padding: "6px 13px", whiteSpace: "nowrap" }}>{leak.cat}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#8FE0B0", border: "1px solid #2C4A38", borderRadius: 100, padding: "5px 12px", whiteSpace: "nowrap" }}>{leak.who}</div>
                  </div>
                  <div style={{ fontSize: "clamp(34px,3.6vw,54px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.98, color: "#FFFFFF", textWrap: "balance" }}>{leak.text}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ fontSize: 15, lineHeight: 1.55, color: "#8B909A", textWrap: "pretty" }}>{leak.note}</div>
                  <div style={{ height: 1, background: "#1C1F24" }} />
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                      <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A8089" }}>Costs about</div>
                      <div style={{ fontSize: "clamp(30px,2.9vw,42px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, color: "#5FD693", whiteSpace: "nowrap" }}>{leak.cost}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, height: 22 }}>
                      {TICKER.map((_, n) => (
                        <div key={n} onMouseEnter={() => pickDot(n)} style={{ width: 3, borderRadius: 100, cursor: "pointer", background: n === tick ? "#5FD693" : "#33363D", height: 16, transition: "background 180ms ease" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: -58, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <div style={{ width: 7, height: 7, borderRadius: 100, background: "#2FA85C", boxShadow: `0 0 0 ${spinning ? "9px" : "4px"} rgba(47,168,92,0.18)`, transition: "box-shadow 300ms ease", flex: "none" }} />
              <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.01em", color: "#4A4E56", whiteSpace: "nowrap" }}>{spinning ? "Scanning the most common leaks" : "Hover to scan the leaks"}</div>
            </div>
          </div>
        </div>

        {/* IMAGE + LEAK ESTIMATOR */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(380px,1fr) minmax(0,460px)", gap: 32, paddingTop: 40, alignItems: "stretch" }}>
          <div style={{ borderRadius: 24, overflow: "hidden", background: "repeating-linear-gradient(135deg,#F2F3F7 0 11px,#F8F9FB 11px 22px)", display: "flex", alignItems: "flex-end", padding: 20, minHeight: 340 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, color: "#6B6F78", background: "#FFFFFF", borderRadius: 8, padding: "9px 12px" }}>owner mid-service, bright and busy — 1600×900</div>
          </div>
          <div style={{ background: "#F6F7FA", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2FA85C" }}>Leak estimator</div>
              <div style={{ fontSize: 13, color: "#6B6F78" }}>Live · 60 seconds</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {INDUSTRIES.map((c, n) => {
                const active = n === ind;
                return (
                  <div key={c.id} onClick={() => setInd(n)} style={{ fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 100, cursor: "pointer", background: active ? "#101114" : "#FFFFFF", color: active ? "#FFFFFF" : "#3D4046", border: `1.5px solid ${active ? "#101114" : "#E2E4EA"}` }}>{c.label}</div>
                );
              })}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 15, color: "#4A4E56" }}>Annual revenue</div>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>{revenueLabel}</div>
              </div>
              <input type="range" min={250000} max={10000000} step={50000} value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} style={{ width: "100%", accentColor: "#2FA85C", height: 4, cursor: "pointer" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9BA0AA" }}>
                <div>$250K</div><div>$10M</div>
              </div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: 18, padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 14, color: "#6B6F78" }}>Typical margin we find in {industry.name}</div>
              <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, color: "#2FA85C" }}>{money(lo)} – {money(hi)}</div>
              <div style={{ fontSize: 14, color: "#6B6F78" }}>per year, based on {industry.note}</div>
              <div style={{ borderTop: "1px solid #E2E4EA", paddingTop: 14, marginTop: 6, display: "flex", flexDirection: "column", gap: 9 }}>
                {industry.split.map(([label, share]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15 }}>
                    <div style={{ color: "#4A4E56" }}>{label}</div>
                    <div style={{ fontWeight: 600 }}>{money(mid * share)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div onClick={() => setModalOpen(true)} style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", background: "#101114", padding: 16, borderRadius: 100, textAlign: "center", cursor: "pointer" }}>Send me a profit leak report</div>
            <div style={{ fontSize: 13, lineHeight: 1.5, color: "#9BA0AA" }}>An estimate, not a promise. The walkthrough uses your actual month.</div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(11,12,14,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: 32, overflowY: "auto" }}>
          <div style={{ width: "100%", maxWidth: 620, margin: "auto", maxHeight: "calc(100vh - 64px)", background: "#FFFFFF", borderRadius: 26, overflowY: "auto", boxShadow: "0 40px 90px -20px rgba(11,12,14,0.5)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, padding: "32px 34px 0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Profit leak report</div>
                <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, textWrap: "pretty" }}>Where your margin is most likely going</div>
                <div style={{ fontSize: 16, lineHeight: 1.55, color: "#5B5F68", textWrap: "pretty" }}>A short report for {industry.name} at {revenueLabel} in revenue — the leaks we see most often, what they typically cost, and what we&apos;d look at first. No call required.</div>
              </div>
              <div onClick={() => setModalOpen(false)} style={{ fontSize: 22, fontWeight: 500, color: "#6B6F78", cursor: "pointer", lineHeight: 1, padding: "4px 6px" }}>×</div>
            </div>
            <div style={{ padding: "26px 34px 34px", display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
                {["Your name", "Business name", "Email", "Locations"].map((f) => (
                  <div key={f} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>{f}</div>
                    <div style={{ height: 44, border: "1.5px solid #E2E4EA", borderRadius: 12 }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>Industry</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {INDUSTRIES.map((c, n) => {
                    const active = n === ind;
                    return <div key={c.id} onClick={() => setInd(n)} style={{ fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 100, cursor: "pointer", background: active ? "#101114" : "#FFFFFF", color: active ? "#FFFFFF" : "#3D4046", border: `1.5px solid ${active ? "#101114" : "#E2E4EA"}` }}>{c.label}</div>;
                  })}
                  <div style={{ fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 100, background: "#FFFFFF", color: "#6B6F78", border: "1.5px solid #E2E4EA" }}>Something else</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#6B6F78" }}>Anything you already suspect is leaking</div>
                <div style={{ height: 76, border: "1.5px solid #E2E4EA", borderRadius: 12 }} />
              </div>
              <div onClick={() => setModalOpen(false)} style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", background: "#2FA85C", padding: 16, borderRadius: 100, textAlign: "center", cursor: "pointer" }}>Send my report</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: "#9BA0AA", textAlign: "center" }}>Arrives by email within one business day. We don&apos;t share your numbers with anyone.</div>
            </div>
          </div>
        </div>
      )}

      {/* STATS */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 44px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ borderTop: "2px solid #101114", paddingTop: 20 }}>
              <div style={{ fontSize: 52, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 15, lineHeight: 1.45, color: "#5B5F68", paddingTop: 12 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <div style={{ backgroundColor: "#F6F7FA", backgroundImage: "radial-gradient(rgba(16,17,20,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "104px 44px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, paddingBottom: 52 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>What we do</div>
              <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", textWrap: "pretty" }}>Margin has two sides. We work both.</div>
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.6, color: "#4A4E56", textWrap: "pretty", alignSelf: "end" }}>It leaves in a hundred small ones, and it takes an operator&apos;s eye to see them in a week rather than a year. An extra shift revenue didn&apos;t need. A discount that quietly became the default. A vendor price that crept up three months ago. None of it shows on any single day — it shows at the monthly close, after it&apos;s gone. The other side is revenue you already earned the right to: pricing left untested, marketing spend nobody attributes, demand your schedule never captures. We read both, then automate whatever repeats.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {SERVICES.map((c) => (
              <div key={c.no} style={{ background: "#FFFFFF", borderRadius: 20, padding: "34px 30px", display: "flex", flexDirection: "column", gap: 12, minHeight: 212 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#2FA85C" }}>{c.no}</div>
                <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.025em" }}>{c.t}</div>
                <div style={{ fontSize: 16, lineHeight: 1.55, color: "#5B5F68", textWrap: "pretty" }}>{c.d}</div>
                <div style={{ marginTop: "auto", fontSize: 15, fontWeight: 600, color: "#2FA85C" }}>{c.link}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, background: "#FFFFFF", borderRadius: 20, padding: "30px 34px", display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B6F78" }}>Reads the systems you already run on</div>
              <div style={{ fontSize: 15, color: "#5B5F68" }}>Nothing new to install · read-only by default</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
              {INTEGRATIONS.map((g) => (
                <div key={g.id} style={{ height: 104, borderRadius: 12, border: "1px dashed #DDE0E6", display: "flex", alignItems: "center", justifyContent: "center", background: "#FBFCFD" }}>
                  <span style={{ fontFamily: MONO, fontSize: 11, color: "#9BA0AA" }}>{g.placeholder}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "104px 44px" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 48, paddingBottom: 44 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 680 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Results</div>
            <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", textWrap: "pretty" }}>One $2.5M operator. Five months. Same revenue, same doors open.</div>
          </div>
          <div style={{ maxWidth: 360, fontSize: 17, lineHeight: 1.6, color: "#4A4E56" }}>13% out of labor cost, 4% out of COGS, and a 22% EBITDA lift from new revenue in the reworked model — plus 28 hours a month of manual work handed back to the owner.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 28, alignItems: "stretch" }}>
          <div style={{ background: "#F6F7FA", borderRadius: 24, padding: "36px 34px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "grid", gridTemplateColumns: "76px 1fr 110px", gap: 16, paddingBottom: 12, borderBottom: "1px solid #E2E4EA", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6B6F78" }}>
              <div>Month</div><div>Labor as share of revenue</div><div style={{ textAlign: "right" }}>Kept</div>
            </div>
            {LEDGER.map((r) => (
              <div key={r.mo} style={{ display: "grid", gridTemplateColumns: "76px 1fr 110px", gap: 16, alignItems: "center", padding: "20px 0", borderBottom: "1px solid #E2E4EA" }}>
                <div style={{ fontSize: 17, fontWeight: 600 }}>{r.mo}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ height: 8, borderRadius: 100, flex: 1, background: "#E2E4EA", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, borderRadius: 100, width: r.w, background: "#2FA85C" }} />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 600, width: 66, textAlign: "right" }}>{r.pct}</div>
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#2FA85C", textAlign: "right" }}>{r.kept}</div>
              </div>
            ))}
            <div style={{ fontSize: 16, color: "#5B5F68", paddingTop: 20 }}>Down 26 points in five months, with no revenue and no quality lost.</div>
          </div>
          <div style={{ background: "#101114", borderRadius: 24, padding: "36px 34px", display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
            <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.045em", color: "#FFFFFF", lineHeight: 1 }}>$186,400</div>
            <div style={{ fontSize: 15, color: "#9BA0AA" }}>Annualized margin returned, plus 28 hrs/month of manual work off the owner&apos;s plate</div>
            <div style={{ borderTop: "1px solid #2C2F36", paddingTop: 20, marginTop: 8, fontSize: 19, lineHeight: 1.5, color: "#E8E9EC", textWrap: "pretty" }}>We only win when you win. If there&apos;s nothing worth finding, you owe us nothing.</div>
          </div>
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={{ backgroundColor: "#F6F7FA", backgroundImage: "radial-gradient(rgba(16,17,20,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "104px 44px" }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 48, paddingBottom: 44 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Industries</div>
              <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", textWrap: "pretty" }}>Any thin-margin operation. The same leaks.</div>
            </div>
            <div style={{ maxWidth: 400, fontSize: 17, lineHeight: 1.6, color: "#4A4E56" }}>Thin margins, hourly labor, and messy data behave the same way across sectors. Wherever a small team runs the day, the same money goes missing.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
            {SEGMENTS.map((s) => (
              <div key={s.t} style={{ background: "#FFFFFF", borderRadius: 18, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, minHeight: 206 }}>
                <div style={{ fontSize: 21, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{s.t}</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: "#5B5F68", textWrap: "pretty" }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ backgroundColor: "#101114", backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(180deg, rgba(47,168,92,0.10), transparent 42%)", backgroundSize: "22px 22px, 100% 100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "104px 44px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "end", paddingBottom: 64 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5FD693" }}>How it works</div>
              <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", color: "#FFFFFF", textWrap: "pretty" }}>You keep running your business. We watch the margin.</div>
            </div>
            <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40 }}>
              <div style={{ maxWidth: 380, fontSize: 17, lineHeight: 1.6, color: "#9197A1", textWrap: "pretty" }}>One hour of your time at the start. After that the work moves off your plate and the margin moves back onto it.</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: "none" }}>
                <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.045em", color: "#5FD693", lineHeight: 1 }}>28 hrs</div>
                <div style={{ fontSize: 14, color: "#6B6F78" }}>Returned to the owner each month</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                  <div style={{ width: 44, height: 44, flex: "none", borderRadius: 100, border: "1.5px solid #2FA85C", background: "#16181C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#5FD693" }}>{i + 1}</div>
                  <div style={{ flex: 1, height: 1.5, background: i === 3 ? "linear-gradient(90deg,#2A2E35,rgba(42,46,53,0))" : "linear-gradient(90deg,#2FA85C,#2A2E35)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingRight: 34 }}>
                  <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5FD693" }}>{step.when}</div>
                  <div style={{ fontSize: 27, fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#FFFFFF", textWrap: "pretty" }}>{step.t}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.6, color: "#9197A1", textWrap: "pretty" }}>{step.d}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid #24272D", paddingTop: 20, marginTop: "auto", marginRight: 34 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6F78" }}>Your hours</div>
                    <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.03em", color: "#FFFFFF", whiteSpace: "nowrap" }}>{step.hours}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "#6B6F78" }}>{step.hoursNote}</div>
                  <div style={{ height: 8, borderRadius: 100, background: "#22252A", overflow: "hidden" }}>
                    <div style={{ width: step.bar, height: "100%", borderRadius: 100, background: "linear-gradient(90deg,#2FA85C,#5FD693)" }} />
                  </div>
                  <div style={{ fontSize: 12, color: "#6B6F78" }}>{step.barNote}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "104px 44px" }}>
        <div style={{ background: "#2FA85C", borderRadius: 28, padding: "76px 64px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 60, fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.04em", color: "#FFFFFF", textWrap: "pretty" }}>Find out what&apos;s leaking out of yours.</div>
            <div style={{ fontSize: 19, lineHeight: 1.6, color: "#CDEEDB", maxWidth: 520, textWrap: "pretty" }}>Tell us a bit about your business. We&apos;ll take one month of your numbers and show you what we find. If there&apos;s nothing worth finding, we&apos;ll tell you that too.</div>
          </div>
          <div style={{ background: "#FFFFFF", borderRadius: 20, padding: 34, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2FA85C" }}>Request a walkthrough</div>
            {["Your name", "Business name", "Type of business", "Email or phone"].map((f) => (
              <div key={f} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#6B6F78" }}>{f}</div>
                <div style={{ height: 1, background: "#E2E4EA" }} />
              </div>
            ))}
            <div style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", background: "#101114", padding: 16, borderRadius: 100, textAlign: "center", marginTop: 8 }}>Send</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #EDEEF1" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: 44, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: "none" }}>
            <Wordmark size={20} dotSize={30} />
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6F78", whiteSpace: "nowrap" }}>Ops intelligence, sharpened</div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 15, color: "#3D4046", flexWrap: "wrap" }}>
            <a href="/what-we-do/" style={{ color: "#3D4046" }}>What we do</a>
            <a href="/industries/" style={{ color: "#3D4046" }}>Industries</a>
            <a href="/results/" style={{ color: "#3D4046" }}>Results</a>
            <a href="/contact/" style={{ color: "#3D4046" }}>Contact</a>
          </div>
          <div style={{ fontSize: 14, color: "#6B6F78" }}>© 2026</div>
        </div>
      </div>
    </div>
  );
}
