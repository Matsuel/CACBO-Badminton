import type React from 'react'
import { cn } from '@/utils/cn'

interface ParentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Parent = ({
    children,
    className,
    ...props
}: ParentProps) => {
    return (
        <div className={cn('w-full h-auto flex flex-col items-start justify-start gap-5', className)} {...props}>
            {children}
        </div>
    )
}

export default Parent