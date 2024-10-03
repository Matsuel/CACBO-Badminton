import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/cacbo.svg'
import Facebook from '@/assets/facebook.svg'
import Instagram from '@/assets/instagram.svg'
import Link from 'next/link'
import Button from '../button'

const Navbar = () => {

    const links = [
        { name: 'Accueil', href: '/' },
        { name: 'Le club', href: '/club' },
        { name: 'Adhérer', href: '/join' },
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
                            icon={<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3.1V12.9C19 14.0598 18.0701 15 16.9231 15H3.07692C1.92987 15 1 14.0598 1 12.9V3.1M19 3.1C19 1.9402 18.0701 1 16.9231 1H3.07692C1.92987 1 1 1.9402 1 3.1M19 3.1V3.32653C19 4.05578 18.6258 4.73282 18.0116 5.11501L11.0885 9.4227C10.421 9.83806 9.57903 9.83806 8.91149 9.42271L1.98841 5.11501C1.37417 4.73282 1 4.05578 1 3.32653V3.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                        >
                            NOUS ECRIRE
                        </Button>

                        <Button
                            href='/join'
                            variant='inverted'
                            icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.681117 0.520119C0.493136 0.468185 0.290351 0.518518 0.153031 0.651194C0.015711 0.78387 -0.034005 0.977499 0.0235626 1.15543L1.75062 6.49361H7.7973C8.09142 6.49361 8.32985 6.72037 8.32985 7.00009C8.32985 7.27981 8.09142 7.50656 7.7973 7.50656H1.75063L0.0236276 12.8446C-0.0339404 13.0225 0.0157765 13.2161 0.153098 13.3488C0.29042 13.4815 0.493207 13.5318 0.681188 13.4799C5.43758 12.1658 9.85465 10.0939 13.7783 7.41116C13.9175 7.316 14 7.16294 14 6.99992C14 6.8369 13.9175 6.68385 13.7783 6.58869C9.85461 3.90598 5.43753 1.83419 0.681117 0.520119Z" fill="currentColor" />
                            </svg>}
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