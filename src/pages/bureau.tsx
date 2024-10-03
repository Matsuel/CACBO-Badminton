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

const Bureau = () => {
    return (
        <div className='w-full flex flex-col items-center min-h-screen bg-whitebroken'>

            <Navbar />

            <Hero
                background={HeroBureau}
                title='Le bureau'
                subtitle='Prêts à nous rejoindre ?'
                icon={People}
            />

            <div className="w-[43%] font-Montserrat font-normal text-xl text-wrap text-center mt-20">
                Les membres du Bureau veillent au bon fonctionnement du club et au respect des règlements en vigueur, ils s&apos;occupent de la trésorerie (suivi des dépenses et des recettes, cotisations des adhérents, gestion du compte bancaire) et de la résolution des problèmes et des conflits en son sein.
            </div>

            <div className="w-auto h-auto flex flex-row justify-between gap-[70px] mt-[105px]">
                
                <Personnel name={"Laurent THOMAS"} role={"Président"} image={Chef} />
                <Personnel name={"Maël THOMAS"} role={"Secrétaire"} image={Secretaire} />
                <Personnel name={"Cédric ARMENILI"} role={"Trésorier"} image={Tresorier} />
                <Personnel name={"Yohann GIACOMETTI"} role={"Membre"} image={Membre} />

            </div>



            <Footer />

        </div>
    )
}

export default Bureau