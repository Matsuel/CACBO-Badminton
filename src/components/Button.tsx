import { cn } from '@/utils/cn'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface ButtonProps extends LinkProps, React.ButtonHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'inverted'
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
    }

    return (
        <Link
            className={cn(`border border-redcolor rounded-[10px] flex flex-row items-center justify-center gap-2 px-2 py-1 text-[12px] leading-auto font-Poppins transition-colors duration-300 ${variants[variant]}`, className)}
            {...props}
        >
            {children}
        </Link>
    )
}

export default Button