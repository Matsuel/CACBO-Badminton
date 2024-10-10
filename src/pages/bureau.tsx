import React from 'react'
import HeroBureau from '@/assets/herobureau.png'
import People from '@/assets/people.svg'
import Personnel from "@/components/Personnel";
import Chef from "@/assets/chef.png";
import Secretaire from "@/assets/secretaire.png";
import Tresorier from "@/assets/tresorier.png";
import Membre from "@/assets/membre.png";
import { SITE_CONFIG } from "@/constantes";
import PageLayout from '@/components/Page'

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
        <PageLayout
            title={SITE_CONFIG.bureau}
            subtitle='Équipe dirigeante du club'
            icon={People}
            background={HeroBureau}
            tabTitle={SITE_CONFIG.bureau}
        >


            <div className="w-[59%] font-Inter font-light text-xl tracking-widest leading-10 text-wrap text-center mt-20">
                Les membres du Bureau veillent au bon fonctionnement du club et au respect des règlements en vigueur,
                ils s&apos;occupent de la trésorerie (suivi des dépenses et des recettes, cotisations des adhérents, gestion
                du compte bancaire) et de la résolution des problèmes et des conflits en son sein.
            </div>

            <div className="w-auto h-auto flex flex-row justify-between gap-[70px] mt-[75px]">

                {personnel.map((person, index) => (
                    <Personnel name={person.name} role={person.role} image={person.image} key={index} />
                ))}

            </div>

        </PageLayout>
    )
}

export default Bureau