import PageLayout from '@/components/PageLayout'
import { textVariants } from '@/constantes/theme'
import Image from 'next/image'
import React from 'react'

const NotFound = () => {
    return (
        <PageLayout>
            <div className='relative'>
                <h1 className={`${textVariants.h1} text-redcolor`}>404</h1>
                <Image
                    src="/notfound/volant.svg"
                    alt='volant de badminton'
                    className='h-16 w-auto absolute z-10 -top-2 left-1/2 -translate-x-1/2'
                    width={100}
                    height={100}
                />
                <p className={`absolute z-20 top-0 left-1/2 -translate-x-1/2 ${textVariants.h1} text-redcolor`}>
                    0
                </p>
            </div>

            <div className='flex flex-col'>
                <p className={`${textVariants.secondary} text-center text-redcolor`}>
                    Oops.. Service trop long !
                </p>
                <p className={`${textVariants.secondary} text-center text-redcolor`}>
                    Vous êtes tombés sur une page qui n’existe pas.
                </p>
            </div>
        </PageLayout>
    )
}

export default NotFound