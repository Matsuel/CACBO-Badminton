import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/utils/cn";

// Styles de texte Figma (MOBILE/*). Tokens définis dans globals.css.
export const textStyles = cva("", {
	variants: {
		variant: {
			h1: "font-darker-grotesque text-h1",
			h2: "font-space-grotesk text-h2",
			h3: "font-space-grotesk text-h3",
			h4: "font-poppins text-h4",
			corps: "font-poppins text-corps",
			secondaire: "font-poppins text-secondaire",
			cta: "font-poppins text-cta",
			chapo: "font-poppins text-chapo",
			citation: "font-poppins text-citation",
			chiffre: "font-poppins text-chiffre",
			"h2-histoire": "font-space-grotesk text-h2-histoire",
			"h3-petit": "font-space-grotesk text-h3-petit",
			etiquette: "font-poppins text-etiquette",
			pastille: "font-poppins text-pastille",
			pied: "font-poppins text-pied",
			"pied-long": "font-poppins text-pied-long",
			emoji: "font-poppins text-emoji",
		},
		color: {
			inherit: "",
			noir: "text-noir",
			rouge: "text-rouge",
			"rouge-pale": "text-rouge-pale",
			blanc: "text-blanc",
			"blanc-casse": "text-blanc-casse",
		},
	},
	defaultVariants: {
		variant: "corps",
		color: "inherit",
	},
});

type TextVariant = NonNullable<VariantProps<typeof textStyles>["variant"]>;

const defaultTags: Record<TextVariant, React.ElementType> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	corps: "p",
	secondaire: "p",
	cta: "span",
	chapo: "p",
	citation: "p",
	chiffre: "p",
	"h2-histoire": "h2",
	"h3-petit": "h3",
	etiquette: "p",
	pastille: "span",
	pied: "p",
	"pied-long": "p",
	emoji: "span",
};

interface TextProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
		VariantProps<typeof textStyles> {
	/** Balise HTML rendue. Par défaut : h1–h4 pour les titres, p pour le texte. */
	as?: React.ElementType;
}

const Text = ({ as, variant, color, className, ...props }: TextProps) => {
	const Tag = as ?? defaultTags[variant ?? "corps"];
	return (
		<Tag className={cn(textStyles({ variant, color }), className)} {...props} />
	);
};

export default Text;
