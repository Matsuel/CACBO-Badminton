import Image from "next/image"
import Link from "next/link"
import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import SingleTitle from "@/components/SingleTitle"
import { SocialLinks } from "@/constantes/contact"
import { textVariants } from "@/constantes/theme"

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
                    className="rounded-xl"
                    width={2000}
                    height={2000}
                />

                <Parent>
                    <SingleTitle>
                        Vous pouvez nous joindre
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

                    <Bloc>
                        <h3 className={textVariants.h3}>
                            Nos réseaux sociaux
                        </h3>

                        <div className="flex flex-row gap-30">
                            {SocialLinks.map(link => (
                                <Link key={link.name} href={link.link} className="w-[30px] h-[30px] text-redcolor hover:text-redpale transition-colors duration-300">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Où nous rejoindre 👇
                    </SingleTitle>

                    <Bloc className="border border-redcolor">
                        <h4 className={textVariants.h4}>
                            Complexe sportif Philippe Madrelle
                        </h4>
                        <BlocText>
                            24 rue Pasteur, 33560 Carbon-Blanc
                        </BlocText>
                    </Bloc>

                    <Image
                        src="/contact/map.png"
                        alt="Carte du complexe sportif Philippe Madrelle"
                        width={5000}
                        height={5000}
                    />
                </Parent>

            </Content>

        </PageLayout>
    )
}

export default Contact
