import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'inverted'
    icon?: React.ReactNode
    href: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    rowReverse?: boolean
    white?: boolean
}

const Button = ({
    variant = 'primary',
    children,
    icon,
    href,
    target = '_self',
    rowReverse = false,
    white = false,
    className
}: ButtonProps) => {

    const buttonStyle = {
        primary: `${white ? "bg-white" : "bg-whitebroken"} text-redcolor border-1 border-redcolor hover:bg-redcolor ${white ? "hover:text-white" : "hover:text-whitebroken"} transition-all duration-300 ease-in-out`,
        inverted: `bg-redcolor ${white ? "text-white" : "text-whitebroken"} border-1 border-redcolor ${white ? "hover:bg-white" : "hover:bg-whitebroken"} hover:text-redcolor transition-all duration-300 ease-in-out`,
    }

    return (
        <Link href={href} target={target} className={`flex ${rowReverse ? "flex-row-reverse" : "flex-row"} items-center justify-center gap-2 rounded-ten px-[15px] py-[10px] font-Montserrat font-medium xl:text-paragraph text-paragraph-mobile leading-none ${buttonStyle[variant]} ${className}`}>
            {icon}
            {children}
        </Link>
    )
}

export default Button