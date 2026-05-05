"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Icon } from "./Icon";
import { FAQ_ITEMS } from "@/lib/faq";

// =====================================================================
// ui.tsx — Base UI components
// =====================================================================

function Container({
  children,
  style,
  className = "",
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={"container " + className}
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Section({
  children,
  bg = "bg",
  id,
  style,
}: {
  children: ReactNode;
  bg?: "bg" | "surface" | "dark" | "tint" | string;
  id?: string;
  style?: CSSProperties;
}) {
  const bgMap: Record<string, string> = {
    bg: "var(--color-bg)",
    surface: "var(--color-surface)",
    dark: "var(--color-text)",
    tint: "var(--color-primary-tint)",
  };
  return (
    <section
      id={id}
      style={{
        background: bgMap[bg] || bg,
        padding: "96px 0",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: color || "var(--color-primary)",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: string;
  iconAfter?: string;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
};

function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconAfter,
  onClick,
  href,
  style,
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const sizes: Record<string, CSSProperties> = {
    sm: { height: 32, padding: "0 12px", fontSize: 14 },
    md: { height: 40, padding: "0 16px", fontSize: 15 },
    lg: { height: 48, padding: "0 20px", fontSize: 16 },
  };
  const variants: Record<string, CSSProperties> = {
    primary: {
      background: hover ? "#2A5598" : "#3268B2",
      color: "#FFFFFF",
      border: "1px solid transparent",
    },
    secondary: {
      background: hover ? "#DCE8F5" : "#FFFFFF",
      color: "#3268B2",
      border: "1px solid #3268B2",
    },
    ghost: {
      background: hover ? "#F2F5F9" : "transparent",
      color: "#1C2130",
      border: "1px solid transparent",
    },
  };
  const base: CSSProperties = {
    ...sizes[size],
    ...variants[variant],
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    borderRadius: 8,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "all 120ms ease-out",
    textDecoration: "none",
    whiteSpace: "nowrap",
    lineHeight: 1,
    ...style,
  };
  const iconSize = size === "lg" ? 20 : 16;
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={base}
      >
        {icon && <Icon name={icon} size={iconSize} />}
        {children}
        {iconAfter && <Icon name={iconAfter} size={iconSize} />}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={base}
    >
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={iconSize} />}
    </button>
  );
}

// =====================================================================
// Nav
// =====================================================================

function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.96)",
        borderBottom: "1px solid var(--color-border)",
        backdropFilter: "saturate(1.1)",
      }}
    >
      <Container>
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/assets/logo.svg" alt="Agenify AI" style={{ height: 36 }} />
          </a>
          <nav
            className="nav-links"
            style={{ display: "flex", alignItems: "center", gap: 28, marginLeft: "auto" }}
          >
            <a href="#problemet" className="nav-link">Problemet</a>
            <a href="#rapporten" className="nav-link">Rapporten</a>
            <a href="#process" className="nav-link">Så går det till</a>
            <a href="#om-mig" className="nav-link">Om mig</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Button variant="primary" size="sm" href="#formular">
              Skapa min rapport
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

// =====================================================================
// Hero
// =====================================================================

