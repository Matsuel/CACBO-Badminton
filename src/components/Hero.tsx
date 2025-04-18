import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import Open from './Open'

interface HeroProps {
    title: string
    subtitle: string
    description?: boolean
    icon: StaticImport
}

const Hero = ({
    title,
    subtitle,
    description = false,
    icon
}: HeroProps) => {
    return (
        <div className='w-[80%] h-auto flex flex-row items-center justify-between mt-5 bg-white rounded-ten gap-0 mb-[90px]'>

            <div className='w-[51%] flex flex-col justify-center items-start gap-3 lg:pl-28 p-7'>
                <h1 className='font-Montserrat font-bold text-4xl lg:text-6xl'>{title}</h1>
                <h3 className='font-Inter font-normal text-xl lg:text-2xl text-redcolor'>{subtitle}</h3>
                {description && <Open />}
            </div>

            <div className='w-[57%] h-[330px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat rounded-e-ten' style={{ backgroundImage: `url('/hero.png')` }}>
                <div className='w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] bg-white rounded-full flex justify-center items-center lg:ml-36'>
                    <Image src={icon} alt='icon' width={80} />
                </div>
            </div>

        </div>
    )
}

export default Hero