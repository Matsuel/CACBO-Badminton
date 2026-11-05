import type { Metadata } from "next";
import Bloc from "@/components/Bloc"
import Content from "@/components/Content"
import Documents from "@/components/Document"
import Header from "@/components/Header"
import List from "@/components/List"
import ListElement from "@/components/ListElement"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Respect & prévention",
};

const Respect = () => {
    return (
        <PageLayout>

            <Header
                title="respect & prévention"
                subtitle="Un club ouvert à tous"
            />

            <Content>
                <Bloc>
                    <Text className="font-semibold">
                        Le CACBO Badminton s&apos;engage à promouvoir une pratique du badminton fondée sur le respect, l&apos;inclusion et la convivialité.
                    </Text>

                    <Text>
                        Chaque adhérent doit pouvoir évoluer dans un environnement serein où chacun trouve sa place, quel que soit son niveau, son parcours ou son expérience.
                    </Text>
                </Bloc>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Nos engagement
                    </Text>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Prévention & intégrité
                    </Text>

                    <Bloc>
                        <Text>
                            <span className="font-medium">Référent du club</span> : Laurent THOMAS
                        </Text>

                        <Text>
                            Pour toute question ou signalement, vous pouvez contacter directement le Bureau du club à :
                        </Text>

                        <Text className="font-medium">
                            hello@cacbobad.fr – 06 18 95 23 30
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Comment signaler une situation ?
                    </Text>

                    <Bloc>
                        <Text className="font-medium">
                            Sous forme d’étapes
                        </Text>

                        <List>
                            <ListElement>
                                Alerter un membre du Bureau du club ou du Bureau Exécutif du CACBO et/ou le référent du club.
                            </ListElement>
                            <ListElement>
                                En cas de besoin, contacter directement les organismes compétents (liste ci-dessous).
                            </ListElement>
                        </List>
                    </Bloc>

                    <Bloc>
                        <Text className="font-medium">
                            Avec la fiche officielle
                        </Text>

                        <Documents href="/manque" content="Fiche de signalement (CDOS)" />
                    </Bloc>
                </Parent>


                <Parent>
                    <Text variant="h2" color="rouge">
                        Contacts utiles
                    </Text>

                    <Bloc>
                        {/* TODO: Passer en constante + ajouter telto */}
                        <List>
                            <ListElement>
                                <span className="font-semibold">05 57 77 53 10</span> – Brigade de gendarmerie de Carbon-Blanc
                            </ListElement>
                            <ListElement>
                                <span className="font-semibold">05 40 54 73 43</span> – Service Départemental de la Jeunesse, de l’Engagement et des Sports (SDJES) de la Gironde
                            </ListElement>
                            <ListElement>
                                <span className="font-semibold">06 41 10 59 15</span> / <span className="font-semibold">05 56 00 99 05</span> – Maëlys VIRMAUX (CDOS Gironde)
                            </ListElement>
                            <ListElement>
                                <span className="font-semibold">17</span> – Police
                            </ListElement>
                            <ListElement>
                                <span className="font-semibold">114</span> – Urgences par SMS
                            </ListElement>
                            <ListElement>
                                <span className="font-semibold">119</span> – Enfance en danger
                            </ListElement>
                        </List>
                    </Bloc>

                    <Bloc>
                        <Text className="font-semibold">
                            Accompagnement, aide et écoute sur les violences sexistes/sexuelles
                        </Text>

                        <Documents href="/manque" content="Associations en Gironde" />
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Notre règlement intérieur
                    </Text>
                    <Bloc>
                        <Text>
                            Les règles relatives au respect, à l&apos;éthique, aux violences sexistes et sexuelles ainsi qu&apos;aux procédures de signalement sont détaillées dans le règlement intérieur, téléchargeable ci-dessous :
                        </Text>

                        <Documents href="/manque" content="Télécharger le règlement intérieur du club" />
                    </Bloc>
                </Parent>

            </Content>

        </PageLayout>
    )
}

export default Respect