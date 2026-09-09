import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { textVariants } from "@/constantes/theme";
import type { NavbarLinkType } from "@/index";

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
			className="w-full h-auto p-5 text-redcolor flex flex-row justify-start gap-6 items-center bg-white"
		>
			<div className="w-12 h-12 flex items-center justify-center bg-redcolor text-white rounded-xl">
				{icon}
			</div>
			<div className="w-[65%] h-auto flex flex-col gap-2 items-start">
				<h3 className={textVariants.h3}>{title}</h3>
				{description && (
					<p className={`${textVariants.secondary} w-3/4 text-redpale`}>{description}</p>
				)}
			</div>
			<ChevronRight className="w-4" />
		</Link>
	);
};

export default NavbarLink;
