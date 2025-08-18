import { cn } from '@/utils/cn'
import React from 'react'

interface BlocTextProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

const BlocText = ({
    className,
    children,
    ...props
}: BlocTextProps) => {
    return (
        <p className={cn("text-black font-Poppins font-light text-[15px] leading-4", className)} {...props}>
            {children}
        </p>
    )
}

export default BlocText