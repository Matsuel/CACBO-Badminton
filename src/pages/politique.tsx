import PageLayout from '@/components/Page'
import React from 'react'
import Document from '@/assets/document.svg'
import Subtitle from '@/components/Subtitle'
import Paragraphe from '@/components/Paragraphe'
import ListElement from '@/components/ListElement'
import Link from 'next/link'

const Politique = () => {
    return (
        <PageLayout
            icon={Document}
            tabTitle='Politique de confidentialité - CACBO Badminton'
            title='Politique de confidentialité'
            subtitle="Dernière mise à jour le 23/01/2025"
        >

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col gap-10 items-start justify-start mt-[100px]">

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Introduction
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Le CACBO Badminton, situé au 24 rue Pasteur, 33560 Carbon-Blanc, s'engage à protéger la vie privée de ses membres et visiteurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Données collectées
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-2 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Nous collectons des données personnelles lors des adhésions via notre partenaire HelloAsso. Ces données peuvent inclure :</Paragraphe>

                        <div className='w-full h-auto flex flex-col items-start justify-start gap-1'>
                            <ListElement>Nom et prénom</ListElement>
                            <ListElement>Adresse postale</ListElement>
                            <ListElement>Adresse e-mail</ListElement>
                            <ListElement>Numéro de téléphone</ListElement>
                            <ListElement>Date de naissance</ListElement>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Utilisation des données
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-2 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Les données collectées sont utilisées pour :</Paragraphe>

                        <div className='w-full h-auto flex flex-col items-start justify-start gap-1'>
                            <ListElement>Gérer les adhésions et inscriptions aux activités du club</ListElement>
                            <ListElement>Communiquer des informations importantes relatives au club</ListElement>
                            <ListElement>Respecter nos obligations légales et réglementaires</ListElement>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Partage des données
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-2 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Vos données personnelles sont traitées de manière confidentielle et ne sont partagées qu'avec :</Paragraphe>

                        <div className='w-full h-auto flex flex-col items-start justify-start gap-1'>
                            <ListElement>Les membres autorisés du Bureau du CACBO Badminton</ListElement>
                            <ListElement>Notre prestataire HelloAsso, conforme au RGPD, pour la gestion des adhésions</ListElement>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Sécurité des données
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Vos droits
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-2 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Conformément au RGPD, vous disposez des droits suivants :</Paragraphe>

                        <div className='w-full h-auto flex flex-col items-start justify-start gap-1'>
                            <ListElement>Accéder à vos données personnelles</ListElement>
                            <ListElement>Rectifier des données inexactes ou incomplètes</ListElement>
                            <ListElement>Demander l'effacement de vos données</ListElement>
                            <ListElement>Limiter le traitement de vos données</ListElement>
                            <ListElement>Vous opposer au traitement de vos données</ListElement>
                            <ListElement>Demander la portabilité de vos données</ListElement>
                        </div>

                        <Paragraphe>Pour exercer ces droits, veuillez contacter Maël THOMAS, directeur de publication, à l'adresse suivante : <Link href={"mailto:cacbo.bad@hotmail.com"} className='underline'>cacbo.bad@hotmail.com</Link></Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Cookies
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Notre site internet n'utilise pas de cookies pour collecter des données personnelles. Toutefois, des cookies peuvent être utilisés pour améliorer l'expérience utilisateur, tels que des cookies de mesure d'audience. Vous pouvez configurer votre navigateur pour refuser ces cookies.</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Modifications de la politique de confidentialité
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur notre site internet et entreront en vigueur dès leur publication.</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Contact
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Pour toute question concernant cette politique de confidentialité, veuillez contacter Maël THOMAS à l'adresse suivante : <Link href={"mailto:cacbo.bad@hotmail.com"} className='underline'>cacbo.bad@hotmail.com</Link></Paragraphe>
                    </div>
                </div>

            </div>

        </PageLayout>
    )
}

export default Politique