import { Darker_Grotesque, Poppins, Space_Grotesk } from "next/font/google";

// Poppins is not a variable font on Google Fonts: each weight must be listed.
export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--ff-poppins",
});

export const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--ff-space-grotesk",
});

export const darkerGrotesque = Darker_Grotesque({
	subsets: ["latin"],
	display: "swap",
	variable: "--ff-darker-grotesque",
});
