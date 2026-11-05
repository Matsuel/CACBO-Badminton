import Image from "next/image";
import Link from "next/link";
import { club } from "@/constantes/club";
import {
	footerLegalLinks,
	footerPartners,
	footerSections,
} from "@/constantes/footer";
import SocialLinks from "./SocialLinks";
import Text from "./Text";

// Texte du footer Figma : Poppins 15 px, interligne 14 px (pas de style MOBILE/* équivalent)
const footerText = "font-poppins text-[15px] leading-[14px]";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full flex flex-col gap-[50px] pb-[50px] bg-blanc-casse">
			<div className="w-full flex flex-col gap-5 px-5 py-[25px] bg-rouge">
				<Text as="p" variant="h3" color="blanc">
					Suivez-nous sur nos réseaux
				</Text>
				<SocialLinks
					size={23}
					className="w-full justify-center gap-[50px]"
					linkClassName="text-blanc hover:text-blanc/80"
				/>
			</div>

			<nav aria-label="Pied de page" className="flex flex-col gap-[50px] px-5">
				{footerSections.map((section) => (
					<div
						key={section.title}
						className={`flex flex-col gap-3 text-rouge ${footerText}`}
					>
						<p className="font-semibold uppercase">{section.title}</p>
						{section.links.map((link) => (
							<Link
								key={link.link}
								href={link.link}
								className="w-fit hover:underline"
							>
								{link.title}
							</Link>
						))}
					</div>
				))}
			</nav>

			<div className="w-full h-[84px] flex flex-row items-center justify-center gap-8 border-y border-rouge">
				{footerPartners.map((partner) => (
					<Image
						key={partner.name}
						src={partner.src}
						alt={partner.name}
						width={partner.width}
						height={partner.height}
						className={`${partner.className} w-auto`}
					/>
				))}
			</div>

			<div className={`flex flex-col gap-[15px] px-5 text-rouge ${footerText}`}>
				<p className="font-semibold">{club.nom}</p>
				<Link href="/contact" className="leading-5 w-fit hover:underline">
					<span aria-hidden>📍 </span>
					{club.adresse.lieu}
					<br />
					{club.adresse.codePostal} {club.adresse.ville}
				</Link>
			</div>

			<nav
				aria-label="Informations légales"
				className={`w-full flex flex-row flex-wrap gap-x-5 gap-y-[9px] px-5 py-[25px] bg-rouge text-blanc-casse font-semibold ${footerText}`}
			>
				{footerLegalLinks.map((link) => (
					<Link key={link.link} href={link.link} className="hover:underline">
						{link.title}
					</Link>
				))}
			</nav>

			<div className="flex flex-col gap-5 px-5 font-poppins text-[15px] leading-5 text-rouge-pale">
				<p>
					© {currentYear} {club.nom}. Tous droits réservés. Site conçu par Maël
					Thomas et développé par{" "}
					<Link
						href="https://matheolang.fr"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Mathéo Lang
					</Link>
					.
				</p>
				<p className="italic">
					Section du Club Athlétique CarbonBlanais Omnisports (CACBO) depuis
					2007.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
