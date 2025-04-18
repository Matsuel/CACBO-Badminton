import { cn } from '@/utils/cn'
import React from 'react'

interface BlocLeftProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const BlocLeft = ({
    children,
    className,
    ...props
}: BlocLeftProps) => {
    return (
        <div
            className={cn("lg:w-[53.2%] w-full h-auto flex flex-col items-start justify-center gap-3 bg-white rounded-ten p-7", className)} {...props}>
            {children}
        </div>
    )
}

export default BlocLeft