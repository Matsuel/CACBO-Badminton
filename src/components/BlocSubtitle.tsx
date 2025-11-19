import type React from 'react'
import { cn } from '@/utils/cn'

interface BlocSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
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