import ExternalLink from "@/assets/ExternalLink"
import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Button from "@/components/Button"
import Content from "@/components/Content"
import Documents from "@/components/Document"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Register from "@/components/Register"
import SingleTitle from "@/components/SingleTitle"
import { textVariants } from "@/constantes/theme"
import Image from "next/image"

const Adherer = () => {
    return (
        <PageLayout>
            <Header
                title="ADHÉRER"
                subtitle="Prêts à nous rejoindre ?"
                cta={
                    <Register
                        saison="24/25"
                        open={false}
                    />
                }
            />

            <Content>
                <Image
                    src="/adherer/1.png"
                    alt="Photo devant une table avec des raquettes"
                    width={500}
                    height={300}
                />

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

                <Bloc>
                    <h4 className={`${textVariants.h4}`}>
                        Profitez de <span className="text-redcolor">3</span> séances d’essai sans engagement avant de vous inscrire !
                    </h4>
                </Bloc>

                <SingleTitle>
                    Comment ?
                </SingleTitle>

                <Bloc title="Documents nécessaires : préparez votre dossier 📋">

                    <BlocText>
                        Pour valider votre inscription, nous aurons besoin de quelques documents indispensables :
                    </BlocText>

                    <ul className="list-disc pl-7">
                        <li className="font-Poppins font-light text-[15px] leading-4"><span className="font-medium">Formulaire d’inscription</span> : à remplir pour nous transmettre vos informations essentielles.</li>
                        <li className="font-Poppins font-light text-[15px] leading-4"><span className="font-medium">Questionnaire de santé</span> : à compléter pour évaluer votre condition physique. <span className="text-redcolor">Si vous répondez positivement à une ou plusieurs questions</span>, un <span className="font-medium">certificat médical</span> daté de moins de 6 mois sera requis.</li>
                    </ul>

                    <BlocText>
                        Ces documents sont essentiels pour garantir la sécurité de tous nos adhérents et assurer une pratique du badminton en toute sérénité. Pensez à les préparer pour faciliter votre inscription !
                    </BlocText>

                </Bloc>

                <Bloc subtitile="Adhésion simplifiée : inscrivez-vous en ligne ! 🌐">
                    <BlocText>
                        Inscrivez-vous facilement en ligne grâce à HelloAsso !
                    </BlocText>

                    <BlocText>
                        Évitez l’impression des documents : remplissez le formulaire et réglez votre cotisation directement sur la plateforme, en toute simplicité.
                    </BlocText>

                    <Button variant="inverted" href="/regles">
                        S’inscrire en ligne
                        <ExternalLink size={10} />
                    </Button>
                </Bloc>

                <Bloc subtitile="Fichiers à télécharger (si inscription papier)">
                    <Documents href="/adherer/Formulaire d'inscription bad.pdf" content="Formulaire d’inscription" />
                    <Documents href="/adherer/Questionnaire et certificat médical.pdf" content="Questionnaire de santé" />
                </Bloc>

            </Content>
        </PageLayout>
    )
}

export default Adherer