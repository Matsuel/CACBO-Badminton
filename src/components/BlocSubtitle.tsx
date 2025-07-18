import { cn } from '@/utils/cn'
import React from 'react'

interface BlocSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
    // Define any additional props if needed
}

const BlocSubtitle = ({
    className,
    children,
    ...props
}: BlocSubtitleProps) => {
    return (
        <h4 className={cn("font-Poppins text-[15px] leading-4 font-medium text-redpale", className)} {...props}>
            {children}
        </h4>
    )
}

export default BlocSubtitle