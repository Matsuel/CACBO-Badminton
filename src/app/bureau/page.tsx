import Image from 'next/image';
import Bloc from '@/components/Bloc';
import BlocText from '@/components/BlocText';
import Content from '@/components/Content';
import Header from '@/components/Header';
import Membre from '@/components/Membre';
import PageLayout from '@/components/PageLayout';
import Parent from '@/components/Parent';
import SingleTitle from '@/components/SingleTitle';
import { personnel } from '@/constantes/bureau';
import Documents from '@/components/Document';

const Bureau = () => {

    return (
        <PageLayout>
            <Header
                title='BUREAU'
                subtitle="Équipe dirigeante du club"
            />

            <Image
                src="/bureau/1.png"
                alt="Photo devant une table avec des raquettes"
                width={2000}
                height={2000}
            />

            <Content>

                <Bloc title='Quésaco ?'>
                    <BlocText>
                        Le Bureau veille au bon fonctionnement du club et au respect des règlements en vigueur, il s&apos;occupe de la trésorerie (suivi des dépenses et des recettes, cotisations des adhérents, gestion du compte bancaire) et de la résolution des problèmes et des conflits en son sein.
                    </BlocText>

                    <BlocText>
                        Il assure l’organisation des séances, le suivi des inscriptions, les achats de matériel, la communication interne, ainsi que toutes les décisions permettant au club d’offrir un cadre convivial et sécurisé.
                    </BlocText>

                    <BlocText>
                        Entièrement composé de bénévoles, il représente la section auprès du CACBO et travaille main dans la main avec la collectivité pour garantir la meilleure expérience possible aux adhérents.
                    </BlocText>
                </Bloc>

                <Parent>
                    <SingleTitle>
                        Composition du Bureau
                    </SingleTitle>

                    {personnel.map((personnel, index) => (
                        <Membre
                            key={personnel.role}
                            firstName={personnel.firstName}
                            lastName={personnel.lastName}
                            role={personnel.role}
                            description={personnel.description}
                            index={index}
                        />
                    ))}

                </Parent>

                <Bloc title='Élection et mandat'>
                    <BlocText>
                        Le Bureau est élu lors de l’Assemblée Générale de la section, conformément au règlement intérieur du CACBO.
                    </BlocText>

                    <BlocText>
                        Les adhérents présents votent à main levée ou à bulletins secrets.
                    </BlocText>

                    <BlocText>
                        Le Bureau est élu pour une olympiade (4 ans).
                    </BlocText>
                </Bloc>

                <Bloc subtitile="Les documents officiels">
                    <Documents href="/bureau/Statuts + RI (CACBO).pdf" content="Statuts & règlement intérieur du Club omnisports (CACBO)" />
                    <Documents href="/bureau/Règlement intérieur (club - 2026).pdf" content="Règlement intérieur de la section badminton" />
                </Bloc>
            </Content>


        </PageLayout>
    )
}

export default Bureau