import { cn } from '@/utils/cn'
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
        <div className={cn(`w-auto h-auto flex flex-col justify-center items-center rounded-ten gap-3 pb-3`, className)}>
            <Image src={image} width={3000} height={1500} alt={description} className={cn(`w-auto h-auto rounded-ten`, imageClassName)} />
            <p className={cn(`w-auto h-auto font-Inter font-light text-[13px] text-center`, descriptionClassName)}>{description}</p>
        </div>
    )
}

export default ImageLegend