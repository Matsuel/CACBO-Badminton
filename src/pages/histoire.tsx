import HeroHistory from "@/assets/herohistoire.png";
import Book from "@/assets/book.svg";
import EFB from "@/assets/efb.png";
import Logo from "@/assets/cacbo.svg";
import Logo2 from "@/assets/cacbo2.svg";
import Omnisport from "@/assets/omnisport.svg";
import Image from "next/image";
import Img1 from "@/assets/histoire/1.png";
import Img2 from "@/assets/histoire/2.png";
import Img3 from "@/assets/histoire/3.png";
import Img4 from "@/assets/histoire/4.png";
import Img5 from "@/assets/histoire/5.png";
import Img6 from "@/assets/histoire/6.png";
import Img7 from "@/assets/histoire/7.png";
import CustomImage from "@/components/CustomImage";
import { SITE_CONFIG } from "@/constantes";
import Subtitle from "@/components/Subtitle";
import Emoji from "@/components/Emoji";
import PageLayout from "@/components/Page";


const Histoire = () => {

    const customImages = [
        { image: Img1, description: "La finale d’un tournoi opposant le club à celui de la Jeunesse Yvracaise (1/2)" },
        { image: Img2, description: "(2/2)" },
        { image: Img3, description: "Juillet 2013" },
        { image: Img4, description: "Septembre 2014" },
        { image: Img5, description: "L’un des nombreux cours de l’école de badminton du club (octobre 2017)" },
        { image: Img6, description: "Le gymnase lors de sa démolition (novembre 2019)" }
    ]

    return (
        <PageLayout
            title="Notre histoire"
            subtitle="Le chemin parcouru depuis 2007"
            icon={Book}
            background={HeroHistory}
            tabTitle={SITE_CONFIG.club}
        >

            <div className="w-[80%] h-auto mt-20 flex flex-col items-start justify-center gap-5 mb-[240px]">

                <Subtitle content="La naissance du club" />

                {/* Paragraph 1 */}
                <div
                    className="w-[53%] h-auto  bg-white rounded-ten p-[30px] font-Inter font-light text-[20px] relative">
                    Le CACBO Badminton voit le jour en 2007, grâce à l&apos;initiative de trois passionnés : Ahmed
                    Cassim, Laurent Thomas et Julien Larcher. Quelques années plus tard, le club s&apos;affilie à la
                    Fédération Française de Badminton (FFBaD) et décroche son premier label École Française de Badminton
                    (EFB) 1 étoile <Emoji name="star" width={20} /> lors de la saison 2013/14. Une distinction qu&apos;il conservera à 4 reprises lors
                    des saisons 2014/15, 2015/16, 2016/17 et 2017/18. <Emoji name="medal" width={20} />
                    <div
                        className="w-[105px] h-[105px] bg-white rounded-full flex justify-center items-center absolute bottom-[-50px] right-[-50px] drop-shadow-xl">
                        <Image src={EFB} alt="efb" />
                    </div>
                </div>

            </div>

            <div
                className="w-[75%] h-auto flex flex-col items-center justify-center bg-white rounded-ten p-[30px] mb-[170px] relative gap-[30px]">

                <div
                    className="w-[105px] h-[105px] bg-white rounded-full flex justify-center items-center absolute top-[-50px] left-[-50px] drop-shadow-xl">
                    <Image src={Logo} alt="efb" width={64} />
                </div>

                <p className="w-[100%] h-auto font-Inter font-light text-[20px] text-start indent-12">
                    En juillet 2018, la fermeture définitive du gymnase Gaston Lacoste, menacé d&apos;effondrement,
                    contraint le club à une mise en sommeil. Après sa démolition en novembre 2019, le club reste inactif
                    pendant près de 4 ans.
                </p>

                <div className="w-auto h-auto flex flex-row flex-wrap items-center justify-center gap-[30px]">

                    {customImages.map((customImage) => (
                        <CustomImage key={customImage.description} image={customImage.image} description={customImage.description} />
                    ))}


                </div>


            </div>

            <div className="w-[80%] h-auto mt-20 flex flex-col items-start justify-center gap-5 mb-[170px]">

                <Subtitle content="La renaissance de la section" />

                {/* Paragraph2  */}
                <div
                    className="w-[67%] h-auto flex flex-col items-center justify-center bg-white rounded-ten p-[30px] gap-[30px] font-Inter font-light text-[20px]">
                    Cependant, en septembre 2022, il renaît sous l&apos;impulsion de Laurent Thomas, l&apos;un de ses
                    fondateurs.
                    Aujourd&apos;hui, les membres évoluent dans le complexe sportif Philippe Madrelle, une salle moderne
                    de
                    1056 m² comptant 2 terrains supplémentaires (7 au total) et offrant un cadre idéal pour pratiquer
                    leur passion.

                    <CustomImage image={Img7} description={"La nouvelle salle du complexe remplaçant le précédent gymnase à la réouverture du club, en septembre 2022"} />
                </div>

            </div>


            <div className="w-[80%] h-auto mt-20 flex flex-col items-start justify-center gap-5 mb-[80px]">

                <Subtitle content="Et le CACBO dans tout ça ?" />

                {/* Paragraph2  */}
                <div
                    className="w-[100%] h-auto flex flex-row items-center justify-center bg-white rounded-ten p-[30px] gap-[30px]">

                    <div className="w-[81%] h-auto flex flex-col items-center justify-center gap-[30px]">


                        <p className="w-[100%] h-auto font-Inter font-light text-[20px] text-start">
                            Le Club Athlétique CarbonBlanais Omnisports (CACBO) est né le 25 mai 1972 d&apos;une initiative municipale visant à
                            regrouper et développer les activités sportives de la commune, qu&apos;elles soient de compétition ou de loisir.
                            Il résulte de la fusion entre le Club Athlétique CarbonBlanais (CACB), fondé le 1er octobre 1925 par Gaston Lacoste
                            (le club de football de la ville), et le Club Léo Lagrange, regroupant déjà plusieurs sections. Simon Cypel en devient le premier président.

                        </p>

                        <p className="w-[100%] h-auto font-Inter font-light text-[20px] text-start">
                            Le 10 décembre 1982, le CACBO obtient l&apos;agrément Jeunesse et Éducation Populaire (JEP), accordé par l&apos;État, renforçant ainsi son rôle d&apos;acteur clé dans le développement sportif et éducatif.
                        </p>

                        <p className="w-[100%] h-auto font-Inter font-light text-[20px] text-start">
                            En 2018, le CACBO regroupe 2 100 adhérents, 250 dirigeants élus et 16 salariés.
                            À ce jour, il comprend 16 sections sportives : aïkido, athlétisme, badminton, basketball, cyclotourisme, danse,
                            football, gym-aquagym, handball, judo-jujutsu, marche, musculation-fitness, ski, tennis, tennis de table et triathlon.
                            Le CACBO reste ainsi, depuis sa création, la première association de Carbon-Blanc.
                        </p>
                    </div>

                    <div className="w-[19%] h-auto flex flex-col items-center justify-center gap-[35px]">
                        <div className="w-[130px] h-[130px] bg-whitebroken rounded-full flex justify-center items-center">
                            <Image src={Logo2} alt="cacbo" width={95} />
                        </div>

                        <div className="w-[130px] h-[130px] bg-whitebroken rounded-full flex justify-center items-center">
                            <Image src={Omnisport} alt="cacbo" width={95} />
                        </div>
                    </div>
                </div>

            </div>

        </PageLayout>
    )
}

export default Histoire