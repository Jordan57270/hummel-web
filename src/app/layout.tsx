import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HJ_WEB — Creation de sites internet professionnels | 250€",
  description:
    "Jordan Hummel cree votre site internet professionnel sur mesure a partir de 250€. Design moderne, responsive, optimise SEO. Livraison sous 7 jours. Devis gratuit.",
  keywords: [
    "creation site internet",
    "site web professionnel",
    "creation site web",
    "site vitrine",
    "site internet pas cher",
    "web design",
    "site responsive",
    "site internet entreprise",
    "freelance web",
    "Jordan Hummel",
  ],
  authors: [{ name: "Jordan Hummel" }],
  creator: "Jordan Hummel",
  metadataBase: new URL("https://jecreevotresite.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HJ_WEB — Votre site internet professionnel a 250€",
    description:
      "Sites internet sur mesure, modernes et performants. Design professionnel, responsive, optimise pour Google. Livraison sous 7 jours.",
    url: "https://jecreevotresite.fr",
    siteName: "HJ_WEB",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HJ_WEB — Votre site internet professionnel a 250€",
    description:
      "Sites internet sur mesure, modernes et performants. Design professionnel, responsive, optimise pour Google.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white font-[var(--font-geist-sans)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "HJ_WEB",
              description:
                "Creation de sites internet professionnels sur mesure a partir de 250€",
              url: "https://jecreevotresite.fr",
              founder: {
                "@type": "Person",
                name: "Jordan Hummel",
              },
              priceRange: "A partir de 250€",
              serviceType: "Creation de sites internet",
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              offers: {
                "@type": "Offer",
                name: "Site internet complet",
                price: "250",
                priceCurrency: "EUR",
                description:
                  "Design sur mesure, responsive, optimise SEO, formulaire de contact, hebergement 1 an inclus, nom de domaine inclus, livraison sous 7 jours",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
