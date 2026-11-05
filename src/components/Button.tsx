import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import type React from "react";
import { Envelope } from "@/assets/Envelope";
import ExternalLink from "@/assets/ExternalLink";
import { cn } from "@/utils/cn";
import { textStyles } from "./Text";
import Send from "./UI/Send";

const buttonStyles = cva(
	"border border-rouge rounded-xl flex flex-row items-center justify-center gap-2 px-3 py-2 transition-colors duration-300",
	{
		variants: {
			variant: {
				plein: "bg-rouge text-blanc hover:bg-blanc hover:text-rouge",
				contour: "bg-blanc text-rouge hover:bg-rouge hover:text-blanc",
				ghost:
					"bg-transparent text-rouge border-transparent hover:bg-rouge hover:text-blanc hover:border-rouge",
			},
		},
		defaultVariants: {
			variant: "plein",
		},
	},
);

// Icônes des CTA de la page Composants du Figma : flèche après le texte, avion et enveloppe avant.
const icons = {
	external: { node: <ExternalLink size={10} />, position: "after" },
	send: { node: <Send />, position: "before" },
	mail: { node: Envelope, position: "before" },
} as const;

interface ButtonProps
	extends LinkProps,
		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
		VariantProps<typeof buttonStyles> {
	icon?: keyof typeof icons;
}

const Button = ({
	className,
	children,
	variant,
	icon,
	href,
	...props
}: ButtonProps) => {
	const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
	const iconConfig = icon ? icons[icon] : undefined;

	return (
		<Link
			href={href}
			className={cn(
				buttonStyles({ variant }),
				textStyles({ variant: "cta" }),
				className,
			)}
			{...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			{...props}
		>
			{iconConfig?.position === "before" && iconConfig.node}
			{children}
			{iconConfig?.position === "after" && iconConfig.node}
		</Link>
	);
};

export default Button;
