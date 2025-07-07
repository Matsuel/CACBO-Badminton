import { cn } from '@/utils/cn'
import React from 'react'

interface BlocProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

const Bloc = ({
    className,
    children,
    title,
    ...props
}: BlocProps) => {
    return (
        <div className={cn("w-full h-auto flex flex-col items-start justify-start p-5 gap-content bg-white rounded-xl", className)} {...props}>
            <h3 className="font-Space-Grotesk text-xl text-redcolor leading-4 font-semibold">
                {title}
            </h3>
            {children}
        </div>
    )
}

export default Bloc