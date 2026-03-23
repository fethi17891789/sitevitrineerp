import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseTrack from "./components/MouseTrack";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyra ERP — Gestion d'entreprise nouvelle génération",
  description:
    "Plateforme modulaire qui unifie inventaire, ventes, achats, production et communication.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-surface font-sans">
        <MouseTrack />
        {children}
      </body>
    </html>
  );
}
