import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
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
                    width={500}
                    height={300}
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
            </Content>

        </PageLayout>
    )
}

export default Histoire