import type { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import Bloc from "@/components/Bloc"
import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import Banner from "@/components/Banner";
import Text, { textStyles } from "@/components/Text";
import Adresse from "@/components/Adresse";
import Creneaux from "@/components/Creneaux";
import SocialLinks from "@/components/SocialLinks";
import { club } from "@/constantes/club";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
	title: "Nous contacter",
};

const Contact = () => {

    return (
        <PageLayout>

            <Header
                title="NOUS CONTACTER"
                subtitle="Besoin d’infos ? Nous sommes à votre écoute !"
            />

            <Banner src="/contact/1.png" alt="Photo devant une table avec des raquettes" />

            <Content>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Vous pouvez nous joindre
                    </Text>

                    <Bloc>
                        <Text variant="h4">
                            Par téléphone
                        </Text>

                        <Link href={club.telephone.lien} className={textStyles()}>
                            {club.telephone.affichage}
                        </Link>

                        <Text variant="h4">
                            Par mail
                        </Text>

                        <Link href={`mailto:${club.mail}`} className={textStyles()}>
                            {club.mail}
                        </Link>
                    </Bloc>

                    <Bloc>
                        <Text variant="h3">
                            Nos réseaux sociaux
                        </Text>

                        <SocialLinks
                            only={["Facebook", "Instagram", "Messenger"]}
                            linkClassName="w-7.5 h-7.5 text-rouge hover:text-rouge-pale"
                        />
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Où nous rejoindre 👇
                    </Text>

                    <Bloc variant="outline">
                        <Adresse className={cn(textStyles(), "gap-2")}lieuClassName={textStyles({ variant: "h4" })} />
                    </Bloc>

                    <Image
                        src="/contact/map.png"
                        alt="Carte du complexe sportif Philippe Madrelle"
                        width={5000}
                        height={5000}
                    />

                    <Bloc subtitle="Nos créneaux">
                        <Creneaux variant="pastilles" />
                    </Bloc>
                </Parent>

            </Content>

        </PageLayout>
    )
}

export default Contact
