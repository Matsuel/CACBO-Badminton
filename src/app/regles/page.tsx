import PageLayout from '@/components/Page'
import React from 'react'
import CurbedFile from '@/assets/curbedFile.svg'
import Subtitle from '@/components/UI/Subtitle'
import Paragraphe from '@/components/UI/Paragraphe'
import ListElement from '@/components/UI/ListElement'
import Image from 'next/image'
import Simple from '@/assets/simple.png'
import Double from '@/assets/double.png'

const Regles = () => {
    return (
        <PageLayout
            icon={CurbedFile}
            title='Règles du jeu'
            subtitle="Tout ce qu'il faut savoir avant de jouer !"
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

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[90px] gap-[30px]">
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

                <div className="w-[100%] h-auto flex flex-row items-start justify-start gap-[15px]">

                    <div className="w-[50%] h-auto flex flex-col items-center rounded-ten justify-start gap-[30px] bg-white p-[30px]">
                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                            En <span className='text-redcolor'>simple</span>
                        </Subtitle>

                        <Image
                            src={Simple}
                            alt="Terrain de badminton en simple"
                        />
                    </div>

                    <div className="w-[50%] h-auto flex flex-col items-center rounded-ten justify-start gap-[30px] bg-white p-[30px]">
                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                            En <span className='text-redcolor'>Double</span>
                        </Subtitle>

                        <Image
                            src={Double}
                            alt="Terrain de badminton en double"
                        />
                    </div>

                </div>
            </div>

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[90px]">
                <Subtitle content="3.  Le service et le placement des joueurs" />

                <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <div
                        className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                            Comment servir et ou se mettre ?
                        </Subtitle>

                        <Paragraphe>
                            Le joueur ou l&apos;équipe qui gagne un point prend le service. Le service se fait toujours en diagonale. En simple, le serveur se place à droite si son score est pair et à gauche si impair. En double, c&apos;est pareil, mais les joueurs ne changent de côté qu&apos;en cas de point marqué sur leur service.
                        </Paragraphe>
                    </div>

                    <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[30px]">

                        <div className="px-[20px] py-[20px] w-full border-1 border-redcolor rounded-ten bg-white leading-10 flex flex-col gap-[15px]">

                            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                                Quand changer de demi-terrain ? 🔄
                            </Subtitle>

                            <Paragraphe>
                                Les joueurs changent de côté <strong className='font-medium'>après chaque set</strong>. Si un match atteint un troisième set, ils changent à 11 points.
                            </Paragraphe>
                        </div>
                    </div>

                </div>

            </div>

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[90px]">
                <Subtitle content="4.  Les fautes lors d’un match" />

                <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <div
                        className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl text-redcolor">
                            Au service
                        </Subtitle>

                        <ListElement>
                            Frapper le volant au-dessus de la taille, ne pas respecter la diagonale, mordre les lignes avec son pied lors du service, ou arrêter le mouvement de la raquette.
                        </ListElement>
                    </div>

                    <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[30px]">

                        <div className="px-[20px] py-[20px] w-full flex flex-col rounded-ten gap-[15px] bg-white">

                            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl text-redcolor">
                                Au cours du jeu
                            </Subtitle>

                            <ListElement>
                                <strong className='font-medium'>Concernant le volant</strong> : lorsqu&apos;il est envoyé hors des limites du terrain, qu&apos;il ne passe pas au-dessus du filet ou passe en dessous, qu&apos;il touche le plafond, qu&apos;il est frappé successivement par un joueur et son partenaire ou qu&apos;il est frappé 2 fois par le même joueur.
                            </ListElement>

                            <ListElement>
                                Joueur touchant le filet ou ses supports avec sa raquette, son corps ou ses vêtements, envahissement du terrain adverse par-dessus ou par-dessous le filet ou encore l&apos;obstruction ou la distraction délibérée de l&apos;adversaire.
                            </ListElement>
                        </div>
                    </div>

                </div>

            </div>

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[90px]">
                <Subtitle content="5.  Le positionnement en Doubles et le tirage au sort" />

                <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <div
                        className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start gap-[20px] bg-white border-1 border-redcolor rounded-ten p-[30px]">

                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                            La stratégie est primordiale ! 🤝
                        </Subtitle>

                        <Paragraphe>
                            En double, après le service, les partenaires sont libres de leurs mouvements et doivent se coordonner pour couvrir le terrain efficacement. <span className='underline'>Au service</span>, <strong className='font-medium'>un joueur se place à l&apos;avant</strong> tandis que <strong className='font-medium'>l&apos;autre reste en fond de court</strong>. Puis par la suite au cours du jeu, les joueurs se placent en <strong className='font-medium'>côté-côté</strong> <span className='underline'>lorsqu&apos;ils doivent défendre</span>.
                        </Paragraphe>
                    </div>

                    <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[30px]">

                        <div className="px-[20px] py-[20px] w-full rounded-ten bg-white leading-10 flex flex-col gap-[15px]">

                            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                                Le tirage au sort
                            </Subtitle>

                            <Paragraphe>
                                Avant le début du match, un tirage au sort détermine qui servira en premier ou choisira le côté du terrain.
                            </Paragraphe>
                        </div>
                    </div>

                </div>

            </div>

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[90px]">
                <Subtitle content="6.  Les erreurs de zone de service et les “lets”" />

                <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start mt-[20px] gap-[30px]">
                    <div
                        className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start gap-[20px] bg-white rounded-ten p-[30px]">

                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                            Que se passe-t-il en cas d&apos;erreur ?
                        </Subtitle>

                        <Paragraphe>
                            Si un joueur sert ou reçoit dans la mauvaise zone ou que ce n&apos;était pas son tour, <strong className='font-medium'>le jeu continue</strong>, mais <span className='underline'>l&apos;erreur doit être corrigée</span> pour le prochain service et <strong className='font-medium'>le score reste maintenu</strong>.
                        </Paragraphe>
                    </div>

                    <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[30px]">

                        <div className="px-[20px] py-[20px] w-full flex flex-col rounded-ten border-1 border-redcolor bg-white leading-10 gap-[15px]">

                            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                                Quand arrêter un échange ? ⏸️
                            </Subtitle>

                            <Paragraphe>
                                Un &quot;let&quot; est déclaré si le serveur sert avant que le receveur ne soit prêt, ou si un incident imprévu se produit (comme un volant cassé).
                            </Paragraphe>
                        </div>
                    </div>

                </div>

            </div>
        </PageLayout>
    )
}

export default Regles