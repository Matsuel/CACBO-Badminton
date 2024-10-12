import ContactLogo from '@/assets/contact.svg'
import HeroContact from '@/assets/herocontact.png'
import React from 'react'
import PageLayout from '@/components/Page'
import Subtitle from '@/components/Subtitle'
import Emoji from '@/components/Emoji'
import Link from 'next/link'
import { Facebook } from '@/assets/Facebook'
import { Instagram } from '@/assets/Instagram'
import { Messenger } from '@/assets/Messenger'
import ContactMap from '@/assets/contactmap.png'
import Image from 'next/image'

const Contact = () => {

    const SocialLinks = [
        {
            icon: Facebook,
            link: 'https://www.facebook.com/cacbo.bad',
            name: 'Facebook'
        },
        {
            icon: Instagram,
            link: 'https://www.instagram.com/cacbo.bad',
            name: 'Instagram'
        },
        {
            icon: Messenger,
            link: 'https://www.messenger.com/cacbo.bad',
            name: 'Messenger'
        },
    ]

    return (
        <PageLayout
            title='Nous contacter'
            subtitle='Besoin d’infos ? Nous sommes à votre écoute !'
            icon={ContactLogo}
            background={HeroContact}
            tabTitle='Nous contacter'
        >
            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[90px]">
                <Subtitle content="Découvrez comment nous joindre !" />

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[20px]">

                    {/* Gauche  */}
                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start gap-[20px]">

                        {/* Contact */}
                        <div className="w-[100%] h-auto flex flex-col items-start justify-start gap-[10px] bg-white p-[30px] rounded-ten">

                            <div className="w-[100%] h-auto flex flex-col items-start justify-start gap-[0px]">
                                <Subtitle className='text-[24px]'>
                                    Par téléphone <Emoji name='phone' width={20} />
                                </Subtitle>

                                <h5 className="font-Inter font-light text-xl">
                                    <Link href={`tel:+33618952330`}>
                                        06 18 95 23 30
                                    </Link>
                                </h5>
                            </div>
                            <div className="w-[100%] h-auto flex flex-col items-start justify-start gap-[0px]">
                                <Subtitle className='text-[24px]'>
                                    Par email <Emoji name='mail' width={20} />
                                </Subtitle>

                                <h5 className="font-Inter font-light text-xl">
                                    <Link href={`mailto:cacbo.bad@hotmail.com`}>
                                        cacbo.bad@hotmail.com
                                    </Link>
                                </h5>
                            </div>
                        </div>

                        {/* Reseaux sociaux */}

                        <div className="w-[100%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

                            <div className="w-[100%] h-auto flex flex-col items-start justify-start gap-[20px]">
                                <Subtitle className='text-[24px]'>
                                    Nos réseaux sociaux
                                </Subtitle>

                                <div className='w-[100%] h-auto flex flex-row items-start justify-start gap-[30px]'>

                                    {SocialLinks.map((link, index) => (
                                        <Link key={index} target='_blank' href={link.link} className="flex flex-row justify-center items-center gap-[15px]">
                                            <div className='w-[50px] h-[50px] flex items-center justify-center text-redcolor hover:text-redcolorhover transition-all duration-300 ease-in-out'>
                                                {link.icon}
                                            </div>
                                            <p className="font-Inter font-light text-xl">
                                                {link.name}
                                            </p>
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Droite */}
                    <div
                        className="w-[47%] h-auto flex flex-col items-start justify-start gap-[20px]">

                        <div className="w-[100%] px-[20px] py-[20px] border-1 border-redcolor rounded-ten bg-white leading-10">
                            <h5 className="font-Inter font-medium text-2xl">
                                Complexe sportif Philippe Madrelle
                            </h5>
                            <p className="font-Inter font-light text-xl">
                                24 rue Pasteur, 33560 Carbon-Blanc <Emoji name='pin' width={20} />
                            </p>
                        </div>

                        <div
                            className="w-[100%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

                            <Image src={ContactMap} alt='map' width={640} />

                        </div>
                    </div>
                </div>

            </div>

        </PageLayout>
    )
}

export default Contact