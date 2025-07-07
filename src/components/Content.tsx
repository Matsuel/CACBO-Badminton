import { cn } from '@/utils/cn'
import React from 'react'

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Content = ({
    className,
    children,
    ...props
}: ContentProps) => {
    return (
        <div className={cn("w-full h-auto flex flex-col items-start justify-center gap-body", className)} {...props}>
            {children}
        </div>
    )
}

export default Content