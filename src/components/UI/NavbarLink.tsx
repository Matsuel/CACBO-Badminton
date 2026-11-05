import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { NavbarLinkType } from "@/index";
import Text from "@/components/Text";

const NavbarLink = ({
	title,
	href,
	description,
	icon,
	onClick,
}: NavbarLinkType & { onClick?: () => void }) => {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="w-full h-auto p-5 text-rouge flex flex-row justify-start gap-6 items-center bg-blanc"
		>
			<div className="w-12 h-12 flex items-center justify-center bg-rouge text-blanc rounded-xl">
				{icon}
			</div>
			<div className="w-[65%] h-auto flex flex-col gap-2 items-start">
				<Text variant="h3">{title}</Text>
				{description && (
					<Text variant="secondaire" color="rouge-pale" className="w-3/4">{description}</Text>
				)}
			</div>
			<ChevronRight className="w-4" />
		</Link>
	);
};

export default NavbarLink;
