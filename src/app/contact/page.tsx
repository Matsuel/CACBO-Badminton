import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import SingleTitle from "@/components/SingleTitle"
import { textVariants } from "@/constantes/theme"
import Image from "next/image"

const Contact = () => {

    return (
        <PageLayout>

            <Header
                title="NOUS CONTACTER"
                subtitle="Besoin d’infos ? Nous sommes à votre écoute !"
            />

            <Content>
                <Image
                    src="/contact/1.png"
                    alt="Photo devant une table avec des raquettes"
                    width={500}
                    height={300}
                />

                <SingleTitle>
                    Vous pouvez nous joindre 👇
                </SingleTitle>

                <Bloc>
                    <h4 className={textVariants.h4}>
                        Par téléphone
                    </h4>

                    <BlocText>
                        06 18 95 23 30
                    </BlocText>

                    <h4 className={textVariants.h4}>
                        Par mail
                    </h4>

                    <BlocText>
                        hello@cacbobad.fr
                    </BlocText>
                </Bloc>
            </Content>

        </PageLayout>
    )
}

export default Contact
