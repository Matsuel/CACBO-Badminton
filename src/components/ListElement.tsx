import type React from 'react';
import { textVariants } from '@/constantes/theme';
import { cn } from '@/utils/cn';

interface ListElementProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children?: React.ReactNode;
}

const ListElement = ({
    children,
    className,
    ...props
}: ListElementProps) => {
    return (
        <li className={cn(textVariants.text, className)} {...props}>
            {children}
        </li>
    )
}

export default ListElement