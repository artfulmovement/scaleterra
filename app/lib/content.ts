// Content data for the Scaleterra marketing site, lifted verbatim from the
// design handoff (Scaleterra Home v2). Copy is final — do not paraphrase.

export type Industry = {
  id: string;
  label: string;
  name: string;
  lo: number;
  hi: number;
  note: string;
  split: [string, number][];
};

export const INDUSTRIES: Industry[] = [
  { id: "rest", label: "Restaurant", name: "restaurants", lo: 0.031, hi: 0.052, note: "labor, comps and food cost", split: [["Labor drift", 0.46], ["Comps & voids", 0.22], ["Food cost creep", 0.32]] },
  { id: "retail", label: "Retail", name: "retail shops", lo: 0.024, hi: 0.041, note: "markdowns, staffing and shrink", split: [["Markdown stacking", 0.44], ["Staffing vs traffic", 0.33], ["Shrink in the count", 0.23]] },
  { id: "salon", label: "Salon & spa", name: "salons and spas", lo: 0.028, hi: 0.047, note: "chair hours and add-ons", split: [["Chair hours idle", 0.48], ["Add-ons not offered", 0.31], ["Discount creep", 0.21]] },
  { id: "ins", label: "Insurance", name: "insurance agencies", lo: 0.021, hi: 0.038, note: "renewals and comp plans", split: [["Renewal leakage", 0.42], ["Comp plan drift", 0.34], ["Admin hours", 0.24]] },
  { id: "med", label: "Medical & dental", name: "medical and dental", lo: 0.026, hi: 0.045, note: "schedule gaps and billing", split: [["Unbilled procedures", 0.40], ["No-shows & gaps", 0.35], ["Staffing vs volume", 0.25]] },
];

export type Leak = { text: string; note: string; cat: string; cost: string; who: string };

export const TICKER: Leak[] = [
  { text: "an extra shift revenue didn't need", note: "Found by comparing scheduled hours against the day's actual demand.", cat: "Labor drift", cost: "$1,180 / week", who: "Restaurants" },
  { text: "a discount that quietly became the price", note: "Found when promo pricing outlives the promo window.", cat: "Discount creep", cost: "$3,400 / month", who: "Retail" },
  { text: "a vendor price that crept up in March", note: "Found by tracking unit cost against your last agreed rate.", cat: "Vendor slide", cost: "$740 / month", who: "All" },
  { text: "overtime approved out of habit", note: "Found in approval patterns that repeat regardless of volume.", cat: "Labor drift", cost: "$2,050 / month", who: "All" },
  { text: "work you delivered and never billed", note: "Found by matching delivered services against what got invoiced.", cat: "Unbilled work", cost: "$5,600 / month", who: "Clinical" },
  { text: "comps and voids nobody totals", note: "Found by rolling up comps by server, shift and reason code.", cat: "Discount creep", cost: "$1,900 / month", who: "Restaurants" },
  { text: "a chair sitting empty at 2pm", note: "Found by laying bookings over the hours you're paying for.", cat: "Schedule gaps", cost: "$860 / week", who: "Salon & spa" },
  { text: "markdowns stacking past plan", note: "Found by comparing realized margin to your markdown plan.", cat: "Discount creep", cost: "$4,100 / month", who: "Retail" },
  { text: "a renewal nobody flagged", note: "Found by watching renewal dates against outreach activity.", cat: "Book leakage", cost: "$6,300 / quarter", who: "Insurance" },
  { text: "a no-show the schedule never recovered", note: "Found in gaps that never got refilled after a cancellation.", cat: "Schedule gaps", cost: "$310 / day", who: "Clinical" },
  { text: "a procedure delivered and never coded", note: "Found by reconciling the chart against the claim.", cat: "Unbilled work", cost: "$1,450 / month", who: "Medical & dental" },
  { text: "software nobody has opened since spring", note: "Found by checking recurring charges against actual use.", cat: "Vendor slide", cost: "$390 / month", who: "All" },
  { text: "prep thrown out every Sunday", note: "Found in par levels that ignore your slowest day.", cat: "Waste", cost: "$620 / week", who: "Restaurants" },
  { text: "shrink hiding inside the count", note: "Found where cycle counts and sales stop agreeing.", cat: "Inventory", cost: "$2,800 / month", who: "Retail" },
  { text: "a comp plan outpacing the book", note: "Found by trending payout against book growth.", cat: "Book leakage", cost: "$8,900 / year", who: "Insurance" },
  { text: "add-ons nobody was asked to offer", note: "Found in ticket mix that never moves.", cat: "Missed revenue", cost: "$1,700 / month", who: "Salon & spa" },
  { text: "an opener scheduled for an empty room", note: "Found by matching the first hour's sales to its labor.", cat: "Labor drift", cost: "$540 / week", who: "All" },
  { text: "the linen invoice nobody reads", note: "Found in recurring service charges that drift line by line.", cat: "Vendor slide", cost: "$280 / month", who: "Restaurants" },
];

