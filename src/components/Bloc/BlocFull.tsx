import { cn } from '@/utils/cn'
import React from 'react'

interface BlocFullProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

// TODO: Faire un composant avec un variant pour les tailles

const BlocFull = ({
    children,
    className,
    ...props
}: BlocFullProps) => {
    return (
        <div
            className={cn("w-full h-auto flex flex-col items-start justify-center gap-3 bg-white rounded-ten p-7", className)} {...props}>
            {children}
        </div>
    )
}

export default BlocFull