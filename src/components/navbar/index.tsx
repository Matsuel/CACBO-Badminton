import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/cacbo.svg'
import Link from 'next/link'
import Button from '../button'
import {
    NavbarButtonLinks,
    NavbarLinks,
    NavbarSocialLinks
} from "@/constantes/NavbarLinks";

const Navbar = () => {

    return (
        <nav className='w-full flex flex-col justify-center items-center pt-9'>

            <div className='w-[80%] flex flex-row justify-between'>

                <div className='flex flex-row justify-center items-center gap-7'>
                    <Image src={Logo} alt='cacbo' height={50}/>

                    <div className="w-[1px] h-[70%] bg-redcolor rounded-full"/>

                    <div className='flex flex-col justify-center'>
                        <h1 className='font-Montserrat font-semibold text-redcolor text-2xl leading-7'>CACBO
                            Badminton</h1>
                        <h2 className='font-Montserrat font-normal text-redcolor text-sm leading-3'>Carbon-Blanc</h2>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-10'>

                    <div className='flex flex-row justify-center items-center gap-5'>

                        {NavbarSocialLinks.map((link, index) => (
                            <Link key={index} href={link.href} target='_blank' className="text-redcolor hover:text-redcolorhover">
                                {link.icon}
                            </Link>
                        ))}

                    </div>

                    <div className='flex flex-row justify-center items-center gap-[25px]'>

                        {NavbarButtonLinks.map((link, index) => (
                            <Button
                                key={index}
                                href={link.href}
                                variant={link.variant as 'primary' | 'inverted'}
                                icon={link.icon}
                            >
                                {link.name}
                            </Button>
                        ))}

                    </div>

                </div>

            </div>

            <div className='w-[80%] h-[1px] bg-[#e0e0e0] rounded-full my-8'/>

            <div className='w-[80%] flex flex-row justify-start items-center gap-30'>

                {NavbarLinks.map((link, index) => (
                    <Link key={index} href={link.href} className='font-Montserrat font-medium text-blackcolor text-20'>
                        {link.name.toUpperCase()}
                    </Link>
                ))}

            </div>

            <div className='w-[80%] h-[1px] bg-[#e0e0e0] rounded-full my-8'/>

        </nav>
    )
}

export default Navbar