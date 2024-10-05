import Navbar from "@/components/navbar";
import Image from "next/image";
import Gymnase from "@/assets/Gymnase.png";
import Logo from "@/assets/cacbo.svg";
import GPS from "@/assets/gps.svg";
import Button from "@/components/button";
import Groupe from "@/assets/photo groupe.png";
import Romain from "@/assets/Romain.png";
import Stephane from "@/assets/Stephane.png";
import Footer from "@/components/footer";
import Title from "@/components/title";
import {SITE_CONFIG} from "@/constantes";
import Subtitle from "@/components/subtitle";
import {Goto} from "@/assets/Goto";


export default function Home() {
    return (
        <div className={`w-full flex flex-col items-center min-h-screen bg-whitebroken`}>
            <Title title={SITE_CONFIG.title}/>
            <Navbar/>

            <div
                className="flex flex-col items-center justify-center w-[80%] h-auto mt-5 bg-cover bg-center rounded-ten"
                style={{backgroundImage: `url(${Gymnase.src})`}}>

                <div className="w-[100%] h-[485px] flex flex-row justify-center items-center">

                    <div className="w-[80%] h-full flex flex-col justify-evenly pl-28">
                        <h3 className="font-Shantell font-medium text-white text-4xl">Bienvenue !</h3>

                        <h2 className="font-Montserrat font-bold text-white text-8xl">CACBO Badminton</h2>

                        <div className="flex flex-col items-start justify-center gap-5">
                            <h3 className="font-Montserrat font-normal text-white text-3xl">Club de badminton
                                pour <strong>adultes</strong>, badistes depuis <strong>2007</strong></h3>

                            <div className="flex flex-row items-start justify-center gap-3">
                                <Image src={GPS} alt="gps" className="mt-1"/>
                                <h3 className="font-Shantell font-medium text-white text-3xl">
                                    Carbon-Blanc (33)
                                </h3>
                            </div>
                        </div>

                    </div>

                    <div className="w-[20%] h-full flex flex-col justify-start items-center pt-14">

                        <div className="w-40 h-40 bg-white rounded-full flex flex-row justify-center items-center">
                            <Image src={Logo} alt="cacbo" width={100}/>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-[39%] h-auto mt-28 mb-36 flex flex-col relative">
                <div
                    className="font-SourceSerifPro text-9xl text-white text-center absolute top-[-70px] left-[-30px] z-0">
                    «
                </div>
                <p className="w-[99%] font-Inter font-light tracking-tight italic text-xl text-wrap text-center relative z-10">
                    Un club où la <strong className="font-medium">passion</strong> du badminton se vit dans une
                    ambiance <strong className="font-medium">familiale</strong> et conviviale.
                    Que vous soyez débutant ou expert, jouez et progressez dans un cadre <strong
                    className="font-medium">chaleureux</strong>, sans prise de tête.
                </p>
                <div
                    className="font-SourceSerifPro text-9xl text-white text-center absolute bottom-[-40px] right-[140px] z-0">
                    »
                </div>
            </div>

            <div className="w-[80%] h-auto flex flex-col items-start justify-center gap-5">

                <Subtitle content="Qui sommes-nous ?"/>

                <div className="w-[100%] h-auto flex flex-row items-start justify-center gap-32">

                    {/* Texte gauche */}
                    <div
                        className="w-[40%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten p-5">

                        <p className="font-Inter tracking-tight font-light text-xl text-start">
                            Créé en 2007 à Carbon-Blanc, notre club réunit des passionnés de badminton de tous niveaux.
                            Ici, l&apos;ambiance est familiale et conviviale, <strong className="font-medium">propice à
                            la détente</strong> et au partage.
                            Que vous soyez compétiteur ou simplement en quête de loisirs, vous trouverez chez nous un
                            cadre chaleureux pour <strong className="font-medium">pratiquer sans pression</strong>.
                            Envie d&apos;en savoir plus ?
                        </p>

                        <div className="w-[100%] h-auto flex flex-row items-center justify-end">
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
                        className="w-[50%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten">

                        <Image src={Groupe} alt="groupe"/>

                        <p className="w-[60%] font-Inter font-light text-base text-center">
                            Nous organisons régulièrement des soirées, améliorant la cohésion entre nos membres (mars
                            2024)
                        </p>

                    </div>

                </div>

            </div>

            <div
                className="w-[80%] h-auto flex flex-row items-start justify-center gap-5 mt-40 bg-white border-1 border-redcolor rounded-ten p-8">

                <div className="w-[50%] h-auto flex flex-col items-start justify-center gap-5">
                    <div className="w-[100%] h-auto flex flex-col items-start justify-center gap-0">

                        <h3 className="font-Montserrat font-bold text-[40px]">Qu’est-ce que t’attends ?</h3>
                        <h4 className="flex flex-row items-center gap-4 font-Montserrat font-medium text-4xl text-redcolor italic">Rejoins-nous
                            ! <span className="not-italic">😉</span></h4>

                    </div>

                    <p className="w-[70%] font-Inter font-normal text-xl">
                        Fais partie de l’aventure : rejoins une équipe où convivialité rime avec passion.
                    </p>

                </div>

                <div className="w-[50%] h-[210px] flex flex-row items-start justify-center gap-16">

                    <div className="w-[40%] h-full flex flex-row justify-center relative">
                        <Image src={Romain} alt="romain" className="absolute bottom-[-30px] left-0" />
                        <Image src={Stephane} alt="stephane" className="absolute bottom-[-30px] ml-[8rem]"/>

                    </div>

                    <div className="w-[60%] h-full flex items-center justify-center">
                        <Button
                            href="/contact"
                            variant="inverted"
                            rowReverse
                            white
                            icon={Goto}
                        >
                            JE M&apos;INSCRIS
                        </Button>
                    </div>


                </div>

            </div>

            <Footer/>

        </div>
    );
}
