import Bloc from "@/components/Bloc"
import BlocText from "@/components/BlocText"
import Content from "@/components/Content"
import Header from "@/components/Header"
import List from "@/components/List"
import ListElement from "@/components/ListElement"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import SingleTitle from "@/components/SingleTitle"
import Link from "next/link"

const MentionsLegales = () => {
    return (
        <PageLayout>

            <Header
                title="mentions légales"
                subtitle="Transparence et responsabilités"
            />

            <Content>
                <Parent>
                    <SingleTitle>
                        Éditeur du site
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le présent site est édité par le CACBO Badminton, section du Club Athlétique CarbonBlanais Omnisports (CACBO), association loi 1901.
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">Adresse :</span> 24 rue Pasteur, 33560 Carbon-Blanc
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">Directeur de la publication</span> : Maël THOMAS
                        </BlocText>

                        <BlocText>
                            <span className="font-medium">Contact</span> : hello@cacbobad.fr
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Hébergement
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le site est hébergé par :
                        </BlocText>

                        <BlocText className="font-medium">
                            Vercel Inc.
                        </BlocText>

                        <BlocText>
                            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Propriété intellectuelle
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo, documents téléchargeables) sont la propriété exclusive du CACBO Badminton ou est utilisé avec autorisation.
                        </BlocText>

                        <BlocText>
                            Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, sans accord préalable écrit, est interdite conformément au Code de la Propriété Intellectuelle.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Données personnelles (RGPD)
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Les informations personnelles liées aux adhésions sont collectées et traitées via notre partenaire HelloAsso (gestion des inscriptions et paiements).
                        </BlocText>

                        <BlocText>
                            Pour plus de détails sur la manière dont nous utilisons et protégeons vos données, veuillez consulter notre <Link href="/politiques" className="underline">Politique de confidentialité.</Link>
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Cookies
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le site utilise uniquement des cookies techniques indispensables à son fonctionnement (préférences de navigation, affichage).
                        </BlocText>
                        <BlocText>
                            Aucun cookie publicitaire ou de suivi tiers n&apos;est déposé sans votre consentement.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Responsabilité
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le CACBO Badminton s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur le site. Toutefois, il ne saurait être tenu responsable :
                        </BlocText>

                        <List>
                            <ListElement>d’éventuelles erreurs ou omissions,</ListElement>
                            <ListElement>d’une interruption temporaire du site (maintenance, problème technique),</ListElement>
                            <ListElement>ou de tout dommage direct ou indirect lié à l’utilisation du site.</ListElement>
                        </List>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Droit applicable
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            L&apos;utilisation du site est régie par le droit français. En cas de litige, compétence exclusive est attribuée aux tribunaux de Bordeaux.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Modification des mentions légales
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le CACBO Badminton se réserve le droit de modifier et mettre à jour les présentes mentions légales à tout moment afin de rester conforme aux évolutions réglementaires et techniques.
                        </BlocText>
                    </Bloc>
                </Parent>
            </Content>

        </PageLayout>
    )
}

export default MentionsLegales