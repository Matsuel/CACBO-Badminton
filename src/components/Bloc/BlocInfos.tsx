import { cn } from '@/utils/cn'
import React from 'react'

interface BlocInfosProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const BlocInfos = ({
    children,
    className,
    ...props
}: BlocInfosProps) => {
    return (
        <div
            className={cn("w-[42%] h-auto flex flex-col items-start justify-center gap-3 bg-white rounded-ten p-7", className)} {...props}>
            {children}
        </div>
    )
}

export default BlocInfos