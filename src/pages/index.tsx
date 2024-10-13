import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@/components/Button";
import Groupe from "@/assets/photo groupe.png";
import Romain from "@/assets/Romain.png";
import Stephane from "@/assets/Stephane.png";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import { SITE_CONFIG } from "@/constantes";
import Subtitle from "@/components/Subtitle";
import { Goto } from "@/assets/Goto";
import Emoji from "@/components/Emoji";
import Paragraphe from "@/components/Paragraphe";
import ImageLegend from "@/components/ImageLegend";
import GPS from "@/assets/gps.svg";
import Gymnase from "@/assets/Gymnase.png";
import Logo from "@/assets/cacbo.svg";


export default function Home() {
    return (
        <div className={`w-full flex flex-col items-center min-h-screen bg-whitebroken`}>
            <Title title={SITE_CONFIG.title} />
            <Navbar />

            <div
                className="flex flex-col items-center justify-center md:w-[80%] w-[90%] h-auto md:mt-3 mt-10 bg-cover bg-center rounded-ten"
                style={{ backgroundImage: `url(${Gymnase.src})` }}>

                <div className="w-[100%] h-[485px] flex flex-row justify-center items-center">

                    <div className="md:w-[80%] w-[90%] h-full flex flex-col justify-center gap-7 2xl:pl-28 xl:pl-20 lg:pl-16 md:pl-10 pl-5">
                        <h3 className="font-Shantell font-medium text-white 2xl:text-4xl xl:text-[32px] lg:text-[28px] text-2xl ">Bienvenue !</h3>

                        <h2 className="font-Montserrat font-bold text-white 2xl:text-8xl xl:text-[88px] lg:text-[80px] text-[72px]">CACBO Badminton</h2>

                        <div className="flex flex-col items-start justify-center lg:gap-3 md:gap-2">
                            <h3 className="font-Inter font-normal text-white 2xl:text-3xl xl:text-[24px] lg:text-[20px] text-[18px]">Club de badminton
                                pour <strong>adultes</strong>, badistes depuis <strong>2007</strong></h3>

                            <div className="flex flex-row items-start justify-center gap-3">
                                <Image src={GPS} alt="gps" className="mt-1" />
                                <h3 className="font-Shantell font-medium text-white 2xl:text-3xl xl:text-[24px] lg:text-[20px] text-[18px]">
                                    Carbon-Blanc (33)
                                </h3>
                            </div>
                        </div>

                    </div>

                    <div className="w-[20%] h-full flex flex-col justify-start items-center pt-14">

                        <div className="md:w-40 md:h-40 h-[100px] w-[100px] bg-white rounded-full sm:flex hidden flex-row justify-center items-center">
                            <Image src={Logo} alt="cacbo" className="md:w-[100px] w-[60px]" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="xl:w-[39%] lg:w-[60%] md:w-[80%] w-[90%] h-auto mt-10 mb-36 flex flex-col relative">
                <div
                    className="font-SourceSerifPro text-9xl text-white text-center absolute top-[-65px] left-[-30px] z-0">
                    «
                </div>
                <p className="w-[85%] font-Inter font-light tracking-wide leading-10 line italic text-xl text-wrap text-center relative z-10">
                    Un club où la <strong className="font-medium">passion</strong> du badminton se vit dans une
                    ambiance <strong className="font-medium">familiale</strong> et conviviale.
                    Que vous soyez débutant ou expert, jouez et progressez dans un cadre <strong className="font-medium">chaleureux</strong>, sans prise de tête.
                </p>
                <div
                    className="font-SourceSerifPro text-9xl text-white text-center absolute bottom-[-35px] right-[100px] z-0">
                    »
                </div>
            </div>

            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-center gap-5">

                <Subtitle content="Qui sommes-nous ?" className="ml-4" />

                <div className="w-[100%] h-auto flex flex-row flex-wrap items-start justify-center gap-32">

                    {/* Texte gauche */}
                    <div
                        className="2xl:w-[40%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten p-5">

                        <Paragraphe className="tracking-wide">
                            Créé en 2007 à Carbon-Blanc, notre club réunit des passionnés de badminton de tous niveaux.
                            Ici, l&apos;ambiance est familiale et conviviale, <strong className="font-medium">propice à
                                la détente</strong> et au partage.
                            Que vous soyez compétiteur ou simplement en quête de loisirs, vous trouverez chez nous un
                            cadre chaleureux pour <strong className="font-medium">pratiquer sans pression</strong>.
                            Envie d&apos;en savoir plus ?
                        </Paragraphe>

                        <div className="w-[100%] h-auto flex flex-row items-center justify-end lg:mt-3 md:mt-5">
                            <Button
                                variant="inverted"
                                href="/about"
                                icon={Goto}
                                rowReverse
                                white
                            >
                                DECOUVRIR NOTRE HISTOIRE
                            </Button>
                        </div>

                    </div>

                    {/* Image droite */}
                    <div
                        className="2xl:w-[50%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten">

                        <ImageLegend
                            image={Groupe}
                            description={"Nous organisons régulièrement des soirées, améliorant la cohésion entre nos membres (mars 2024)"}
                            descriptionClassName="2xl:w-[60%] w-[90%] leading-5 text-base mb-3"
                        />

                    </div>

                </div>

            </div>

            <div
                className="w-[80%] h-auto flex 2xl:flex-row flex-col items-start justify-center 2xl:gap-5 md:gap-28 gap-72 mt-40 bg-white border-1 border-redcolor rounded-ten p-5">

                <div className="2xl:w-[50%] w-full h-auto flex flex-col items-start justify-center gap-[50px]">
                    <div className="w-[100%] h-auto flex flex-col items-start justify-center gap-0">

                        <h3 className="font-Montserrat font-bold xl:text-[40px] md:text-[36px] sm:text-3xl text-[26px]">Qu’est-ce que t’attends ?</h3>
                        <h4 className="flex flex-row items-center gap-4 font-Montserrat font-medium xl:text-4xl md:text-[32px] sm:text-[28px] text-2xl text-redcolor italic">Rejoins-nous ! <Emoji name="wink" width={36} /></h4>

                    </div>

                    <Paragraphe className="2xl:w-[70%] w-full font-normal tracking-wide">
                        Fais partie de l&apos;aventure : rejoins une équipe où convivialité rime avec passion.
                    </Paragraphe>

                </div>

                <div className="2xl:w-[50%] w-full h-[170px] flex md:flex-row flex-col items-start justify-center gap-16">

                    <div className="md:w-[40%] w-full h-full flex flex-row justify-center relative">
                        <Image src={Romain} alt="romain" className="absolute 2xl:bottom-[-70px] bottom-[-50px] left-0" />
                        <Image src={Stephane} alt="stephane" className="absolute 2xl:bottom-[-70px] bottom-[-50px] ml-[8rem]" />

                    </div>

                    <div className="md:w-[60%] w-full h-full flex items-center justify-center md:mt-0 mt-16">
                        <Button
                            href="/contact"
                            variant="inverted"
                            rowReverse
                            white
                            icon={Goto}
                            className="px-[1.5rem] py-[0.75rem] text-[32px]"
                        >
                            JE M&apos;INSCRIS
                        </Button>
                    </div>


                </div>

            </div>

            <Footer />

        </div>
    );
}
