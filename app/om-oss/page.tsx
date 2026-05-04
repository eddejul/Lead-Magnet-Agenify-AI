import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";

const SITE_URL = "https://agenifyai.com";
const PAGE_PATH = "/om-oss";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/edvingollungberg/";

const TITLE = "Om Agenify AI och Edvin Gollungberg";
const DESCRIPTION =
  "Edvin Gollungberg grundade Agenify 2024 för att hjälpa svenska tjänsteföretag väcka kalla leads och svara snabbare med AI och CRM-automation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "profile",
    locale: "sv_SE",
    url: PAGE_URL,
    siteName: "Agenify AI",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@agenifyai",
    site: "@agenifyai",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edvin Gollungberg",
  jobTitle: "Grundare",
  worksFor: { "@type": "Organization", name: "Agenify AI" },
  url: PAGE_URL,
  image: `${SITE_URL}/assets/edvin.jpg`,
  sameAs: [LINKEDIN_URL],
};

export default function OmOssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Nav />
      <Hero />
      <Bio />
      <Disclosure />
      <Footer />
    </>
  );
}

function Container({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
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
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/assets/logo.svg" alt="Agenify AI" style={{ height: 36 }} />
          </Link>
          <nav
            className="nav-links"
            style={{ display: "flex", alignItems: "center", gap: 28, marginLeft: "auto" }}
          >
            <Link href="/#problemet" className="nav-link">Problemet</Link>
            <Link href="/#rapporten" className="nav-link">Rapporten</Link>
            <Link href="/#process" className="nav-link">Så går det till</Link>
            <Link href="/om-oss" className="nav-link" style={{ color: "var(--color-primary)" }}>
              Om oss
            </Link>
            <Link href="/#faq" className="nav-link">FAQ</Link>
          </nav>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link
              href="/#formular"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 32,
                padding: "0 12px",
                borderRadius: 8,
                background: "var(--color-primary)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 120ms ease-out",
              }}
            >
              Skapa min rapport
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--color-primary)",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Container>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 56,
            alignItems: "center",
            padding: "88px 0 96px",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <Eyebrow>Om Agenify AI</Eyebrow>
            <h1
              style={{
                fontSize: "clamp(38px, 5.2vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 700,
                margin: "0 0 20px",
                color: "var(--color-text)",
                textWrap: "balance",
              }}
            >
              Om Agenify AI
            </h1>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                color: "var(--color-text-muted)",
                margin: "0 0 24px",
              }}
            >
              Edvin Gollungberg, grundare
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                color: "var(--color-text-muted)",
              }}
            >
              <Icon name="map-pin" size={14} />
              Lund, Sverige
            </div>
          </div>
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
                alt="Edvin Gollungberg, grundare av Agenify AI"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Bio() {
  return (
    <section style={{ background: "var(--color-bg)", padding: "96px 0" }}>
      <Container>
        <div style={{ maxWidth: 680 }}>
          <Eyebrow>Bakgrund</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: "0 0 28px",
              color: "var(--color-text)",
            }}
          >
            Vägen till Agenify
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-text)", margin: "0 0 20px" }}>
            Jag pluggar psykologi vid Lunds universitet. Innan Agenify drev jag egna projekt
            inom webbdesign och B2B-sälj som frilans, främst för svenska tjänsteföretag som ville
            ha snabbare flöden från lead till bokat möte. Jag grundade Agenify AI 2024.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-text)", margin: "0 0 32px" }}>
            Agenify bygger AI-driven lead-reaktivering, speed-to-lead-system och CRM-automation.
            Kunderna är svenska tjänsteföretag med 5 till 20 anställda. Målet är konkret: väcka
            kalla leads i CRM, svara på nya leads inom 60 sekunder och ta bort manuellt
            uppföljnings-arbete så att teamet kan fokusera på samtalen som faktiskt stänger.
          </p>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              height: 48,
              padding: "0 20px",
              borderRadius: 8,
              background: "var(--color-surface)",
              color: "var(--color-primary)",
              border: "1px solid var(--color-primary)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 120ms ease-out",
            }}
          >
            <Icon name="linkedin" size={20} />
            Edvin på LinkedIn
            <Icon name="arrow-up-right" size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}

function Disclosure() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "96px 0", borderTop: "1px solid var(--color-border)" }}>
      <Container>
        <div style={{ maxWidth: 680 }}>
          <Eyebrow>Transparens</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: "0 0 28px",
              color: "var(--color-text)",
            }}
          >
            Hur Agenify använder AI i sitt eget innehåll
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text)", margin: "0 0 16px" }}>
            Agenify bygger på AI, så det vore underligt att låtsas annat. Jag använder AI för
            research och första utkast på artiklar, LinkedIn-inlägg och guider.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text)", margin: "0 0 16px" }}>
            Jag granskar och redigerar varje publicerat inlägg innan det går ut. Jag
            kontrollerar fakta, byter ut formuleringar som inte låter som mig och tar bort
            allt som inte stämmer med hur Agenify faktiskt jobbar.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text)", margin: 0 }}>
            Allt innehåll publiceras under mitt riktiga namn med länk till min LinkedIn.
            Det är ett medvetet val, både för att möta Googles krav på AI-transparens 2026
            och för att läsare ska veta vem som står bakom orden.
          </p>
        </div>
      </Container>
    </section>
  );
}

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
            <Link href="/#faq" style={{ color: "var(--color-text-muted)" }}>FAQ</Link>
            <a href="mailto:edvin@agenifyai.com" style={{ color: "var(--color-text-muted)" }}>
              edvin@agenifyai.com
            </a>
            <Link href="/om-oss" style={{ color: "var(--color-text-muted)" }}>Om oss</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
