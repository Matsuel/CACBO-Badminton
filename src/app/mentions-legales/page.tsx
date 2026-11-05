import type { Metadata } from "next";
import Link from "next/link"
import Bloc from "@/components/Bloc"
import Content from "@/components/Content"
import Header from "@/components/Header"
import List from "@/components/List"
import ListElement from "@/components/ListElement"
import PageLayout from "@/components/PageLayout"
import Parent from "@/components/Parent"
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Mentions légales",
};

const MentionsLegales = () => {
    return (
        <PageLayout>

            <Header
                title="mentions légales"
                subtitle="Transparence et responsabilités"
            />

            <Content>
                <Parent>
                    <Text variant="h2" color="rouge">
                        Éditeur du site
                    </Text>

                    <Bloc>
                        <Text>
                            Le présent site est édité par le CACBO Badminton, section du Club Athlétique CarbonBlanais Omnisports (CACBO), association loi 1901.
                        </Text>

                        <Text>
                            <span className="font-medium">Adresse :</span> 24 rue Pasteur, 33560 Carbon-Blanc
                        </Text>

                        <Text>
                            <span className="font-medium">Directeur de la publication</span> : Maël THOMAS
                        </Text>

                        <Text>
                            <span className="font-medium">Contact</span> : hello@cacbobad.fr
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Hébergement
                    </Text>

                    <Bloc>
                        <Text>
                            Le site est hébergé par :
                        </Text>

                        <Text className="font-medium">
                            Vercel Inc.
                        </Text>

                        <Text>
                            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Propriété intellectuelle
                    </Text>

                    <Bloc>
                        <Text>
                            L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo, documents téléchargeables) sont la propriété exclusive du CACBO Badminton ou est utilisé avec autorisation.
                        </Text>

                        <Text>
                            Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, sans accord préalable écrit, est interdite conformément au Code de la Propriété Intellectuelle.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Données personnelles (RGPD)
                    </Text>

                    <Bloc>
                        <Text>
                            Les informations personnelles liées aux adhésions sont collectées et traitées via notre partenaire HelloAsso (gestion des inscriptions et paiements).
                        </Text>

                        <Text>
                            Pour plus de détails sur la manière dont nous utilisons et protégeons vos données, veuillez consulter notre <Link href="/politiques" className="underline">Politique de confidentialité.</Link>
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Cookies
                    </Text>

                    <Bloc>
                        <Text>
                            Le site utilise uniquement des cookies techniques indispensables à son fonctionnement (préférences de navigation, affichage).
                        </Text>
                        <Text>
                            Aucun cookie publicitaire ou de suivi tiers n&apos;est déposé sans votre consentement.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Responsabilité
                    </Text>

                    <Bloc>
                        <Text>
                            Le CACBO Badminton s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur le site. Toutefois, il ne saurait être tenu responsable :
                        </Text>

                        <List>
                            <ListElement>d’éventuelles erreurs ou omissions,</ListElement>
                            <ListElement>d’une interruption temporaire du site (maintenance, problème technique),</ListElement>
                            <ListElement>ou de tout dommage direct ou indirect lié à l’utilisation du site.</ListElement>
                        </List>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Droit applicable
                    </Text>

                    <Bloc>
                        <Text>
                            L&apos;utilisation du site est régie par le droit français. En cas de litige, compétence exclusive est attribuée aux tribunaux de Bordeaux.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Modification des mentions légales
                    </Text>

                    <Bloc>
                        <Text>
                            Le CACBO Badminton se réserve le droit de modifier et mettre à jour les présentes mentions légales à tout moment afin de rester conforme aux évolutions réglementaires et techniques.
                        </Text>
                    </Bloc>
                </Parent>
            </Content>

        </PageLayout>
    )
}

export default MentionsLegales