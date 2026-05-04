import type { Metadata, Viewport } from "next";
import { FAQ_ITEMS } from "@/lib/faq";
import "./globals.css";

const SITE_URL = "https://agenifyai.com";
const SITE_NAME = "Agenify AI";
const TITLE = "Gratis AI-rapport för svenska tjänsteföretag, Agenify AI";
const DESCRIPTION =
  "Få en personlig karta över var AI kan boka fler möten och spara 10+ timmar i veckan i ditt tjänsteföretag. Gratis. Max 10 rapporter per månad.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Edvin Gollungberg", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "AI-automation",
    "AI-rapport",
    "lead-respons",
    "CRM-automation",
    "tjänsteföretag",
    "serviceföretag",
    "Sverige",
    "Agenify AI",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/assets/logo-mark.svg",
    shortcut: "/assets/logo-mark.svg",
    apple: "/assets/logo-mark.svg",
  },
  // OpenGraph — used by LinkedIn and Facebook.
  // og:image is auto-emitted by app/opengraph-image.tsx (1200x630 PNG).
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  // Twitter / X card.
  // twitter:image is auto-emitted by app/twitter-image.tsx.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@agenifyai",
    site: "@agenifyai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3Ki1-Bni2qqglE4fZ-WQimRFkdeTF71hSpuszdR9nLw",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3268B2",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/logo.svg`,
  },
  email: "edvin@agenifyai.com",
  founder: {
    "@type": "Person",
    name: "Edvin Gollungberg",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lund",
    addressCountry: "SE",
  },
  areaServed: {
    "@type": "Country",
    name: "Sweden",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "AI Automation Report",
  serviceType: "AI automation consulting",
  description:
    "Skräddarsydd AI-rapport för svenska tjänsteföretag — konkreta workflows, verktygsval, tidsbesparing och implementationsordning, baserat på en 30-minuters intervju.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Sweden" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Swedish service businesses",
  },
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "SEK",
    availability: "https://schema.org/LimitedAvailability",
    url: `${SITE_URL}/#formular`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: it.a,
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
