import { textVariants } from '@/constantes/theme';
import Image from 'next/image';
import React from 'react'

interface CarousselProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    images: string[];
}

const Caroussel = ({
    images,
    title
}: CarousselProps) => {
    return (
        <div className='w-full h-auto flex flex-col items-start justify-center gap-content'>
            <h2 className={`${textVariants.h2} text-redcolor`}>
                {title}
            </h2>
            <div className='w-full flex flex-row items-center justify-start gap-content overflow-x-auto whitespace-nowrap'>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={180}
                        height={300}
                        className='shrink-0 rounded-xl'
                    />
                ))}
            </div>
        </div>
    )
}

export default Caroussel