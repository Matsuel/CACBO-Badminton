import PageLayout from '@/components/Page'
import React from 'react'
import CurbedFile from '@/assets/curbedFile.svg'

const Regles = () => {
  return (
    <PageLayout
    icon={CurbedFile}
    title='Règles du jeu'
    subtitle="Tout ce qu'il faut savoir avant de jouer !"
    tabTitle='Règles du jeu - CACBO Badminton'
    ></PageLayout>

  )
}

export default Regles