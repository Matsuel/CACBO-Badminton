import Bloc from '@/components/Bloc'
import BlocText from '@/components/BlocText'
import Content from '@/components/Content'
import Header from '@/components/Header'
import List from '@/components/List'
import ListElement from '@/components/ListElement'
import PageLayout from '@/components/PageLayout'
import Parent from '@/components/Parent'
import SingleTitle from '@/components/SingleTitle'
import { textVariants } from '@/constantes/theme'
import Link from 'next/link'

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
                    <BlocText>
                        Le CACBO Badminton, situé au 24 rue Pasteur, 33560 Carbon-Blanc, s&apos;engage à protéger la vie privée de ses adhérents et visiteurs. Cette politique explique de manière simple et transparente comment nous collectons, utilisons et protégeons vos données personnelles.
                    </BlocText>
                </Bloc>

                <Parent>
                    <SingleTitle>
                        Données collectées
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Nous ne collectons pas directement de données via le site internet <span className='font-medium'>cacbobad.fr</span>.
                        </BlocText>
                        <BlocText>
                            Dans le cadre des adhésions et de la vie associative, les informations personnelles sont recueillies par notre partenaire HelloAsso et peuvent inclure :
                        </BlocText>
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
                    <SingleTitle>
                        Utilisation des données
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le CACBO Badminton ne collecte pas directement de données via ce site.
                        </BlocText>

                        <BlocText>
                            Les données collectées sont utilisées uniquement pour :
                        </BlocText>

                        <List>
                            <ListElement>Gérer les adhésions, inscriptions aux activités du club et les paiements</ListElement>
                            <ListElement>Communiquer avec les adhérents (informations pratiques, événements, convocations)</ListElement>
                            <ListElement>Établir les documents administratifs (factures, attestations)</ListElement>
                            <ListElement>Respecter nos obligations légales et réglementaires (notamment comptables et fiscales)</ListElement>
                        </List>

                        <BlocText>
                            Ces données sont traitées conformément au Règlement Général sur la Protection des Données (RGPD – n°2016/679).
                        </BlocText>

                        <BlocText>
                            La politique de confidentialité d’HelloAsso est consultable sur <Link href="https://helloasso.com" className='underline'>helloasso.com</Link>
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Partage des données
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Vos données sont traitées de manière confidentielle.
                        </BlocText>

                        <BlocText>
                            Elles ne sont partagées qu’avec :
                        </BlocText>

                        <List>
                            <ListElement>Les membres autorisés du Bureau du CACBO (Omnisports)</ListElement>
                            <ListElement>Les membres autorisés du Bureau du CACBO Badminton</ListElement>
                            <ListElement>La plateforme HelloAsso, conforme au RGPD, pour la gestion des inscriptions et paiements</ListElement>
                        </List>
                        <BlocText>
                            Aucune donnée n&apos;est transmise ou vendue à des tiers à des fins commerciales.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Sécurité des données
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Nous mettons en œuvre, avec notre prestataire HelloAsso, des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, accès non autorisé, modification ou divulgation.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Vos droits
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            👉 Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression de vos données personnelles.
                        </BlocText>

                        <BlocText>
                            Pour exercer vos droits :
                        </BlocText>

                        <p className={`${textVariants.h4} text-redcolor`}>
                            CACBO Badminton – 24 rue Pasteur, 33560 Carbon-Blanc – <Link href="mailto:hello@cacbobad.fr" className='underline'>hello@cacbobad.fr</Link>
                        </p>

                        <BlocText>
                            Vous pouvez également saisir la CNIL pour toute réclamation : <Link href="https://www.cnil.fr" className='underline'>www.cnil.fr</Link>
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Cookies
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Le site <span className='font-medium'>cacbobad.fr</span> utilise uniquement des cookies techniques nécessaires à son bon fonctionnement.
                        </BlocText>

                        <BlocText>
                            Aucun cookie publicitaire ou de suivi tiers n’est utilisé.
                        </BlocText>

                        <BlocText>
                            Vous pouvez configurer votre navigateur pour bloquer ou supprimer ces cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
                        </BlocText>
                    </Bloc>
                </Parent>

                <Parent>
                    <SingleTitle>
                        Modification de la politique
                    </SingleTitle>

                    <Bloc>
                        <BlocText>
                            Cette politique de confidentialité peut être mise à jour à tout moment afin de rester conforme aux évolutions légales et techniques. Toute modification sera publiée sur cette page et applicable dès sa mise en ligne.
                        </BlocText>
                    </Bloc>
                </Parent>

            </Content>
        </PageLayout>
    )
}

export default Politique