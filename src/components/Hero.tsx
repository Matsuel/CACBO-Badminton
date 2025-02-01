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
        <div className='md:w-[80%] w-[90%] h-auto flex flex-col lg:flex-row items-center justify-between mt-5 bg-white rounded-ten gap-10 lg:gap-0 mb-[90px]'>

            <div className='w-full lg:w-[47%] flex flex-col justify-center items-start gap-3 lg:pl-20 p-7'>
                <h2 className='font-Montserrat font-bold text-4xl lg:text-6xl'>{title}</h2>
                <h3 className='font-Inter font-normal text-xl lg:text-2xl text-redcolor'>{subtitle}</h3>
                {description && <Open />}
            </div>

            <div className='w-full lg:w-[57%] h-[330px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat rounded-ten' style={{ backgroundImage: `url('/hero.png')` }}>
                <div className='w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] bg-white rounded-full flex justify-center items-center lg:ml-36'>
                    <Image src={icon} alt='icon' width={80} />
                </div>
            </div>

        </div>
    )
}

export default Hero