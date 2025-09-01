import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import SingleTitle from "@/components/SingleTitle"
import { textVariants } from "@/constantes/theme"
import Image from "next/image"

const Regles = () => {
    return (
        <PageLayout>

            <Header
                title="RÈGLES DU JEU"
                subtitle="Tout ce qu'il faut savoir avant de jouer !"
            />

            <Content>
                <Image
                    src="/regles/1.png"
                    alt="Photo devant une table avec des raquettes"
                    className="rounded-xl"
                    width={2000}
                    height={2000}
                />

                <Parent>
                    <SingleTitle>
                        1. Déroulement du match
                    </SingleTitle>

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Comment se déroule un match ? 🎯
                        </h4>

                        <BlocText>
                            Le badminton se joue en <span className="font-medium">3 sets maximum</span>. Chaque set est remporté par le joueur ou l’équipe qui marque <span className="font-medium">21 points</span>.
                        </BlocText>

                        <BlocText>
                            Toutefois, si les deux adversaires atteignent un score de 20-20, le jeu continue jusqu’à ce qu’un joueur ou une équipe ait 2 points d’écart (par exemple, 22-20, 23-21, etc).
                        </BlocText>

                        <BlocText>
                            Si le score atteint 29-29, la règle change : le joueur ou l’équipe qui atteint <span className="font-medium">30 points en premier</span> remporte le set.
                        </BlocText>

                        <BlocText>
                            Une fois le set gagné, <span className="font-medium">l&apos;équipe ou le joueur gagnant sert en premier</span> dans le set suivant.
                        </BlocText>
                    </Bloc>

                    <Bloc>
                        <h3 className={textVariants.h3}>
                            ℹ️ Exemple :
                        </h3>

                        <BlocText>
                            <span className="font-medium">Set 1</span> : 21-19 (2 pts d’écart)
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">Set 2</span> : 18-21 (2 pts d’écart)
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">Set 3</span> : 30-29 (point sec)
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        2. Les limites du terrain
                    </SingleTitle>

                    <Bloc>
                        <h3 className={textVariants.h3}>
                            Simple et double : quelles différences ? 🤔
                        </h3>

                        <h4 className={`${textVariants.h4} text-redpale`}>
                            En simple, les joueurs utilisent le terrain restreint (les lignes intérieures sur les côtés et les lignes de fond).
                        </h4>

                        <ul className="list-disc pl-7">
                            <li className={textVariants.text}>Au service, le volant doit atterrir dans le carré de service diagonalement opposé au serveur. Si le service est court ou hors de cette zone, il est considéré comme faute.</li>
                            <li className={textVariants.text}>En jeu, toute la partie du terrain située entre les lignes intérieures est valable.</li>
                        </ul>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        3. Le service et le placement des joueurs
                    </SingleTitle>
                    <Bloc>
                        <h3 className={textVariants.h3}>
                            Comment servir et où se mettre ?
                        </h3>

                        <BlocText>
                            Le joueur ou l&apos;équipe qui gagne un point prend le service. Le service se fait toujours en diagonale. En simple, le serveur se place à droite si son score est pair et à gauche si impair. En double, c&apos;est pareil, mais les joueurs ne changent de côté qu&apos;en cas de point marqué sur leur service.
                        </BlocText>
                    </Bloc>

                    <Bloc>
                        <h3 className={textVariants.h3}>
                            Quand changer de demi-terrain ? 🔄
                        </h3>

                        <BlocText>
                            Les joueurs changent de côté <span className="font-medium">après chaque set</span>. Si un match atteint un troisième set, ils changent à 11 points.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        4. Les fautes en match
                    </SingleTitle>
                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Au service
                        </h4>

                        <ul className="list-disc pl-7">
                            <li className={textVariants.text}>Frapper le volant au-dessus de la taille, ne pas respecter la diagonale, mordre les lignes avec son pied lors du service, ou arrêter le mouvement de la raquette.</li>
                        </ul>


                        <h4 className={textVariants.h4}>
                            Au cours du jeu
                        </h4>

                        <ul className="list-disc pl-7">
                            <li className={textVariants.text}>Concernant le volant : lorsqu&apos;il est envoyé hors des limites du terrain, qu&apos;il ne passe pas au-dessus du filet ou passe en dessous, qu&apos;il touche le plafond, qu&apos;il est frappé successivement par un joueur et son partenaire ou qu&apos;il est frappé 2 fois par le même joueur.</li>
                            <li className={textVariants.text}>Joueur touchant le filet ou ses supports avec sa raquette, son corps ou ses vêtements, envahissement du terrain adverse par-dessus ou par-dessous le filet ou encore l’obstruction ou la distraction délibérée de l&apos;adversaire.</li>
                        </ul>

                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        5. Le positionnement en Doubles et le tirage au sort
                    </SingleTitle>
                    <Bloc>
                        <h3 className={textVariants.h3}>
                            La stratégie est primordiale ! 🤝
                        </h3>

                        <BlocText>
                            En double, après le service, les partenaires sont libres de leurs mouvements et doivent se coordonner pour couvrir le terrain efficacement. Au service, un joueur se place à l&apos;avant tandis que l&apos;autre reste en fond de court. Puis par la suite au cours du jeu, les joueurs se placent en côté-côté lorsqu&apos;ils doivent défendre.
                        </BlocText>
                    </Bloc>

                    <Bloc>
                        <h3 className={textVariants.h3}>
                            Le tirage au sort
                        </h3>

                        <BlocText>
                            Avant le début du match, un tirage au sort détermine qui servira en premier ou choisira le côté du terrain.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        6. Les erreurs de zone de service et les &quot;lets&quot;
                    </SingleTitle>
                    <Bloc>
                        <h3 className={textVariants.h3}>
                            Que se passe-t-il en cas d&apos;erreur ?
                        </h3>

                        <BlocText>
                            Si un joueur sert ou reçoit dans la mauvaise zone ou que ce n&apos;était pas son tour, <span className="font-medium">le jeu continue</span>, mais <span className="underline">l&apos;erreur doit être corrigée</span> pour le prochain service et <span className="font-medium">le score reste maintenu</span>.
                        </BlocText>
                    </Bloc>

                    <Bloc>
                        <h3 className={textVariants.h3}>
                            Quand arrêter un échange ? ⏸️
                        </h3>

                        <BlocText>
                            Un &quot;let&quot; est déclaré si le serveur sert avant que le receveur ne soit prêt, ou si un incident imprévu se produit (comme un volant cassé).
                        </BlocText>
                    </Bloc>
                </Parent>
            </Content>

        </PageLayout>
    )
}

export default Regles