function Hero() {
  return (
    <div
      id="top"
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Container>
        <div style={{ padding: "88px 0 96px", maxWidth: 920 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 12px 6px 10px",
              background: "var(--color-accent-tint)",
              border: "1px solid #F3DFB5",
              borderRadius: 9999,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: "var(--color-accent)",
                boxShadow: "0 0 0 3px rgba(212,136,12,0.18)",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#8B5A06",
                letterSpacing: "0.01em",
              }}
            >
              Jag gör max 10 rapporter i maj
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(38px, 5.2vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              margin: "0 0 24px",
              color: "var(--color-text)",
              textWrap: "balance",
            }}
          >
            Få en konkret karta över var AI kan hjälpa ditt Service Företag{" "}
            <span style={{ color: "var(--color-primary)" }}>boka fler möten</span> och{" "}
            <span style={{ color: "var(--color-primary)" }}>spara 10+ timmar</span> i veckan.
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.55,
              color: "var(--color-text-muted)",
              margin: "0 0 36px",
              maxWidth: 680,
            }}
          >
            Skräddarsydd för din verksamhet. Baserad på en 30-minuters intervju. Allt denna sida
            erbjuder är helt utan kostnad.
          </p>
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <Button size="lg" variant="primary" href="#formular" iconAfter="arrow-right">
              Skapa min rapport
            </Button>
            <Button size="lg" variant="secondary" href="#rapporten">
              Se vad du får
            </Button>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 24px",
              fontSize: 14,
              color: "var(--color-text-muted)",
            }}
          >
            {["Gratis", "2 samtal", "Personlig workflow rapport", "Inga förpliktelser"].map((t) => (
              <li key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Icon name="check" size={14} color="#0E9F6E" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

// =====================================================================
// Problem
// =====================================================================

function Problem() {
  const items = [
    {
      icon: "flame",
      t: "Leads hinner kallna.",
      d: "Studier visar att leads som kontaktas inom 5 minuter är 10× mer sannolika att konvertera än de som kontaktas efter 30 minuter. De flesta företag svarar inom 24–48 timmar. Konkurrenten som svarade först fick mötet.",
      stat: { n: "10×", l: "svar <5 min vs >30 min" },
    },
    {
      icon: "clipboard-list",
      t: "Admin äter dagarna.",
      d: "Du och dina anställda lägger otaliga timmar varje vecka på att flytta information mellan CRM, mail och dokument. Kategorisera, uppdatera, följa upp, skriva status. Arbete som inte säljer något och kan automatiseras nu.",
      stat: { n: "12h", l: "manuellt arbete / vecka" },
    },
    {
      icon: "archive",
      t: "Gamla leads samlar damm.",
      d: 'Hundratals kontakter i ditt CRM sa "inte nu" för månader sen. Många är fortfarande köpare, bara inte redo då. Men ingen hinner följa upp dem. 69 % av dessa leads konverterar inom 24 månader med systematisk uppföljning, tillskillnad från 21 % utan.',
      stat: { n: "69%", l: "konverterar med strukturerad uppföljning" },
    },
  ];
  return (
    <Section bg="bg" id="problemet">
      <Container>
        <div style={{ maxWidth: 820, marginBottom: 56 }}>
          <Eyebrow>Problemet</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: 0,
              color: "var(--color-text)",
              textWrap: "balance",
            }}
          >
            De flesta Service Företag tappar inte deals för att de inte kan sälja. De tappar dem
            för att{" "}
            <span style={{ color: "var(--color-primary)" }}>tre saker pågår samtidigt</span> - och
            tiden finns inte för att lösa dem.
          </h2>
        </div>
        <div
          className="problem-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
        >
          {items.map((it) => (
            <div
              key={it.t}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 28,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "var(--color-primary-tint)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 20,
                }}
              >
                <Icon name={it.icon} size={22} color="var(--color-primary)" />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  margin: "0 0 10px",
                  color: "var(--color-text)",
                }}
              >
                {it.t}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--color-text-muted)",
                  margin: "0 0 24px",
                  flex: 1,
                }}
              >
                {it.d}
              </p>
              <div
                style={{
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: 16,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 28,
                    fontWeight: 500,
                    color: "var(--color-accent)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {it.stat.n}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {it.stat.l}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// Report — Workflow canvas, calculator, feature grid
// =====================================================================

type WorkflowNode = {
  id: string;
  label: string;
  sub: string;
  icon: string;
  kind: "trigger" | "api" | "code" | "if" | "agent" | "app";
  col: number;
  row: number;
  wide?: boolean;
};

type WorkflowEdge = {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
};

type Workflow = {
  key: string;
  short: string;
  t: string;
  d: string;
  save: string;
  cost: string;
  impl: string;
  trigger: { label: string; sub: string; icon: string; kind: "trigger" };
  nodes: WorkflowNode[];
  memory?: { label: string; icon: string }[];
  edges: WorkflowEdge[];
};

const WORKFLOWS: Workflow[] = [
  {
    key: "leads",
    short: "Lead-respons",
    t: "Instant lead-respons under 60 sekunder",
    d: "Ett formulär skickas in, en agent kvalificerar, berikar, fattar beslut och bokar möte — allt innan den potentiella kunden hinner stänga fliken.",
    save: "4–6 tim/v",
    cost: "~450 kr/mån",
    impl: "Dag 1–2",
    trigger: { label: "Webform", sub: "POST /leads", icon: "globe", kind: "trigger" },
    nodes: [
      { id: "enrich", label: "Clearbit", sub: "GET /enrich", icon: "search", kind: "api", col: 1, row: 1 },
      { id: "code", label: "Code", sub: "normalize.js", icon: "braces", kind: "code", col: 1, row: 2 },
      { id: "agent", label: "Lead-agent", sub: "GPT-4o", icon: "sparkles", kind: "agent", col: 2, row: 1.5, wide: true },
      { id: "if", label: "IF", sub: "score >= 70", icon: "git-branch", kind: "if", col: 3, row: 1.5 },
      { id: "hubspot", label: "HubSpot", sub: "skapa deal", icon: "database", kind: "app", col: 4, row: 0.5 },
      { id: "cal", label: "Cal.com", sub: "boka möte", icon: "calendar", kind: "app", col: 4, row: 1.5 },
      { id: "slack", label: "Slack", sub: "#sales", icon: "message-square", kind: "app", col: 4, row: 2.5 },
      { id: "nurture", label: "Mailchimp", sub: "nurture", icon: "mail", kind: "app", col: 3, row: 3.5 },
    ],
    memory: [
      { label: "Postgres", icon: "database" },
      { label: "Vector DB", icon: "brain" },
    ],
    edges: [
      { from: "trigger", to: "enrich" },
      { from: "trigger", to: "code" },
      { from: "enrich", to: "agent" },
      { from: "code", to: "agent" },
      { from: "agent", to: "if" },
      { from: "if", to: "hubspot", label: "hot" },
      { from: "if", to: "cal", label: "hot" },
      { from: "if", to: "slack", label: "hot" },
      { from: "if", to: "nurture", label: "cold", dashed: true },
    ],
  },
  {
    key: "cold",
    short: "Reaktivering",
    t: "Reaktivering av kalla CRM-leads",
    d: "Agenten läser av 6–24 månader gamla kontakter, segmenterar efter mognad, plockar rätt mall och skickar personligt — utan att du lyfter ett finger.",
    save: "6–8 tim/v",
    cost: "~520 kr/mån",
    impl: "Dag 3–5",
    trigger: { label: "Cron", sub: "mån 07:00", icon: "clock", kind: "trigger" },
    nodes: [
      { id: "crm", label: "HubSpot", sub: "GET /contacts", icon: "database", kind: "api", col: 1, row: 1.5 },
      { id: "sql", label: "Postgres", sub: "last_seen", icon: "server", kind: "api", col: 1, row: 2.5 },
      { id: "agent", label: "Segmenterare", sub: "Claude Sonnet", icon: "sparkles", kind: "agent", col: 2, row: 2, wide: true },
      { id: "switch", label: "Switch", sub: "mognad", icon: "git-fork", kind: "if", col: 3, row: 2 },
      { id: "warm", label: "Varm mall", sub: "check-in", icon: "mail", kind: "app", col: 4, row: 0.5 },
      { id: "cold", label: "Kall mall", sub: "värde-mail", icon: "mail", kind: "app", col: 4, row: 1.5 },
      { id: "dead", label: "Arkivera", sub: "no-reply tag", icon: "archive", kind: "app", col: 4, row: 2.5 },
      { id: "send", label: "Gmail", sub: "send + delay", icon: "send", kind: "app", col: 5, row: 1 },
    ],
    memory: [
      { label: "Kund-CRM", icon: "database" },
      { label: "Brand-röst", icon: "book-open" },
    ],
    edges: [
      { from: "trigger", to: "crm" },
      { from: "trigger", to: "sql" },
      { from: "crm", to: "agent" },
      { from: "sql", to: "agent" },
      { from: "agent", to: "switch" },
      { from: "switch", to: "warm", label: "varm" },
      { from: "switch", to: "cold", label: "ljum" },
      { from: "switch", to: "dead", label: "död", dashed: true },
      { from: "warm", to: "send" },
      { from: "cold", to: "send" },
    ],
  },
  {
    key: "meetings",
    short: "Mötesprotokoll",
    t: "Auto-protokoll & uppföljning från kundmöten",
    d: "Transkribering rullar in, agenten extraherar to-do's, uppdaterar CRM-fält och lägger ett uppföljnings­utkast i din inbox — innan mötet svalnat.",
    save: "3–4 tim/v",
    cost: "~380 kr/mån",
    impl: "Dag 6–7",
    trigger: { label: "Fireflies", sub: "meeting.ended", icon: "mic", kind: "trigger" },
    nodes: [
      { id: "transcript", label: "Transkript", sub: "Fireflies API", icon: "file-text", kind: "api", col: 1, row: 1.5 },
      { id: "audio", label: "Audio", sub: "S3 signed URL", icon: "headphones", kind: "api", col: 1, row: 2.5 },
      { id: "agent", label: "Mötesagent", sub: "GPT-4 · struct out", icon: "sparkles", kind: "agent", col: 2, row: 2, wide: true },
      { id: "parse", label: "Code", sub: "parse_tasks.ts", icon: "braces", kind: "code", col: 3, row: 2 },
      { id: "crm", label: "HubSpot", sub: "update deal", icon: "database", kind: "app", col: 4, row: 0.5 },
      { id: "linear", label: "Linear", sub: "create issues", icon: "list-checks", kind: "app", col: 4, row: 1.5 },
      { id: "draft", label: "Outlook", sub: "draft reply", icon: "mail", kind: "app", col: 4, row: 2.5 },
      { id: "notion", label: "Notion", sub: "append notes", icon: "file-plus", kind: "app", col: 4, row: 3.5 },
    ],
    memory: [
      { label: "Kund-kontext", icon: "users" },
      { label: "Brand-röst", icon: "book-open" },
    ],
    edges: [
      { from: "trigger", to: "transcript" },
      { from: "trigger", to: "audio" },
      { from: "transcript", to: "agent" },
      { from: "audio", to: "agent" },
      { from: "agent", to: "parse" },
      { from: "parse", to: "crm" },
      { from: "parse", to: "linear" },
      { from: "parse", to: "draft" },
      { from: "parse", to: "notion" },
    ],
  },
];

const KIND_STYLE: Record<string, { bg: string; border: string; tag: string; tagColor: string }> = {
  trigger: { bg: "#131B2B", border: "var(--color-accent)", tag: "TRIGGER", tagColor: "var(--color-accent)" },
  api: { bg: "#131B2B", border: "#3A4661", tag: "API", tagColor: "#8AA4CF" },
  code: { bg: "#131B2B", border: "#3A4661", tag: "CODE", tagColor: "#B6C4DD" },
  if: { bg: "#131B2B", border: "#8A7A3E", tag: "LOGIC", tagColor: "#E6C675" },
  agent: { bg: "#1A2038", border: "var(--color-accent)", tag: "AGENT", tagColor: "var(--color-accent)" },
  app: { bg: "#131B2B", border: "#2F6DB5", tag: "APP", tagColor: "#8AB4E8" },
};

function truncate(s: string, n: number): string {
  if (!s) return "";
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

function StatusPill({ dot, text }: { dot: string; text: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "3px 8px",
        borderRadius: 4,
        background: "rgba(97, 196, 84, 0.1)",
        border: "1px solid rgba(97, 196, 84, 0.25)",
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: 9999,
          background: dot,
          boxShadow: `0 0 8px ${dot}`,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9.5,
          fontWeight: 600,
          color: "#86D67A",
          letterSpacing: "0.08em",
        }}
      >
        {text}
      </span>
    </div>
  );
}

function Toolbox() {
  const groups = [
    { h: "Triggers", items: [{ i: "globe" }, { i: "clock" }, { i: "mic" }] },
    { h: "Core", items: [{ i: "braces" }, { i: "git-branch" }, { i: "git-fork" }, { i: "filter" }] },
    { h: "AI", items: [{ i: "sparkles", on: true }, { i: "brain" }, { i: "bot" }] },
    {
      h: "Apps",
      items: [
        { i: "database" },
        { i: "mail" },
        { i: "calendar" },
        { i: "message-square" },
        { i: "server" },
        { i: "list-checks" },
      ],
    },
  ];
  return (
    <div
      className="report-mock-toolbox"
      style={{
        background: "#131B2B",
        border: "1px solid #1E2638",
        borderRadius: 10,
        padding: "12px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {groups.map((g) => (
        <div key={g.h}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8.5,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#5F6B7F",
              marginBottom: 6,
            }}
          >
            {g.h}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            {g.items.map((it: any, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: 6,
                  background: it.on ? "rgba(245, 178, 98, 0.12)" : "#0E1420",
                  border: `1px solid ${it.on ? "rgba(245, 178, 98, 0.45)" : "#1E2638"}`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon
                  name={it.i}
                  size={13}
                  color={it.on ? "var(--color-accent)" : "#7A8699"}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CanvasToolbar({
  workflows,
  active,
  setActive,
}: {
  workflows: Workflow[];
  active: number;
  setActive: (i: number) => void;
  wf: Workflow;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "6px 8px",
        background: "#131B2B",
        border: "1px solid #1E2638",
        borderRadius: 8,
      }}
    >
      <div style={{ display: "flex", gap: 4, overflowX: "auto", minWidth: 0 }}>
        {workflows.map((w, i) => {
          const on = i === active;
          return (
            <button
              key={w.key}
              onClick={() => setActive(i)}
              style={{
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: 11,
                fontWeight: 600,
                padding: "5px 10px",
                borderRadius: 5,
                border: `1px solid ${on ? "rgba(87, 139, 215, 0.6)" : "transparent"}`,
                background: on ? "rgba(87, 139, 215, 0.18)" : "transparent",
                color: on ? "#A9C2E6" : "#7A8699",
                whiteSpace: "nowrap",
                transition: "all 120ms",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", opacity: 0.6, marginRight: 6 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {w.short}
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
        {["zoom-out", "maximize", "zoom-in", "play"].map((ic) => (
          <div
            key={ic}
            style={{
              width: 22,
              height: 22,
              borderRadius: 4,
              display: "grid",
              placeItems: "center",
              background: ic === "play" ? "var(--color-accent)" : "transparent",
            }}
          >
            <Icon name={ic} size={12} color={ic === "play" ? "#0E1420" : "#7A8699"} />
          </div>
        ))}
      </div>
    </div>
  );
}

type PositionedNode = WorkflowNode & { x: number; y: number; isTrigger?: boolean };
type TriggerNode = { x: number; y: number; label: string; sub: string; icon: string; isTrigger: true };

function TriggerNodeSVG({ node }: { node: TriggerNode }) {
  return (
    <g>
      <circle cx={node.x} cy={node.y} r={28} fill="#131B2B" stroke="var(--color-accent)" strokeWidth={1.75} />
      <foreignObject x={node.x - 14} y={node.y - 14} width={28} height={28}>
        <div style={{ display: "grid", placeItems: "center", width: 28, height: 28 }}>
          <Icon name={node.icon} size={20} color="var(--color-accent)" />
        </div>
      </foreignObject>
      <text x={node.x} y={node.y + 50} fontSize="13" fontWeight="600" fill="#D8DEEA" textAnchor="middle">
        {node.label}
      </text>
      <text x={node.x} y={node.y + 66} fontSize="10.5" fontFamily="var(--font-mono)" fill="#7A8699" textAnchor="middle">
        {node.sub}
      </text>
    </g>
  );
}

function NodeSVG({ node, w, h }: { node: PositionedNode; w: number; h: number }) {
  const s = KIND_STYLE[node.kind] || KIND_STYLE.app;
  const isAgent = node.kind === "agent";
  const iconSize = 18;
  const padX = 14;
  return (
    <g>
      {isAgent && (
        <rect
          x={node.x - w / 2 - 5}
          y={node.y - h / 2 - 5}
          width={w + 10}
          height={h + 10}
          rx={12}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={1}
          strokeDasharray="4 4"
          opacity="0.55"
        />
      )}
      <rect
        x={node.x - w / 2}
        y={node.y - h / 2}
        width={w}
        height={h}
        rx={8}
        fill={s.bg}
        stroke={s.border}
        strokeWidth={1.5}
      />
      <rect x={node.x + w / 2 - 52} y={node.y - h / 2 + 6} width={46} height={14} rx={3} fill="rgba(0,0,0,0.35)" />
      <text
        x={node.x + w / 2 - 29}
        y={node.y - h / 2 + 16}
        fontSize="9"
        fontFamily="var(--font-mono)"
        fontWeight="600"
        fill={s.tagColor}
        textAnchor="middle"
        letterSpacing="0.1em"
      >
        {s.tag}
      </text>
      <foreignObject
        x={node.x - w / 2 + padX}
        y={node.y - h / 2 + 8}
        width={iconSize}
        height={iconSize}
      >
        <div style={{ display: "grid", placeItems: "center", width: iconSize, height: iconSize }}>
          <Icon name={node.icon} size={iconSize - 2} color={s.tagColor} />
        </div>
      </foreignObject>
      <text x={node.x - w / 2 + padX} y={node.y + 6} fontSize="13" fontWeight="600" fill="#E2E7F1">
        {truncate(node.label, node.wide ? 22 : 16)}
      </text>
      <text
        x={node.x - w / 2 + padX}
        y={node.y + h / 2 - 8}
        fontSize="10"
        fontFamily="var(--font-mono)"
        fill="#7A8699"
      >
        {truncate(node.sub, node.wide ? 26 : 18)}
      </text>
      <circle cx={node.x - w / 2} cy={node.y} r={3.5} fill="#0A101B" stroke="#3A4661" strokeWidth={1.25} />
      <circle cx={node.x + w / 2} cy={node.y} r={3.5} fill="#0A101B" stroke="#3A4661" strokeWidth={1.25} />
    </g>
  );
}

function MemoryCluster({
  agent,
  items,
  nodeH,
}: {
  agent: PositionedNode;
  items: { label: string; icon: string }[];
  nodeH: number;
}) {
  const gap = 82;
  const startX = agent.x - ((items.length - 1) * gap) / 2;
  const y = agent.y + nodeH / 2 + 52;
  const topY = agent.y + nodeH / 2 + 5;
  return (
    <g>
      {items.map((it, i) => {
        const x = startX + i * gap;
        return (
          <g key={i}>
            <line
              x1={agent.x}
              y1={topY}
              x2={x}
              y2={y - 14}
              stroke="#2B344A"
              strokeWidth={1.25}
              strokeDasharray="3 4"
            />
            <circle cx={x} cy={y} r={14} fill="#131B2B" stroke="#3A4661" strokeWidth={1.25} />
            <foreignObject x={x - 9} y={y - 9} width={18} height={18}>
              <div style={{ display: "grid", placeItems: "center", width: 18, height: 18 }}>
                <Icon name={it.icon} size={14} color="#8AA4CF" />
              </div>
            </foreignObject>
            <text x={x} y={y + 32} fontSize="10" fontFamily="var(--font-mono)" fill="#7A8699" textAnchor="middle">
              {it.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function WorkflowCanvas({ wf }: { wf: Workflow }) {
  const W = 1040;
  const H = 520;
  const COLS = 6;
  const ROWS = 5;
  const colW = W / COLS;
  const rowH = H / ROWS;
  const coord = (col: number, row: number) => ({ x: col * colW + colW / 2, y: row * rowH + rowH / 2 });

  const NODE_W_NARROW = 140;
  const NODE_W_WIDE = 180;
  const NODE_H = 62;
  const nodeHalf = (n: { wide?: boolean }) => (n.wide ? NODE_W_WIDE : NODE_W_NARROW) / 2;

  const triggerPos = { x: 60, y: H / 2 };

  const nodeById: Record<string, PositionedNode | TriggerNode> = {};
  wf.nodes.forEach((n) => {
    nodeById[n.id] = { ...n, ...coord(n.col, n.row) };
  });
  nodeById["trigger"] = {
    ...wf.trigger,
    x: triggerPos.x,
    y: triggerPos.y,
    isTrigger: true,
  };

  return (
    <div
      style={{
        background: "#0A101B",
        border: "1px solid #1E2638",
        borderRadius: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #1E2638 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ position: "relative", display: "block", width: "100%", height: "auto" }}
      >
        <defs>
          <marker id="arrow-light" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3A4661" />
          </marker>
          <marker id="arrow-dashed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2B344A" />
          </marker>
        </defs>

        {wf.edges.map((e, i) => {
          const a = nodeById[e.from];
          const b = nodeById[e.to];
          if (!a || !b) return null;
          const aIsTrigger = (a as TriggerNode).isTrigger;
          const ax = aIsTrigger ? a.x + 28 : a.x + nodeHalf(a as PositionedNode);
          const bx = b.x - nodeHalf(b as PositionedNode);
          const dx = Math.max(60, bx - ax);
          const cp = dx * 0.5;
          const path = `M ${ax} ${a.y} C ${ax + cp} ${a.y}, ${bx - cp} ${b.y}, ${bx} ${b.y}`;
          const lx = ax + (bx - ax) * 0.5;
          const ly = a.y + (b.y - a.y) * 0.5;
          return (
            <g key={i}>
              <path
                d={path}
                fill="none"
                stroke={e.dashed ? "#2B344A" : "#3A4661"}
                strokeWidth={1.5}
                strokeDasharray={e.dashed ? "5 5" : undefined}
                markerEnd={`url(#${e.dashed ? "arrow-dashed" : "arrow-light"})`}
              />
              {e.label && (
                <g>
                  <rect x={lx - 22} y={ly - 10} width={44} height={18} rx={4} fill="#0A101B" stroke="#2B344A" />
                  <text
                    x={lx}
                    y={ly + 3}
                    fontSize="10.5"
                    fontFamily="var(--font-mono)"
                    fill="#8AA4CF"
                    textAnchor="middle"
                    fontWeight="600"
                  >
                    {e.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        <TriggerNodeSVG node={nodeById["trigger"] as TriggerNode} />

        {wf.nodes.map((n) => (
          <NodeSVG
            key={n.id}
            node={nodeById[n.id] as PositionedNode}
            w={n.wide ? NODE_W_WIDE : NODE_W_NARROW}
            h={NODE_H}
          />
        ))}

        {wf.memory && nodeById["agent"] && (
          <MemoryCluster
            agent={nodeById["agent"] as PositionedNode}
            items={wf.memory}
            nodeH={NODE_H}
          />
        )}
      </svg>
    </div>
  );
}

function StatusCell({
  label,
  value,
  accent,
  mono,
}: {
  label: string;
  value: string;
  accent?: boolean;
  mono?: boolean;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 8.5,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#5F6B7F",
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: mono ? "var(--font-mono)" : "inherit",
          fontSize: mono ? 11 : 12.5,
          fontWeight: 600,
          color: accent ? "var(--color-accent)" : "#D8DEEA",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function CanvasStatusBar({ wf }: { wf: Workflow }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 6,
        padding: "8px 10px",
        background: "#131B2B",
        border: "1px solid #1E2638",
        borderRadius: 8,
      }}
    >
      <StatusCell label="Tid sparad" value={wf.save} accent />
      <StatusCell label="Driftkostnad" value={wf.cost} />
    </div>
  );
}

function Inspector({ wf }: { wf: Workflow }) {
  return (
    <div
      className="report-mock-inspector"
      style={{
        background: "#131B2B",
        border: "1px solid #1E2638",
        borderRadius: 10,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Icon name="settings-2" size={12} color="#7A8699" />
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#7A8699",
          }}
        >
          Inspector
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#E2E7F1", marginBottom: 2 }}>
          {wf.t}
        </div>
        <div
          style={{
            fontSize: 10,
            color: "#7A8699",
            lineHeight: 1.45,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {wf.d}
        </div>
      </div>
      <div
        style={{
          background: "#0A101B",
          border: "1px solid #1E2638",
          borderRadius: 6,
          padding: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          color: "#8AA4CF",
          lineHeight: 1.6,
        }}
      >
        <div style={{ color: "#5F6B7F" }}>// sample output</div>
        <div>
          <span style={{ color: "#B6C4DD" }}>score</span>:{" "}
          <span style={{ color: "var(--color-accent)" }}>84</span>
        </div>
        <div>
          <span style={{ color: "#B6C4DD" }}>intent</span>:{" "}
          <span style={{ color: "#86D67A" }}>"booking"</span>
        </div>
        <div>
          <span style={{ color: "#B6C4DD" }}>source</span>:{" "}
          <span style={{ color: "#86D67A" }}>"linkedin"</span>
        </div>
        <div>
          <span style={{ color: "#B6C4DD" }}>next</span>:{" "}
          <span style={{ color: "#86D67A" }}>"book_now"</span>
        </div>
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8.5,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5F6B7F",
            marginBottom: 6,
          }}
        >
          Triggers
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: "#D8DEEA" }}>
          <Icon name={wf.trigger.icon} size={11} color="var(--color-accent)" />
          <span>{wf.trigger.label}</span>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7A8699", marginLeft: 17 }}>
          {wf.trigger.sub}
        </div>
      </div>
      <div style={{ marginTop: "auto", display: "flex", gap: 4, flexWrap: "wrap" }}>
        {["n8n", "GPT-4o", "Postgres"].map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8.5,
              padding: "2px 6px",
              borderRadius: 3,
              background: "#0A101B",
              border: "1px solid #1E2638",
              color: "#8AA4CF",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ReportMock() {
  const workflows = WORKFLOWS;
  const [active, setActive] = useState(0);
  const wf = workflows[active];

  return (
    <div
      className="report-mock"
      style={{
        background: "#0E1420",
        border: "1px solid #1E2638",
        borderRadius: 16,
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxShadow: "0 10px 40px -20px rgba(14, 20, 32, 0.35)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 6px 10px",
          borderBottom: "1px solid #1E2638",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#ED6A5E" }} />
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#F4BE4F" }} />
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#61C454" }} />
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#7A8699",
              marginLeft: 6,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Icon name="workflow" size={13} color="#7A8699" />
            agenify · automation-canvas
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <StatusPill dot="#61C454" text="LIVE" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#5F6B7F" }}>
            v1.2.0 · {wf.nodes.length + 1} nodes
          </span>
        </div>
      </div>

      <div
        className="report-mock-body"
        style={{
          display: "grid",
          gridTemplateColumns: "88px 1fr 168px",
          gap: 10,
          minHeight: 420,
        }}
      >
        <Toolbox />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
          <CanvasToolbar workflows={workflows} active={active} setActive={setActive} wf={wf} />
          <WorkflowCanvas wf={wf} />
          <CanvasStatusBar wf={wf} />
        </div>
        <Inspector wf={wf} />
      </div>
    </div>
  );
}

function CalcField({
  label,
  value,
  suffix,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  suffix: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        padding: "16px 20px",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 34,
            fontWeight: 500,
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--color-text-muted)" }}>
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "var(--color-primary)" }}
      />
    </div>
  );
}

function CalcBox() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(650);
  const annual = hours * 52 * rate;
  const fmt = new Intl.NumberFormat("sv-SE").format(annual);
  return (
    <div
      id="rakna"
      style={{
        marginTop: 64,
        background: "var(--color-primary-tint)",
        border: "1px solid #BFD3EC",
        borderRadius: 16,
        padding: 36,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <Icon name="calculator" size={18} color="var(--color-primary)" />
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-info-text)",
          }}
        >
          Räkna själv
        </span>
      </div>
      <h3
        style={{
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 24px",
          color: "var(--color-text)",
          maxWidth: 640,
        }}
      >
        En anställd som lägger 10 timmar i veckan på admin som AI kan göra.
      </h3>
      <div
        className="calc-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, alignItems: "end" }}
      >
        <CalcField
          label="Timmar per vecka"
          suffix="tim"
          value={hours}
          min={1}
          max={40}
          step={1}
          onChange={setHours}
        />
        <CalcField
          label="Din timkostnad"
          suffix="kr"
          value={rate}
          min={100}
          max={5000}
          step={50}
          onChange={setRate}
        />
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: 12,
            padding: "16px 20px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: 6,
            }}
          >
            = Du sparar / år
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 34,
              fontWeight: 500,
              color: "var(--color-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {fmt} kr
          </div>
        </div>
      </div>
      <p
        style={{
          margin: "24px 0 0",
          fontSize: 14,
          color: "var(--color-text-muted)",
          fontStyle: "italic",
        }}
      >
        Och det är innan vi räknar på nya leads som kommer in via snabbare uppföljning och
        återaktivering av gamla leads.
      </p>
    </div>
  );
}

function Report() {
  const bullets = [
    {
      icon: "workflow",
      t: "Konkreta workflows",
      d: "Där AI eller automation kan ersätta manuellt arbete i ditt serviceföretag, namngivna, med tydlig beskrivning av vad som automatiseras och hur.",
    },
    {
      icon: "wrench",
      t: "Specifika verktyg per workflow",
      d: "n8n, Zapier, GPT, Claude, Make, Openclaw, CRM-integrationer. Jag väljer efter vad som faktiskt funkar för din stack.",
    },
    {
      icon: "timer",
      t: "Uppskattad tidsbesparing",
      d: "I timmar per vecka, per workflow, så du vet vad du kan förvänta dig.",
    },
    {
      icon: "receipt",
      t: "Uppskattad kostnad",
      d: "Att bygga eller köpa varje workflow, ofta kring 500 kr/mån i drift, så du vet vad investeringen är innan du börjar.",
    },
    {
      icon: "list-ordered",
      t: "Implementationsordning",
      d: "Vilken workflow du ska börja med för snabbast avkastning baserat på dina flaskhalsar, och vilken som kommer sen.",
    },
    {
      icon: "graduation-cap",
      t: "Bonus: guide till att träna AI:n",
      d: "De flesta misslyckas med AI träningen. Den här guiden täcker det.",
    },
  ];
  return (
    <Section bg="surface" id="rapporten">
      <Container>
        <div className="report-header" style={{ maxWidth: 780, marginBottom: 56 }}>
          <Eyebrow>Det här får du</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: "0 0 20px",
              color: "var(--color-text)",
              textWrap: "balance",
            }}
          >
            En rapport skräddarsydd efter{" "}
            <span style={{ color: "var(--color-primary)" }}>din</span> verksamhet, inte en mall.
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--color-text-muted)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            Baserat på vårt intervjusamtal kartlägger jag ditt företag på detaljnivå och levererar
            en rapport som är direkt applicerbar.
          </p>
        </div>
        <ReportMock />
        <div
          className="report-list"
          style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}
        >
          {bullets.map((b) => (
            <div
              key={b.t}
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Icon name={b.icon} size={18} color="var(--color-primary)" />
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--color-text)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {b.t}
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "var(--color-text-muted)",
                }}
              >
                {b.d}
              </p>
            </div>
          ))}
        </div>
        <CalcBox />
      </Container>
    </Section>
  );
}

// =====================================================================
// Bonus
// =====================================================================

function Bonus() {
  const facts = [
    { icon: "check", t: "Inga konsultarvoden" },
    { icon: "check", t: "Inga setup-avgifter" },
    { icon: "check", t: "Ni betalar bara AI-modellen (några hundra–tusen kr/mån)" },
  ];
  return (
    <Section bg="bg" id="bonus" style={{ padding: "80px 0" }}>
      <Container>
        <div
          style={{
            background: "var(--color-accent-tint)",
            border: "1px solid #F0D69A",
            borderRadius: 20,
            padding: "56px clamp(28px, 4vw, 64px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--color-warning-text)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Bonus · 02 / 10
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              background: "var(--color-surface)",
              border: "1px solid #F0D69A",
              borderRadius: 9999,
              marginBottom: 24,
            }}
          >
            <Icon name="gift" size={14} color="var(--color-accent)" />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-warning-text)",
              }}
            >
              Extra till 2 av 10
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 44px)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              fontWeight: 700,
              margin: "0 0 20px",
              color: "var(--color-text)",
              maxWidth: 860,
              textWrap: "balance",
            }}
          >
            2 av 10 får hela implementationen byggd,{" "}
            <span style={{ color: "var(--color-accent)" }}>utan kostnad</span>.
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--color-text)",
              margin: "0 0 28px",
              maxWidth: 760,
            }}
          >
            Efter att alla 10 rapporter är klara väljer jag ut <strong>2 byråer</strong> där jag ser
            störst potential, och <strong>bygger hela AI-systemet åt er, gratis</strong>.
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: "0 0 28px",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {facts.map((f) => (
              <li
                key={f.t}
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, color: "var(--color-text)" }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 9999,
                    background: "var(--color-surface)",
                    border: "1px solid #F0D69A",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={f.icon} size={12} color="var(--color-accent)" />
                </span>
                {f.t}
              </li>
            ))}
          </ul>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 240 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: 6,
                }}
              >
                Värde på det ni får
              </div>
              <div style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.5 }}>
                Ett komplett AI-system byggt och implementerat baserat på ditt företags flaskhalsar.
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 22,
                fontWeight: 500,
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
              }}
            >
              25 000kr till 45 000kr setup
            </div>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--color-text-muted)",
              margin: "0 0 24px",
              fontStyle: "italic",
              maxWidth: 720,
            }}
          >
            Varför? Jag behöver case studies och nöjda kunder jag kan visa framtida prospekts,
            verkliga implementationer med mätbara resultat.
          </p>
          <Button size="lg" variant="primary" href="#formular" iconAfter="arrow-right">
            Skapa min rapport
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// Process
// =====================================================================

