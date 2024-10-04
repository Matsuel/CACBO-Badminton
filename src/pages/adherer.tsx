import Title from "@/components/title";
import Navbar from "@/components/navbar";
import HeroAdherer from "@/assets/heroadherer.png";
import Rocket from "@/assets/rocket.svg";
import Hero from "@/components/hero";
import Goto from "@/assets/goto.svg";
import {SITE_CONFIG} from "@/constantes";
import Subtitle from "@/components/subtitle";
import Button from "@/components/button";
import Image from "next/image";

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

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[30px]">
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
                        className="w-[47%] h-auto flex flex-col items-start justify-start gap-[20px]">

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

            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="Comment ?"/>

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[30px]">

                    {/* Partie Gauche */}
                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[15px] bg-white rounded-ten p-[30px]">
                        <h3 className="font-Montserrat font-semibold text-black text-[22px]">
                            <span className="underline">Documents nécessaires</span> : préparez votre dossier 📋
                        </h3>

                        <p className="w-[90%] font-Inter font-light text-xl">
                            Pour valider votre inscription, nous aurons besoin de quelques documents indispensables :
                        </p>

                        <p className="font-Inter font-light text-xl">
                            - <strong className="font-medium">Formulaire d’inscription</strong> : à remplir pour nous
                            transmettre vos informations essentielles.
                        </p>

                        <p className="w-[97%] font-Inter font-light text-xl">
                            - <strong className="font-medium">Questionnaire de santé</strong> : à compléter pour évaluer
                            votre condition physique.
                            <span
                                className="text-redcolor"> Si vous répondez positivement à une ou plusieurs questions</span>,
                            un <strong className="font-medium">certificat
                            médical</strong> daté de moins de 6 mois <strong className="underline">sera
                            requis</strong> .
                        </p>

                        <p className="w-[98%] font-Inter font-light text-xl">
                            Ces documents sont essentiels pour garantir la sécurité de tous nos adhérents et assurer une
                            pratique du badminton en toute sérénité. Pensez à les préparer pour faciliter votre
                            inscription
                            !
                        </p>
                    </div>

                    {/* Partie Droite */}
                    <div className="w-[47%] h-auto flex flex-col items-start justify-start gap-[15px] mt-[20px]">

                        <div
                            className="w-[100%] h-auto flex flex-col items-start justify-start p-[20px] rounded-ten bg-white border-1 border-redcolor">
                            <h4 className="font-Montserrat font-semibold text-[24px]">
                                Adhésion simplifiée : <span className="underline">inscrivez-vous en ligne</span> ! 🌐
                            </h4>

                            <p className="w-[90%] font-Inter font-light text-[20px] mb-3">
                                Inscrivez-vous facilement en ligne grâce à HelloAsso ! Évitez l’impression des documents
                                :
                                remplissez le formulaire et réglez votre cotisation directement sur la plateforme, en
                                toute
                                simplicité.
                            </p>

                            <Button href="/inscription" >
                                S&apos;inscrire en ligne
                                <Image src={Goto} alt="goto" className="ml-2"/>
                            </Button>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Adherer