import { textVariants } from '@/constantes/theme';
import React from 'react';

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