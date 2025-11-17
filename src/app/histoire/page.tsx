import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import SingleTitle from "@/components/SingleTitle"
import Image from "next/image"


const Histoire = () => {

    return (
        <PageLayout>

            <Header
                title='HISTOIRE'
                subtitle="Le chemin parcouru depuis 2007"
            />

            <Content>
                <Image
                    src="/histoire/1.png"
                    alt="Photo devant une table avec des raquettes"
                    className="rounded-xl"
                    width={2000}
                    height={2000}
                />

                <Parent>

                    <SingleTitle>
                        Les prémices du club (2007-2010)
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le club voit le jour le <span className="text-redpale font-medium">15 mars 2007</span>, à l’initiative de trois passionnés : Ahmed KASSIM (président), Laurent THOMAS (secrétaire) et Julien LARCHER (trésorier). 🖋️
                        </BlocText>

                        <BlocText>
                            Les premiers créneaux se tiennent au gymnase Gaston Lacoste, sur <span className="text-redpale font-medium">5 terrains tracés et 3 créneaux hebdomadaires</span> de deux heures, réunissant dès la première saison près de <span className="text-redpale font-medium">70 adhérents</span>.
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">Dès 2008</span>, la section consolide ses bases avec une fréquentation élevée, en maintenant 3 créneaux hebdomadaires et un <span className="text-redpale font-medium">taux d’occupation moyen de 60% des terrains</span> à chaque séance.
                        </BlocText>

                        <BlocText>
                            Les responsables notent déjà un fort engouement et la nécessité d’un encadrement de qualité pour les jeunes, amorçant la <span className="text-redpale font-medium">création de l’école de badminton</span> dès la saison suivante pour les plus jeunes. 🧒
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">En 2009</span>, le club franchit une nouvelle étape : on compte <span className="text-redpale font-medium">près de 87 licenciés</span>, et la section envisage de dépasser la barre symbolique des 100 adhérents.
                        </BlocText>

                        <BlocText>
                            Les premières rencontres amicales avec d’autres clubs, comme Saint-Louis-de-Montferrand, sont organisées, et un tournoi interne devient un rendez-vous régulier.
                        </BlocText>
                    </Bloc>
                </Parent>

            </Content>

        </PageLayout>
    )
}

export default Histoire