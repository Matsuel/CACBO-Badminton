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
                title="guide du volant"
                subtitle="Bien connaître son volant"
            />

            <Content>
                <Image
                    src="/volant/1.png"
                    alt="Photo d'un volant de badminton"
                    className="rounded-xl"
                    width={2000}
                    height={2000}
                />

                <Parent>
                    <SingleTitle>
                        Les différents types de volant
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Il existe aujourd’hui 3 grandes catégories de volants : les <span className="font-medium">volants en plastique</span> (nylon), les <span className="font-medium">volants en plumes</span> et les <span className="font-medium">volants hybrides</span>.
                        </BlocText>
                    </Bloc>

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Les volants en plastique
                        </h4>

                        <BlocText>
                            Ces volants reconnaissables à leur jupe en nylon, sont réputés pour leur <span className="font-medium">résistance</span> et leur <span className="font-medium">coût réduit</span>.
                        </BlocText>

                        <BlocText>
                            Ils supportent de nombreux échanges et conviennent bien aux débutants ou aux joueurs qui recherchent avant tout un matériel économique et durable.
                        </BlocText>

                        <BlocText>
                            En revanche, leur trajectoire est moins naturelle : le volant a tendance à « flotter » dans l&apos;air, ce qui réduit la précision des échanges.
                        </BlocText>
                    </Bloc>

                    <Image
                        src="/volant/2.png"
                        alt="Photo d'un volant en plastique"
                        className="rounded-xl shadow-default"
                        width={2000}
                        height={2000}
                    />

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Les volants en plumes
                        </h4>

                        <BlocText>
                            Fabriqués traditionnellement à partir de 16 plumes d&apos;oie ou de canard fixé dans une base en liège naturel, ces volants offrent des sensations incomparables.
                        </BlocText>

                        <BlocText>
                            Leur trajectoire est plus régulière, plus rapide et plus précise, ce qui en fait le choix privilégié des clubs et des compétiteurs.
                        </BlocText>

                        <BlocText>
                            Ils restent cependant plus fragiles et nécessitent un budget plus conséquent.
                        </BlocText>
                    </Bloc>

                    <Image
                        src="/volant/3.png"
                        alt="Photo de 3 volants en plumes"
                        className="rounded-xl shadow-default"
                        width={2000}
                        height={2000}
                    />

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Les volants hybrides
                        </h4>

                        <BlocText>
                            Entre les deux, on retrouve désormais les volants hybrides. Ils combinent une base en plumes avec une jupe partiellement en plastique.
                        </BlocText>

                        <BlocText>
                            L&apos;objectif est de conserver la qualité de vol des plumes tout en améliorant la durabilité.
                        </BlocText>

                        <BlocText>
                            Encore récents sur le marché, ils séduisent de plus en plus de joueurs en quête d’un compromis entre confort et longévité.
                        </BlocText>
                    </Bloc>
                </Parent>


                <Parent>
                    <SingleTitle>
                        La vitesse d’un volant
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            La vitesse d&apos;un volant est un critère essentiel mais souvent méconnu. Elle est indiquée directement sur le tube par un chiffre, généralement 77, 78 ou 79.
                        </BlocText>

                        <h4 className={`${textVariants.h4} text-redpale`}>
                            Plus le chiffre est élevé, plus le volant est rapide. En pratique, une salle chaude rend le volant plus rapide, tandis qu&apos;une salle froide le ralentit.
                        </h4>
                    </Bloc>

                    <Bloc>
                        <BlocText>
                            C’est pourquoi on privilégiera un volant « 77 » dans des conditions chaudes ou humides, un « 78 » dans la plupart des gymnases en France, et un « 79 » dans les salles plus froides ou en altitude.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Le coût des volants 💸
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Les volants en plastique coûtent en moyenne une quinzaine d’euros le tube de 6, et durent longtemps. Les volants en plumes sont vendus par tubes de 12, pour un tarif allant de 23 à 55 euros selon la marque et la gamme.
                        </BlocText>

                        <h4 className={`${textVariants.h4} text-redpale`}>
                            Le prix d&apos;un volant varie en fonction de son type et de sa qualité.
                        </h4>

                        <BlocText>
                            Leur durée de vie est plus courte : quelques points seulement pour les frappes puissantes, ou plusieurs sets pour un jeu plus doux.
                        </BlocText>

                        <BlocText>
                            C&apos;est pour cette raison que de nombreux clubs, dont le CACBO Badminton, proposent à leurs adhérents d’acheter des tubes de volants plumes à prix préférentiels.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Les marques les plus connues
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Sur le marché, certaines marques se distinguent par leur réputation et la qualité de leurs volants.
                        </BlocText>

                        <h4 className={`${textVariants.h4} text-redpale`}>
                            Yonex est sans conteste la référence mondiale et équipe de nombreuses compétitions internationales mais aussi de nombreux joueurs.
                        </h4>

                        <BlocText>
                            <span className="font-medium">RSL</span> propose des volants très appréciés en club, offrant un bon compromis entre prix et performance.
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">Victor</span> et <span className="font-medium">Forza</span> se sont également imposés comme des alternatives fiables, connues pour leur durabilité.
                        </BlocText>

                        <BlocText>
                            Enfin, <span className="font-medium">Babolat</span>, marque française bien implantée, propose des gammes variées qui séduisent aussi bien les joueurs loisirs que compétitifs.
                        </BlocText>

                        <BlocText>
                            Enfin, <span className="font-medium">Li-Ning</span>, marque chinoise de renommée mondiale, est reconnue pour la qualité de ses volants haut de gamme et est utilisée dans plusieurs tournois internationaux, notamment en Asie.
                        </BlocText>
                    </Bloc>

                    <Image
                        src="/volant/marques.png"
                        alt="Photo de plusieurs marques de volants"
                        className="rounded-xl shadow-default"
                        width={2000}
                        height={2000}
                    />
                </Parent>

                <Parent>
                    <SingleTitle>
                        Quel volant choisir ? 🔎
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le choix du volant dépend avant tout de votre pratique. Pour une découverte du badminton ou des parties occasionnelles, un volant en plastique est souvent suffisant.
                        </BlocText>

                        <h4 className={`${textVariants.h4} text-redpale`}>
                            En revanche, pour un joueur régulier en club, le volant en plumes est incontournable : il offre des sensations plus proches de la réalité du jeu et favorise la progression.
                        </h4>

                        <BlocText>
                            Les hybrides, quant à eux, représentent une option intéressante pour ceux qui cherchent un compromis entre plaisir de jeu et budget maîtrisé.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Astuces pour prolonger la durée de vie
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Pour les conserver plus longtemps, il est recommandé de les stocker à température ambiante, à l’abri de l’humidité ou du chauffage excessif.
                        </BlocText>

                        <h4 className={`${textVariants.h4} text-redpale`}>
                            Les volants, surtout en plumes, sont fragiles par nature.
                        </h4>

                        <BlocText>
                            Certains joueurs humidifient légèrement les plumes avant un match afin d’éviter qu’elles ne cassent trop vite.
                        </BlocText>

                        <BlocText>
                            Enfin, alterner les volants lors d’une séance peut parfois suffire à prolonger leur durée de vie.
                        </BlocText>
                    </Bloc>
                </Parent>
            </Content>
        </PageLayout>
    )
}

export default Regles