import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/constantes";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: "Cacbo Badminton Club",
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
