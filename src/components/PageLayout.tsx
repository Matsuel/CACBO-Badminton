import type React from 'react';
import { cn } from '@/utils/cn';
import Footer from './Footer';
import Navbar from './UI/Navbar';

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
        <div className={cn('w-full h-auto min-h-screen flex flex-col items-center justify-start bg-background gap-header', className)} {...props}>
            <div className='w-full flex flex-col items-center justify-start gap-header p-5 mt-[110px]'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout