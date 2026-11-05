import type { Metadata } from "next";
import Link from 'next/link'
import Bloc from '@/components/Bloc'
import Content from '@/components/Content'
import Header from '@/components/Header'
import List from '@/components/List'
import ListElement from '@/components/ListElement'
import PageLayout from '@/components/PageLayout'
import Parent from '@/components/Parent'
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Politique de confidentialité",
};

const Politique = () => {
    return (
        <PageLayout>

            <Header
                title="Politique de confidentialité"
                subtitle="Dernière mise à jour le 25/08/2025"
                h1ClassName='hyphens-auto'
            />

            <Content>
                <Bloc>
                    <Text>
                        Le CACBO Badminton, situé au 24 rue Pasteur, 33560 Carbon-Blanc, s&apos;engage à protéger la vie privée de ses adhérents et visiteurs. Cette politique explique de manière simple et transparente comment nous collectons, utilisons et protégeons vos données personnelles.
                    </Text>
                </Bloc>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Données collectées
                    </Text>

                    <Bloc>
                        <Text>
                            Nous ne collectons pas directement de données via le site internet <span className='font-medium'>cacbobad.fr</span>.
                        </Text>
                        <Text>
                            Dans le cadre des adhésions et de la vie associative, les informations personnelles sont recueillies par notre partenaire HelloAsso et peuvent inclure :
                        </Text>
                        <List>
                            <ListElement>Nom et prénom</ListElement>
                            <ListElement>Adresse postale</ListElement>
                            <ListElement>Adresse email</ListElement>
                            <ListElement>Numéro de téléphone</ListElement>
                            <ListElement>Date de naissance</ListElement>
                        </List>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Utilisation des données
                    </Text>

                    <Bloc>
                        <Text>
                            Le CACBO Badminton ne collecte pas directement de données via ce site.
                        </Text>

                        <Text>
                            Les données collectées sont utilisées uniquement pour :
                        </Text>

                        <List>
                            <ListElement>Gérer les adhésions, inscriptions aux activités du club et les paiements</ListElement>
                            <ListElement>Communiquer avec les adhérents (informations pratiques, événements, convocations)</ListElement>
                            <ListElement>Établir les documents administratifs (factures, attestations)</ListElement>
                            <ListElement>Respecter nos obligations légales et réglementaires (notamment comptables et fiscales)</ListElement>
                        </List>

                        <Text>
                            Ces données sont traitées conformément au Règlement Général sur la Protection des Données (RGPD – n°2016/679).
                        </Text>

                        <Text>
                            La politique de confidentialité d’HelloAsso est consultable sur <Link href="https://helloasso.com" className='underline'>helloasso.com</Link>
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Partage des données
                    </Text>

                    <Bloc>
                        <Text>
                            Vos données sont traitées de manière confidentielle.
                        </Text>

                        <Text>
                            Elles ne sont partagées qu’avec :
                        </Text>

                        <List>
                            <ListElement>Les membres autorisés du Bureau du CACBO (Omnisports)</ListElement>
                            <ListElement>Les membres autorisés du Bureau du CACBO Badminton</ListElement>
                            <ListElement>La plateforme HelloAsso, conforme au RGPD, pour la gestion des inscriptions et paiements</ListElement>
                        </List>
                        <Text>
                            Aucune donnée n&apos;est transmise ou vendue à des tiers à des fins commerciales.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Sécurité des données
                    </Text>

                    <Bloc>
                        <Text>
                            Nous mettons en œuvre, avec notre prestataire HelloAsso, des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, accès non autorisé, modification ou divulgation.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Vos droits
                    </Text>

                    <Bloc>
                        <Text>
                            👉 Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression de vos données personnelles.
                        </Text>

                        <Text>
                            Pour exercer vos droits :
                        </Text>

                        <Text as="p" variant="h4" color="rouge">
                            CACBO Badminton – 24 rue Pasteur, 33560 Carbon-Blanc – <Link href="mailto:hello@cacbobad.fr" className='underline'>hello@cacbobad.fr</Link>
                        </Text>

                        <Text>
                            Vous pouvez également saisir la CNIL pour toute réclamation : <Link href="https://www.cnil.fr" className='underline'>www.cnil.fr</Link>
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Cookies
                    </Text>

                    <Bloc>
                        <Text>
                            Le site <span className='font-medium'>cacbobad.fr</span> utilise uniquement des cookies techniques nécessaires à son bon fonctionnement.
                        </Text>

                        <Text>
                            Aucun cookie publicitaire ou de suivi tiers n’est utilisé.
                        </Text>

                        <Text>
                            Vous pouvez configurer votre navigateur pour bloquer ou supprimer ces cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
                        </Text>
                    </Bloc>
                </Parent>

                <Parent>
                    <Text variant="h2" color="rouge">
                        Modification de la politique
                    </Text>

                    <Bloc>
                        <Text>
                            Cette politique de confidentialité peut être mise à jour à tout moment afin de rester conforme aux évolutions légales et techniques. Toute modification sera publiée sur cette page et applicable dès sa mise en ligne.
                        </Text>
                    </Bloc>
                </Parent>

            </Content>
        </PageLayout>
    )
}

export default Politique