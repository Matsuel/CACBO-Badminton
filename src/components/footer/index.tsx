import React from 'react'
import Logo from '@/assets/cacbo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-col justify-center items-center mt-44 bg-white'>
            <div className='w-[80%] h-auto flex flex-col items-center justify-center pt-16'>
                <div className='w-[100%] h-auto flex flex-row items-start justify-start gap-20'>

                    <Image src={Logo} alt='cacbo' width={140} />

                    <div className='w-auto h-auto flex flex-col items-start justify-center gap-6'>

                        <h4 className='font-Montserrat font-semibold text-redcolor text-base'>LE CLUB</h4>

                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>

                            <Link href='/bureau' className='font-Inter text-redcolor'>
                                Bureau
                            </Link>

                            <Link href='/histoire' className='font-Inter text-redcolor'>
                                Notre histoire
                            </Link>

                            <Link href='/shop' className='font-Inter text-redcolor'>
                                Notre boutique
                            </Link>

                            <Link href='/partenaires' className='font-Inter text-redcolor'>
                                Nos partenaires
                            </Link>

                        </div>

                    </div>

                    <div className='w-auto h-auto flex flex-col items-start justify-center gap-6'>

                        <h4 className='font-Montserrat font-semibold text-white text-base'>LE CLUB</h4>

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

                    <div className='w-[1px] h-[200px] bg-redcolor rounded-full' />

                    {/* Adresse  */}
                    <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>

                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-1'>

                            <h4 className='font-Montserrat font-semibold text-redcolor text-2xl'>CACBO Badminton</h4>

                            <p className='w-[50%] font-Inter font-normal text-redcolor text-base'>
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

                <div className='w-[100%] h-[1px] bg-[#e0e0e0] rounded-full my-8' />

                <div className='w-[100%] h-auto flex flex-row items-center justify-start gap-3 mb-11'>

                    <h5 className='font-Inter font-normal text-redcolor text-base'>Copyright © 2024 CACBO Badminton. Tous droits réservés.</h5>

                    <div className='w-[1px] h-[20px] bg-redcolor rounded-full' />

                    <h5 className='font-Inter font-normal text-redcolor text-base'>Site créé par Maël Thomas et développer par Mathéo Lang.</h5>

                </div>
            </div>
        </footer>
    )
}

export default Footer