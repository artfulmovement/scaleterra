import type { Metadata } from "next";
import { Nav, Footer } from "../components/Chrome";

export const metadata: Metadata = {
  title: "Industries — Scaleterra",
  description:
    "Any thin-margin operation, the same leaks. Restaurants, retail, salons, insurance, medical and dental — the vocabulary changes, the arithmetic doesn't.",
};

const SEGMENTS = [
  { t: "Restaurants", who: "Independent and small multi-unit", find: "3–5%", note: "of annual revenue, first year", items: ["Labor past what the covers justify, shift by shift", "Comps and voids that never get totalled by reason", "Food cost creeping a point at a time between counts"] },
  { t: "Retail shops", who: "Specialty and multi-door", find: "2–4%", note: "of annual revenue, first year", items: ["Markdowns stacking past plan and eating realized margin", "Staffing built on habit rather than foot traffic", "Shrink hiding inside an infrequent count"] },
  { t: "Salons & spas", who: "Single location and small groups", find: "3–5%", note: "of annual revenue, first year", items: ["Stylist hours drifting past what's actually booked", "Add-ons never offered, so ticket mix never moves", "Chairs empty at predictable hours nobody re-staffs"] },
  { t: "Insurance agencies", who: "Independent agencies and books", find: "2–4%", note: "of annual revenue, first year", items: ["Renewal leakage nobody flags until it's lost", "Comp plans outpacing book growth", "Admin hours spent rebuilding the same report"] },
  { t: "Medical & dental", who: "Private practice and small groups", find: "2–4%", note: "of annual revenue, first year", items: ["No-shows the schedule never recovers", "Procedures delivered and never coded", "Staffing that ignores actual patient volume"] },
];

const TIERS = [
  { rev: "$500K", cost: "$15,000", added: "$30,000", flow: "$12,000", total: "$27,000", margin: "8% → 13.4% EBITDA" },
  { rev: "$1M", cost: "$30,000", added: "$60,000", flow: "$24,000", total: "$54,000", margin: "8% → 13.4% EBITDA" },
  { rev: "$2.5M", cost: "$75,000", added: "$150,000", flow: "$60,000", total: "$135,000", margin: "8% → 13.4% EBITDA" },
  { rev: "$5M", cost: "$150,000", added: "$300,000", flow: "$120,000", total: "$270,000", margin: "8% → 13.4% EBITDA" },
  { rev: "$10M", cost: "$300,000", added: "$600,000", flow: "$240,000", total: "$540,000", margin: "8% → 13.4% EBITDA" },
];

const TACTICS = [
  { tag: "Pricing", t: "Prices tested on the items that carry the margin", d: "Most operators price once and never revisit. We read margin per item against how it actually sells, then move the handful of prices that hold.", n: "+$24,000 revenue", sub: "A 2.4% lift, roughly $9,600 to EBITDA" },
  { tag: "Marketing analysis", t: "Spend held to the revenue it books", d: "Every channel and offer tied back to bookings instead of impressions. The half that doesn't return gets cut and moved to the half that does.", n: "+$18,000 revenue", sub: "Plus wasted spend recovered outright" },
  { tag: "Capacity", t: "Demand your schedule never captured", d: "Callers who never got booked, waitlists nobody worked, hours where demand outran staffing. Filling them costs almost nothing.", n: "+$18,000 revenue", sub: "Highest flow-through of the three" },
];

const UNIVERSAL = [
  { t: "Labor against demand", v: "Weekly" },
  { t: "Price and discount integrity", v: "Monthly" },
  { t: "Vendor and recurring cost drift", v: "Monthly" },
  { t: "Delivered work vs billed work", v: "Monthly" },
  { t: "Owner hours on repeat tasks", v: "Ongoing" },
];

const COLS = "1.1fr 1fr 1fr 1fr 1.2fr";

