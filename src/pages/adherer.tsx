import Title from "@/components/title";
import Navbar from "@/components/navbar";
import HeroAdherer from "@/assets/heroadherer.png";
import Rocket from "@/assets/rocket.svg";
import Hero from "@/components/hero";
import {SITE_CONFIG} from "@/constantes";
import Subtitle from "@/components/subtitle";

const Adherer = () => {
    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-whitebroken">
            <Title title={SITE_CONFIG.adherer + " - " + SITE_CONFIG.title}/>
            <Navbar/>

            <Hero
                background={HeroAdherer}
                title={SITE_CONFIG.adherer}
                subtitle={"Prêts à nous rejoindre ?"}
                icon={Rocket}
                description
            />

            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[90px]">
                <Subtitle content="Pourquoi nous rejoindre ?"/>

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px]">
                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

                        <p className=" font-Inter font-light text-xl">
                            En rejoignant notre club, vous intégrez une <strong className="font-medium">communauté
                            accueillante</strong> et
                            <strong className="font-medium"> dynamique, ouverte à tous les niveaux</strong> pratique.
                            Nous offrons un cadre chaleureux où l’ambiance familiale et
                            conviviale favorise à la fois le plaisir de jouer et la progression. Que vous soyez
                            compétiteur ou amateur, vous bénéficierez d&apos;<strong className="font-medium">infrastructures
                            modernes</strong>, de <strong className="font-medium">créneaux variés </strong>
                            adaptées à vos besoins, et d’un esprit sans prise de tête. 😎
                        </p>

                        <p className="bg-white font-Inter font-light text-xl">
                            De plus, nos <span className="underline">soirées régulières</span> 🎉 sont l&apos;occasion
                            idéale de renforcer les liens et de
                            <strong className="font-medium"> partager des moments de détente</strong> en dehors des
                            terrains. Ici, c’est avant tout le plaisir du
                            sport et du partage qui prime !
                        </p>

                    </div>

                    <div
                        className="w-[47%] h-auto flex flex-col items-start justify-start gap-[20px] p-[30px] ml-[20px]">

                        <h4 className="font-Montserrat font-medium text-[32px] px-[20px] py-[20px] border-1 border-redcolor rounded-ten bg-white">
                            Profitez de <strong className="font-semibold text-redcolor">3</strong> séances d&apos;essai
                            sans engagement avant de vous inscrire !

                        </h4>

                        <div
                            className="w-[100%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[20px] rounded-ten">

                            <h3 className="font-Montserrat font-semibold text-black text-[22px]">
                                Matériel et équipement à <span className="underline">prix préférentiels</span> ! 🏸👕
                            </h3>

                            <p className="font-Inter font-light text-xl">
                                En tant que membre, profitez de tarifs imbattables sur nos volants en plumes et
                                bénéficiez de <span className="underline">réductions</span> grâce à notre partenariat
                                avec <span className="font-medium">Intersport</span>. Le club propose
                                également des vêtements à nos couleurs – maillots, vestes, hauts, sweats... – à des prix
                                préférentiels pour nos adhérents ! 🤑
                            </p>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Adherer