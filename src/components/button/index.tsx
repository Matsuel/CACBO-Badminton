import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'inverted'
    icon?: React.ReactNode
    href: string
    target?: '_blank' | '_self' | '_parent' | '_top'
}

const Button = ({
    variant = 'primary',
    children,
    icon,
    href,
    target = '_self',
    ...props
}: ButtonProps) => {

    const buttonStyle = {
        primary: 'bg-whitebroken text-redcolor border-1 border-redcolor text-20',
        inverted: 'bg-redcolor text-whitebroken border-1 border-redcolor text-20',
    }

    return (
        <Link href={href} target={target}>
            <button className={`flex flex-row items-center justify-center gap-1 rounded-ten px-horizontal py-2 ${buttonStyle[variant]}`}>
                {icon}
                {children}
            </button>
        </Link>
    )
}

export default Button