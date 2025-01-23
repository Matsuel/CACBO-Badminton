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
            tabTitle='Mentions Legales - CACBO Badminton'
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

                        <Paragraphe><strong className="font-medium">Contact</strong> : <Link href={"mailto:cacbo@gmail.com"} className="underline">cacbo.bad@hotmail.com</Link></Paragraphe>
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

            </div>

        </PageLayout>
    )
}

export default MentionsLegales