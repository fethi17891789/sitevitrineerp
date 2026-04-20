import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MouseTrack from "./components/MouseTrack";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitevitrineerp.vercel.app"),
  title: "Skyra ERP | Logiciel de Gestion d'Entreprise n°1 en Algérie",
  description:
    "Skyra est le meilleur logiciel ERP pour la gestion d'entreprise industrielle. Unifiez inventaire, ventes, production (MRP) et logistique avec performance.",
  keywords: [
    "ERP",
    "logiciel de gestion",
    "production industrielle",
    "gestion commerciale",
    "Tlemcen",
    "Algérie",
    "Skyra",
    "logistique",
    "facturation",
  ],
  authors: [{ name: "Skyra Team" }],
  creator: "Skyra",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sitevitrineerp.vercel.app",
    title: "Skyra ERP | L'ERP pour booster votre entreprise",
    description: "Skyra ERP : la solution ultime pour la gestion d'inventaire, de ventes et de production.",
    siteName: "Skyra ERP",
    images: [
      {
        url: "/og-image.jpg", // Vous pourrez ajouter une image dans le dossier public/ plus tard
        width: 1200,
        height: 630,
        alt: "Aperçu de Skyra ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyra ERP | Logiciel de Gestion",
    description: "Plateforme modulaire qui unifie inventaire, ventes, achats, production et logistique.",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "f4pzGhnbSGGkz_CpnByBtBOUDXIYzPtNxipH5GpY_P0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen bg-surface font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Skyra ERP",
              operatingSystem: "Windows, Web",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "DZD",
              },
              description:
                "Skyra ERP est le logiciel de gestion d'entreprise et de production industrielle leader à Tlemcen, Algérie. Optimisez votre logistique, inventaire et comptabilité avec notre solution ERP complète.",
              creator: {
                "@type": "Organization",
                name: "Skyra",
              },
            }),
          }}
        />
        <MouseTrack />
        {children}
      </body>
    </html>
  );
}
