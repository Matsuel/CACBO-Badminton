import { textVariants } from '@/constantes/theme';
import React from 'react';

interface HeaderProps {
    h2?: string;
    title: string;
    subtitle: React.ReactNode;
    cta?: React.ReactNode;
}

const Header = ({
    h2,
    title,
    subtitle,
    cta
}: HeaderProps) => {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-center gap-content">
            {h2 && <h2 className="font-Poppins text-[13px] text-redcolor leading-4">
                {h2}
            </h2>}

            <h1 className={`${textVariants.h1} text-redcolor uppercase break-normal`}
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