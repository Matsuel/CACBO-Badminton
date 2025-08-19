import { textVariants } from '@/constantes/theme';
import { cn } from '@/utils/cn'
import React from 'react'

interface BlocTextProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

const BlocText = ({
    className,
    children,
    ...props
}: BlocTextProps) => {
    return (
        <p className={cn(`${textVariants.text}`, className)} {...props}>
            {children}
        </p>
    )
}

export default BlocText