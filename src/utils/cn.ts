import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Déclare les tailles de texte Figma (globals.css) : sans ça, tailwind-merge
// les prend pour des couleurs et supprime `text-h1` face à `text-rouge`.
const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            'font-size': [{ text: ['h1', 'h2', 'h3', 'h4', 'corps', 'secondaire', 'cta'] }],
        },
    },
})

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
