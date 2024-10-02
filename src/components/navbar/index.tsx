import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/cacbo.svg'
import Facebook from '@/assets/facebook.svg'
import Instagram from '@/assets/instagram.svg'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full flex flex-col justify-center items-center pt-4'>

            <div className='w-full flex flex-row justify-around'>

                <div className='flex flex-row justify-center items-center gap-7'>
                    <Image src={Logo} alt='cacbo' height={50} />

                    <div className="w-[2px] h-full bg-redcolor rounded-full" />

                    <div className='flex flex-col justify-center'>
                        <h1 className='font-Montserrat font-semibold text-redcolor text-2xl'>CACBO Badminton</h1>
                        <h2 className='font-Montserrat font-normal text-redcolor text-sm'>Carbon-Blanc</h2>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-7'>

                    <Link href='https://www.facebook.com/cacbo.bad/' target='_blank'>
                        <Image src={Facebook} alt='facebook' />
                    </Link>

                    <Link href='https://www.instagram.com/cacbo.bad' target='_blank'>
                        <Image src={Instagram} alt='instagram' />
                    </Link>

                </div>

            </div>
        </nav>
    )
}

export default Navbar