function Process() {
  const steps = [
    {
      n: "01",
      icon: "pencil",
      t: "Du fyller i formuläret",
      duration: "2 minuter",
      d: "Namn, företag, mail, antal anställda, nisch. Jag återkommer senast samma dag för att boka in första samtalet.",
    },
    {
      n: "02",
      icon: "video",
      t: "Discovery-intervju",
      duration: "30–60 minuter · Zoom/telefon",
      d: "Vi går igenom ditt företag i detalj. Jag ställer frågor om era arbets flöden, verktyg, och flaskhalsar. Du behöver inte förbereda något.",
    },
    {
      n: "03",
      icon: "file-check",
      t: "Rapport + genomgång",
      duration: "Inom 3 dagar",
      d: "Rapporten landar i din inbox inom 3 dagar, oavsett helg. Vi bokar ett 30-minuters Zoom-samtal där vi går igenom den tillsammans. Räcker inte tiden, tar vi ett till.",
    },
  ];
  return (
    <Section bg="surface" id="process">
      <Container>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <Eyebrow>Så går det till</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: 0,
              color: "var(--color-text)",
            }}
          >
            Tre steg. Ingen förberedelse.
          </h2>
        </div>
        <div
          className="process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid var(--color-border)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                padding: 32,
                borderLeft: i > 0 ? "1px solid var(--color-border)" : 0,
                background: "var(--color-surface)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "var(--color-primary-tint)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name={s.icon} size={22} color="var(--color-primary)" />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "var(--color-text-subtle)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.n}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  margin: "0 0 6px",
                  color: "var(--color-text)",
                }}
              >
                {s.t}
              </h3>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--color-primary)",
                  marginBottom: 14,
                  fontWeight: 500,
                }}
              >
                {s.duration}
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--color-text-muted)" }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// ForWhom
// =====================================================================

