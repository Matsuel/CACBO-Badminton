import type { Metadata } from "next";
import Image from "next/image"
import Bloc from "@/components/Bloc"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import Banner from "@/components/Banner";
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Guide du volant",
};

const Regles = () => {
    return (
        <PageLayout>
            <Header
                title="guide du volant"
                subtitle="Bien connaître son volant"
            />

            <Banner src="/volant/1.png" alt="Photo d'un volant de badminton" />

            <Content>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Les différents types de volant
                    </Text>

                    <Bloc>
                        <Text>
                            Il existe aujourd’hui 3 grandes catégories de volants : les <span className="font-semibold">volants en plastique</span> (nylon), les <span className="font-semibold">volants en plumes</span> et les <span className="font-semibold">volants hybrides</span>.
                        </Text>
                    </Bloc>

                    <Bloc>
                        <Text variant="h4">
                            Les volants en plastique
                        </Text>

                        <Text>
                            Ces volants reconnaissables à leur jupe en nylon, sont réputés pour leur <span className="font-semibold">résistance</span> et leur <span className="font-semibold">coût réduit</span>.
                        </Text>

                        <Text>
                            Ils supportent de nombreux échanges et conviennent bien aux débutants ou aux joueurs qui recherchent avant tout un matériel économique et durable.
                        </Text>

                        <Text>
                            En revanche, leur trajectoire est moins naturelle : le volant a tendance à « flotter » dans l&apos;air, ce qui réduit la précision des échanges.
                        </Text>
                    </Bloc>

                    <Image
                        src="/volant/2.png"
                        alt="Photo d'un volant en plastique"
                        className="rounded-xl shadow-ombre"
                        width={2010}
                        height={1206}
                        sizes="100vw"
                    />

                    <Bloc>
                        <Text variant="h4">
                            Les volants en plumes
                        </Text>

                        <Text>
                            Fabriqués traditionnellement à partir de 16 plumes d&apos;oie ou de canard fixé dans une base en liège naturel, ces volants offrent des sensations incomparables.
                        </Text>

                        <Text>
                            Leur trajectoire est plus régulière, plus rapide et plus précise, ce qui en fait le choix privilégié des clubs et des compétiteurs.
                        </Text>

                        <Text>
                            Ils restent cependant plus fragiles et nécessitent un budget plus conséquent.
                        </Text>
                    </Bloc>

                    <Image
                        src="/volant/3.png"
                        alt="Photo de 3 volants en plumes"
                        className="rounded-xl shadow-ombre"
                        width={2010}
                        height={1206}
                        sizes="100vw"
                    />

                    <Bloc>
                        <Text variant="h4">
                            Les volants hybrides
                        </Text>

                        <Text>
                            Entre les deux, on retrouve désormais les volants hybrides. Ils combinent une base en plumes avec une jupe partiellement en plastique.
                        </Text>

                        <Text>
                            L&apos;objectif est de conserver la qualité de vol des plumes tout en améliorant la durabilité.
                        </Text>

                        <Text>
                            Encore récents sur le marché, ils séduisent de plus en plus de joueurs en quête d’un compromis entre confort et longévité.
                        </Text>
                    </Bloc>
                </Parent>


                <Parent>
                    <Text variant="h2" color="rouge">
                        La vitesse d’un volant
                    </Text>

                    <Bloc>
                        <Text>
                            La vitesse d&apos;un volant est un critère essentiel mais souvent méconnu. Elle est indiquée directement sur le tube par un chiffre, généralement 77, 78 ou 79.
                        </Text>

                        <Text variant="h4" color="rouge-pale">
                            Plus le chiffre est élevé, plus le volant est rapide. En pratique, une salle chaude rend le volant plus rapide, tandis qu&apos;une salle froide le ralentit.
                        </Text>
                    </Bloc>

                    <Bloc>
                        <Text>
                            C’est pourquoi on privilégiera un volant « 77 » dans des conditions chaudes ou humides, un « 78 » dans la plupart des gymnases en France, et un « 79 » dans les salles plus froides ou en altitude.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Le coût des volants 💸
                    </Text>

                    <Bloc>
                        <Text>
                            Les volants en plastique coûtent en moyenne une quinzaine d’euros le tube de 6, et durent longtemps. Les volants en plumes sont vendus par tubes de 12, pour un tarif allant de 23 à 55€ selon la marque et la gamme.
                        </Text>

                        <Text variant="h4" color="rouge-pale">
                            Le prix d&apos;un volant varie en fonction de son type et de sa qualité.
                        </Text>

                        <Text>
                            Leur durée de vie est plus courte : quelques points seulement pour les frappes puissantes, ou plusieurs sets pour un jeu plus doux.
                        </Text>

                        <Text>
                            C&apos;est pour cette raison que de nombreux clubs, dont le CACBO Badminton, proposent à leurs adhérents d’acheter des tubes de volants plumes à prix préférentiels.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Les marques les plus connues
                    </Text>

                    <Bloc>
                        <Text>
                            Sur le marché, certaines marques se distinguent par leur réputation et la qualité de leurs volants.
                        </Text>

                        <Text variant="h4" color="rouge-pale">
                            Yonex est sans conteste la référence mondiale et équipe de nombreuses compétitions internationales mais aussi de nombreux joueurs.
                        </Text>

                        <Text>
                            <span className="font-semibold">RSL</span> propose des volants très appréciés en club, offrant un bon compromis entre prix et performance.
                        </Text>

                        <Text>
                            <span className="font-semibold">Victor</span> et <span className="font-semibold">Forza</span> se sont également imposés comme des alternatives fiables, connues pour leur durabilité.
                        </Text>

                        <Text>
                            Enfin, <span className="font-semibold">Babolat</span>, marque française bien implantée, propose des gammes variées qui séduisent aussi bien les joueurs loisirs que compétitifs.
                        </Text>

                        <Text>
                            Enfin, <span className="font-semibold">Li-Ning</span>, marque chinoise de renommée mondiale, est reconnue pour la qualité de ses volants haut de gamme et est utilisée dans plusieurs tournois internationaux, notamment en Asie.
                        </Text>
                    </Bloc>

                    <Image
                        src="/volant/marques.png"
                        alt="Photo de plusieurs marques de volants"
                        className="rounded-xl shadow-ombre"
                        width={2000}
                        height={1196}
                        sizes="100vw"
                    />
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Quel volant choisir ? 🔎
                    </Text>

                    <Bloc>
                        <Text>
                            Le choix du volant dépend avant tout de votre pratique. Pour une découverte du badminton ou des parties occasionnelles, un volant en plastique est souvent suffisant.
                        </Text>

                        <Text variant="h4" color="rouge-pale">
                            En revanche, pour un joueur régulier en club, le volant en plumes est incontournable : il offre des sensations plus proches de la réalité du jeu et favorise la progression.
                        </Text>

                        <Text>
                            Les hybrides, quant à eux, représentent une option intéressante pour ceux qui cherchent un compromis entre plaisir de jeu et budget maîtrisé.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Astuces pour prolonger la durée de vie
                    </Text>

                    <Bloc>
                        <Text>
                            Pour les conserver plus longtemps, il est recommandé de les stocker à température ambiante, à l’abri de l’humidité ou du chauffage excessif.
                        </Text>

                        <Text variant="h4" color="rouge-pale">
                            Les volants, surtout en plumes, sont fragiles par nature.
                        </Text>

                        <Text>
                            Certains joueurs humidifient légèrement les plumes avant un match afin d’éviter qu’elles ne cassent trop vite.
                        </Text>

                        <Text>
                            Enfin, alterner les volants lors d’une séance peut parfois suffire à prolonger leur durée de vie.
                        </Text>
                    </Bloc>
                </Parent>
            </Content>
        </PageLayout>
    )
}

export default Regles