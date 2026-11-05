import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { cn } from '@/utils/cn';

// Styles de texte Figma (MOBILE/*). Tokens définis dans globals.css.
export const textStyles = cva('', {
    variants: {
        variant: {
            h1: 'font-darker-grotesque text-h1',
            h2: 'font-space-grotesk text-h2',
            h3: 'font-space-grotesk text-h3',
            h4: 'font-poppins text-h4',
            corps: 'font-poppins text-corps',
            secondaire: 'font-poppins text-secondaire',
            cta: 'font-poppins text-cta',
        },
        color: {
            inherit: '',
            noir: 'text-noir',
            rouge: 'text-rouge',
            'rouge-pale': 'text-rouge-pale',
            blanc: 'text-blanc',
        },
    },
    defaultVariants: {
        variant: 'corps',
        color: 'inherit',
    },
});

type TextVariant = NonNullable<VariantProps<typeof textStyles>['variant']>;

const defaultTags: Record<TextVariant, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    corps: 'p',
    secondaire: 'p',
    cta: 'span',
};

interface TextProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
        VariantProps<typeof textStyles> {
    /** Balise HTML rendue. Par défaut : h1–h4 pour les titres, p pour le texte. */
    as?: React.ElementType;
}

const Text = ({ as, variant, color, className, ...props }: TextProps) => {
    const Tag = as ?? defaultTags[variant ?? 'corps'];
    return <Tag className={cn(textStyles({ variant, color }), className)} {...props} />;
};

export default Text;
