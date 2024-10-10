import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ContactLogo from '@/assets/contact.svg'
import HeroContact from '@/assets/herocontact.png'
import React from 'react'

const Contact = () => {
    return (
        <div className={`w-full flex flex-col items-center min-h-screen bg-whitebroken`}>
            <Navbar />

            <Hero
                title='Nous contacter'
                subtitle='Besoin d’infos ? Nous sommes à votre écoute !'
                icon={ContactLogo}
                background={HeroContact}
            />


        </div>
    )
}

export default Contact