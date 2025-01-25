import PageLayout from '@/components/Page'
import React from 'react'
import CurbedFile from '@/assets/curbedFile.svg'
import Subtitle from '@/components/Subtitle'
import Paragraphe from '@/components/Paragraphe'
import ListElement from '@/components/ListElement'

const Regles = () => {
  return (
    <PageLayout
      icon={CurbedFile}
      title='Règles du jeu'
      subtitle="Tout ce qu'il faut savoir avant de jouer !"
      tabTitle='Règles du jeu - CACBO Badminton'
    >
      <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[90px]">
        <Subtitle content="1.  Le déroulement du match" />

        <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start mt-[20px] gap-[30px]">
          <div
            className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
              Comment se déroule un match ? 🎯
            </Subtitle>

            <Paragraphe>
              Le badminton se joue en <strong className='font-medium'>3 sets maximum</strong>. Chaque set est remporté par le joueur ou l&apos;équipe qui marque <strong className='font-medium'>21 points</strong>. Toutefois, si les deux adversaires atteignent un score de 20-20, le jeu continue jusqu&apos;à ce qu&apos;un joueur ou une équipe ait 2 points d&apos;écart (par exemple, 22-20, 23-21, etc). Si le score atteint 29-29, la règle change : le joueur ou l&apos;équipe qui atteint <strong className='font-medium'>30 points en premier</strong> remporte le set.
            </Paragraphe>

            <Paragraphe>
              Une fois le set gagné,  <strong className='font-medium'>l&apos;équipe ou le joueur gagnant sert en premier</strong> dans le set suivant.
            </Paragraphe>

          </div>

          <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[30px]">

            <div className="px-[20px] py-[20px] w-full border-1 border-redcolor rounded-ten bg-white leading-10 !font-medium">

              <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                ℹ️ Exemple :
              </Subtitle>

              <Paragraphe>
                <strong className='font-medium'>Set 1</strong> : 21-19 (2 pts d&apos;écart)
              </Paragraphe>

              <Paragraphe>
                <strong className='font-medium'>Set 2</strong> : 18-21 (2 pts d&apos;écart)
              </Paragraphe>

              <Paragraphe>
                <strong className='font-medium'>Set 3</strong> : 30-29 (point sec)
              </Paragraphe>
            </div>
          </div>

        </div>

      </div>

      <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[90px]">
        <Subtitle content="2.  Les limites du terrain" />

        <div className="w-[100%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[15px] bg-white p-[30px] rounded-ten">

          <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
            Simple et double : quelles différences ? 🤔
          </Subtitle>

          <Paragraphe>
            <strong className='font-medium'>En simple</strong>, les joueurs utilisent le terrain restreint (les lignes intérieures sur les côtés et les lignes de fond).
          </Paragraphe>

          <ListElement>
            Au <span className='underline'>service</span>, le volant doit atterrir dans le carré de service diagonalement opposé au serveur. Si le service est court ou hors de cette zone, il est considéré comme faute.
          </ListElement>

          <ListElement>
            En <span className='underline'>jeu</span>, toute la partie du terrain située entre les lignes intérieures est valable.
          </ListElement>

          <Paragraphe>
            <strong className='font-medium'>En double</strong>, le terrain s&apos;élargit pour inclure les couloirs latéraux extérieurs.
          </Paragraphe>

          <ListElement>
            Au <span className='underline'>service</span>, il doit atterrir dans le carré de service diagonalement opposé ou dans les couloirs de service latéraux.
          </ListElement>

          <ListElement>
            En <span className='underline'>jeu</span>, l&apos;intégralité du terrain, y compris les couloirs latéraux, est utilisée.
          </ListElement>

        </div>
      </div>

    </PageLayout>
  )
}

export default Regles