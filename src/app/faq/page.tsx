import PageLayout from '@/components/Page'
import React from 'react'
import Bubble from '@/assets/bubble.svg'
import Bloc from '@/components/Bloc'
import Emoji from '@/components/UI/Emoji'
import BlocFull from '@/components/Bloc/BlocFull'
import Paragraphe from '@/components/UI/Paragraphe'
import ListElement from '@/components/UI/ListElement'

const Faq = () => {
    return (
        <PageLayout
            title='Foire aux questions'
            subtitle='Toutes les infos pratiques sur notre club !'
            icon={Bubble}
        >
            <Bloc blocTitle='1.  Quelles sont les créneaux horaires d’entraînement ?' blocIcon={<Emoji name='alarm' width={24} />} className='mt-0'>
                <BlocFull>
                    <Paragraphe>
                        Nos créneaux sont les suivants :
                    </Paragraphe>

                    <div className='flex flex-col gap-[2px]'>
                        <ListElement>
                            Lundi : 21h - 23h
                        </ListElement>
                        <ListElement>
                            Mardi : 18h - 21h
                        </ListElement>
                        <ListElement>
                            Vendredi : 18h30 - 21h
                        </ListElement>
                    </div>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='2.  Où se déroulent les créneaux ?' blocIcon={<Emoji name='home' width={24} />} className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Tous les créneaux ont lieu dans notre salle située au 24 rue Pasteur à Carbon-Blanc.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='3.  Le club est-il ouvert à tous les niveaux ?' className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Oui, notre club accueille aussi bien les débutants que les joueurs confirmés. Nous mettons un point d&apos;honneur à offrir une ambiance conviviale pour tous.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle="4.  Puis-je venir essayer avant de m'inscrire ?" className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Oui, nous proposons 3 séances d&apos;essai gratuites pour découvrir le club et voir si l&apos;ambiance vous convient.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='5.  Quel est le tarif pour adhérer au club ?' blocIcon={<Emoji name='euro' width={24} />} className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Nous proposons deux formules d&apos;adhésion :
                    </Paragraphe>

                    <div className='flex flex-col gap-[2px]'>
                        <ListElement>
                            Formule adulte : 50 €
                        </ListElement>
                        <ListElement>
                            Formule couple : 90 € pour 2 personnes
                        </ListElement>
                    </div>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='6.  Utilisez-vous des volants en plumes ou en nylon ?' className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Nous utilisons en très grande majorité des volants en plumes pour leur qualité de jeu, mais chacun est libre d&apos;apporter des volants en nylon s&apos;il le souhaite.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='7.  Faut-il ramener son propre matériel ?' className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Oui, vous devez apporter votre raquette, des chaussures de sport propres (pour ne pas salir la salle) et vos propres volants. Cependant, si vous n&apos;avez pas de raquette, nous pouvons en prêter pour dépanner.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='8.  Puis-je acheter des volants directement au club ?' className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Oui, nous avons une boutique interne où vous pouvez acheter des volants en plumes à prix réduit, exclusivement réservée à nos membres.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='9.  Y a-t-il une limite d’âge pour s’inscrire ?' className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Notre club est exclusivement ouvert aux adultes. <Emoji name='adult' width={18} />
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='10.  Proposez-vous des cours encadrés ?' className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Nous ne proposons pas de cours encadrés actuellement. Cependant, les joueurs expérimentés du club seront ravis de partager leurs conseils.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='11.  Organisez-vous des événements en dehors des créneaux ?' blocIcon={<Emoji name='party' width={24} />} className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Oui, nous organisons des événements réguliers tels que des soirées apéritives les vendredis et des sorties conviviales, comme des repas de fin d’année.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle='12.  Combien de terrains sont disponibles pendant les créneaux ?' className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Nous disposons de 7 terrains dans la salle, ce qui permet de jouer en double ou en simple selon le nombre de participants.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle="13.  Comment m’inscrire au club ?" className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        L&apos;inscription se fait via notre plateforme partenaire HelloAsso. Vous pouvez également vous inscrire sur papier (page “adhérer” de notre site).
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle="14.  Puis-je venir jouer en dehors des créneaux horaires ?" className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Malheureusement, l&apos;accès à la salle est limité aux créneaux horaires définis.
                    </Paragraphe>
                </BlocFull>
            </Bloc>

            <Bloc blocTitle="15.  Comment puis-je vous contacter pour plus d’informations ?" blocIcon={<Emoji name='phone' width={24} />} className='mt-20'>
                <BlocFull>
                    <Paragraphe>
                        Vous pouvez nous contacter par mail à hello@cacbobad.fr ou venir directement lors des créneaux.
                    </Paragraphe>
                </BlocFull>
            </Bloc>
        </PageLayout>
    )
}

export default Faq