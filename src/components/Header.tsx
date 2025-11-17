import type React from 'react';
import { textVariants } from '@/constantes/theme';
import { cn } from '@/utils/cn';

interface HeaderProps {
    h2?: string;
    title: string;
    subtitle: React.ReactNode;
    cta?: React.ReactNode;
    h1ClassName?: string;
    className?: string;
}

const Header = ({
    h2,
    title,
    subtitle,
    h1ClassName,
    className,
    cta
}: HeaderProps) => {
    return (
        <div className={cn("w-full h-auto flex flex-col items-start justify-center gap-content", className)}>
            {h2 && <h2 className="font-Poppins text-[13px] text-redcolor leading-4">
                {h2}
            </h2>}

            <h1 className={`${textVariants.h1} text-redcolor uppercase ${h1ClassName}`}
            >
                {title}
            </h1>

            <h3 className={`${textVariants.secondary} text-redpale`}>
                {subtitle}
            </h3>

            {cta}
        </div>
    )
}

export default Header