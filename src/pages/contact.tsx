import ContactLogo from '@/assets/contact.svg'
import HeroContact from '@/assets/herocontact.png'
import React from 'react'
import PageLayout from '@/components/Page'

const Contact = () => {

    return (
        <PageLayout
            title='Nous contacter'
            subtitle='Besoin d’infos ? Nous sommes à votre écoute !'
            icon={ContactLogo}
            background={HeroContact}
            tabTitle='Nous contacter'
        >
            <div className='w-[80%] h-auto flex flex-col items-center justify-center mt-20'>
                <h2 className='font-Montserrat font-bold text-4xl text-center'>Nous contacter</h2>
                <p className='font-Inter font-normal text-lg text-center mt-5'>Pour toute question ou demande d’information, n’hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.</p>
            </div>

            </PageLayout>
    )
}

export default Contact