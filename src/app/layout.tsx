import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/constantes";
import { BASE_URL } from "./sitemap";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: "Cacbo Badminton Club",
  keywords: ["badminton", "cacbo", "club", "badminton club", "badminton club cacbo"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    title: SITE_CONFIG.title,
    description: "Cacbo Badminton Club",
    images: [
      {
        url: `${BASE_URL}/favicon.ico`,
        width: 800,
        height: 600,
        alt: "Cacbo Badminton Club",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