function ForWhomCol({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "good" | "bad";
}) {
  const good = tone === "good";
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 16,
        padding: 32,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "4px 10px",
          background: good ? "var(--color-success-tint)" : "#F2F5F9",
          color: good ? "var(--color-success-text)" : "var(--color-text-muted)",
          borderRadius: 9999,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        <Icon name={good ? "check" : "x"} size={12} />
        {good ? "Passar" : "Passar inte"}
      </div>
      <h3
        style={{
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "-0.015em",
          margin: "0 0 20px",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {items.map((it) => (
          <li key={it} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: 9999,
                background: good ? "var(--color-success-tint)" : "#F2F5F9",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                marginTop: 3,
              }}
            >
              <Icon
                name={good ? "check" : "x"}
                size={12}
                color={good ? "var(--color-success)" : "var(--color-text-muted)"}
              />
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-text)" }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ForWhom() {
  const forYou = [
    "Du driver eller leder ett Service Företag.",
    "Ni har leads som kontinuerligt kommer in.",
    "Ni har ett CRM eller liknande system där kontakter, affärer och flöden finns samlade.",
    "Du är nyfiken på AI men har inte tid att bygga eller testa själv.",
  ];
  const notForYou = [
    "Du driver något annat företag än ett Service företag.",
    "Du är ett ny startat företag utan inkomande leads.",
    "Du är har inget form av CRM system.",
    "Du inte driver något företag och bara letar efter att spara tid i din vardag",
  ];
  return (
    <Section bg="bg" id="for-vem">
      <Container>
        <div style={{ maxWidth: 680, marginBottom: 48 }}>
          <Eyebrow>Vem det är för</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: 0,
              color: "var(--color-text)",
            }}
          >
            Det är den här avataren jag hjälper just nu
          </h2>
        </div>
        <div className="forwhom-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <ForWhomCol title="Det här är för dig om…" items={forYou} tone="good" />
          <ForWhomCol title="Det här är inte för dig om…" items={notForYou} tone="bad" />
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// AboutMe
// =====================================================================

function AboutMe() {
  return (
    <Section bg="surface" id="om-mig">
      <Container>
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 56, alignItems: "start" }}
        >
          <div>
            <div
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                aspectRatio: "4 / 5",
                background: "var(--color-bg)",
              }}
            >
              <img
                src="/assets/edvin.jpg"
                alt="Edvin Gollungberg"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                color: "var(--color-text-muted)",
              }}
            >
              <Icon name="map-pin" size={14} />
              Lund, Sverige
            </div>
          </div>
          <div style={{ maxWidth: 620 }}>
            <Eyebrow>Om mig</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(28px, 3.4vw, 40px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                margin: "0 0 8px",
                color: "var(--color-text)",
              }}
            >
              Edvin Gollungberg
            </h2>
            <div
              style={{
                fontSize: 16,
                color: "var(--color-primary)",
                fontWeight: 500,
                marginBottom: 28,
              }}
            >
              Grundare, Agenify AI
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text)", margin: "0 0 20px" }}>
              Jag har drivit företag i en eller annan form sedan jag var 15, mest inom e-commerce,
              webbdesign och digital marknadsföring, men jag har även jobbat på projekt
              process-utvecklingsprojekt, olika typer av nurturing och crm system. Just nu pluggar
              jag vid Lunds universitet parallellt med att hjälpa företag implementera smarta
              lösningar.
            </p>
            <h3
              style={{
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                margin: "32px 0 12px",
                fontSize: 12,
              }}
            >
              Varför jag bygger Agenify
            </h3>
            <p style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.65, color: "var(--color-text)" }}>
              AI-landskapet utvecklas så snabbt att det är ett heltidsjobb i sig att bara hänga
              med. Jag har följt den utvecklingen sedan den tog fart, och jag älskar att bygga och
              effektivisera workflows som är lönsamma och mätbara för att sedan utveckla dessa.
              Agenify finns för att byråer ska kunna implementera det senaste utan att själva behöva
              bli AI-specialister.
            </p>
            <div
              style={{
                marginTop: 28,
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-warning-text)",
                  marginBottom: 8,
                }}
              >
                Var jag är just nu
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--color-text)" }}>
                Agenify är tidigt. Jag har teknisk expertis, men jag bygger fortfarande min portfölj
                av kundcases. Därför gör jag de första <strong>10 rapporterna helt gratis</strong>,
                jag vill lära mig vilka flaskhalsar svenska Service Företag faktiskt har, och jag
                behöver case och testimonials för att kunna växa Agenify på sikt.
              </p>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "var(--color-text-muted)",
                  fontStyle: "italic",
                }}
              >
                Det är dealen: din tid + din feedback, i utbyte mot en detaljerad rapport och
                potentiell implementation som normalt hade varit ett betalt uppdrag.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// Portfolio — Tidigare Uppdrag
