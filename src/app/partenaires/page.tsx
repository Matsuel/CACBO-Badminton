import Bloc from "@/components/Bloc";
import BlocText from "@/components/BlocText";
import Content from "@/components/Content";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import Partenaire from "@/components/Partenaire";
import { partenaires } from "@/constantes/partenaires";
import Image from "next/image";

const Partenaires = () => {

    return (
        <PageLayout>

            <Header
                title="PARTENAIRES"
                subtitle="Ils nous soutiennent pour faire grandir notre club !"
            />

            <Content>
                <Image
                    src="/partenaires/1.png"
                    alt="Photo devant une table remplit de volants"
                    className="w-full h-auto rounded-xl"
                    width={2000}
                    height={2000}
                />

                <Bloc>
                    <BlocText>
                        Nos partenaires jouent un rôle clé dans la vie de notre club. Grâce à leur soutien, nous pouvons offrir à nos membres les meilleures conditions pour pratiquer le badminton. Découvrez ceux qui nous accompagnent dans cette belle aventure !
                    </BlocText>
                </Bloc>

                <div className='w-full h-auto flex flex-col md:flex-row flex-wrap items-start justify-start gap-5'>

                    {partenaires.map(partenaire => (
                        <Partenaire
                            key={partenaire.name}
                            name={partenaire.name}
                            role={partenaire.role}
                            image={partenaire.image}
                        />
                    ))}

                </div>
            </Content>

        </PageLayout>
    );
};

export default Partenaires;
