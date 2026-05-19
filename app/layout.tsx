import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import ChatbotLoader from "@/components/ChatbotLoader";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alnajjarfirmlb.com"),
  title: {
    template: "%s",
    default:
      "Media Agency in Lebanon | Content Creation & Social Media | Alnajjar Firm",
  },
  description:
    "Alnajjar Firm is a creative media agency in Lebanon specializing in content creation, social media management, reels production, video editing, branding, and digital marketing. Based in Awkar, serving Beirut and all of Lebanon.",
  keywords:
    "media agency Lebanon, marketing agency Lebanon, content creation agency Lebanon, social media agency Lebanon, video production Lebanon, reels production Lebanon, branding agency Lebanon, digital marketing Lebanon, creative agency Lebanon, social media management Lebanon, content creator Lebanon, Instagram reels agency, TikTok content creation, video editing Lebanon, graphic design agency Lebanon, motion graphics Lebanon, business marketing Lebanon, social media growth Lebanon, brand identity design Lebanon, media agency Beirut, marketing agency Beirut, content creation Beirut, video production Beirut, branding Beirut, digital marketing Beirut, media agency Dubai, marketing agency UAE, content creation Dubai, social media agency Saudi Arabia, media agency KSA, digital marketing Middle East, Alnajjar Firm",
  authors: [{ name: "Alnajjar Firm" }],
  publisher: "Alnajjar Firm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "cIdjWKYfYj9LETYBugdRDbJAfkCwTG2OJKxTcDKggEo",
  },
  openGraph: {
    type: "website",
    siteName: "Alnajjar Firm",
    locale: "en_US",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 200,
        alt: "Alnajjar Firm — Creative Media Agency in Lebanon | Content Creation, Social Media & Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alnajjarfirm",
    images: [
      {
        url: "/logo.webp",
        alt: "Alnajjar Firm — Creative Media Agency in Lebanon",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "geo.region": "LB-JL",
    "geo.placename": "Awkar, Mount Lebanon, Lebanon",
    "geo.position": "33.9281;35.6019",
    ICBM: "33.9281, 35.6019",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171717",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://alnajjarfirmlb.com/#website",
      url: "https://alnajjarfirmlb.com/",
      name: "Alnajjar Firm",
      alternateName: "Al Najjar Firm",
      description:
        "Creative media and marketing agency in Lebanon specializing in content creation, social media management, reels production, video editing, branding, and digital marketing.",
      publisher: { "@id": "https://alnajjarfirmlb.com/#organization" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://alnajjarfirmlb.com/",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://alnajjarfirmlb.com/#organization",
      name: "Alnajjar Firm",
      alternateName: "Al Najjar Firm",
      url: "https://alnajjarfirmlb.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://alnajjarfirmlb.com/logo.webp",
        width: 512,
        height: 512,
        contentUrl: "https://alnajjarfirmlb.com/logo.webp",
      },
      image: "https://alnajjarfirmlb.com/logo.webp",
      description:
        "Alnajjar Firm is a creative media and marketing agency based in Awkar, Lebanon. We specialize in content creation, social media management, reels production, video editing, branding, graphic design, motion graphics, photography, and digital marketing.",
      foundingDate: "2023",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
      telephone: "+96181623936",
      email: "info@alnajjarfirm.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Awkar, haret el ballan",
        addressLocality: "Awkar",
        addressRegion: "Mount Lebanon",
        addressCountry: "LB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.9281,
        longitude: 35.6019,
      },
      areaServed: [
        { "@type": "Country", name: "Lebanon" },
        { "@type": "City", name: "Beirut" },
        { "@type": "City", name: "Awkar" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "City", name: "Dubai" },
        { "@type": "Country", name: "Saudi Arabia" },
      ],
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/alnajjarfirm",
        "https://www.tiktok.com/@alnajjarfirm",
        "https://www.facebook.com/alnajjarfirm",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://alnajjarfirmlb.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a media agency do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A media agency like Alnajjar Firm specializes in creating, managing, and distributing content to grow your brand online. We handle everything from social media management and content creation to video production, reels, graphic design, branding, and digital marketing strategy — so your business gets seen by the right audience.",
          },
        },
        {
          "@type": "Question",
          name: "Why should a business hire a social media agency in Lebanon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lebanon's digital market is highly competitive. Hiring a specialized social media agency in Lebanon like Alnajjar Firm gives you access to a local team that understands the Lebanese audience, culture, and business landscape.",
          },
        },
        {
          "@type": "Question",
          name: "How much does content creation cost in Lebanon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Content creation pricing in Lebanon varies based on scope, volume, and the type of content needed. Contact us directly for a tailored quote based on your specific goals.",
          },
        },
        {
          "@type": "Question",
          name: "Do you create Instagram Reels and TikTok videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reels and short-form video production is one of our core specialties. Our shooting and editing team produces professional, platform-optimized content for Instagram, TikTok, Facebook, and YouTube.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://alnajjarfirmlb.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://alnajjarfirmlb.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Process",
          item: "https://alnajjarfirmlb.com/process",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "FAQ",
          item: "https://alnajjarfirmlb.com/faq",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact Us",
          item: "https://alnajjarfirmlb.com/contacts",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main id="app" className="container app-shell" aria-live="polite">
          {children}
        </main>
        <Footer />
        <RevealInit />
        <ChatbotLoader />
      </body>
    </html>
  );
}
