import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    image: StaticImageData
    width?: number
}

const Badge = ({
    image,
    className,
    width = 64,
    ...props
}: BadgeProps) => {
    return (
        <div className={`w-[105px] h-[105px] bg-white rounded-full md:flex hidden justify-center items-center absolute drop-shadow-xl ${className}`} {...props}>
            <Image src={image} alt="efb" width={width} />
        </div>
    )
}

export default Badge