// =====================================================================

type PortfolioClient = {
  name: string;
  logo: string;
  aspect: "wide" | "square";
  dark?: boolean;
  sector: string;
  role: string;
  short: string;
};

const portfolioClients: PortfolioClient[] = [
  {
    name: "Convini",
    logo: "/assets/clients/convini.svg",
    aspect: "wide",
    sector: "Foodtech / B2B",
    role: "Processutveckling & skalbar drift",
    short:
      "Kartlade hela packningsflödet med dataanalys, identifierade flaskhalsar och byggde en skalbar processdesign som höjde lönsamheten markant.",
  },
  {
    name: "EZETO",
    logo: "/assets/clients/ezeto.png",
    aspect: "wide",
    sector: "SaaS",
    role: "Lead-nurturing & CRM-automation",
    short:
      "Byggde automatiserade lead-flöden i Pipedrive och HubSpot via Zapier som kvalificerade inkommande trafik från kampanjerna.",
  },
  {
    name: "PM Moto",
    logo: "/assets/clients/pm-moto.jpg",
    aspect: "square",
    dark: true,
    sector: "Automotive / Service",
    role: "Smart bokningsautomation",
    short:
      "Byggde ett intelligent bokningsflöde som estimerade åtgärdstid, hittade lediga slots och briefade kund och mekaniker automatiskt.",
  },
  {
    name: "Profit Media",
    logo: "/assets/clients/profit-media.png",
    aspect: "wide",
    sector: "Digital marknadsföring",
    role: "Leveransinfrastruktur för byråkunder",
    short:
      "Byggde konverteringsoptimerade leadsidor åt byråns kunder, så teamet kunde fokusera på strategi i stället för produktion.",
  },
];

