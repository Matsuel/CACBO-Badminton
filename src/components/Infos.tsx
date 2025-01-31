import { cn } from '@/utils/cn'
import React from 'react'

interface InfosProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const Infos = ({
    children,
    className,
    ...props
}: InfosProps) => {
    return (
        <div
            className={cn("w-[40%] h-auto flex flex-col items-start justify-center gap-3 bg-white rounded-ten p-7", className)} {...props}>
            {children}
        </div>
    )
}

export default Infos