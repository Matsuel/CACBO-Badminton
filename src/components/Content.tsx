import type React from 'react'
import { cn } from '@/utils/cn'

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
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