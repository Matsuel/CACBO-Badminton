import { cn } from '@/utils/cn'
import React from 'react'

interface BlocProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitile?: string;
}

const Bloc = ({
    className,
    children,
    title,
    subtitile,
    ...props
}: BlocProps) => {
    return (
        <div className={cn("w-full h-auto flex flex-col items-start justify-start p-5 gap-content bg-white rounded-xl shadow-default", className)} {...props}>
            <div className={`${title || subtitile ? "flex" : "hidden"} flex-col`}>
                {title && (
                    <h3 className="font-Space-Grotesk text-xl text-redcolor leading-4 font-semibold">
                        {title}
                    </h3>
                )}
                {subtitile && (
                    <span className="text-black font-Space-Grotesk text-xl leading-4 font-semibold">
                        {subtitile}
                    </span>
                )}
            </div>
            {children}
        </div>
    )
}

export default Bloc