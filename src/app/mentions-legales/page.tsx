import PageLayout from '@/components/Page'
import Document from '@/assets/document.svg'
import React from 'react'
import Subtitle from '@/components/Subtitle'
import Paragraphe from '@/components/Paragraphe'
import Link from 'next/link'

const MentionsLegales = () => {
    return (
        <PageLayout
            icon={Document}
            title='Mentions légales'
            subtitle="Transparence et responsabilités"
        >

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col gap-10 items-start justify-start mt-[100px]">

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Editeur du site
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Le site est édité par le CACBO Badminton, dont le siège social est situé au : 24 rue Pasteur, 33560 Carbon-Blanc, France.</Paragraphe>

                        <Paragraphe><strong className="font-medium">Directeur de la publication :</strong> Maël THOMAS.</Paragraphe>

                        <Paragraphe><strong className="font-medium">Contact</strong> : <Link href={"mailto:cacbo.bad@hotmail.com"} className="underline">cacbo.bad@hotmail.com</Link></Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Hébergement
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Le site est hébergé par : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</Paragraphe>

                        <Paragraphe>Site web : vercel.com</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Propriété intellectuelle
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive du CACBO Badminton ou sont utilisés avec autorisation. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est interdite.</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Données personnelles
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-2 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Dans le cadre des adhésions, le CACBO Badminton collecte et traite des données personnelles via la plateforme HelloAsso. Ces données sont nécessaires pour gérer les inscriptions, établir les factures et communiquer avec les membres.</Paragraphe>

                        <Paragraphe>Les données sont gérées conformément au Règlement Général sur la Protection des Données (RGPD). Vous pouvez consulter la politique de confidentialité d&apos;HelloAsso sur leur site (helloasso.com).</Paragraphe>

                        <Paragraphe>Aucune donnée personnelle n&apos;est directement collectée via ce site internet.</Paragraphe>

                        <Paragraphe>Pour toute question relative à vos données personnelles, ou pour exercer vos droits d&apos;accès, de rectification ou de suppression, vous pouvez contacter le club à l&apos;adresse suivante :</Paragraphe>

                        <Paragraphe>
                            <strong className='font-medium'>CACBO Badminton</strong> <br /> {/*Dégager cette daube au plus vite */}
                            <strong className='font-medium'>24 rue Pasteur, 33560 Carbon-Blanc</strong> <br />
                            ou par e-mail à : <Link href={"mailto:cacbo.bad@hotmail.com"} className='underline'>cacbo.bad@hotmail.com</Link>
                        </Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Cookies
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Ce site peut utiliser des cookies pour améliorer votre expérience utilisateur (par exemple, pour enregistrer des préférences ou analyser les visites). Aucun cookie publicitaire ou de suivi tiers n&apos;est utilisé sans votre consentement explicite.</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Responsabilité
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Le CACBO Badminton met tout en œuvre pour assurer l&apos;exactitude des informations diffusées sur le site. Toutefois, il ne peut être tenu responsable d&apos;éventuelles erreurs ou omissions, ni des dommages liés à l&apos;utilisation de ces informations ou de ce site.</Paragraphe>
                    </div>
                </div>

                <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <Subtitle>
                        Modification des mentions légales
                    </Subtitle>
                    <div className="w-full h-auto flex flex-col items-start justify-start gap-1 bg-white p-[30px] rounded-ten">
                        <Paragraphe>Le CACBO Badminton se réserve le droit de modifier les présentes mentions légales à tout moment.</Paragraphe>
                    </div>
                </div>

            </div>

        </PageLayout>
    )
}

export default MentionsLegales