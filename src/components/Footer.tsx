import React from 'react'
import Logo from '@/assets/cacbowhite.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-row justify-start items-center mt-32 gap-20 bg-redcolor py-12 pl-44'>
            <div className='w-auto h-auto flex flex-row justify-center items-center gap-7'>
                <Image src={Logo} alt='cacbo' width={140} />

                <div className='w-[1px] h-20 bg-whitebroken' />

                <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                    <h4 className='text-white font-Montserrat font-semibold text-base'>CACBO Badminton</h4>
                    <p className='w-[52%] text-white font-Inter font-normal text-paragraph-mobile'>Complexe sportif Philippe Madrelle 24 rue Pasteur, 33560 Carbon-Blanc</p>

                    <div className='w-full flex flex-col'>
                        <Link href='tel:0618952330' className='text-white font-Inter font-semibold'>06 18 95 23 30</Link>
                        <p className='text-white font-Inter italic'>Ouvert le lundi (21h-23h), mardi (18h-21h) et vendredi (18h30-21h)</p>
                    </div>
                </div>
            </div>

            <div className='w-auto h-auto flex flex-row justify-center items-end gap-5'>
                <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                    <h4 className='text-white font-Montserrat font-semibold text-base'>Le club</h4>
                    <Link href='/bureau' className='text-white font-Inter font-normal text-[13px]'>Le bureau</Link>
                    <Link href='/histoire' className='text-white font-Inter font-normal text-[13px]'>Notre histoire</Link>
                    <Link href='/boutique' className='text-white font-Inter font-normal text-[13px]'>Notre boutique</Link>
                </div>

                <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                    <Link href='/adherer' className='text-white font-Inter font-normal text-[13px]'>Adhérer</Link>
                    <Link href='/contact' className='text-white font-Inter font-normal text-[13px]'>Nous contacter</Link>
                    <Link href='/partenaires' className='text-white font-Inter font-normal text-[13px]'>Nos partenaires</Link>
                </div>
            </div>

            <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                <h4 className='text-white font-Montserrat font-semibold text-base'>Le bad&quot;</h4>
                <Link href='/regles' className='text-white font-Inter font-normal text-[13px]'>Règles du jeu</Link>
                <Link href='/raquette' className='text-white font-Inter font-normal text-[13px]'>La raquette</Link>
                <Link href='/volant' className='text-white font-Inter font-normal text-[13px]'>Le volant</Link>
            </div>
        </footer >
    )
}

export default Footer