export default function Industries() {
  return (
    <div>
      <Nav active="industries" />

      {/* Hero */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "76px 44px 52px", display: "grid", gridTemplateColumns: "minmax(420px,1fr) minmax(0,480px)", gap: 56, alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Industries</div>
          <div style={{ fontSize: "clamp(48px,5.6vw,78px)", fontWeight: 700, lineHeight: 0.96, letterSpacing: "-0.05em", textWrap: "balance" }}>Any thin-margin operation. The same leaks.</div>
        </div>
        <div style={{ fontSize: 19, lineHeight: 1.6, color: "#4A4E56", textWrap: "pretty" }}>Thin margins, hourly labor and messy data behave the same way across sectors. Wherever a small team runs the day, the same money goes missing — the vocabulary changes, the arithmetic doesn't.</div>
      </div>

      {/* Segment rows */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 44px 88px", display: "flex", flexDirection: "column", gap: 20 }}>
        {SEGMENTS.map((s) => (
          <div key={s.t} className="seg-row" style={{ border: "1.5px solid #E9EBEF", borderRadius: 22, padding: "34px 36px", display: "grid", gridTemplateColumns: "minmax(220px,0.7fr) minmax(0,1.6fr) minmax(180px,0.6fr)", gap: 40, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{s.t}</div>
              <div style={{ fontSize: 14, color: "#6B6F78" }}>{s.who}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {s.items.map((i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.55, color: "#3D4046" }}>
                  <div style={{ width: 6, height: 6, borderRadius: 100, background: "#2FA85C", marginTop: 8, flex: "none" }} />
                  <div>{i}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, borderLeft: "1.5px solid #E9EBEF", paddingLeft: 28 }}>
              <div style={{ fontSize: 13, color: "#6B6F78" }}>Typical first-year find</div>
              <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, color: "#2FA85C" }}>{s.find}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: "#6B6F78" }}>{s.note}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Estimated impact */}
      <div style={{ backgroundColor: "#F6F7FA", backgroundImage: "radial-gradient(rgba(16,17,20,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "88px 44px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(380px,1fr) minmax(0,520px)", gap: 56, alignItems: "end", paddingBottom: 44 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Estimated impact</div>
              <div style={{ fontSize: "clamp(34px,3.6vw,50px)", fontWeight: 600, lineHeight: 1.03, letterSpacing: "-0.04em", textWrap: "pretty" }}>What it looks like in dollars at your revenue.</div>
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.6, color: "#4A4E56", textWrap: "pretty" }}>Two levers, one number. Cost we recover out of the operation, plus revenue we add through pricing and marketing — new revenue contributes at roughly 40 cents on the dollar. The right-hand column is the EBITDA increase.</div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1.5px solid #E9EBEF", borderRadius: 22, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: COLS, gap: 0, padding: "18px 30px", borderBottom: "1.5px solid #E9EBEF", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6F78" }}>
              <div>Annual revenue</div>
              <div>Cost recovered</div>
              <div>Revenue added</div>
              <div>EBITDA on that revenue</div>
              <div style={{ color: "#2FA85C" }}>Total EBITDA increase</div>
            </div>
            {TIERS.map((r) => (
              <div key={r.rev} className="tier-row" style={{ display: "grid", gridTemplateColumns: COLS, gap: 0, padding: "22px 30px", borderBottom: "1px solid #F1F2F5", alignItems: "baseline" }}>
                <div style={{ fontSize: 21, fontWeight: 600, letterSpacing: "-0.03em" }}>{r.rev}</div>
                <div style={{ fontSize: 18, color: "#3D4046" }}>{r.cost}</div>
                <div style={{ fontSize: 18, color: "#3D4046" }}>{r.added}</div>
                <div style={{ fontSize: 18, color: "#3D4046" }}>{r.flow}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.04em", color: "#2FA85C", lineHeight: 1 }}>{r.total}</div>
                  <div style={{ fontSize: 13, color: "#6B6F78" }}>{r.margin}</div>
                </div>
              </div>
            ))}
            <div style={{ padding: "18px 30px", fontSize: 13, lineHeight: 1.55, color: "#6B6F78" }}>Estimates, not a quote. Built from a 3% cost recovery, a 6% revenue lift and a 40% contribution margin on new revenue, against an 8% starting EBITDA. Your first-year read replaces these with your own numbers.</div>
          </div>

          <div style={{ paddingTop: 52, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C" }}>Where the revenue lift comes from</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {TACTICS.map((x) => (
                <div key={x.tag} className="hover-green" style={{ background: "#FFFFFF", border: "1.5px solid #E9EBEF", borderRadius: 22, padding: 30, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#6B6F78" }}>{x.tag}</div>
                  <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.12, textWrap: "pretty" }}>{x.t}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.6, color: "#4A4E56", textWrap: "pretty" }}>{x.d}</div>
                  <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid #EDEEF1", display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6F78" }}>On $1M of revenue</div>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.035em", color: "#101114" }}>{x.n}</div>
                    <div style={{ fontSize: 13, color: "#6B6F78" }}>{x.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Not on the list — dark band */}
      <div style={{ backgroundColor: "#101114", backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(180deg, rgba(47,168,92,0.10), transparent 42%)", backgroundSize: "22px 22px, 100% 100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "88px 44px", display: "grid", gridTemplateColumns: "minmax(380px,1fr) minmax(0,520px)", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5FD693" }}>Not on the list?</div>
            <div style={{ fontSize: "clamp(36px,3.8vw,52px)", fontWeight: 600, lineHeight: 1.03, letterSpacing: "-0.04em", color: "#FFFFFF", textWrap: "pretty" }}>If you sell hours, seats, covers or appointments, we can read it.</div>
            <div style={{ fontSize: 18, lineHeight: 1.6, color: "#9BA0AA", maxWidth: 560, textWrap: "pretty" }}>The method is not industry software. It's an operator reading labor against demand, price against cost, and delivered work against what got billed.</div>
          </div>
          <div style={{ background: "#16181C", border: "1px solid #23262B", borderRadius: 24, padding: 34, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5FD693" }}>What every engagement checks</div>
            {UNIVERSAL.map((u) => (
              <div key={u.t} style={{ display: "flex", justifyContent: "space-between", gap: 20, borderBottom: "1px solid #23262B", paddingBottom: 14, fontSize: 16, color: "#E8E9EC" }}>
                <div>{u.t}</div>
                <div style={{ color: "#7A8089", whiteSpace: "nowrap" }}>{u.v}</div>
              </div>
            ))}
            <a href="/contact/" style={{ fontSize: 16, fontWeight: 600, color: "#101114", background: "#5FD693", padding: 16, borderRadius: 100, textAlign: "center" }}>Ask about your sector</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
