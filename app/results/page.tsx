import type { Metadata } from "next";
import { Nav, Footer } from "../components/Chrome";

export const metadata: Metadata = {
  title: "Results — Scaleterra",
  description:
    "The numbers we're judged on. Margin owners kept, with no revenue reduction and no quality reduction. Averages across the book, not the best month.",
};

const STATS = [
  { n: "$7M / yr", l: "Margin saved and returned to owners each year" },
  { n: "13%", l: "Average increase in profit, with no revenue or quality reduction" },
  { n: "28 hrs", l: "Manual operational work returned to owners each month" },
  { n: "22%", l: "EBITDA lift from new revenue in a reworked model" },
];

const CHILDCARE = [
  { n: "5%", t: "Labor optimization, classroom by classroom", d: "Scheduling rebuilt against actual enrollment and attendance patterns — 5% of annual labor cost, with ratios untouched." },
  { n: "$1,500 / mo", t: "Bookkeeping team eliminated", d: "Full integration into QuickBooks so the CPA works directly from clean books. The outside bookkeeping line went away entirely." },
  { n: "42 hrs / mo", t: "Redundant admin labor removed", d: "Repeat data entry, reconciling and reporting automated or absorbed — those hours redeployed to enrollment and revenue-generating work." },
  { n: "No CFO", t: "Custom forecasting and reporting", d: "Reporting built for how the owner actually decides, so they can manage the business without hiring a formal CFO." },
];

const CASES = [
  { sector: "Salon group", t: "Three locations, one schedule that ignored bookings", d: "Chair hours were set by habit. We rebuilt staffing against actual bookings and put add-ons back into the ticket.", metrics: [{ k: "Labor cost", v: "−11%" }, { k: "Ticket mix", v: "+7%" }, { k: "Owner hours back", v: "22 / mo" }] },
  { sector: "Specialty retail", t: "Two doors losing margin to markdown stacking", d: "Promotions had outlived their windows. We tightened the markdown calendar and fixed the count cadence.", metrics: [{ k: "Realized margin", v: "+4 pts" }, { k: "Shrink", v: "−1.8%" }, { k: "Owner hours back", v: "18 / mo" }] },
  { sector: "Dental practice", t: "Full schedule, unbilled work", d: "Procedures were delivered and never coded. We reconciled chart to claim weekly and refilled cancellations.", metrics: [{ k: "Collections", v: "+6%" }, { k: "Open chair time", v: "−9%" }, { k: "Owner hours back", v: "26 / mo" }] },
];

