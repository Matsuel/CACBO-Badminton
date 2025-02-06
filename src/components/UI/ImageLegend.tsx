import Image from 'next/image'
import React from 'react'

interface ImageLegendProps {
    image: string
    description: string
    className?: string
    descriptionClassName?: string
    imageClassName?: string
}

const ImageLegend = ({
    description,
    image,
    className,
    descriptionClassName,
    imageClassName
}: ImageLegendProps) => {
    return (
        <div className={`w-auto h-auto flex flex-col justify-center items-center rounded-ten gap-4 ${className}`}>
            <Image src={image} width={1000} height={500} alt={description} className={`w-auto h-auto rounded-ten ${imageClassName}`} />
            <p className={`w-auto h-auto font-Inter font-light text-[13px] text-center ${descriptionClassName}`}>{description}</p>
        </div>
    )
}

export default ImageLegend