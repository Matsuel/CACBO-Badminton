import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Caroussel from "@/components/Caroussel"
import Content from "@/components/Content"
import Header from "@/components/Header"
import ImageLegend from "@/components/ImageLegend"
import PageLayout from "@/components/PageLayout"
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

                <Bloc title="La naissance du club">

                    <BlocText>
                        Le club voit le jour en 2007, grâce à l&apos;initiative de trois passionnés : Ahmed CASSIM, Laurent THOMAS et Julien LARCHER.
                    </BlocText>

                    <BlocText>
                        Quelques années plus tard, le club s’affilie à la Fédération Française de Badminton (FFBaD) et décroche son premier label École Française de Badminton (EFB) 1 étoile ⭐ lors de la saison 2013/14.
                    </BlocText>

                    <BlocText>
                        Une distinction qu&apos;il conservera à 4 reprises lors des saisons 2014/15, 2015/16, 2016/17 et 2017/18. 🏅
                    </BlocText>
                </Bloc>

                <ImageLegend
                    src="/histoire/ecolebad.png"
                    description="Notre école de badminton saison 2014/15"
                />

                <ImageLegend
                    src="/histoire/finale.png"
                    description="La finale d’un tournoi opposant le club à celui de la Jeunesse Yvracaise (1/2)"
                />

                <Bloc>
                    <BlocText>
                        En juillet 2018, la fermeture définitive du gymnase Gaston Lacoste, menacé d&apos;effondrement, contraint le club à une mise en sommeil. Après sa démolition en novembre 2019, le club reste inactif pendant près de 4 ans.
                    </BlocText>
                </Bloc>

                <Caroussel
                    images={[
                        "/histoire/caroussel1.png",
                        "/histoire/caroussel2.png"
                    ]}
                    title="Retour en images"
                />

                <ImageLegend
                    src="/histoire/j2013.png"
                    description="Juillet 2013"
                />

                <ImageLegend
                    src="/histoire/s2014.png"
                    description="Septembre 2014"
                />

                <ImageLegend
                    src="/histoire/o2017.png"
                    description="L’un des nombreux cours de l’école de badminton du club (octobre 2017)"
                />

                <ImageLegend
                    src="/histoire/n2019.png"
                    description="Le gymnase lors de sa démolition (novembre 2019)"
                />

                <Bloc title="La renaissance de la section">
                    <BlocText>
                        Cependant, en septembre 2022, il renaît sous l’impulsion de Laurent THOMAS, l’un de ses fondateurs.
                    </BlocText>

                    <BlocText>
                        Aujourd&apos;hui, les joueurs évoluent dans le complexe sportif Philippe Madrelle, une salle moderne de 1056 m² comptant 2 terrains supplémentaires (7 au total) et offrant un cadre idéal pour pratiquer leur passion.
                    </BlocText>
                </Bloc>

                <ImageLegend
                    src="/histoire/s2022.png"
                    description="La nouvelle salle du complexe remplaçant le précédent gymnase à la réouverture du club, en septembre 2022"
                />

                <Bloc title="Et le CACBO dans tout ça ?">
                    <BlocText>
                        Le Club Athlétique CarbonBlanais Omnisports (CACBO) est né le 25 mai 1972 d&apos;une initiative municipale visant à regrouper et développer les activités sportives de la commune, qu&apos;elles soient de compétition ou de loisir.
                    </BlocText>

                    <BlocText>
                        Il résulte de la fusion entre le Club Athlétique CarbonBlanais (CACB), fondé le 1er octobre 1925 par Gaston Lacoste (le club de football de la ville), et le Club Léo Lagrange, regroupant déjà plusieurs sections. Simon Cypel en devient le premier président.
                    </BlocText>
                </Bloc>

            </Content>

        </PageLayout>
    )
}

export default Histoire