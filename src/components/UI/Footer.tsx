import React from 'react'
import Logo from '@/assets/cacbowhite.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Socials } from '@/constantes/socials'
import Facebook from '@/assets/footer/Facebook'
import Instagram from '@/assets/footer/Instagram'
import Messenger from '@/assets/footer/Messenger'
import HelloAsso from '@/assets/footer/HelloAsso'
import Omnisport from '@/assets/omnisport.svg'

const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-col mt-32 gap-9 justify-start items-center'>

            <div className='w-full h-auto flex flex-row justify-start items-center gap-32 bg-redcolor py-12 pl-44'>
                <div className='w-auto h-auto flex flex-row justify-center items-center gap-7'>
                    <Image src={Logo} alt='cacbo' width={100} />

                    <div className='w-[1px] h-20 bg-whitebroken' />

                    <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                        <h4 className='text-white font-Montserrat font-semibold text-base'>CACBO Badminton</h4>
                        <p className='w-[52%] text-white font-Inter font-normal text-[13px]'>Complexe sportif Philippe Madrelle 24 rue Pasteur, 33560 Carbon-Blanc</p>

                        <div className='w-full flex flex-col'>
                            <Link href='tel:0618952330' className='text-white font-Inter font-semibold text-[13px]'>06 18 95 23 30</Link>
                            <p className='text-white text-[13px] font-Inter italic'>Ouvert le lundi (21h-23h), mardi (18h-21h) et vendredi (18h30-21h)</p>
                        </div>
                    </div>
                </div>

                <div className='w-auto h-auto flex flex-row justify-center items-end gap-5'>
                    <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                        <h4 className='text-white font-Montserrat font-semibold text-base'>Le club</h4>
                        <Link href='/bureau' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Le bureau</Link>
                        <Link href='/histoire' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Notre histoire</Link>
                        <Link href='/boutique' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Notre boutique</Link>
                    </div>

                    <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                        <Link href='/adherer' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Adhérer</Link>
                        <Link href='/contact' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Nous contacter</Link>
                        <Link href='/partenaires' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Nos partenaires</Link>
                    </div>
                </div>

                <div className='w-auto h-auto flex flex-col justify-start items-start gap-1'>
                    <h4 className='text-white font-Montserrat font-semibold text-base'>Le bad’</h4>
                    <Link href='/regles' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Règles du jeu</Link>
                    <Link href='/raquette' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>La raquette</Link>
                    <Link href='/volant' className='text-white font-Inter font-normal text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Le volant</Link>
                </div>

                <div className='w-auto h-auto flex flex-col justify-start items-start gap-[15px]'>
                    <h4 className='text-white font-Montserrat font-semibold text-base'>Nos réseaux</h4>
                    <div className='w-auto h-auto flex flex-row flex-wrap justify-start items-center gap-6'>
                        <Link href={Socials.Facebook} target='_blank'><Facebook className='text-white hover:opacity-40 transition-all ease-in-out duration-300' size={36} /></Link>
                        <Link href={Socials.Instagram} target='_blank'><Instagram className='text-white hover:opacity-40 transition-all ease-in-out duration-300' size={36} /></Link>
                        <Link href={Socials.Messenger} target='_blank'><Messenger className='text-white hover:opacity-40 transition-all ease-in-out duration-300' size={36} /></Link>
                        <Link href={Socials.Helloasso} target='_blank'><HelloAsso className='text-white hover:opacity-40 transition-all ease-in-out duration-300' size={36} /></Link>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto flex flex-row justify-between items-center bg-transparent mb-20 px-44'>
                <div className='w-auto h-auto flex flex-row justify-center items-center gap-2'>
                    <p className='text-redcolor font-Inter font-light text-[13px]'>Copyright © 2025 CACBO Badminton. Tous droits réservés.</p>
                    <div className='w-[1px] h-[18px] bg-redcolor' />
                    <p className='text-redcolor font-Inter font-light text-[13px]'>Site pensé par Maël THOMAS et développé par Mathéo LANG.</p>
                    <div className='w-[1px] h-[18px] bg-redcolor' />
                    <Link href='/mentions-legales' className='text-redcolor font-Inter font-light text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Mentions légales</Link>
                    <div className='w-[1px] h-[18px] bg-redcolor' />
                    <Link href='/politiques' className='text-redcolor font-Inter font-light text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>Politique de confidentialité</Link>
                    <div className='w-[1px] h-[18px] bg-redcolor' />
                    <Link href='/faq' className='text-redcolor font-Inter font-light text-[13px] hover:opacity-40 transition-all ease-in-out duration-300'>FAQ</Link>
                </div>

                <div className='w-auto h-auto flex flex-row justify-center items-center gap-2'>
                    <p className='text-redcolor font-Inter font-light text-[13px]'>Une section de</p>
                    <Image src={Omnisport} alt='omnisport' width={95} />
                </div>

            </div>
        </footer >
    )
}

export default Footer