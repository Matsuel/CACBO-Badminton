import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Documents from "@/components/Document"
import Header from "@/components/Header"
import List from "@/components/List"
import ListElement from "@/components/ListElement"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import SingleTitle from "@/components/SingleTitle"

const Respect = () => {
    return (
        <PageLayout>

            <Header
                title="respect & prévention"
                subtitle="Un club ouvert à tous"
            />

            <Content>
                <Bloc>
                    <BlocText className="font-semibold">
                        Le CACBO Badminton s&apos;engage à promouvoir une pratique du badminton fondée sur le respect, l&apos;inclusion et la convivialité.
                    </BlocText>

                    <BlocText>
                        Chaque adhérent doit pouvoir évoluer dans un environnement serein où chacun trouve sa place, quel que soit son niveau, son parcours ou son expérience.
                    </BlocText>
                </Bloc>

                <Parent>
                    <SingleTitle>
                        Nos engagement
                    </SingleTitle>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Prévention & intégrité
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            <span className="font-medium">Référent du club</span> : Laurent THOMAS
                        </BlocText>

                        <BlocText>
                            Pour toute question ou signalement, vous pouvez contacter directement le Bureau du club à :
                        </BlocText>

                        <BlocText className="font-medium">
                            hello@cacbobad.fr – 06 18 95 23 30
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Comment signaler une situation ?
                    </SingleTitle>

                    <Bloc>
                        <BlocText className="font-medium">
                            Sous forme d’étapes
                        </BlocText>

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
                        <BlocText className="font-medium">
                            Avec la fiche officielle
                        </BlocText>

                        <Documents href="/manque" content="Fiche de signalement (CDOS)" />
                    </Bloc>
                </Parent>


                <Parent>
                    <SingleTitle>
                        Contacts utiles
                    </SingleTitle>

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
                        <BlocText className="font-semibold">
                            Accompagnement, aide et écoute sur les violences sexistes/sexuelles
                        </BlocText>

                        <Documents href="/manque" content="Associations en Gironde" />
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Notre règlement intérieur
                    </SingleTitle>
                    <Bloc>
                        <BlocText>
                            Les règles relatives au respect, à l&apos;éthique, aux violences sexistes et sexuelles ainsi qu&apos;aux procédures de signalement sont détaillées dans le règlement intérieur, téléchargeable ci-dessous :
                        </BlocText>

                        <Documents href="/manque" content="Télécharger le règlement intérieur du club" />
                    </Bloc>
                </Parent>

            </Content>

        </PageLayout>
    )
}

export default Respect