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



            {/* <Footer /> */}

        </div>
    )
}

export default Bureau