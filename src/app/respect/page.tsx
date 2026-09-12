import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import SingleTitle from "@/components/SingleTitle"

const Respect = () => {
    return (
        <PageLayout>

            <Header
                title="respect & prévention"
                subtitle="Un club ouvert à tous"
            />

            <Content>
                <Bloc>
                    <BlocText className="font-semibold">
                        Le CACBO Badminton s&apos;engage à promouvoir une pratique du badminton fondée sur le respect, l&apos;inclusion et la convivialité.
                    </BlocText>

                    <BlocText>
                        Chaque adhérent doit pouvoir évoluer dans un environnement serein où chacun trouve sa place, quel que soit son niveau, son parcours ou son expérience.
                    </BlocText>
                </Bloc>

                <Parent>
                    <SingleTitle>
                        Nos engagement
                    </SingleTitle>
                </Parent>
            </Content>

        </PageLayout>
    )
}

export default Respect