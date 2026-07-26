import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// SEO Constants
const FULL_NAME = "Syed Faiez Ahmed";
const JOB_TITLE = "AI-Enabled ERP & FinTech Developer | Full Stack Software Engineer | Accounting Systems Specialist";
const SITE_URL = "https://syedfaiezahmed.vercel.app";
const HERO_IMAGE = `${SITE_URL}/images/hero-image.png`;
const BASE_DESCRIPTION = "Portfolio of Syed Faiez Ahmed, AI-Enabled ERP & FinTech Developer specializing in ERP Systems, Accounting Software, AI Applications, SaaS Platforms, Business Automation and Enterprise Solutions.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Syed Faiez Ahmed | AI-Enabled ERP & FinTech Developer",
    template: `%s | ${FULL_NAME}`,
  },
  description: BASE_DESCRIPTION,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/hero-image.png",
    shortcut: "/images/hero-image.png",
    apple: "/images/hero-image.png",
  },
  keywords: [
    "ERP Developer",
    "FinTech Developer",
    "Accounting Software Developer",
    "AI Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "CRM Developer",
    "Business Automation",
    "SaaS Developer",
    "Enterprise Software",
    "Microservices Developer",
    "Pakistan Software Engineer",
    "Syed Faiez Ahmed"
  ],
  openGraph: {
    title: "Syed Faiez Ahmed | AI-Enabled ERP & FinTech Developer",
    description: BASE_DESCRIPTION,
    url: SITE_URL,
    siteName: `${FULL_NAME}'s Portfolio`,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} - AI-Enabled ERP & FinTech Developer Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Faiez Ahmed | AI-Enabled ERP & FinTech Developer",
    description: BASE_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: FULL_NAME,
        url: SITE_URL,
        jobTitle: JOB_TITLE,
        description: BASE_DESCRIPTION,
        image: HERO_IMAGE,
        knowsAbout: [
          "ERP Systems",
          "FinTech Solutions",
          "Accounting Software",
          "AI Integration",
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Python",
          "FastAPI",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Business Automation",
          "SaaS Platforms",
          "Microservices",
        ],
        sameAs: [
          "https://github.com/syedfaiezahmed",
          "https://www.linkedin.com/in/syed-faiez-ahmed-b45612279/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${FULL_NAME} Portfolio`,
        description: BASE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload hero image */}
        <link rel="preload" href="/images/hero-image.png" as="image" />
        <link rel="icon" href="/images/hero-image.png" type="image/png" />
        <link rel="shortcut icon" href="/images/hero-image.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/hero-image.png" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}