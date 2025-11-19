import type React from 'react';
import { textVariants } from '@/constantes/theme';

interface SingleTitleProps {
    children: React.ReactNode;
}

const SingleTitle = ({
    children
}: SingleTitleProps) => {
    return (
        <h2 className={`${textVariants.h2} text-redcolor`}>
            {children}
        </h2>
    )
}

export default SingleTitle