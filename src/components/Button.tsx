import Link, { type LinkProps } from 'next/link'
import type React from 'react'
import { textVariants } from '@/constantes/theme'
import { cn } from '@/utils/cn'

interface ButtonProps extends LinkProps, React.ButtonHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'inverted' | 'ghost';
}

const Button = ({
    className,
    children,
    variant = 'primary',
    ...props
}: ButtonProps) => {

    const variants = {
        primary: "bg-white text-redcolor hover:bg-redcolor hover:text-white",
        inverted: "bg-redcolor text-white hover:bg-white hover:text-redcolor",
        ghost: "bg-transparent text-redcolor hover:bg-redcolor hover:text-white border-transparent hover:border-redcolor"
    }

    return (
        <Link
            className={cn(`border border-redcolor rounded-xl flex flex-row items-center justify-center gap-2 px-3 py-2 transition-colors duration-300 ${variants[variant]} ${textVariants.cta}`, className)}
            {...props}
        >
            {children}
        </Link>
    )
}

export default Button