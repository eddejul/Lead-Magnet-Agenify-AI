import { ImageResponse } from "next/og";

export const alt = "Agenify AI — Gratis AI-rapport för tjänsteföretag";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInter(weight: 600 | 700, text?: string): Promise<ArrayBuffer> {
  const params = new URLSearchParams({ family: `Inter:wght@${weight}` });
  if (text) params.set("text", text);
  const css = await fetch(`https://fonts.googleapis.com/css2?${params.toString()}`).then((r) =>
    r.text(),
  );
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not parse Inter ${weight} CSS`);
  return await fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [interSemibold, interBold] = await Promise.all([loadInter(600), loadInter(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Top accent strip */}
        <div style={{ display: "flex", height: 8, background: "#3268B2", width: "100%" }} />

        {/* Subtle dot grid */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 8,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle, #DCE3EE 1.4px, transparent 1.4px)",
            backgroundSize: "32px 32px",
            opacity: 0.55,
          }}
        />

        {/* Content frame */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "72px 80px 64px",
            position: "relative",
          }}
        >
          {/* Top row: brand + scarcity pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {/* Brand mark — recreated from /assets/logo.svg */}
              <svg width="84" height="84" viewBox="0 0 36 36" fill="none">
                <rect x="2" y="2" width="32" height="32" rx="8" fill="#3268B2" />
                <path
                  d="M11 25 L18 11 L25 25"
                  stroke="#FFFFFF"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="13.5"
                  y1="20"
                  x2="22.5"
                  y2="20"
                  stroke="#FFFFFF"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                />
                <circle cx="28" cy="11" r="2.25" fill="#D4880C" />
              </svg>
              <div
                style={{
                  display: "flex",
                  fontSize: 40,
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#1C2130",
                }}
              >
                Agenify&nbsp;<span style={{ color: "#3268B2" }}>AI</span>
              </div>
            </div>

            {/* Scarcity pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 22px",
                background: "#FDF3E0",
                border: "1px solid #F0D69A",
                borderRadius: 9999,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  borderRadius: 9999,
                  background: "#D4880C",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#8B5A06",
                  letterSpacing: "0.01em",
                }}
              >
                Max 10 rapporter / månad
              </div>
            </div>
          </div>

          {/* Heading */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 104,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                color: "#1C2130",
              }}
            >
              Gratis&nbsp;<span style={{ color: "#3268B2" }}>AI-rapport</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 104,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                color: "#1C2130",
                marginTop: 8,
              }}
            >
              för tjänsteföretag
            </div>
          </div>

          {/* Bottom row: domain + tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  width: 56,
                  height: 2,
                  background: "#3268B2",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#1C2130",
                  letterSpacing: "-0.01em",
                }}
              >
                agenifyai.com
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 500,
                color: "#7A8BA0",
                letterSpacing: "0.005em",
              }}
            >
              Boka fler möten · Spara 10+ tim/v
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interSemibold, weight: 600, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    },
  );
}