function PortfolioLogoBox({
  src,
  alt,
  aspect,
  dark,
}: {
  src: string;
  alt: string;
  aspect: "wide" | "square";
  dark?: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? "#1F1F22" : "var(--color-bg)",
        border: dark ? "1px solid #1F1F22" : "1px solid var(--color-border)",
        borderRadius: 10,
        padding: aspect === "square" ? 8 : 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
      }}
    >
      <img
        src={src}
        alt={alt + " logo"}
        style={{ maxHeight: 56, maxWidth: "100%", objectFit: "contain", display: "block" }}
      />
    </div>
  );
}

function PortfolioCard({ client }: { client: PortfolioClient }) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 14,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <PortfolioLogoBox src={client.logo} alt={client.name} aspect={client.aspect} dark={client.dark} />
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-primary)",
        }}
      >
        {client.sector}
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "var(--color-text)",
          lineHeight: 1.3,
        }}
      >
        {client.role}
      </div>
      <p
        style={{
          fontSize: 13.5,
          lineHeight: 1.55,
          color: "var(--color-text-muted)",
          margin: 0,
        }}
      >
        {client.short}
      </p>
    </div>
  );
}

function Portfolio() {
  return (
    <Section bg="bg" id="tidigare-uppdrag">
      <Container>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 40px" }}>
          <Eyebrow>Företag jag jobbat med</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 36px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: 0,
              color: "var(--color-text)",
            }}
          >
            Tidigare Uppdrag
          </h2>
        </div>
        <div
          className="portfolio-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
        >
          {portfolioClients.map((c) => (
            <PortfolioCard key={c.name} client={c} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// FAQ
// =====================================================================

function Faq() {
  const items = FAQ_ITEMS;
  const [open, setOpen] = useState(0);
  return (
    <Section bg="bg" id="faq">
      <Container>
        <div style={{ maxWidth: 680, marginBottom: 48 }}>
          <Eyebrow>FAQ</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: 0,
              color: "var(--color-text)",
            }}
          >
            Vanliga frågor.
          </h2>
        </div>
        <div
          style={{
            maxWidth: 860,
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {items.map((it, i) => (
            <div key={it.q} style={{ borderTop: i ? "1px solid var(--color-border)" : 0 }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 24px",
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--color-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {it.q}
                <Icon name={open === i ? "minus" : "plus"} size={18} color="var(--color-text-muted)" />
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 22px",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "var(--color-text-muted)",
                    maxWidth: 720,
                  }}
                >
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// LeadForm
// =====================================================================

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>
          {label}
          {required && <span style={{ color: "var(--color-accent)", marginLeft: 4 }}>*</span>}
        </span>
        {hint && <span style={{ fontSize: 12, color: "var(--color-text-subtle)" }}>{hint}</span>}
      </div>
      {children}
    </label>
  );
}

function ThankYou() {
  return (
    <div
      style={{
        background: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: 16,
        padding: 48,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: "var(--color-success-tint)",
          display: "grid",
          placeItems: "center",
          marginBottom: 24,
        }}
      >
        <Icon name="check" size={28} color="var(--color-success)" />
      </div>
      <h3
        style={{
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 12px",
          color: "var(--color-text)",
        }}
      >
        Tack! Jag har fått din anmälan.
      </h3>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          color: "var(--color-text-muted)",
          margin: "0 0 20px",
        }}
      >
        Jag återkommer via mail senast samma dag med förslag på tid för första samtalet.
      </p>
      <div
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderLeft: "3px solid var(--color-accent)",
          borderRadius: 8,
          padding: "16px 20px",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            marginBottom: 6,
          }}
        >
          Medan du väntar
        </div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--color-text)" }}>
          Fundera på <em>en sak</em> i ditt företag som känns mest repetitiv eller frustrerande. Det
          är oftast där vi hittar det första workflowet värt att bygga.
        </p>
      </div>
    </div>
  );
}

