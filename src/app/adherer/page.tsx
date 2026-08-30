import Image from "next/image"
import ExternalLink from "@/assets/ExternalLink"
import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Button from "@/components/Button"
import Content from "@/components/Content"
import Documents from "@/components/Document"
import Header from "@/components/Header"
import List from "@/components/List"
import ListElement from "@/components/ListElement"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import Register from "@/components/Register"
import SingleTitle from "@/components/SingleTitle"
import { textVariants } from "@/constantes/theme"

const Adherer = () => {
    return (
        <PageLayout>
            <Header
                title="ADHÉRER"
                subtitle="Prêts à nous rejoindre ?"
                cta={
                    <Register
                        saison="26/27"
                        open={true}
                    />
                }
            />

            <Content>
                <Image
                    src="/adherer/1.png"
                    alt="Photo devant une table avec des raquettes"
                    className="rounded-xl"
                    width={2000}
                    height={2000}
                />

                <Parent>

                    <SingleTitle>
                        Pourquoi nous rejoindre ?
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            En rejoignant notre club, vous intégrez une <span className="font-medium">communauté accueillante</span> et <span className="font-medium">dynamique</span>, <span className="font-medium">ouverte à tous les niveaux</span> de pratique.
                        </BlocText>

                        <BlocText>
                            Nous offrons un cadre chaleureux où l’ambiance familiale et conviviale favorise à la fois le plaisir de jouer et la progression.
                        </BlocText>

                        <BlocText>
                            Que vous soyez compétiteur ou amateur, vous bénéficierez d&apos;<span className="font-medium">infrastructures modernes</span>, de <span className="font-medium">créneaux variés</span> adaptées à vos besoins, et d&apos;un esprit sans prise de tête. 😎
                        </BlocText>

                        <BlocText>
                            De plus, nos <span className="underline">soirées régulières</span> 🎉 sont l&apos;occasion idéale de renforcer les liens et de <span className="font-medium">partager des moments de détente</span> en dehors des terrains. Ici, c&apos;est avant tout le plaisir du sport et du partage qui prime !
                        </BlocText>
                    </Bloc>

                    <Bloc className="border border-redcolor">
                        <h4 className={`${textVariants.h4}`}>
                            Profitez de <span className="text-redcolor">3</span> séances d’essai sans engagement avant de vous inscrire !
                        </h4>
                    </Bloc>
                </Parent>

                <Parent>

                    <SingleTitle>
                        Comment ?
                    </SingleTitle>

                    <Bloc subtitile="Adhésion simplifiée : inscrivez-vous en ligne ! 🌐" className="border border-redcolor">
                        <BlocText>
                            Inscrivez-vous facilement en ligne grâce à HelloAsso !
                        </BlocText>

                        <BlocText>
                            Évitez l’impression des documents : remplissez le formulaire et réglez votre cotisation directement sur la plateforme, en toute simplicité.
                        </BlocText>

                        <Button variant="inverted" href="https://www.helloasso.com/associations/cacbo-badminton">
                            S’inscrire en ligne
                            <ExternalLink size={10} />
                        </Button>
                    </Bloc>

                    <Bloc title="Documents nécessaires : préparez votre dossier 📋">

                        <BlocText>
                            Pour valider votre inscription, nous aurons besoin de quelques documents indispensables :
                        </BlocText>

                        <List>
                            <ListElement><span className="font-medium">Formulaire d’inscription</span> : à remplir pour nous transmettre vos informations essentielles.</ListElement>
                            <ListElement><span className="font-medium">Questionnaire de santé</span> : à compléter pour évaluer votre condition physique. <span className="text-redcolor">Si vous répondez positivement à une ou plusieurs questions</span>, un <span className="font-medium">certificat médical</span> daté de moins de 6 mois sera requis.</ListElement>
                        </List>

                        <BlocText>
                            Ces documents sont essentiels pour garantir la sécurité de tous nos adhérents et assurer une pratique du badminton en toute sérénité. Pensez à les préparer pour faciliter votre inscription !
                        </BlocText>

                    </Bloc>

                    <Bloc subtitile="Fichiers à télécharger (si inscription papier)">
                        <Documents href="/adherer/Fiche d'inscription 2025-2026.pdf" content="Formulaire d’inscription" />
                        <Documents href="/adherer/Certificat médical.pdf" content="Certificat médical + questionnaire de santé" />
                    </Bloc>
                </Parent>


                <Parent>
                    <SingleTitle>
                        Où et à quelle heure ?
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Nous nous situons au Complexe sportif Philippe Madrelle, à Carbon-Blanc (24 rue Pasteur). 📍
                        </BlocText>

                        <h4 className={textVariants.h4}>
                            Voies d’accès :
                        </h4>

                        <BlocText className="text-redcolor">
                            🚗  En voiture :
                        </BlocText>

                        <List>
                            <ListElement>Depuis le centre de Bordeaux, prenez la N230, puis la sortie 26 vers Carbon-Blanc</ListElement>
                            <ListElement>Suivez la D10 jusqu&apos;à la Rue Pasteur</ListElement>
                        </List>

                        <BlocText className="text-redcolor">
                            🚌  En bus :
                        </BlocText>

                        <List>
                            <ListElement>Ligne 93 (TBM) : Arrêt Pasteur à proximité du complexe</ListElement>
                            <ListElement>Ligne 7 (TBM) : Arrêt La Gardette (10-15 minutes à pied)</ListElement>
                        </List>

                        <BlocText className="text-redcolor">
                            🚋  En tram :
                        </BlocText>

                        <List>
                            <ListElement>Ligne A du tram à direction de La Gardette (puis 10-15 min de marche)</ListElement>
                        </List>

                        <Image
                            src="/adherer/map.png"
                            alt="Carte d'accès au complexe sportif Philippe Madrelle"
                            width={5000}
                            height={5000}
                        />
                    </Bloc>

                    <Bloc className="border border-redcolor">

                        <h4 className={textVariants.h4}>
                            Créneaux flexibles : jouez quand vous voulez ! ⏰
                        </h4>

                        <List>
                            <ListElement>lundi → 21h - 23h</ListElement>
                            <ListElement>mardi → 18h - 21h</ListElement>
                            <ListElement>vendredi → 18h30 - 21h</ListElement>
                        </List>
                    </Bloc>
                </Parent>


                <Parent>
                    <SingleTitle>
                        À quel prix ?
                    </SingleTitle>

                    <Bloc className="border border-redcolor">
                        <h3 className={textVariants.h3}>
                            Tarifs avantageux : adhérez à prix réduits ! 💶
                        </h3>

                        <BlocText>
                            Nous vous proposons deux formules adaptées à vos besoins :
                        </BlocText>

                        <List>
                            <ListElement><span className="font-medium">Formule adulte</span> : <span className="text-redpale">50 €</span> par personne.</ListElement>
                            <ListElement><span className="font-medium">Formule couple</span> : <span className="text-redpale">90 €</span> pour 2 personnes, idéale pour venir jouer à deux, que vous soyez en couple ou simplement entre amis.</ListElement>
                        </List>
                    </Bloc>

                    <Bloc>
                        <h4 className={textVariants.h4}>
                            Comment offrons-nous des prix aussi bas ? 🤑
                        </h4>

                        <BlocText>
                            Nos tarifs sont particulièrement attractifs car notre club n&apos;est pas affilié à la Fédération Française de Badminton (FFBaD).
                        </BlocText>

                        <BlocText>
                            Cela signifie que <span className="text-redpale font-medium!">vous ne payez que la cotisation au club</span>, sans les coûts additionnels pour la licence fédérale, ni les contributions à la Ligue et au Comité départemental.
                        </BlocText>

                        <BlocText>
                            Profitez d&apos;une adhésion simple et accessible, pour jouer en toute liberté, à un prix imbattable ! 💸
                        </BlocText>
                    </Bloc>
                </Parent>


            </Content>
        </PageLayout>
    )
}

export default Adherer