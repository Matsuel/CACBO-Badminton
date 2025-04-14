import React from 'react'
import BlocTitle from './BlocTitle'
import { cn } from '@/utils/cn'

interface BlocProps extends React.HTMLAttributes<HTMLDivElement> {
    blocTitle?: string
    blocIcon?: React.ReactNode
}

const Bloc = ({
    blocTitle,
    blocIcon,
    children,
    className,
    ...props
}: BlocProps) => {
    return (
        <div className={cn("md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-center gap-5 mt-44", className)} {...props}>
            <BlocTitle className={blocIcon ? 'flex flex-row items-center gap-3' : ''}>
                {blocTitle} {blocIcon}
            </BlocTitle>

            <div className="w-[100%] h-auto flex lg:flex-row flex-col flex-wrap items-start justify-between lg:gap-0 gap-7">
                {children}
            </div>

        </div>
    )
}

export default Bloc