import { textVariants } from '@/constantes/theme'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full h-auto flex flex-col gap-10 p-5 pt-10 bg-redcolor'>
            <div className='w-auto h-auto flex flex-col gap-4'>
                <h4 className={`${textVariants.footer} font-semibold`}>
                    CLUB
                </h4>
                <Link href="/bureau" className={`${textVariants.footer}`}>
                    Bureau
                </Link>
                <Link href="/histoire" className={`${textVariants.footer}`}>
                    Histoire
                </Link>
                <Link href="/boutique" className={`${textVariants.footer}`}>
                    Boutique
                </Link>
                <Link href="/partenaires" className={`${textVariants.footer}`}>
                    Partenaires
                </Link>
            </div>

            <div className='w-auto h-auto flex flex-col gap-4'>
                <h4 className={`${textVariants.footer} font-semibold`}>
                    INFOS PRATIQUES
                </h4>
                <Link href="/faq" className={`${textVariants.footer}`}>
                    Faq
                </Link>
                <Link href="/adherer" className={`${textVariants.footer}`}>
                    Adhérer
                </Link>
                <Link href="/contact" className={`${textVariants.footer}`}>
                    Nous contacter
                </Link>
            </div>

            <div className='w-auto h-auto flex flex-col gap-4'>
                <h4 className={`${textVariants.footer} font-semibold`}>
                    RESSOURCES
                </h4>
                <Link href="/regles" className={`${textVariants.footer}`}>
                    Règles du jeu
                </Link>
                <Link href="/volant" className={`${textVariants.footer}`}>
                    Guide du volant
                </Link>
                <Link href="/raquette" className={`${textVariants.footer}`}>
                    Guide de la raquette
                </Link>
            </div>

            <div className='w-full h-auto flex flex-col items-center gap-5'>
                <Image
                    src="/logowhite.svg"
                    alt="Logo"
                    className='w-12'
                    width={100}
                    height={100}
                />

                <p className={`${textVariants.footer} font-semibold`}>
                    CACBO Badminton
                </p>

                <div className='w-auto h-auto flex flex-col'>
                    <p className={`${textVariants.footer} leading-5`}>
                        Complexe sportif Philippe Madrelle
                    </p>
                    <p className={`${textVariants.footer} leading-5`}>
                        24 rue Pasteur, 33560 Carbon-Blanc
                    </p>
                </div>

                <Link href={`tel:+33618952330`} className={`${textVariants.footer} leading-5`}>
                    Tél. 06 18 95 23 30
                </Link>

                <p className={`${textVariants.footer} text-center leading-5 px-5`}>
                    Ouvert le <span className='font-semibold'>lundi</span> (21h-23h), <span className='font-semibold'>mardi</span> (18h-21h)
                    et <span className='font-semibold'>vendredi</span> (18h30-21h)
                </p>

                <div className='w-full h-[1px] bg-redpale/60' />

                <div className='w-full h-auto flex flex-col items-center'>
                    <p className={`font-Poppins text-[11px] leading-4 text-white`}>
                        © {currentYear} CACBO Badminton. Tous droits réservés.
                    </p>
                    <p className={`font-Poppins text-[11px] leading-4 text-white`}>
                        Site pensé par <Link href="#" target='_blank' className='underline'>Maël THOMAS</Link> et développé par <Link href="https://matheolang.fr" target='_blank' className='underline'>Mathéo LANG.</Link>
                    </p>
                </div>

                {/* Liens et section membre de ... */}
            </div>

        </footer>
    )
}

export default Footer