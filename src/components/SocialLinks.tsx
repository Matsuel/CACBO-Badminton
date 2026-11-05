import Link from "next/link";
import { type SocialName, socials } from "@/constantes/socials";
import { cn } from "@/utils/cn";

interface SocialLinksProps {
	/** Réseaux affichés, dans l'ordre de la constante. Par défaut : tous. */
	only?: SocialName[];
	size?: number;
	className?: string;
	linkClassName?: string;
}

const SocialLinks = ({
	only,
	size = 30,
	className,
	linkClassName,
}: SocialLinksProps) => {
	const items = only
		? socials.filter((social) => only.includes(social.name))
		: socials;

	return (
		<div className={cn("flex flex-row gap-30", className)}>
			{items.map(({ name, href, Icon }) => (
				<Link
					key={name}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={name}
					className={cn(
						"flex items-center justify-center transition-colors duration-300",
						linkClassName,
					)}
				>
					<Icon size={size} />
				</Link>
			))}
		</div>
	);
};

export default SocialLinks;
