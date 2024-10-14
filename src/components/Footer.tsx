import React from 'react'
import Logo from '@/assets/cacbo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-col justify-center items-center md:mt-44 mt-20 bg-white'>
            <div className='w-[80%] h-auto flex flex-col items-center justify-center pt-16'>
                <div className='w-[100%] h-auto flex flex-row flex-wrap items-start 2xl:justify-start justify-center gap-20'>

                    <Image src={Logo} alt='cacbo' width={140} />

                    <div className='w-auto h-auto flex flex-row flex-wrap items-start sm:justify-start justify-center gap-20'>
                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-6'>

                            <h4 className='font-Montserrat font-semibold text-redcolor text-base'>LE CLUB</h4>

                            <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>

                                <Link href='/bureau' className='font-Inter text-redcolor'>
                                    Bureau
                                </Link>

                                <Link href='/histoire' className='font-Inter text-redcolor'>
                                    Notre histoire
                                </Link>

                                <Link href='/boutique' className='font-Inter text-redcolor'>
                                    Notre boutique
                                </Link>

                                <Link href='/partenaires' className='font-Inter text-redcolor'>
                                    Nos partenaires
                                </Link>

                            </div>

                        </div>

                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-6'>

                            <div className='w-full h-[24px]' />

                            <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>

                                <Link href='/adherer' className='font-Inter text-redcolor'>
                                    Adhérer
                                </Link>

                                <Link href='/contact' className='font-Inter text-redcolor'>
                                    Nous contacter
                                </Link>

                            </div>

                        </div>

                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-6'>

                            <h4 className='font-Montserrat font-semibold text-redcolor text-base'>LE BAD</h4>

                            <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>

                                <Link href='/raquette' className='font-Inter text-redcolor'>
                                    La raquette
                                </Link>

                                <Link href='/regles' className='font-Inter text-redcolor'>
                                    Règles du jeu
                                </Link>

                            </div>

                        </div>
                    </div>

                    <div className='w-[1.5px] h-[200px] bg-redcolor rounded-full lg:block hidden' />

                    {/* Adresse  */}
                    <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>

                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-1'>

                            <h4 className='font-Montserrat font-semibold text-redcolor text-2xl'>CACBO Badminton</h4>

                            <p className='w-[52%] font-Inter font-normal text-redcolor text-base'>
                                Complexe sportif Philippe Madrelle
                                26 rue Pasteur, 33560 Carbon-Blanc
                            </p>

                        </div>

                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-1'>

                            <h4 className='font-Inter font-medium text-redcolor text-base'>06 18 95 23 30</h4>

                            <p className='font-Inter font-normal text-redcolor text-base'>
                                Ouvert le lundi (21h-23h), mardi (18h-21h) et vendredi (18h30-21h)
                            </p>

                        </div>

                    </div>

                </div>

                <div className='w-[100%] h-[1px] bg-redcolorhover rounded-full my-8' />

                <div className='w-[100%] h-auto flex lg:flex-row flex-col items-center justify-start gap-3 mb-8'>

                    <h5 className='font-Inter font-light text-redcolor text-base'>Copyright © 2024 CACBO Badminton. Tous droits réservés.</h5>

                    <div className='w-[1px] h-[20px] bg-redcolor rounded-full lg:block hidden' />

                    <h5 className='font-Inter font-light text-redcolor text-base'>Site pensé par Maël Thomas et développé par Mathéo Lang.</h5>

                </div>
            </div>
        </footer>
    )
}

export default Footer