export default function Results() {
  return (
    <div>
      <Nav active="results" />

      {/* Hero */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "76px 44px 48px", display: "grid", gridTemplateColumns: "minmax(420px,1fr) minmax(0,460px)", gap: 56, alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Results</div>
          <div style={{ fontSize: "clamp(48px,5.6vw,78px)", fontWeight: 700, lineHeight: 0.96, letterSpacing: "-0.05em", textWrap: "balance" }}>The numbers we&apos;re judged on.</div>
        </div>
        <div style={{ fontSize: 19, lineHeight: 1.6, color: "#4A4E56", textWrap: "pretty" }}>Averages across the book, not the single best month we ever had. Every figure below is margin the owner kept, with no revenue reduction and no quality reduction.</div>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 44px 80px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
        {STATS.map((s) => (
          <div key={s.l} style={{ borderTop: "2px solid #101114", paddingTop: 20 }}>
            <div style={{ fontSize: "clamp(38px,3.6vw,52px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 15, lineHeight: 1.45, color: "#5B5F68", paddingTop: 12 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Case one — childcare */}
      <div style={{ backgroundColor: "#F6F7FA", backgroundImage: "radial-gradient(rgba(16,17,20,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "88px 44px" }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 48, paddingBottom: 40, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Case one · childcare center · $4M in sales</div>
              <div style={{ fontSize: "clamp(36px,3.8vw,52px)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", textWrap: "pretty" }}>A childcare center with no CFO, running like it had one.</div>
            </div>
            <div style={{ maxWidth: 380, fontSize: 17, lineHeight: 1.6, color: "#4A4E56" }}>A $4M operation. Four changes: classroom scheduling, the bookkeeping line, the admin hours, and reporting the owner could actually run the business from.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(420px,1.3fr) minmax(0,0.7fr)", gap: 28, alignItems: "stretch" }}>
            <div style={{ background: "#FFFFFF", borderRadius: 24, padding: 34, display: "flex", flexDirection: "column", gap: 0 }}>
              {CHILDCARE.map((c) => (
                <div key={c.t} style={{ display: "grid", gridTemplateColumns: "minmax(180px,max-content) minmax(0,1fr)", gap: 28, alignItems: "start", padding: "24px 0", borderBottom: "1px solid #E2E4EA" }}>
                  <div style={{ fontSize: "clamp(24px,2vw,30px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#2FA85C" }}>{c.n}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.2 }}>{c.t}</div>
                    <div style={{ fontSize: 16, lineHeight: 1.55, color: "#5B5F68", textWrap: "pretty" }}>{c.d}</div>
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 16, color: "#5B5F68", paddingTop: 20 }}>No tuition increase, no change to ratios, no reduction in care quality.</div>
            </div>
            <div style={{ background: "#101114", borderRadius: 24, padding: 34, display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <div style={{ fontSize: "clamp(40px,4vw,56px)", fontWeight: 600, letterSpacing: "-0.045em", color: "#FFFFFF", lineHeight: 1 }}>$108,000</div>
              <div style={{ fontSize: 15, color: "#9BA0AA" }}>Annual impact on a $4M operation — $90,000 in classroom labor plus $18,000 of bookkeeping cost removed, and 42 hrs/month redeployed to revenue-generating work</div>
              <div style={{ borderTop: "1px solid #2C2F36", paddingTop: 20, marginTop: 8, fontSize: 19, lineHeight: 1.5, color: "#E8E9EC", textWrap: "pretty" }}>We only win when you win. If there&apos;s nothing worth finding, you owe us nothing.</div>
            </div>
          </div>
        </div>
      </div>

      {/* More of the book */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "88px 44px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 660, paddingBottom: 40 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>More of the book</div>
          <div style={{ fontSize: "clamp(36px,3.8vw,52px)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", textWrap: "pretty" }}>Same method, different counters.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {CASES.map((c) => (
            <div key={c.sector} style={{ border: "1.5px solid #E9EBEF", borderRadius: 22, padding: "32px 30px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2FA85C" }}>{c.sector}</div>
              <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.12 }}>{c.t}</div>
              <div style={{ fontSize: 16, lineHeight: 1.6, color: "#5B5F68", textWrap: "pretty" }}>{c.d}</div>
              <div style={{ marginTop: "auto", borderTop: "1px solid #E9EBEF", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.metrics.map((m) => (
                  <div key={m.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, fontSize: 15 }}>
                    <div style={{ color: "#5B5F68" }}>{m.k}</div>
                    <div style={{ fontWeight: 600 }}>{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 44px 88px" }}>
        <div style={{ background: "#2FA85C", borderRadius: 28, padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
            <div style={{ fontSize: "clamp(36px,3.8vw,52px)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", color: "#FFFFFF", textWrap: "pretty" }}>See what your own month says.</div>
            <div style={{ fontSize: 18, lineHeight: 1.6, color: "#DDF2E6" }}>One month of your numbers, read by an operator. You see the findings and the dollar value before you commit to anything.</div>
          </div>
          <a href="/contact/" style={{ fontSize: 16, fontWeight: 600, color: "#101114", background: "#FFFFFF", padding: "18px 32px", borderRadius: 100, whiteSpace: "nowrap" }}>Book a walkthrough</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