export const STATS = [
  { n: "$7M / yr", l: "Margin saved and returned to owners each year" },
  { n: "3 exits", l: "Businesses built and sold to Fortune 500 acquirers" },
  { n: "50+ yrs", l: "Ownership and corporate operating experience" },
  { n: "13%", l: "Average profit increase — from cost recovered and revenue found" },
];

export const INTEGRATIONS = [
  { id: "logo-toast", placeholder: "Toast logo" },
  { id: "logo-opentable", placeholder: "OpenTable logo" },
  { id: "logo-quickbooks", placeholder: "QuickBooks logo" },
  { id: "logo-scheduling", placeholder: "Scheduling tool logo" },
  { id: "logo-brightwheel", placeholder: "Brightwheel logo" },
  { id: "logo-salesforce", placeholder: "Salesforce logo" },
  { id: "logo-google", placeholder: "Google logo" },
];

export const SERVICES = [
  { no: "01", t: "Labor drift", d: "Where hours creep past what the work actually justifies, shift by shift.", link: "See the method" },
  { no: "02", t: "Discount creep", d: "The promotion that quietly became your price, and the comps nobody totals.", link: "See the method" },
  { no: "03", t: "Vendor slide", d: "Prices that moved three months ago and never got renegotiated.", link: "See the method" },
  { no: "04", t: "Schedule gaps", d: "Empty chairs, no-shows and slow hours the schedule never recovers.", link: "See the method" },
  { no: "05", t: "Unbilled work", d: "Services delivered and never invoiced, coded wrong, or left on the table.", link: "See the method" },
  { no: "06", t: "Close-day surprises", d: "The number you only learn at month end, surfaced while you can still act.", link: "See the method" },
  { no: "07", t: "Marketing analysis", d: "What every channel and offer actually returns, tied back to booked revenue instead of impressions.", link: "See the method" },
  { no: "08", t: "Revenue tactics", d: "Pricing, mix and capacity moves that lift revenue from the customers already walking in.", link: "See the method" },
  { no: "09", t: "Automation", d: "The counting, reconciling and reporting you rebuild by hand every week, running itself instead.", link: "See the method" },
];

export const LEDGER = [
  { mo: "Mo 1", pct: "66.8%", w: "100%", kept: "baseline" },
  { mo: "Mo 2", pct: "45.4%", w: "68%", kept: "$14,200" },
  { mo: "Mo 3", pct: "41.6%", w: "62%", kept: "$16,800" },
  { mo: "Mo 4", pct: "44.3%", w: "66%", kept: "$15,100" },
  { mo: "Mo 5", pct: "40.9%", w: "61%", kept: "$17,400" },
];

export const SEGMENTS = [
  { t: "Restaurants", d: "Labor past what the covers justify. Comps and voids adding up. Food cost creeping a point at a time." },
  { t: "Retail shops", d: "Markdowns stacking past plan. Staffing that ignores foot traffic. Shrinkage hiding inside the count." },
  { t: "Salons & spas", d: "Stylist hours drifting past bookings. Add-ons never offered. Chairs empty at the wrong hours." },
  { t: "Insurance agencies", d: "Renewal leakage nobody flags. Comp plans outpacing book growth. Admin hours unwatched." },
  { t: "Medical & dental", d: "No-shows the schedule never recovers. Staffing that ignores volume. Unbilled procedures." },
];

export function money(n: number): string {
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(n >= 1e7 ? 1 : 2).replace(/\.0+$/, "") + "M";
  return "$" + Math.round(n / 1000) + "K";
}
