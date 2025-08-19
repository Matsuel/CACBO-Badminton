import Book from "@/assets/book.svg";
import EFB from "@/assets/efb.png";
import Logo from "@/assets/cacbo.svg";
import Logo2 from "@/assets/cacbo2.svg";
import Omnisport from "@/assets/omnisport.svg";
import Image from "next/image";
import Emoji from "@/components/UI/Emoji";
import PageLayout from "@/components/Page";
import Paragraphe from "@/components/UI/Paragraphe";
import Badge from "@/components/UI/Badge";
import ImageLegend from "@/components/UI/ImageLegend";
import { customImages } from "@/constantes/histoire";
import Bloc from "@/components/Bloc";
import BlocInfos from "@/components/Bloc/BlocInfos";


const Histoire = () => {

    return (
        <PageLayout
            title="Notre histoire"
            subtitle="Le chemin parcouru depuis 2007"
            icon={Book}
        >

            <Bloc title="La naissance du club" className="mt-0">
                <BlocInfos className="lg:w-[53%] h-auto relative">
                    <Paragraphe className="w-full h-auto">
                        Le CACBO Badminton voit le jour en 2007, grâce à l&apos;initiative de trois passionnés : Ahmed
                        Cassim, Laurent Thomas et Julien Larcher. Quelques années plus tard, le club s&apos;affilie à la
                        Fédération Française de Badminton (FFBaD) et décroche son premier label École Française de Badminton
                        (EFB) 1 étoile <Emoji name="star" width={20} /> lors de la saison 2013/14. Une distinction qu&apos;il conservera à 4 reprises lors
                        des saisons 2014/15, 2015/16, 2016/17 et 2017/18. <Emoji name="medal" width={20} />
                    </Paragraphe>

                    <Badge image={EFB} className="bottom-[-50px] right-[-50px]" width={45} />
                </BlocInfos>
            </Bloc>

            <Bloc title="">
                <div />
                <div
                    className="md:w-[94%] w-[90%] h-auto flex flex-col items-center justify-center bg-white rounded-ten p-[30px] md:mb-[170px] mt-20 mb-[50px] relative gap-30">

                    <Badge image={Logo} className="top-[-50px] left-[-50px]" />

                    <Paragraphe className="w-full md:indent-12 indent-0">
                        En juillet 2018, la fermeture définitive du gymnase Gaston Lacoste, menacé d&apos;effondrement,
                        contraint le club à une mise en sommeil. Après sa démolition en novembre 2019, le club reste inactif
                        pendant près de 4 ans.
                    </Paragraphe>

                    <div className="w-full h-auto flex flex-row flex-wrap items-center justify-center gap-30">

                        {customImages.map((customImage) => (
                            <ImageLegend
                                key={customImage.description}
                                image={customImage.image}
                                description={customImage.description}
                                className="w-[45%]! h-auto"
                                imageClassName="h-auto"
                                descriptionClassName="w-auto!"
                            />
                        ))}


                    </div>


                </div>
            </Bloc>

            <Bloc title="La renaissance de la section">
                <BlocInfos className="lg:w-[67%] h-auto gap-30">
                    <Paragraphe>
                        Cependant, en septembre 2022, il renaît sous l&apos;impulsion de Laurent Thomas, l&apos;un de ses
                        fondateurs.
                        Aujourd&apos;hui, les membres évoluent dans le complexe sportif Philippe Madrelle, une salle moderne
                        de
                        1056 m² comptant 2 terrains supplémentaires (7 au total) et offrant un cadre idéal pour pratiquer
                        leur passion.
                    </Paragraphe>

                    <ImageLegend image={"/histoire/7.png"} description={"La nouvelle salle du complexe remplaçant le précédent gymnase à la réouverture du club, en septembre 2022"} />

                </BlocInfos>

            </Bloc>

            <Bloc title="Et le CACBO dans tout ça ?">

                <BlocInfos className="lg:w-full lg:flex-row flex-col items-center">
                    <div className="lg:w-4/5 w-full h-auto flex flex-col items-center justify-center lg:gap-30 gap-5">

                        <Paragraphe>
                            Le Club Athlétique CarbonBlanais Omnisports (CACBO) est né le 25 mai 1972 d&apos;une initiative municipale visant à
                            regrouper et développer les activités sportives de la commune, qu&apos;elles soient de compétition ou de loisir.
                            Il résulte de la fusion entre le Club Athlétique CarbonBlanais (CACB), fondé le 1er octobre 1925 par Gaston Lacoste
                            (le club de football de la ville), et le Club Léo Lagrange, regroupant déjà plusieurs sections. Simon Cypel en devient le premier président.
                        </Paragraphe>

                        <Paragraphe>
                            Le 10 décembre 1982, le CACBO obtient l&apos;agrément Jeunesse et Éducation Populaire (JEP), accordé par l&apos;État, renforçant ainsi son rôle d&apos;acteur clé dans le développement sportif et éducatif.
                        </Paragraphe>

                        <Paragraphe>
                            En 2018, le CACBO regroupe 2 100 adhérents, 250 dirigeants élus et 16 salariés. À ce jour, il comprend 17 sections sportives : aïkido, athlétisme, badminton, basketball, boccia, cyclotourisme, danse, football, gym-aquagym, handball, judo-jujutsu, marche, musculation-fitness, ski, tennis, tennis de table et triathlon. Le CACBO reste ainsi, depuis sa création, la première association de Carbon-Blanc.
                        </Paragraphe>
                    </div>

                    <div className="lg:w-1/5 w-full h-auto flex lg:flex-col flex-row items-center lg:justify-center justify-around lg:gap-[35px] mb-0">
                        <div className="w-[130px] h-[130px] bg-whitebroken rounded-full flex justify-center items-center">
                            <Image src={Logo2} alt="cacbo" width={95} />
                        </div>

                        <div className="w-[130px] h-[130px] bg-whitebroken rounded-full flex justify-center items-center">
                            <Image src={Omnisport} alt="cacbo" width={95} />
                        </div>
                    </div>
                </BlocInfos>
            </Bloc>

        </PageLayout>
    )
}

export default Histoire