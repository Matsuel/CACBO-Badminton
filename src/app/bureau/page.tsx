import React from 'react'
import People from '@/assets/people.svg'
import Personnel from "@/components/Personnel";
import { SITE_CONFIG } from "@/constantes";
import PageLayout from '@/components/Page'
import Paragraphe from '@/components/UI/Paragraphe';
import { personnel } from '@/constantes/bureau';

const Bureau = () => {

    return (
        <PageLayout
            title={SITE_CONFIG.bureau}
            subtitle='Équipe dirigeante du club'
            icon={People}
        >

            <Paragraphe className="md:w-[45%] w-[90%] leading-7 text-wrap !text-center mt-20">
                Les membres du Bureau veillent au bon fonctionnement du club et au respect des règlements en vigueur,
                ils s&apos;occupent de la trésorerie (suivi des dépenses et des recettes, cotisations des adhérents, gestion
                du compte bancaire) et de la résolution des problèmes et des conflits en son sein.
            </Paragraphe>

            <div className="w-auto h-auto flex flex-row flex-wrap justify-center gap-[70px] mt-[75px] mb-14">

                {personnel.map((person) => (
                    <Personnel
                        name={person.name}
                        role={person.role}
                        image={person.image}
                        key={person.name}
                    />
                ))}

            </div>

        </PageLayout>
    )
}

export default Bureau