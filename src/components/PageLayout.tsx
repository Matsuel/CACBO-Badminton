import { cn } from '@/utils/cn'
import React from 'react'
import Navbar from './UI/Navbar'

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    // Define any additional props if needed
}

const PageLayout = ({
    className,
    children,
    ...props
}: PageLayoutProps) => {
    return (
        <div className={cn('w-full h-auto min-h-screen flex flex-col items-center justify-start bg-background gap-header p-5', className)} {...props}>
            <Navbar />
            <div className="w-full h-auto flex flex-col gap-body items-center justify-start">
                {children}
            </div>
        </div>
    )
}

export default PageLayout