import PageLayout from '@/components/Page'
import React from 'react'
import Document from '@/assets/document.svg'
import Subtitle from '@/components/Subtitle'
import Paragraphe from '@/components/Paragraphe'

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
                            
                        </div>
                    </div>
                </div>

            </div>

        </PageLayout>
    )
}

export default Politique