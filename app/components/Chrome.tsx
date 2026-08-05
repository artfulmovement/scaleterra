const MONO = "ui-monospace,SFMono-Regular,Menlo,monospace";

export function Wordmark({ size = 22, dotSize = 33 }: { size?: number; dotSize?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", fontSize: size, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1 }}>
      scale<span style={{ color: "#2FA85C" }}>terra</span>
      <span style={{ fontSize: dotSize, lineHeight: 0, position: "relative", top: 1, marginLeft: 1 }}>.</span>
    </div>
  );
}

const NAV_LINKS = [
  { href: "/what-we-do/", label: "What we do", key: "what-we-do" },
  { href: "/industries/", label: "Industries", key: "industries" },
  { href: "/results/", label: "Results", key: "results" },
];

export function Nav({ active }: { active?: string }) {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid #EDEEF1" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "18px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <a href="/" style={{ display: "flex", flexDirection: "column", gap: 4, flex: "none", color: "#101114" }}>
          <Wordmark />
          <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6F78", whiteSpace: "nowrap" }}>Ops intelligence, sharpened</div>
        </a>
        <div data-nav="1" style={{ display: "flex", gap: 28, fontSize: 15, fontWeight: 500, color: "#3D4046", whiteSpace: "nowrap", flex: "none" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.key} href={l.href} style={{ color: active === l.key ? "#2FA85C" : "#3D4046", fontWeight: active === l.key ? 600 : 500 }}>{l.label}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: "none" }}>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#3D4046", whiteSpace: "nowrap" }}>Log in</div>
          <a href="/contact/" style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", background: "#101114", padding: "12px 22px", borderRadius: 100, whiteSpace: "nowrap" }}>Book a walkthrough</a>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
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
  );
}

export { MONO };