const LEADS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxtPCH1LnJOI7NG9YqiXoEEO98wMMHlI1FnzdnkgCr_ABESmwfc0YIFX_hI9a45k6trZA/exec";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
type UtmKey = (typeof UTM_KEYS)[number];
type UtmState = Record<UtmKey, string>;
const EMPTY_UTM: UtmState = { utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "" };

const readSession = (key: string): string => {
  if (typeof window === "undefined") return "";
  try {
    return window.sessionStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
};
const writeSession = (key: string, value: string): void => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // sessionStorage unavailable (Safari private mode, disabled storage) — ignore
  }
};

type LeadFormState = {
  name: string;
  email: string;
  company: string;
  size: string;
  niche: string;
  bottleneck: string;
};

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    email: "",
    company: "",
    size: "",
    niche: "",
    bottleneck: "",
  });
  const [utm, setUtm] = useState<UtmState>(EMPTY_UTM);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next: UtmState = { ...EMPTY_UTM };
    UTM_KEYS.forEach((k) => {
      const fromUrl = params.get(k);
      if (fromUrl) writeSession(k, fromUrl);
      next[k] = fromUrl ?? readSession(k);
    });
    setUtm(next);
  }, []);

  const update =
    (k: keyof LeadFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await fetch(LEADS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...form,
          submittedAt: new Date().toISOString(),
          page: typeof window !== "undefined" ? window.location.href : "",
          utm_source: utm.utm_source || "direct",
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
          utm_content: utm.utm_content,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setError("Något gick fel. Försök igen eller maila edvin@agenifyai.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section bg="surface" id="formular" style={{ padding: "96px 0 120px" }}>
      <Container>
        <div
          className="form-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }}
        >
          <div className="form-sidebar" style={{ position: "sticky", top: 96 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                background: "var(--color-accent-tint)",
                border: "1px solid #F0D69A",
                borderRadius: 9999,
                marginBottom: 20,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 9999, background: "var(--color-accent)" }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-warning-text)",
                  letterSpacing: "0.04em",
                }}
              >
                7 platser kvar
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 700,
                margin: "0 0 20px",
                color: "var(--color-text)",
                textWrap: "balance",
              }}
            >
              Få en gratis AI rapport
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--color-text-muted)",
                margin: "0 0 28px",
              }}
            >
              Fyll i formuläret så återkommer jag senast samma dag för att boka in första samtalet.
              Tar 2 minuter.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {["Gratis", "Inga kortuppgifter", "Svar senast samma dag", "Avboka när som helst"].map(
                (t) => (
                  <li
                    key={t}
                    style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--color-text)" }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 9999,
                        background: "var(--color-success-tint)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Icon name="check" size={12} color="var(--color-success)" />
                    </span>
                    {t}
                  </li>
                )
              )}
            </ul>
            <p style={{ marginTop: 28, fontSize: 14, lineHeight: 1.6, color: "var(--color-text-muted)" }}>
              Om du har några som helst frågor, tveka inte på att höra av dig till mig på{" "}
              <a
                href="mailto:edvin@agenifyai.com"
                style={{ color: "var(--color-primary)", fontWeight: 500 }}
              >
                edvin@agenifyai.com
              </a>
            </p>
          </div>

          {submitted ? (
            <ThankYou />
          ) : (
            <form
              onSubmit={onSubmit}
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                className="form-row"
              >
                <Field label="Namn" required>
                  <input
                    className="tf-input"
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="För- och efternamn"
                  />
                </Field>
                <Field label="E-post" required>
                  <input
                    className="tf-input"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="namn@byra.se"
                  />
                </Field>
              </div>
              <Field label="Företagsnamn" required>
                <input
                  className="tf-input"
                  type="text"
                  required
                  value={form.company}
                  onChange={update("company")}
                  placeholder="T.ex. Nordvik Digital"
                />
              </Field>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                className="form-row"
              >
                <Field label="Antal anställda" required>
                  <select className="tf-input" required value={form.size} onChange={update("size")}>
                    <option value="">Välj…</option>
                    <option value="1-4">1–4</option>
                    <option value="5-10">5–10</option>
                    <option value="11-20">11–20</option>
                    <option value="21+">21+</option>
                  </select>
                </Field>
                <Field label="Nisch / bransch" required>
                  <input
                    className="tf-input"
                    type="text"
                    required
                    value={form.niche}
                    onChange={update("niche")}
                    placeholder='Ex: "Reklambyrå", "Redovisningsbyrå" "frisör salong"'
                  />
                </Field>
              </div>
              <Field label="Vad är er största flaskhals just nu?" hint="Valfritt">
                <textarea
                  className="tf-input"
                  rows={3}
                  value={form.bottleneck}
                  onChange={update("bottleneck")}
                  placeholder="2–3 rader räcker."
                  style={{ resize: "vertical", minHeight: 80 }}
                />
              </Field>
              <button
                type="submit"
                className="submit-btn"
                disabled={sending}
                style={sending ? { opacity: 0.7, cursor: "wait" } : undefined}
              >
                <span>{sending ? "Skickar…" : "Skicka in & skapa rapport"}</span>
                <Icon name="arrow-right" size={18} />
              </button>
              {error && (
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 13,
                    color: "var(--color-accent)",
                    textAlign: "center",
                  }}
                >
                  {error}
                </p>
              )}
              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 13,
                  color: "var(--color-text-muted)",
                  textAlign: "center",
                }}
              >
                Genom att skicka godkänner du att jag kontaktar dig via mail. Din data delas inte
                med någon.
              </p>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}

// =====================================================================
// Footer
// =====================================================================

function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "40px 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/assets/logo.svg" alt="Agenify AI" style={{ height: 22 }} />
            <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
              © 2026 Agenify AI · Lund, Sverige
            </span>
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 13 }}>
            <a href="#faq" style={{ color: "var(--color-text-muted)" }}>FAQ</a>
            <a href="mailto:edvin@agenifyai.com" style={{ color: "var(--color-text-muted)" }}>
              edvin@agenifyai.com
            </a>
            <a href="#" style={{ color: "var(--color-text-muted)" }}>Integritetspolicy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// =====================================================================
// App
// =====================================================================

export default function Site() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Report />
      <Bonus />
      <Process />
      <ForWhom />
      <AboutMe />
      <Portfolio />
      <Faq />
      <LeadForm />
      <Footer />
    </>
  );
}
