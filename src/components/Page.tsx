import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Title from './Title'

interface PageLayoutProps {
    children?: React.ReactNode
    title: string
    subtitle: string
    description?: boolean
    icon: StaticImport
    tabTitle: string
}

const PageLayout: React.FC<PageLayoutProps> = ({
    children,
    title,
    subtitle,
    description = false,
    icon,
    tabTitle
}) => {
    return (
        <div className='w-full flex flex-col items-center min-h-screen bg-whitebroken'>
            <Title title={`${tabTitle} - CACBO Badminton`} />
            <Navbar />

            <Hero
                title={title}
                subtitle={subtitle}
                description={description}
                icon={icon}
            />

            {children}


            <Footer />

        </div>
    )
}

export default PageLayout