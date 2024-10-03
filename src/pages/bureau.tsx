import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import React from 'react'
import HeroBureau from '@/assets/herobureau.png'
import People from '@/assets/people.svg'

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

            <div className="w-[39%] font-Montserrat font-normal text-xl text-wrap text-center relative z-10">
                Les membres du Bureau veillent au bon fonctionnement du club et au respect des règlements en vigueur, ils s&apos;occupent de la trésorerie (suivi des dépenses et des recettes, cotisations des adhérents, gestion du compte bancaire) et de la résolution des problèmes et des conflits en son sein.
            </div>



            {/* <Footer /> */}

        </div>
    )
}

export default Bureau