import type React from 'react';
import { cn } from '@/utils/cn';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

const List = ({
    className,
    children,
    ...props
}: ListProps) => {
    return (
        <ul className={cn("list-disc pl-7 flex flex-col gap-content", className)} {...props}>
            {children}
        </ul>
    )
}

export default List