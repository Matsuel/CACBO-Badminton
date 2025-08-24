import { cn } from '@/utils/cn'
import React from 'react'
import Navbar from './UI/Navbar'
import Footer from './Footer';

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}

const PageLayout = ({
    className,
    children,
    ...props
}: PageLayoutProps) => {
    return (
        <div className={cn('w-full h-auto min-h-screen flex flex-col items-center justify-start bg-background', className)} {...props}>
            <div className='flex flex-col items-center justify-start gap-header p-5'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout