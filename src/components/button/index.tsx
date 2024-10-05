import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'inverted'
    icon?: React.ReactNode
    href: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    rowReverse?: boolean
}

const Button = ({
    variant = 'primary',
    children,
    icon,
    href,
    target = '_self',
    rowReverse = false,
}: ButtonProps) => {

    const buttonStyle = {
        primary: 'bg-whitebroken text-redcolor border-1 border-redcolor text-20 hover:bg-redcolor hover:text-whitebroken transition-all duration-300 ease-in-out',
        inverted: 'bg-redcolor text-whitebroken border-1 border-redcolor text-20 hover:bg-whitebroken hover:text-redcolor transition-all duration-300 ease-in-out',
    }

    return (
        <Link href={href} target={target}>
            <button className={`flex ${rowReverse ? "flex-row-reverse" : "flex-row"} items-center justify-center gap-2 rounded-ten px-horizontal py-vertical font-Montserrat font-medium ${buttonStyle[variant]}`}>
                {icon}
                {children}
            </button>
        </Link>
    )
}

export default Button