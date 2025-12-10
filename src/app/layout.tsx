"use client";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { env } from "../../env";
import { BASE_URL } from "./sitemap";

export const metadata: Metadata = {
	title: "CACBO Badminton",
	description: "CACBO Badminton Club",
	keywords: [
		"badminton",
		"cacbo",
		"club",
		"badminton club",
		"badminton club cacbo",
	],
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: BASE_URL,
		title: "CACBO Badminton",
		description: "CACBO Badminton Club",
		images: [
			{
				url: `${BASE_URL}/favicon.ico`,
				width: 800,
				height: 600,
				alt: "CACBO Badminton Club",
			},
		],
	},
	icons: {
		icon: `${BASE_URL}/favicon.ico`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className="antialiased">
				<GoogleAnalytics gaMeasurementId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
				<SpeedInsights />
				<Analytics />
				{children}
			</body>
		</html>
	);
}
