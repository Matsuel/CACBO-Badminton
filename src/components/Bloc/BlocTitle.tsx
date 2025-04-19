import { cn } from '@/utils/cn'
import React from 'react'

interface BlocTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children?: React.ReactNode
}

const BlocTitle = ({
    className,
    children,
    ...props
}: BlocTitleProps) => {
    return (
        <h3 className={cn("font-Montserrat font-semibold text-black md:text-[28px] text-[18px]", className)} {...props}>
            {children}
        </h3>
    )
}

export default BlocTitle