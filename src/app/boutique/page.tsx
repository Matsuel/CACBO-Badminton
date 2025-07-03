import React from 'react'
import Shop from '@/assets/shop.svg'
import PageLayout from '@/components/Page'
import Paragraphe from '@/components/UI/Paragraphe'

const Boutique = () => {
    return (
        <PageLayout
            icon={Shop}
            title='Notre boutique'
            subtitle="Tout l'équipement du club à portée de clic !"
        >

            <div className='flex flex-col items-center gap-28 mt-5'>


                <Paragraphe className="md:w-[40%] w-[90%] text-center!" >
                    Notre boutique est accessible directement via HelloAsso !
                    Vous pouvez facilement parcourir et acheter les articles aux couleurs du club en toute sécurité.
                    Profitez de cette plateforme pratique pour passer commande et soutenir notre club.
                </Paragraphe>

                <iframe
                    id="haWidget"
                    src="https://www.helloasso.com/associations/cacbo-badminton/boutiques/vente-de-volants/widget"
                    className='w-full h-[1250px]'
                ></iframe>


            </div>

        </PageLayout>
    )
}

export default Boutique