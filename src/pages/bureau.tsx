import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import React from 'react'
import HeroBureau from '@/assets/herobureau.png'
import People from '@/assets/people.svg'
import Personnel from "@/components/personnel";
import Chef from "@/assets/chef.png";
import Secretaire from "@/assets/secretaire.png";
import Tresorier from "@/assets/tresorier.png";
import Membre from "@/assets/membre.png";
import Footer from "@/components/footer";
import Title from "@/components/title";
import {SITE_CONFIG} from "@/constantes";

const Bureau = () => {

    const personnel = [
        {
            name: "Laurent THOMAS",
            role: "Président",
            image: Chef
        },
        {
            name: "Maël THOMAS",
            role: "Secrétaire",
            image: Secretaire
        },
        {
            name: "Cédric ARMENILI",
            role: "Trésorier",
            image: Tresorier
        },
        {
            name: "Yohann GIACOMETTI",
            role: "Membre",
            image: Membre
        }
    ]

    return (
        <div className='w-full flex flex-col items-center min-h-screen bg-whitebroken'>

            <Title title={SITE_CONFIG.bureau + " - " + SITE_CONFIG.title}/>

            <Navbar/>

            <Hero
                background={HeroBureau}
                title={SITE_CONFIG.bureau}
                subtitle='Prêts à nous rejoindre ?'
                icon={People}
            />

            <div className="w-[53%] font-Inter font-light text-xl text-wrap text-center mt-20">
                Les membres du Bureau veillent au bon fonctionnement du club et au respect des règlements en vigueur,
                ils s&apos;occupent de la trésorerie (suivi des dépenses et des recettes, cotisations des adhérents, gestion
                du compte bancaire) et de la résolution des problèmes et des conflits en son sein.
            </div>

            <div className="w-auto h-auto flex flex-row justify-between gap-[70px] mt-[105px]">

                {personnel.map((person, index) => (
                    <Personnel name={person.name} role={person.role} image={person.image} key={index}/>
                ))}

            </div>


            <Footer/>

        </div>
    )
}

export default Bureau