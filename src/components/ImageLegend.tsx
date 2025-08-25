import { textVariants } from '@/constantes/theme';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import React from 'react'

interface ImageLegendProps {
    src: string;
    description: string;
    className?: string;
}

const ImageLegend = ({
    src,
    description,
    className
}: ImageLegendProps) => {
    return (
        <div className={cn('w-full h-auto flex flex-col items-center justify-center gap-content bg-transparent', className)}>
            <Image
                src={src}
                alt={description}
                className='rounded-[10px]'
                width={2000}
                height={2000}
            />
            <p className={`text-center text-redpale ${textVariants.secondary}`}>
                {description}
            </p>
        </div>
    )
}

export default ImageLegend