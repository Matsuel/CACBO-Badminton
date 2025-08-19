import React from 'react'
import Button from './Button';
import { SendHorizontal } from 'lucide-react';
import { Url } from 'url';

interface HeaderProps {
    h2?: string;
    title: string;
    subtitle: React.ReactNode;
    cta?: string;
    ctahref?: string;
}

const Header = ({
    h2,
    title,
    subtitle,
    cta,
    ctahref
}: HeaderProps) => {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-center gap-content">
            {h2 && <h2 className="font-Poppins text-[13px] text-redcolor leading-4">
                {h2}
            </h2>}

            <h1 className="font-Space-Grotesk text-[38px] font-bold text-redcolor leading-7">
                {title}
            </h1>

            <h3 className="font-Poppins text-[13px] text-redcolor leading-none flex flex-col">
                {subtitle}
            </h3>

            {cta && <Button href={ctahref as unknown as Url} variant="inverted">
                <SendHorizontal size={14} />
                {cta}
            </Button>}
        </div>
    )
}

export default Header