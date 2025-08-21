import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
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
                    width={500}
                    height={300}
                />

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
            </Content>

        </PageLayout>
    )
}

export default Regles