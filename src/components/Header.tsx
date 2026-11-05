import type React from "react";
import { cn } from "@/utils/cn";
import Text from "./Text";

interface HeaderProps {
	/** Petit texte au-dessus du titre (« Bienvenue »). */
	eyebrow?: string;
	title: string;
	subtitle: React.ReactNode;
	cta?: React.ReactNode;
	h1ClassName?: string;
	className?: string;
}

const Header = ({
	eyebrow,
	title,
	subtitle,
	h1ClassName,
	className,
	cta,
}: HeaderProps) => {
	return (
		<div
			className={cn(
				"w-full h-auto flex flex-col items-start justify-center gap-content px-5",
				className,
			)}
		>
			{eyebrow && (
				<Text variant="secondaire" color="rouge-pale">
					{eyebrow}
				</Text>
			)}

			<Text variant="h1" color="rouge" className={cn("uppercase", h1ClassName)}>
				{title}
			</Text>

			<Text as="div" variant="secondaire" color="rouge-pale">
				{subtitle}
			</Text>

			{cta}
		</div>
	);
};

export default Header;
