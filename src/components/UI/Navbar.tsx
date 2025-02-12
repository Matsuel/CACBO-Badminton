"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/assets/cacbo.svg'
import Link from 'next/link'
import Button from './Button'
import {
    NavbarButtonLinks,
    NavbarLinks,
    NavbarSocialLinks
} from "@/constantes/NavbarLinks";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full flex flex-col justify-center items-center pt-7'>

            {/* Mobile Menu Toggle */}
            <div className='w-[80%] flex justify-between items-center md:hidden'>
                <Image src={Logo} alt='cacbo' height={50} />
                <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Navbar for larger screens */}
            <div className={`w-[80%] flex-col md:flex md:flex-row justify-between ${isOpen ? 'flex' : 'hidden'} md:flex`}>

                <div className='flex flex-row justify-center items-center gap-7'>
                    <Image src={Logo} alt='cacbo' height={50} />

                    <div className="w-[1px] h-[70%] bg-redcolor rounded-full hidden md:block" />

                    <div className='flex flex-col justify-center'>
                        <h1 className='font-Montserrat font-semibold text-redcolor text-2xl leading-7'>CACBO Badminton</h1>
                        <h2 className='font-Montserrat font-normal text-redcolor text-sm leading-3'>Carbon-Blanc</h2>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-4 md:mt-0'>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        {NavbarSocialLinks.map((link) => (
                            <Link key={link.name} href={link.href} target='_blank' className="text-redcolor hover:text-redcolorhover transition-all duration-300 ease-in-out w-[27px] h-[27px]">
                                {link.icon}
                            </Link>
                        ))}
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-[25px] mt-4 md:mt-0'>
                        {NavbarButtonLinks.map((link) => (
                            <Button
                                key={link.name}
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

            <div className='w-[80%] h-[1px] bg-[#e0e0e0] rounded-full my-8 hidden md:block' />

            <div className={`w-[80%] flex-col md:flex md:flex-row justify-start items-center gap-[30px] ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                {NavbarLinks.map((link) => (
                    <Link key={link.name} href={link.href} className='font-Montserrat font-medium text-blackcolor text-20 hover:text-redcolor transition-all duration-300 ease-in-out'>
                        {link.name.toUpperCase()}
                    </Link>
                ))}
            </div>

            <div className='w-[80%] h-[1px] bg-[#e0e0e0] rounded-full mt-8 mb-5 hidden md:block' />
        </nav>
    )
}

export default Navbar;
