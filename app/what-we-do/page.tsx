import type { Metadata } from "next";
import { Nav, Footer, MONO } from "../components/Chrome";

export const metadata: Metadata = {
  title: "What we do — Scaleterra",
  description:
    "Four jobs. Find the margin, grow the revenue, automate the work, and run it with you. We are operators who have owned the P&L.",
};

const JOBS = [
  {
    no: "01 · Diagnose",
    t: "Find the margin",
    d: "We open the books the way an owner-operator reads them, not the way software summarizes them. We find the money leaking out of labor, discounts, vendors, schedules and unbilled work, and we put a number on each one.",
  },
  {
    no: "02 · Grow",
    t: "Grow the revenue",
    d: "We look at what your pricing, mix and marketing actually return, tied back to booked revenue instead of impressions, and we find the revenue already walking in the door that you are not capturing.",
  },
  {
    no: "03 · Automate",
    t: "Automate the work",
    d: "The counting, reconciling and reporting you rebuild by hand every week gets rebuilt once, correctly, and then runs itself. You stop being the spreadsheet.",
  },
  {
    no: "04 · Manage",
    t: "Consult and manage",
    d: "A named operator stays on the account, runs the weekly checks, and takes the repetitive execution off your plate. About 28 hours a month back to the owner.",
  },
];

const LEAKS = [
  { no: "01", t: "Labor drift", d: "Hours creep past what the day's work actually justifies.", how: "We lay scheduled hours over real demand, shift by shift." },
  { no: "02", t: "Discount creep", d: "The promotion that quietly became your everyday price.", how: "We watch realized margin against the price you meant to charge." },
  { no: "03", t: "Vendor slide", d: "Unit costs that moved months ago and never got renegotiated.", how: "We track each unit cost against your last agreed rate." },
  { no: "04", t: "Schedule gaps", d: "Empty chairs, no-shows and slow hours the schedule never recovers.", how: "We match bookings against the hours you're paying for." },
  { no: "05", t: "Unbilled work", d: "Services delivered and never invoiced, or coded wrong.", how: "We reconcile what got delivered against what got billed." },
  { no: "06", t: "Redundant execution", d: "The same weekly report and reconciliation, rebuilt by hand.", how: "We map the repeated work and automate it end to end." },
  { no: "07", t: "Unattributed marketing", d: "Spend that can't tell you what it actually returned.", how: "We tie every channel and offer back to booked revenue." },
  { no: "08", t: "Untested pricing", d: "Prices that haven't moved because no one measured the room.", how: "We test price, mix and capacity against what customers accept." },
  { no: "09", t: "Uncaptured demand", d: "Revenue already walking in that you never asked for.", how: "We surface the add-ons and offers your ticket mix is missing." },
];

const STEPS = [
  { n: "Step one", t: "One hour to understand your business", d: "We sit down with the owner, walk the operation, and connect to the systems you already run on. No new software to learn, no project to staff." },
  { n: "Step two", t: "We find the leaks", d: "Within the first weeks you get a specific, numbered list of where the money is going, with a dollar figure on each one and the ones worth acting on first." },
  { n: "Step three", t: "We automate the repetitive work", d: "The counting and reporting you do by hand gets rebuilt to run itself, and the revenue moves worth making get put in front of you." },
  { n: "Step four", t: "You keep the margin", d: "A named operator stays on the account, runs the weekly checks, and keeps the leaks closed. You get your margin and your time back." },
];

export default function WhatWeDo() {
  return (
    <div>
      <Nav active="what-we-do" />

      {/* Hero */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "76px 44px 56px", display: "grid", gridTemplateColumns: "minmax(420px,1fr) minmax(0,480px)", gap: 56, alignItems: "end" }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2FA85C", marginBottom: 22 }}>What we do</div>
          <h1 style={{ margin: 0, fontSize: "clamp(48px,5.6vw,78px)", lineHeight: 1.02, fontWeight: 700, letterSpacing: "-0.03em" }}>
            Four jobs. Find the margin, grow the revenue, automate the work, run it with you.
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, color: "#4A4E56" }}>
          We are not a dashboard vendor, an agency or a bookkeeper. We are operators who have owned the P&amp;L, and we work the same way a corporate finance and growth function would — cost, pricing, marketing return and automation — except the whole function is us, and it fits a business your size.
        </p>
      </div>

      {/* Four cards */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 44px 88px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
        {JOBS.map((j) => (
          <div key={j.no} style={{ background: "#F6F7FA", borderRadius: 22, padding: "36px 32px" }}>
            <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: "#2FA85C", marginBottom: 18 }}>{j.no}</div>
            <div style={{ fontSize: 23, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 14 }}>{j.t}</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#4A4E56" }}>{j.d}</p>
          </div>
        ))}
      </div>

      {/* The leaks */}
      <div style={{ background: "#F6F7FA", backgroundImage: "radial-gradient(#DFE2E8 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "84px 44px" }}>
          <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2FA85C", marginBottom: 20 }}>The leaks</div>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.025em", maxWidth: 780 }}>
            Nine places the money goes, in every business we open.
          </h2>
          <p style={{ margin: "0 0 44px", fontSize: 18, lineHeight: 1.55, color: "#4A4E56", maxWidth: 620 }}>
            The names change by industry, the pattern doesn't. This is the checklist we run on day one.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {LEAKS.map((l) => (
              <div key={l.no} style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 26px", minHeight: 230, display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: "#9197A1", marginBottom: 16 }}>{l.no}</div>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 10 }}>{l.t}</div>
                <p style={{ margin: "0 0 18px", fontSize: 15, lineHeight: 1.55, color: "#4A4E56" }}>{l.d}</p>
                <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid #EDEEF1", fontSize: 13.5, lineHeight: 1.5, color: "#6B6F78" }}>{l.how}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "88px 44px" }}>
        <h2 style={{ margin: "0 0 52px", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.025em", maxWidth: 820 }}>
          Four steps, and you keep running your business through all of them.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ borderTop: "2px solid #101114", paddingTop: 22 }}>
              <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2FA85C", marginBottom: 16 }}>{s.n}</div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.2, marginBottom: 12 }}>{s.t}</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#4A4E56" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1400, margin: "0 auto 88px", padding: "0 44px" }}>
        <div style={{ background: "#2FA85C", borderRadius: 28, padding: "68px 56px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
          <div>
            <h2 style={{ margin: "0 0 14px", fontSize: "clamp(30px,3.2vw,42px)", lineHeight: 1.06, fontWeight: 700, letterSpacing: "-0.025em", color: "#FFFFFF" }}>
              Start with the one-hour overview.
            </h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "rgba(255,255,255,0.88)", maxWidth: 560 }}>
              One hour, one operator, your numbers. You leave with a specific list of where the money is going and what it's worth to fix.
            </p>
          </div>
          <a href="/contact/" style={{ justifySelf: "end", fontSize: 16, fontWeight: 600, color: "#101114", background: "#FFFFFF", padding: "16px 30px", borderRadius: 100, whiteSpace: "nowrap" }}>Book a walkthrough</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
