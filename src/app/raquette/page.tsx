import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import List from "@/components/List"
import ListElement from "@/components/ListElement"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import SingleTitle from "@/components/SingleTitle"
import { textVariants } from "@/constantes/theme"
import Image from "next/image"

const Regles = () => {
    return (
        <PageLayout>

            <Header
                title="guide de la raquette"
                subtitle="Tout savoir sur sa raquette"
            />

            <Content>
                <Image
                    src="/raquette/1.png"
                    alt="Photo de plusieurs raquettes"
                    className="rounded-xl"
                    width={2000}
                    height={2000}
                />

                <Parent>
                    <SingleTitle>
                        Pourquoi bien choisir sa raquette ?
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            La raquette est l&apos;outil principal du joueur de badminton.
                        </BlocText>

                        <BlocText>
                            Si, à première vue, toutes les raquettes se ressemblent, elles possèdent en réalité des caractéristiques très différentes qui influencent énormément le style de jeu, la puissance et le confort.
                        </BlocText>

                        <BlocText>
                            Bien comprendre ces éléments permet de choisir une raquette adaptée à son niveau et à sa pratique.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Le poids de la raquette
                    </SingleTitle>

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Le poids est un critère essentiel. La plupart des raquettes pèsent entre 75 et 95 grammes (sans cordage).
                        </h4>

                        <List>
                            <ListElement>Une <span className="font-medium">raquette légère</span> (75–80 g) est plus maniable et rapide, idéale pour la défense et les échanges rapides au filet. Elle demande cependant plus de technique pour générer de la puissance.</ListElement>
                            <ListElement>Une <span className="font-medium">raquette intermédiaire</span> (80–85 g) représente un bon compromis entre maniabilité et puissance, et convient à la majorité des joueurs loisirs.</ListElement>
                            <ListElement>Une <span className="font-medium">raquette plus lourde</span> (85–95 g) apporte davantage de puissance, mais peut fatiguer plus vite le bras, surtout pour un joueur débutant.</ListElement>
                        </List>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        L’équilibre : manche, tête ou neutre
                    </SingleTitle>

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Au-delà du poids total, il faut aussi regarder où le poids est réparti. On distingue trois types d’équilibre :
                        </h4>

                        <List>
                            <ListElement><span className="font-medium">Équilibre en tête</span> : la raquette a plus de poids vers le haut. Cela procure plus de puissance pour les smashs et les frappes longues, mais réduit la maniabilité.</ListElement>
                            <ListElement><span className="font-medium">Équilibre en manche</span> : le poids est concentré vers le bas. La raquette est alors très maniable et rapide, parfaite pour le jeu défensif et les réactions rapides.</ListElement>
                            <ListElement><span className="font-medium">Équilibre neutre</span> : la répartition est équilibrée entre manche et tête. C’est un choix polyvalent, recommandé pour les joueurs loisir et ceux qui veulent un compromis.</ListElement>
                        </List>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        La rigidité de la tige
                    </SingleTitle>

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            La tige (ou shaft) de la raquette peut être plus ou moins rigide.
                        </h4>

                        <List>
                            <ListElement>Une <span className="font-medium">tige souple</span> offre un effet de catapulte : elle aide à générer de la puissance sans trop d’effort, mais la précision est moindre. Parfait pour les débutants ou joueurs loisirs.</ListElement>
                            <ListElement>Une <span className="font-medium">tige intermédiaire</span> est polyvalente et permet un bon compromis entre puissance et précision.</ListElement>
                            <ListElement>Une <span className="font-medium">tige rigide</span> favorise la précision et la réactivité, mais demande plus de force et de technique pour exploiter la puissance. Elle est réservée aux joueurs confirmés.</ListElement>
                        </List>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Le cordage et sa tension
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le cordage influence directement le ressenti et la performance de la raquette.
                        </BlocText>

                        <h4 className={textVariants.h4}>
                            La tension se mesure en kilos :
                        </h4>

                        <List>
                            <ListElement>Une <span className="font-medium">tension basse</span> (9–10,5 kg) donne plus de puissance grâce à un effet trampoline, mais moins de contrôle. Idéal pour les débutants.</ListElement>
                            <ListElement>Une <span className="font-medium">tension intermédiaire</span> (10,5–12 kg) est polyvalente, adaptée aux joueurs réguliers.</ListElement>
                            <ListElement>Une <span className="font-medium">tension élevée</span> (12–13,5 kg ou plus) procure beaucoup de précision et de contrôle, mais demande une excellente technique.</ListElement>
                        </List>
                    </Bloc>

                    <Bloc>
                        <BlocText>
                            Le cordage peut être fin (plus de sensations mais moins durable) ou plus épais (plus résistant mais un peu moins précis). Les cordages les plus populaires sont par exemple le Yonex BG65 (très durable) ou le BG80 (plus de contrôle et de toucher).
                        </BlocText>
                    </Bloc>
                </Parent>
            </Content>

        </PageLayout>
    )
}

export default Regles