import PageLayout from '@/components/Page'
import React from 'react'
import Bubble from '@/assets/bubble.svg'

const Faq = () => {
    return (
        <PageLayout
            title='Foire aux questions'
            subtitle='Toutes les infos pratiques sur notre club !'
            icon={Bubble}
        ></PageLayout>
    )
}

export default Faq