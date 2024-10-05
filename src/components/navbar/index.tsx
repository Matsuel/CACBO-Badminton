import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/cacbo.svg'
import Facebook from '@/assets/facebook.svg'
import Instagram from '@/assets/instagram.svg'
import Link from 'next/link'
import Button from '../button'
import {Envelope} from "@/assets/Envelope";
import {Send} from "@/assets/Send";

const Navbar = () => {

    const links = [
        { name: 'Accueil', href: '/' },
        { name: 'Le club', href: '/histoire' },
        { name: 'Adhérer', href: '/adherer' },
        { name: 'Le bad', href: '/bad' },
        { name: 'Nous contacter', href: '/contact' },
    ]

    return (
        <nav className='w-full flex flex-col justify-center items-center pt-9'>

            <div className='w-[80%] flex flex-row justify-between'>

                <div className='flex flex-row justify-center items-center gap-7'>
                    <Image src={Logo} alt='cacbo' height={50} />

                    <div className="w-[1px] h-[70%] bg-redcolor rounded-full" />

                    <div className='flex flex-col justify-center'>
                        <h1 className='font-Montserrat font-semibold text-redcolor text-2xl leading-7'>CACBO Badminton</h1>
                        <h2 className='font-Montserrat font-normal text-redcolor text-sm leading-3'>Carbon-Blanc</h2>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-10'>

                    <div className='flex flex-row justify-center items-center gap-5'>
                        <Link href='https://www.facebook.com/cacbo.bad/' target='_blank'>
                            <Image src={Facebook} alt='facebook' />
                        </Link>

                        <Link href='https://www.instagram.com/cacbo.bad' target='_blank'>
                            <Image src={Instagram} alt='instagram' />
                        </Link>
                    </div>

                    <div className='flex flex-row justify-center items-center gap-[25px]'>
                        <Button
                            href='/contact'
                            variant='primary'
                            icon={Envelope}
                        >
                            NOUS ECRIRE
                        </Button>

                        <Button
                            href='/join'
                            variant='inverted'
                            icon={Send}
                        >
                            NOUS REJOINDRE
                        </Button>
                    </div>

                </div>

            </div>

            <div className='w-[80%] h-[1px] bg-[#e0e0e0] rounded-full my-8' />

            <div className='w-[80%] flex flex-row justify-start items-center gap-30'>

                {links.map((link, index) => (
                    <Link key={index} href={link.href} className='font-Montserrat font-medium text-blackcolor text-20'>
                        {link.name.toUpperCase()}
                    </Link>
                ))}

            </div>

            <div className='w-[80%] h-[1px] bg-[#e0e0e0] rounded-full my-8' />

        </nav>
    )
}

export default Navbar