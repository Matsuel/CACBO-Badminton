import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ImageLegendProps {
    image: StaticImageData
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
            <Image src={image} alt={description} className={`w-[100%] h-auto rounded-ten ${imageClassName}`} />
            <p className={`w-[100%] h-auto font-Inter font-light italic text-[15px] text-center ${descriptionClassName}`}>{description}</p>
        </div>
    )
}

export default ImageLegend