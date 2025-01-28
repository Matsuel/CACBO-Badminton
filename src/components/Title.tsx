import Head from 'next/head'
import React from 'react'

interface TitleProps {
    title?: string;
}

const Title = ({
    title = "CACBO Badminton"
}: TitleProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Club de badminton pour adultes, badistes depuis 2007" />
            <link rel="icon" href="/cacbo.ico" />
        </Head>
    )
}

export default Title