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
  title: "Creation site internet Thionville, Metz, Moselle — 250€ | jecreevotresite.fr",
  description:
    "Creation de sites internet a Uckange, Thionville, Metz et dans toute la Moselle a partir de 250€. Jordan Hummel, freelance web en Lorraine. Design moderne, responsive, optimise SEO. Livraison sous 7 jours. Devis gratuit.",
  keywords: [
    "creation site internet Uckange",
    "creation site internet Thionville",
    "creation site internet Metz",
    "creation site internet Moselle",
    "creation site internet Hayange",
    "creation site internet Florange",
    "creation site internet Yutz",
    "creation site internet vallee de la Fensch",
    "site internet pas cher Moselle",
    "freelance web Thionville",
    "freelance web Metz",
    "agence web Moselle",
    "site vitrine Lorraine",
    "creation site internet Luxembourg",
    "site web professionnel",
    "site vitrine entreprise",
    "Jordan Hummel",
  ],
  authors: [{ name: "Jordan Hummel" }],
  creator: "Jordan Hummel",
  metadataBase: new URL("https://jecreevotresite.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Creation site internet Thionville, Metz, Moselle — 250€ | jecreevotresite.fr",
    description:
      "Creation de sites internet a Uckange, Thionville, Metz et dans toute la Moselle a partir de 250€. Design moderne, responsive, optimise SEO. Livraison sous 7 jours.",
    url: "https://jecreevotresite.fr",
    siteName: "jecreevotresite.fr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creation site internet Thionville, Metz, Moselle — 250€",
    description:
      "Sites internet sur mesure en Moselle et Grand Est. Design professionnel, responsive, optimise pour Google. A partir de 250€.",
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
              "@type": "LocalBusiness",
              "@id": "https://jecreevotresite.fr/#business",
              name: "jecreevotresite.fr — Jordan Hummel",
              description:
                "Creation de sites internet professionnels a Uckange, Thionville, Metz et dans toute la Moselle a partir de 250€. Sites sur mesure, responsives, optimises SEO.",
              url: "https://jecreevotresite.fr",
              image: "https://jecreevotresite.fr/og-image.png",
              priceRange: "€€",
              founder: {
                "@type": "Person",
                name: "Jordan Hummel",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Uckange",
                postalCode: "57270",
                addressRegion: "Moselle",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.3125,
                longitude: 6.15,
              },
              areaServed: [
                { "@type": "City", name: "Uckange" },
                { "@type": "City", name: "Thionville" },
                { "@type": "City", name: "Hayange" },
                { "@type": "City", name: "Florange" },
                { "@type": "City", name: "Yutz" },
                { "@type": "City", name: "Fameck" },
                { "@type": "City", name: "Metz" },
                { "@type": "City", name: "Luxembourg" },
                { "@type": "AdministrativeArea", name: "Moselle" },
                { "@type": "AdministrativeArea", name: "Grand Est" },
              ],
              serviceType: "Creation de sites internet",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de creation de sites web",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Site internet complet",
                    price: "250",
                    priceCurrency: "EUR",
                    description:
                      "Design sur mesure, responsive, optimise SEO, formulaire de contact, hebergement 1 an inclus, nom de domaine inclus, livraison sous 7 jours",
                  },
                ],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
