import Title from "@/components/title";
import Navbar from "@/components/navbar";
import HeroAdherer from "@/assets/heroadherer.png";
import Rocket from "@/assets/rocket.svg";
import Hero from "@/components/hero";
import {Goto} from "@/assets/Goto";
import {SITE_CONFIG} from "@/constantes";
import Subtitle from "@/components/subtitle";
import Button from "@/components/button";
import Image from "next/image";
import Map from "@/assets/map.png"
import Documents from "@/components/documents";
import ListElement from "@/components/listElement";
import ListTitle from "@/components/listTitle";
import Creaneau from "@/components/Creaneau";
import Footer from "@/components/footer";

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

            {/* Comment ? */}
            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="Comment ?"/>

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[30px]">

                    {/* Partie Gauche */}
                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[15px] bg-white rounded-ten p-[30px]">
                        <h3 className="font-Montserrat font-semibold text-black text-[22px]">
                            <span className="underline">Documents nécessaires</span> : préparez votre dossier 📋
                        </h3>

                        <ListTitle>Pour valider votre inscription, nous aurons besoin de quelques documents
                            indispensables :</ListTitle>

                        <ListElement><strong className="font-medium">Formulaire d’inscription</strong> : à remplir pour
                            nous transmettre vos informations essentielles.</ListElement>
                        <ListElement><strong className="font-medium">Questionnaire de santé</strong> : à compléter pour
                            évaluer
                            votre condition physique.
                            <span
                                className="text-redcolor"> &nbsp; Si vous répondez positivement à une ou plusieurs questions</span>,
                            un <strong className="font-medium">certificat
                                médical</strong> daté de moins de 6 mois <strong className="underline">sera
                                requis</strong> .
                        </ListElement>

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
                            className="w-[100%] h-auto flex flex-col items-start justify-start p-[20px] rounded-ten bg-white border-1 border-redcolor gap-[15px]">
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

                            <Button
                                href="/inscription"
                                rowReverse
                                white
                                icon={Goto}
                            >
                                S&apos;INSCRIRE EN LIGNE
                            </Button>
                        </div>

                        <div
                            className="w-[100%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">
                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-[20px]">
                                {/*<Subtitle content={"Fichiers à télécharger "}/>*/}
                                <h3 className="font-Montserrat font-semibold text-black text-2xl">
                                    Fichiers à télécharger
                                    <span className="font-light"> (si inscription papier) :</span>
                                </h3>
                            </div>

                            <div className="w-auto h-auto flex flex-row items-start justify-start gap-[30px]">

                                <Documents content={"Formulaire d’inscription"} href={"/"}/>

                                <Documents content={"Questionnaire de santé"} href={"/"}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Où et à quelle heure ? */}
            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="Où et à quelle heure ?"/>

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[30px]">
                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[5px] bg-white rounded-ten p-[30px]">

                        <p className="font-Montserrat font-light text-black text-xl mb-[15px]">
                            Nous nous situons au <span className="underline">Complexe sportif Philippe Madrelle</span>,
                            à
                            Carbon-Blanc
                            (24 rue Pasteur). 📍
                        </p>

                        <h3 className="font-Montserrat font-semibold text-black text-[24px]">
                            Voies d’accès :
                        </h3>

                        <ListTitle>🚋 <span className="underline">En tram</span> :</ListTitle>
                        <ListElement>Ligne A du tram de Bordeaux Métropole</ListElement>
                        <ListElement>Arrêt la Gardette (puis 10-15 min de marche)</ListElement>


                        <ListTitle>🚌 <span className="underline">En bus</span> :</ListTitle>
                        <ListElement>Ligne 90 (TBM) : Arrêt Pasteur à proximité du complexe</ListElement>
                        <ListElement>Ligne 7 (TBM) : Arrêt La Gardette (10-15 minutes à pied)</ListElement>


                        <ListTitle>🚗 <span className="underline">En voiture</span> :</ListTitle>
                        <ListElement>Depuis le centre de Bordeaux, prenez la N230, puis la sortie 26 vers
                            Carbon-Blanc</ListElement>
                        <ListElement>Suivez la D10 jusqu&apos;à la Rue Pasteur</ListElement>

                    </div>

                    {/* Partie Droite */}
                    <div className="w-[47%] h-auto flex flex-col items-start justify-start gap-[15px] mt-[20px]">

                        <div
                            className="w-[100%] h-auto flex flex-col items-start justify-start p-[20px] rounded-ten bg-white border-1 border-redcolor gap-[15px]">
                            <h4 className="font-Montserrat font-semibold text-[24px]">
                                <span className="underline">Créneaux flexibles</span> : jouez quand vous voulez ! ⏰
                            </h4>

                            <Creaneau><span className="font-normal">lundi</span> → 21ᴴ - 23ᴴ</Creaneau>
                            <Creaneau><span className="font-normal">mardi</span> → 18ᴴ - 21ᴴ</Creaneau>
                            <Creaneau><span className="font-normal">vendredi</span> → 18ᴴ30 - 21ᴴ</Creaneau>

                        </div>

                        <div
                            className="w-[100%] h-auto flex items-start justify-start bg-white p-[30px] rounded-ten">

                            <Image src={Map} alt="Position gymnase"/>

                        </div>
                    </div>

                </div>
            </div>

            {/*à quel prix ?*/}
            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="À quel prix ?"/>

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[30px]">

                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

                        <h4 className="font-Montserrat font-semibold text-[24px]">
                            <span className="underline">Tarifs avantageux</span> : adhérez à prix réduits ! 💶
                        </h4>

                        <ListTitle>Nous vous proposons deux formules adaptées à vos besoins :</ListTitle>

                        <ListElement> <span className="font-medium">Formule adulte</span> : <span
                            className="text-redcolor">50 €</span> par personne.</ListElement>
                        <ListElement> <span className="font-medium">Formule couple</span> : <span
                            className="text-redcolor">90 €</span> pour 2 personnes, idéale pour venir jouer à deux, que
                            vous soyez en couple ou simplement entre amis.</ListElement>


                    </div>

                    <div className="w-[47%] h-auto flex flex-col items-start justify-start gap-[20px]">

                        <div
                            className="w-[100%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">
                            <h4 className="font-Montserrat font-semibold text-[24px]">
                                Comment offrons-nous des prix aussi bas ? 🤑
                            </h4>

                            <p className="w-[92%] font-Inter font-light text-xl">
                                Nos tarifs sont particulièrement attractifs car notre club n&apos;est pas affilié à la
                                Fédération Française de Badminton (FFBaD). Cela signifie que <span
                                className="font-medium">vous ne payez que la
                                cotisation au club</span>, sans les coûts additionnels pour la licence fédérale, ni les
                                contributions à la Ligue et au Comité départemental. Profitez d&apos;une adhésion simple
                                et
                                accessible, pour jouer en toute liberté, à un prix imbattable ! 💸
                            </p>


                        </div>

                    </div>


                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Adherer


// Component
// - SEction (w-80 etc, vu que chaque section a 3 éléments, prendre en arguments les childrens pour chaque section)
//     - Titre
//     - Image avec description
//     - Informations (case avec bordures rouges qui prend des childrens)
//     - Bouton avec lien