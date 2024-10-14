import React from 'react'
import Shop from '@/assets/shop.svg'
import HeroShop from '@/assets/heroshop.png'
import PageLayout from '@/components/Page'
import Paragraphe from '@/components/Paragraphe'

const boutique = () => {
    return (
        <PageLayout
            background={HeroShop}
            icon={Shop}
            tabTitle='Boutique - CACBO Badminton'
            title='Notre boutique'
            subtitle="Tout l'équipement du club à portée de clic !"
        >

            <Paragraphe className="md:w-[40%] w-[90%] !text-center" >
                Notre boutique est accessible directement via HelloAsso !
                Vous pouvez facilement parcourir et acheter les articles aux couleurs du club en toute sécurité.
                Profitez de cette plateforme pratique pour passer commande et soutenir notre club.
            </Paragraphe>

        </PageLayout>
    )
}

export default boutique