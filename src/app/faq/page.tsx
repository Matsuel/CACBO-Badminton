import type { Metadata } from "next";
import Bloc from "@/components/Bloc"
import Content from "@/components/Content"
import Header from "@/components/Header"
import List from "@/components/List"
import ListElement from "@/components/ListElement"
import PageLayout from "@/components/PageLayout"
import Banner from "@/components/Banner";
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "FAQ",
};

const Faq = () => {
    return (
        <PageLayout>

            <Header
                title="FAQ"
                subtitle="Toutes les infos pratiques sur notre club !"
            />

            <Banner src="/faq/1.png" alt="Photo d'un match" />

            <Content>

                <Bloc title="Quels sont les créneaux horaires pour pratiquer ?">
                    <Text>
                        Nos créneaux sont les lundis (21h-23h), mardis (18h-21h) et vendredis (18h30-21h).
                    </Text>
                </Bloc>

                <Bloc title="Où se situe la salle ?">
                    <Text>
                        Notre salle se situe au complexe sportif Philippe Madrelle, au 24 rue Pasteur à Carbon-Blanc.
                    </Text>
                </Bloc>

                <Bloc title="Le club est-il ouvert à tous les niveaux ?">
                    <Text>
                        Oui, notre club accueille aussi bien les débutants que les joueurs confirmés. Nous mettons un point d&apos;honneur à offrir une ambiance conviviale pour tous.
                    </Text>
                </Bloc>

                <Bloc title="Peut-on venir essayer avant de s’inscrire ?">
                    <Text>
                        Oui, nous proposons 3 séances d&apos;essai gratuites pour découvrir le club et voir si l&apos;ambiance vous convient.
                    </Text>
                </Bloc>

                <Bloc title="Quel est le tarif pour adhérer au club ?">
                    <Text>
                        Nous proposons deux formules d’adhésion :
                    </Text>

                    <List>
                        <ListElement>la formule adulte à 50€</ListElement>
                        <ListElement>la formule couple à 90€ pour 2 personnes.</ListElement>
                    </List>
                </Bloc>

                <Bloc title="Utilisez-vous des volants en plumes ou en nylon ?">
                    <Text>
                        Nous utilisons en très grande majorité des volants en plumes pour leur qualité de jeu, mais chacun est libre d’apporter des volants en nylon s’il le souhaite.
                    </Text>
                </Bloc>

                <Bloc title="Faut-il amener son propre matériel ?">
                    <Text>
                        Oui, vous devez apporter votre raquette, des chaussures de sport propres (pour ne pas salir la salle) et vos propres volants. Cependant, si vous n’avez pas de raquette, nous pouvons en prêter pour dépanner.
                    </Text>
                </Bloc>

                <Bloc title="Peut-on acheter des volants directement au club ?">
                    <Text>
                        Oui, nous avons une boutique interne où vous pouvez acheter des volants en plumes à prix réduit, exclusivement réservée à nos adhérents.
                    </Text>
                </Bloc>

                <Bloc title="Il y a-t-il une limite d’âge pour s’inscrire ?">
                    <Text>
                        Oui, notre club est exclusivement ouvert aux adultes.
                    </Text>
                </Bloc>

                <Bloc title="Proposez vous des cours encadrés ?">
                    <Text>
                        Nous ne proposons pas de cours encadrés actuellement. Cependant, les joueurs expérimentés du club seront ravis de partager leurs conseils.
                    </Text>
                </Bloc>

                <Bloc title="Organisez-vous des événements en dehors des créneaux ?">
                    <Text>
                        Oui, nous organisons des événements réguliers tels que des soirées apéritives les vendredis et des sorties conviviales, comme des repas de fin d’année.
                    </Text>
                </Bloc>

                <Bloc title="De combien disposez-vous de terrains pour jouer ?">
                    <Text>
                        Nous disposons de 7 terrains dans la salle, ce qui permet de jouer en double ou en simple selon le nombre de participants.
                    </Text>
                </Bloc>

                <Bloc title="Comment m’inscrire au club ?">
                    <Text>
                        L’inscription se fait via notre plateforme partenaire HelloAsso. Vous pouvez également vous inscrire sur papier (page “adhérer” de notre site).
                    </Text>
                </Bloc>

                <Bloc title="Peut-on venir jouer en dehors des créneaux horaires ? ">
                    <Text>
                        Malheureusement, l’accès à la salle est limité aux créneaux horaires définis.
                    </Text>
                </Bloc>

                <Bloc title="Comment peut-on vous contacter pour plus d’informations ?">
                    <Text>
                        Vous pouvez nous contacter par mail à <span className="font-medium">hello@cacbobad.fr</span>, par messages sur nos réseaux sociaux Instagram et Facebook ou venir directement nous voir lors des créneaux.
                    </Text>
                </Bloc>
            </Content>

        </PageLayout>
    )
}

export default Faq