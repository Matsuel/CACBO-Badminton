import ContactLogo from '@/assets/contact.svg'
import React from 'react'
import PageLayout from '@/components/Page'
import Subtitle from '@/components/UI/Subtitle'
import Emoji from '@/components/UI/Emoji'
import Link from 'next/link'
import Map from '@/components/Map'
import { SocialLinks } from '@/constantes/contact'
import Bloc from '@/components/Bloc'
import BlocLeft from '@/components/Bloc/BlocLeft'
import Paragraphe from '@/components/UI/Paragraphe'
import BlocRight from '@/components/Bloc/BlocRight'

const Contact = () => {

    return (
        <PageLayout
            title='Nous contacter'
            subtitle='Besoin d’infos ? Nous sommes à votre écoute !'
            icon={ContactLogo}
        >
            <Bloc blocTitle='Découvrez comment nous joindre !'>
                <BlocLeft className='bg-transparent p-0 gap-7'>

                    <BlocLeft className='w-full gap-5'>
                        <div className='flex flex-col gap-1'>
                            <Subtitle className='flex flex-row items-center gap-[10px]'>
                                Par téléphone <Emoji name='phone' width={20} />
                            </Subtitle>

                            <Link href={`tel:+33618952330`} className="font-Inter font-light text-paragraph">
                                06 18 95 23 30
                            </Link>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <Subtitle className='flex flex-row items-center gap-[10px]'>
                                Par email <Emoji name='mail' width={20} />
                            </Subtitle>

                            <Link href={`mailto:cacbo.bad@hotmail.com`} className="font-Inter font-light text-paragraph">
                                cacbo.bad@hotmail.com
                            </Link>
                        </div>

                    </BlocLeft>

                    <BlocLeft className='w-full gap-5'>
                        <Subtitle>
                            Nos réseaux sociaux
                        </Subtitle>

                        <div className='w-full h-auto flex flex-row gap-8 items-center'>
                            {SocialLinks.map((link) => (
                                <Link key={link.name} target='_blank' href={link.link} className="flex flex-row justify-center items-center gap-[15px]">
                                    <div className='w-[40px] h-[40px] flex items-center justify-center text-redcolor hover:text-redcolorhover transition-all duration-300 ease-in-out'>
                                        {link.icon}
                                    </div>
                                    <Paragraphe>
                                        {link.name}
                                    </Paragraphe>
                                </Link>
                            ))}

                        </div>

                    </BlocLeft>
                </BlocLeft>

                <BlocRight className='bg-transparent p-0 gap-7'>
                    <BlocRight className='w-full gap-5'>
                        <Subtitle className='font-medium'>
                            Complexe sportif Philippe Madrelle
                        </Subtitle>

                        <Paragraphe>
                            24 rue Pasteur, 33560 Carbon-Blanc <Emoji name='pin' width={15} />
                        </Paragraphe>
                    </BlocRight>
                    <Map />
                </BlocRight>
            </Bloc>

        </PageLayout>
    )
}

export default Contact
