import Rocket from "@/assets/rocket.svg";
import { Goto } from "@/assets/Goto";
import { SITE_CONFIG } from "@/constantes";
import Subtitle from "@/components/UI/Subtitle";
import Button from "@/components/UI/Button";
import Documents from "@/components/Document";
import ListElement from "@/components/UI/ListElement";
import ListTitle from "@/components/UI/ListTitle";
import Creaneau from "@/components/Creneau";
import Emoji from "@/components/UI/Emoji";
import PageLayout from "@/components/Page";
import Map from "@/components/Map";
import Paragraphe from "@/components/UI/Paragraphe";
import Bloc from "@/components/Bloc";
import BlocInfos from "@/components/Bloc/BlocInfos";

const Adherer = () => {
    return (
        <PageLayout
            title={SITE_CONFIG.adherer}
            subtitle="Prêts à nous rejoindre ?"
            icon={Rocket}
            description
        >

            <Bloc blocTitle="Pourquoi nous rejoindre ?" className="mt-0">
                <BlocInfos className="w-[53%] h-auto gap-5">
                    <Paragraphe>
                        En rejoignant notre club, vous intégrez une <strong className="font-medium">communauté
                            accueillante</strong> et <strong className="font-medium"> dynamique, ouverte à tous les niveaux</strong> pratique.
                        Nous offrons un cadre chaleureux où l&apos;ambiance familiale et
                        conviviale favorise à la fois le plaisir de jouer et la progression. Que vous soyez
                        compétiteur ou amateur, vous bénéficierez d&apos;<strong className="font-medium">infrastructures
                            modernes</strong>, de <strong className="font-medium">créneaux variés </strong>
                        adaptées à vos besoins, et d&apos;un esprit sans prise de tête. <Emoji name="sunglasses" width={20} />
                    </Paragraphe>

                    <Paragraphe>
                        De plus, nos <span className="underline">soirées régulières</span> <Emoji name="party" width={20} /> sont l&apos;occasion
                        idéale de renforcer les liens et de <strong className="font-medium"> partager des moments de détente</strong> en dehors des
                        terrains. Ici, c&apos;est avant tout le plaisir du sport et du partage qui prime !
                    </Paragraphe>

                </BlocInfos>

                <BlocInfos className="w-[44%] border-1 border-redcolor rounded-ten">
                    <Subtitle className="leading-10 !font-medium text-3xl">
                        Profitez de <strong className="font-semibold text-redcolor">3</strong> séances d&apos;essai
                        sans engagement avant de vous inscrire !
                    </Subtitle>
                </BlocInfos>
            </Bloc>

            <Bloc blocTitle="Comment ?">
                <BlocInfos className="w-[53%]">
                    <Subtitle>
                        <span className="underline">Documents nécessaires</span> : préparez votre dossier <Emoji name="clipboard" width={22} />
                    </Subtitle>

                    <ListTitle>
                        Pour valider votre inscription, nous aurons besoin de quelques documents
                        indispensables :
                    </ListTitle>

                    <ListElement>
                        <strong className="font-medium">Formulaire d&apos;inscription</strong> : à remplir pour
                        nous transmettre vos informations essentielles.
                    </ListElement>

                    <ListElement>
                        <strong className="font-medium">Questionnaire de santé</strong> : à compléter pour
                        évaluer
                        votre condition physique. <span className="text-redcolor"> &nbsp; Si vous répondez positivement à une ou plusieurs questions</span>,
                        un <strong className="font-medium">certificat médical</strong> daté de moins de 6 mois <strong className="underline">sera requis</strong> .
                    </ListElement>

                    <Paragraphe>
                        Ces documents sont essentiels pour garantir la sécurité de tous nos adhérents et assurer une
                        pratique du badminton en toute sérénité. Pensez à les préparer pour faciliter votre
                        inscription !
                    </Paragraphe>

                </BlocInfos>

                <BlocInfos className="w-[44%] gap-7 p-0 bg-transparent">
                    <BlocInfos className="w-full border-1 border-redcolor">

                        <Subtitle>
                            Adhésion simplifiée : <span className="underline">inscrivez-vous en ligne</span> ! <Emoji name="globmeridian" width={24} />
                        </Subtitle>

                        <Paragraphe>
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
                    </BlocInfos>

                    <BlocInfos className="w-full">
                        <Subtitle>
                            Fichiers à télécharger <span className="font-light"> (si inscription papier) :</span>
                        </Subtitle>

                        <div className="w-auto h-auto flex sm:flex-row flex-col items-start justify-start gap-[30px]">

                            {/* TODO: Modifier svg document avec les bonnes tailles et continue à parti d'ici */}
                            <Documents content={"Formulaire d’inscription"} href={"/"} />

                            <Documents content={"Questionnaire de santé"} href={"/"} />
                        </div>

                    </BlocInfos>
                </BlocInfos>

            </Bloc>

            {/* Comment ? */}
            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="Comment ?" />

                <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start gap-[30px]">

                    {/* Partie Gauche */}
                    <div
                        className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start mt-[20px] gap-[10px] bg-white rounded-ten p-[30px]">

                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
                            <span className="underline">Documents nécessaires</span> : préparez votre dossier <Emoji name="clipboard" width={22} />
                        </Subtitle>

                        <ListTitle>Pour valider votre inscription, nous aurons besoin de quelques documents
                            indispensables :</ListTitle>

                        <ListElement><strong className="font-medium">Formulaire d&apos;inscription</strong> : à remplir pour
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
                    <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[30px] mt-[20px]">

                        <div className="w-[100%] h-auto flex flex-col items-start justify-start p-[20px] rounded-ten bg-white border-1 border-redcolor gap-[15px]">

                            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
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

                            <div className="w-auto h-auto flex sm:flex-row flex-col items-start justify-start gap-[30px]">

                                <Documents content={"Formulaire d’inscription"} href={"/"} />

                                <Documents content={"Questionnaire de santé"} href={"/"} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Où et à quelle heure ? */}
            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="Où et à quelle heure ?" />

                <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start gap-[30px]">
                    <div className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start mt-[20px] gap-[5px] bg-white rounded-ten p-[30px]">

                        <Paragraphe>
                            Nous nous situons au <span className="underline">Complexe sportif Philippe Madrelle</span>,
                            à Carbon-Blanc (24 rue Pasteur). <Emoji name="pin" width={20} />
                        </Paragraphe>

                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
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
                    <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[30px] mt-[20px]">

                        <div className="w-[100%] h-auto flex flex-col items-start justify-start p-[20px] rounded-ten bg-white border-1 border-redcolor gap-[5px]">

                            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
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
            <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-start mt-[120px]">
                <Subtitle content="À quel prix ?" />

                <div className="w-[100%] h-auto flex lg:flex-row flex-col items-start justify-start mt-[20px] gap-[30px]">

                    <div className="lg:w-[53%] w-full h-auto flex flex-col items-start justify-start gap-[10px] bg-white p-[30px] rounded-ten">

                        <Subtitle className="xl:text-[24px] md:text-[22px] text-xl">
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

                    <div className="lg:w-[47%] w-full h-auto flex flex-col items-start justify-start gap-[20px]">

                        <div className="w-[100%] h-auto flex flex-col items-start justify-start gap-[10px] bg-white p-[30px] rounded-ten">
                            <Subtitle className="xl:text-[24px] md:text-[22px] text-xl  ">
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