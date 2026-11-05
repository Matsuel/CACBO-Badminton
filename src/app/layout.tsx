import type { Metadata } from "next";
import "./globals.css";
import ClientAnalytics from "@/components/ClientAnalytics";
import { darkerGrotesque, poppins, spaceGrotesk } from "./fonts";
import { BASE_URL } from "./sitemap";

export const metadata: Metadata = {
	title: {
		default: "CACBO Badminton",
		template: "%s - CACBO Badminton",
	},
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
		<html
			lang="fr"
			className={`${poppins.variable} ${spaceGrotesk.variable} ${darkerGrotesque.variable}`}
		>
			<body className="antialiased text-noir">
				<ClientAnalytics />
				{children}
			</body>
		</html>
	);
}
