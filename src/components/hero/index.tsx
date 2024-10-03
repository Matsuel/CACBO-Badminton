import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Open from '../open'

interface HeroProps {
    background: StaticImageData
    title: string
    subtitle: string
    description: string
    icon: StaticImport
}

const Hero = ({
    background,
    title,
    subtitle,
    description,
    icon
}: HeroProps) => {
    return (
        <div className='w-[80%] h-auto flex flex-row items-center justify-between mt-10 bg-white rounded-ten'>

            <div className='w-[50%] flex flex-col justify-center items-start gap-3 pl-28'>
                <h2 className='font-Montserrat font-bold text-6xl'>{title}</h2>
                <h3 className='font-Montserrat font-normal text-2xl text-redcolor'>{subtitle}</h3>
                <Open />
            </div>

            <div className='w-[50%] h-[330px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat rounded-ten' style={{ backgroundImage: `url(${background.src})` }}>
                <div className='w-[170px] h-[170px] bg-white rounded-full flex justify-center items-center ml-36'>
                    <Image src={icon} alt='icon' />
                </div>
            </div>

        </div>
    )
}

export default Hero