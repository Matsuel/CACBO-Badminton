import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Register from "@/components/Register"
import SingleTitle from "@/components/SingleTitle"
import Image from "next/image"

const Adherer = () => {
    return (
        <PageLayout>
            <Header
                title="ADHÉRER"
                subtitle="Prêts à nous rejoindre ?"
                cta={
                    <Register
                        saison="24/25"
                        open={false}
                    />
                }
            />

            <Content>
                <Image
                    src="/adherer/1.png"
                    alt="Photo devant une table avec des raquettes"
                    width={500}
                    height={300}
                />

                <SingleTitle>
                    Pourquoi nous rejoindre ?
                </SingleTitle>

                <Bloc>
                    <BlocText>
                        En rejoignant notre club, vous intégrez une <span className="font-medium">communauté accueillante</span> et <span className="font-medium">dynamique</span>, <span className="font-medium">ouverte à tous les niveaux</span> de pratique.
                    </BlocText>

                    <BlocText>
                        Nous offrons un cadre chaleureux où l’ambiance familiale et conviviale favorise à la fois le plaisir de jouer et la progression.
                    </BlocText>

                    <BlocText>
                        Que vous soyez compétiteur ou amateur, vous bénéficierez d&apos;<span className="font-medium">infrastructures modernes</span>, de <span className="font-medium">créneaux variés</span> adaptées à vos besoins, et d&apos;un esprit sans prise de tête. 😎
                    </BlocText>

                    <BlocText>
                        De plus, nos <span className="underline">soirées régulières</span> 🎉 sont l&apos;occasion idéale de renforcer les liens et de <span className="font-medium">partager des moments de détente</span> en dehors des terrains. Ici, c&apos;est avant tout le plaisir du sport et du partage qui prime !
                    </BlocText>
                </Bloc>

            </Content>
        </PageLayout>
    )
}

export default Adherer