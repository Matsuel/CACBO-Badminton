import { cn } from '@/utils/cn'
import React from 'react'

interface BlocRightProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const BlocRight = ({
    children,
    className,
    ...props
}: BlocRightProps) => {
    return (
        <div
            className={cn("lg:w-[44.9%] w-full h-auto flex flex-col items-start justify-center gap-3 bg-white rounded-ten p-7", className)} {...props}>
            {children}
        </div>
    )
}

export default BlocRight