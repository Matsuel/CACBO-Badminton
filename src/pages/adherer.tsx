import HeroAdherer from "@/assets/heroadherer.png";
import Rocket from "@/assets/rocket.svg";
import { Goto } from "@/assets/Goto";
import { SITE_CONFIG } from "@/constantes";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import Documents from "@/components/Document";
import ListElement from "@/components/ListElement";
import ListTitle from "@/components/ListTitle";
import Creaneau from "@/components/Creneau";
import Emoji from "@/components/Emoji";
import PageLayout from "@/components/Page";
import Map from "@/components/Map";
import Paragraphe from "@/components/Paragraphe";

const Adherer = () => {
    return (
        <PageLayout
            title={SITE_CONFIG.adherer}
            subtitle="Prêts à nous rejoindre ?"
            icon={Rocket}
            background={HeroAdherer}
            tabTitle="Adhérer"
        >

            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[90px]">
                <Subtitle content="Pourquoi nous rejoindre ?" />

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[30px]">
                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[30px] rounded-ten">

                        <Paragraphe>
                            En rejoignant notre club, vous intégrez une <strong className="font-medium">communauté
                                accueillante</strong> et <strong className="font-medium"> dynamique, ouverte à tous les niveaux</strong> pratique.
                            Nous offrons un cadre chaleureux où l’ambiance familiale et
                            conviviale favorise à la fois le plaisir de jouer et la progression. Que vous soyez
                            compétiteur ou amateur, vous bénéficierez d&apos;<strong className="font-medium">infrastructures
                                modernes</strong>, de <strong className="font-medium">créneaux variés </strong>
                            adaptées à vos besoins, et d’un esprit sans prise de tête. <Emoji name="sunglasses" width={20} />
                        </Paragraphe>

                        <Paragraphe>
                            De plus, nos <span className="underline">soirées régulières</span> <Emoji name="party" width={20} /> sont l&apos;occasion
                            idéale de renforcer les liens et de <strong className="font-medium"> partager des moments de détente</strong> en dehors des
                            terrains. Ici, c’est avant tout le plaisir du sport et du partage qui prime !
                        </Paragraphe>

                    </div>

                    <div className="w-[47%] h-auto flex flex-col items-start justify-start gap-[30px]">

                        <Subtitle className="px-[20px] py-[20px] border-1 border-redcolor rounded-ten bg-white leading-10 !font-medium">
                            Profitez de <strong className="font-semibold text-redcolor">3</strong> séances d&apos;essai
                            sans engagement avant de vous inscrire !
                        </Subtitle>

                        <div
                            className="w-[100%] h-auto flex flex-col items-start justify-start gap-[20px] bg-white p-[20px] rounded-ten">

                            <Subtitle className="text-[22px]">
                                Matériel et équipement à <span className="underline">prix préférentiels</span> ! <Emoji name="badminton" width={22} /> <Emoji name="tshirt" width={22} />
                            </Subtitle>

                            <Paragraphe>
                                En tant que membre, profitez de tarifs imbattables sur nos volants en plumes et
                                bénéficiez de <span className="underline">réductions</span> grâce à notre partenariat
                                avec <span className="font-medium italic">Intersport</span>. Le club propose
                                également des vêtements à nos couleurs – maillots, vestes, hauts, sweats... – à des prix
                                préférentiels pour nos adhérents ! <Emoji name="moneymouth" width={20} />
                            </Paragraphe>

                        </div>
                    </div>
                </div>

            </div>

            {/* Comment ? */}
            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="Comment ?" />

                <div className="w-[100%] h-auto flex flex-row items-start justify-start gap-[30px]">

                    {/* Partie Gauche */}
                    <div
                        className="w-[53%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[10px] bg-white rounded-ten p-[30px]">

                        <Subtitle className="text-[22px]">
                            <span className="underline">Documents nécessaires</span> : préparez votre dossier <Emoji name="clipboard" width={22} />
                        </Subtitle>

                        <ListTitle>Pour valider votre inscription, nous aurons besoin de quelques documents
                            indispensables :</ListTitle>

                        <ListElement><strong className="font-medium">Formulaire d’inscription</strong> : à remplir pour
                            nous transmettre vos informations essentielles.</ListElement>
                        <ListElement><strong className="font-medium">Questionnaire de santé</strong> : à compléter pour
                            évaluer
                            votre condition physique. <span className="text-redcolor"> &nbsp; Si vous répondez positivement à une ou plusieurs questions</span>,
                            un <strong className="font-medium">certificat médical</strong> daté de moins de 6 mois <strong className="underline">sera requis</strong> .
                        </ListElement>

                        <Paragraphe className="w-[98%]">
                            Ces documents sont essentiels pour garantir la sécurité de tous nos adhérents et assurer une
                            pratique du badminton en toute sérénité. Pensez à les préparer pour faciliter votre
                            inscription !
                        </Paragraphe>
                    </div>

                    {/* Partie Droite */}
                    <div className="w-[47%] h-auto flex flex-col items-start justify-start gap-[30px] mt-[20px]">

                        <div className="w-[100%] h-auto flex flex-col items-start justify-start p-[20px] rounded-ten bg-white border-1 border-redcolor gap-[15px]">

                            <Subtitle className="text-[24px]">
                                Adhésion simplifiée : <span className="underline">inscrivez-vous en ligne</span> ! <Emoji name="globmeridian" width={24} />
                            </Subtitle>

                            <Paragraphe className="w-[90%]">
                                Inscrivez-vous facilement en ligne grâce à HelloAsso ! Évitez l&apos;impression des documents:
                                remplissez le formulaire et réglez votre cotisation directement sur la plateforme, en
                                toute
                                simplicité.
                            </Paragraphe>

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
                                <Subtitle className="!text-2xl">
                                    Fichiers à télécharger <span className="font-light"> (si inscription papier) :</span>
                                </Subtitle>
                            </div>

                            <div className="w-auto h-auto flex flex-row items-start justify-start gap-[30px]">

                                <Documents content={"Formulaire d’inscription"} href={"/"} />

                                <Documents content={"Questionnaire de santé"} href={"/"} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Où et à quelle heure ? */}
            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="Où et à quelle heure ?" />

                <div className="w-[100%] h-auto flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[53%] h-auto flex flex-col items-start justify-start mt-[20px] gap-[5px] bg-white rounded-ten p-[30px]">

                        <Paragraphe>
                            Nous nous situons au <span className="underline">Complexe sportif Philippe Madrelle</span>,
                            à Carbon-Blanc (24 rue Pasteur). <Emoji name="pin" width={20} />
                        </Paragraphe>

                        <Subtitle className="text-[24px]">
                            Voies d&apos;accès :
                        </Subtitle>

                        <ListTitle><Emoji name="tram" width={24} /> <span className="underline">En tram</span> :</ListTitle>
                        <ListElement>Ligne A du tram de Bordeaux Métropole</ListElement>
                        <ListElement>Arrêt <span className="italic">La Gardette</span> (puis 10-15 min de marche)</ListElement>


                        <ListTitle><Emoji name="bus" width={24} /> <span className="underline">En bus</span> :</ListTitle>
                        <ListElement>Ligne 90 (TBM) : Arrêt <span className="italic">Pasteur</span> à proximité du complexe</ListElement>
                        <ListElement>Ligne 7 (TBM) : Arrêt <span className="italic">La Gardette</span> (10-15 minutes à pied)</ListElement>


                        <ListTitle><Emoji name="car" width={24} /> <span className="underline">En voiture</span> :</ListTitle>
                        <ListElement>Depuis le centre de Bordeaux, prenez la N230, puis la sortie 26 vers
                            Carbon-Blanc</ListElement>
                        <ListElement>Suivez la D10 jusqu&apos;à la Rue Pasteur</ListElement>

                    </div>

                    {/* Partie Droite */}
                    <div className="w-[47%] h-auto flex flex-col items-start justify-start gap-[30px] mt-[20px]">

                        <div className="w-[100%] h-auto flex flex-col items-start justify-start p-[20px] rounded-ten bg-white border-1 border-redcolor gap-[5px]">

                            <Subtitle className="text-[24px]">
                                <span className="underline">Créneaux flexibles</span> : jouez quand vous voulez ! <Emoji name="alarm" width={24} />
                            </Subtitle>

                            <Creaneau><span className="font-normal">lundi</span> → 21ᴴ - 23ᴴ</Creaneau>
                            <Creaneau><span className="font-normal">mardi</span> → 18ᴴ - 21ᴴ</Creaneau>
                            <Creaneau><span className="font-normal">vendredi</span> → 18ᴴ30 - 21ᴴ</Creaneau>

                        </div>

                        <Map />
                    </div>

                </div>
            </div>

            {/*à quel prix ?*/}
            <div className="w-[80%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="À quel prix ?" />

                <div className="w-[100%] h-auto flex flex-row items-start justify-start mt-[20px] gap-[30px]">

                    <div className="w-[53%] h-auto flex flex-col items-start justify-start gap-[10px] bg-white p-[30px] rounded-ten">

                        <Subtitle className="text-[24px]">
                            <span className="underline">Tarifs avantageux</span> : adhérez à prix réduits ! <Emoji name="euro" width={24} />
                        </Subtitle>

                        <ListTitle>Nous vous proposons deux formules adaptées à vos besoins :</ListTitle>

                        <ListElement>
                            <span className="font-medium">Formule <span className="italic">adulte</span> </span> : <span className="text-redcolor">50 €</span> par personne.
                        </ListElement>

                        <ListElement>
                            <span className="font-medium">Formule <span className="italic">couple</span> </span> : <span className="text-redcolor">90 €</span> pour 2 personnes, idéale pour venir jouer à deux, que vous soyez en couple ou simplement entre amis.
                        </ListElement>


                    </div>

                    <div className="w-[47%] h-auto flex flex-col items-start justify-start gap-[20px]">

                        <div className="w-[100%] h-auto flex flex-col items-start justify-start gap-[10px] bg-white p-[30px] rounded-ten">
                            <Subtitle className="text-[24px]">
                                Comment offrons-nous des prix aussi bas ? <Emoji name="moneymouth" width={24} />
                            </Subtitle>

                            <Paragraphe className="w-[92%]">
                                Nos tarifs sont particulièrement attractifs car notre club n&apos;est pas affilié à la
                                Fédération Française de Badminton (FFBaD). Cela signifie que <span className="font-medium">vous ne payez que la cotisation au club</span>, sans les coûts additionnels pour la licence fédérale, ni les
                                contributions à la Ligue et au Comité départemental. Profitez d&apos;une adhésion simple
                                et accessible, pour jouer en toute liberté, à un prix imbattable ! <Emoji name="moneywings" width={20} />
                            </Paragraphe>

                        </div>

                    </div>


                </div>
            </div>

        </PageLayout>
    )
}

export default Adherer


// Component
// - SEction (w-80 etc, vu que chaque section a 3 éléments, prendre en arguments les childrens pour chaque section)
//     - Titre
//     - Image avec description
//     - Informations (case avec bordures rouges qui prend des childrens)
//     - Bouton avec lien