import type { Metadata } from "next";
import Bloc from '@/components/Bloc';
import Content from '@/components/Content';
import Header from '@/components/Header';
import Membre from '@/components/Membre';
import PageLayout from '@/components/PageLayout';
import Parent from '@/components/Parent';
import { personnel } from '@/constantes/bureau';
import Documents from '@/components/Document';
import Banner from "@/components/Banner";
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Le Bureau",
};

const Bureau = () => {

    return (
        <PageLayout>
            <Header
                title='BUREAU'
                subtitle="Équipe dirigeante du club"
            />

            <Banner src="/bureau/1.png" alt="Photo devant une table avec des raquettes" />

            <Content>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Quésaco ?
                    </Text>

                    <Bloc>
                        <Text>
                            Le Bureau veille au bon fonctionnement de la section, à la gestion transparente des finances et au respect des règles fixées par le Club omnisports (CACBO).
                        </Text>

                        <Text>
                            Il assure l’organisation des séances, le suivi des inscriptions, les achats de matériel, la communication interne, ainsi que toutes les décisions permettant au club d’offrir un cadre convivial et sécurisé.
                        </Text>

                        <Text>
                            Entièrement composé de bénévoles, il représente la section auprès du CACBO et travaille main dans la main avec la collectivité pour garantir la meilleure expérience possible aux adhérents.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Composition du Bureau
                    </Text>

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

                <Parent>
                    <Text variant="h2" color="rouge">
                        Élection et mandat
                    </Text>

                    <Bloc>
                        <Text>
                            Le Bureau est élu lors de l’Assemblée Générale de la section, conformément au règlement intérieur du CACBO.
                        </Text>

                        <Text>
                            Les adhérents présents votent à main levée ou à bulletins secrets.
                        </Text>

                        <Text>
                            Le Bureau est élu pour une olympiade (4 ans).
                        </Text>
                    </Bloc>

                    <Bloc>
                        <Text variant="h3">
                            Les documents officiels
                        </Text>
                        <Documents href="/bureau/Statuts + RI (CACBO).pdf" content="Statuts & règlement intérieur du Club omnisports (CACBO)" />
                        <Documents href="/bureau/Règlement intérieur (club - 2026).pdf" content="Règlement intérieur de la section badminton" />
                    </Bloc>
                </Parent>
            </Content>


        </PageLayout>
    )
}

export default Bureau