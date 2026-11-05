import type { Metadata } from "next";
import Link from "next/link";
import Bloc from "@/components/Bloc";
import Content from "@/components/Content";
import Header from "@/components/Header";
import List from "@/components/List";
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import Parent from "@/components/Parent";
import Text from "@/components/Text";
import { club } from "@/constantes/club";

export const metadata: Metadata = {
	title: "Politique de confidentialité",
};

const Mail = () => (
	<Link href={`mailto:${club.mail}`} className="underline">
		{club.mail}
	</Link>
);

const Politique = () => {
	return (
		<PageLayout>
			<Header
				title="Politique de confidentialité"
				subtitle="Dernière mise à jour : 16 septembre 2026"
				h1ClassName="hyphens-auto"
			/>

			<Content>
				<Bloc>
					<Text>
						La présente politique de confidentialité a pour objectif d&apos;informer les utilisateurs du site
						cacbobad.fr des modalités de collecte, de traitement et de protection de leurs données à caractère
						personnel, conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE
						2016/679) et à la Loi Informatique et Libertés du 6 janvier 1978 modifiée.
					</Text>
				</Bloc>

				<Parent>
					<Text variant="h2" color="rouge">
						Responsable du traitement
					</Text>

					<Bloc>
						<Text>
							Le responsable du traitement des données est le Club Athlétique CarbonBlanais Omnisports (CACBO),
							personne morale de droit privé (association loi 1901), agissant pour sa section Badminton, et dont
							le siège social se situe {club.adresse.rue}, {club.adresse.codePostal} {club.adresse.ville}.
						</Text>
						<Text className="font-semibold">
							Le référent à la protection des données pour le club est : Maël THOMAS.
						</Text>
						<Text>
							Toute demande relative au traitement de vos données personnelles doit être adressée à l&apos;adresse
							e-mail suivante : <span className="font-semibold"><Mail /></span>
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Données personnelles collectées &amp; finalités
					</Text>

					<Bloc>
						<Text>
							Nous veillons à ne collecter que les données strictement nécessaires aux activités du club. Voici le
							détail des informations traitées selon leur canal de collecte :
						</Text>

						<Text className="font-semibold">Formulaire de contact</Text>
						<List>
							<ListElement>Données collectées : nom, prénom, adresse e-mail, sujet et contenu du message.</ListElement>
							<ListElement>
								Finalité du traitement : traitement et réponse aux demandes de renseignements, d&apos;informations
								pratiques ou de séances d&apos;essai.
							</ListElement>
							<ListElement>
								Base légale : consentement de l&apos;utilisateur lors de l&apos;envoi du message et intérêt légitime
								de l&apos;association à répondre aux sollicitations.
							</ListElement>
						</List>

						<Text className="font-semibold">Inscriptions, adhésions et boutique en ligne (via HelloAsso) :</Text>
						<List>
							<ListElement>
								Données collectées : nom, prénom, date de naissance, coordonnées (adresse e-mail, téléphone,
								adresse postale), photo portrait (optionnel) justificatifs de santé (questionnaire ou certificat
								médical) et informations relatives au règlement.
							</ListElement>
							<ListElement>
								Finalité du traitement : gestion administrative de l&apos;adhésion, contrôle des accès aux créneaux
								du gymnase, suivi de la trésorerie et émission des justificatifs ou reçus d&apos;achat (factures,
								attestations).
							</ListElement>
							<ListElement>
								Base légale : exécution du contrat d&apos;adhésion et respect des obligations légales comptables
								imposées aux associations.
							</ListElement>
						</List>

						<Text>
							La politique de confidentialité d&apos;HelloAsso est consultable sur{" "}
							<Link
								href="https://info.helloasso.com/politique-de-confidentialite"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								www.helloasso.com
							</Link>
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Cookies
					</Text>

					<Bloc>
						<Text>
							Le site cacbobad.fr utilise des cookies techniques nécessaires à son bon fonctionnement mais aussi
							Google Analytics, un service d&apos;analyse de site internet fourni par Google Ireland Limited.
						</Text>
						<List>
							<ListElement>
								<span className="font-semibold">Utilisation des cookies :</span> Google Analytics utilise des
								cookies (fichiers textes placés sur votre terminal) pour analyser la façon dont les visiteurs
								utilisent le site.
							</ListElement>
							<ListElement>
								<span className="font-semibold">Anonymisation de l&apos;IP :</span> L&apos;adresse IP transmise par
								votre navigateur dans le cadre de Google Analytics est anonymisée dès la collecte et n&apos;est pas
								combinée avec d&apos;autres données détenues par Google.
							</ListElement>
						</List>
						<Text>
							Vous pouvez configurer votre navigateur pour bloquer ou supprimer ces cookies, mais certaines
							fonctionnalités du site pourraient ne pas fonctionner correctement.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Destinataires des données
					</Text>

					<Bloc>
						<Text>
							Les données collectées à caractère personnel sont exclusivement destinées à la gestion
							administrative, comptable et organisationnelle du club. Elles ne sont accessibles qu&apos;aux
							destinataires internes suivants :
						</Text>
						<List>
							<ListElement>
								<span className="font-semibold">Les membres du Bureau du club :</span> pour assurer la gestion
								courante des adhésions, la trésorerie, l&apos;organisation des créneaux et la communication avec
								les joueurs.
							</ListElement>
							<ListElement>
								<span className="font-semibold">Les membres du Bureau Exécutif du CACBO :</span> au titre de la
								tutelle administrative et juridique exercée par l&apos;association omnisports, notamment pour le
								suivi centralisé des effectifs, la gestion des assurances du club et l&apos;application des statuts.
							</ListElement>
						</List>
						<Text color="rouge-pale" className="font-semibold">
							Vos données ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales ou
							publicitaires
						</Text>
						<Text>
							Elles peuvent toutefois être transmises de manière sécurisée à nos prestataires techniques agissant
							uniquement en qualité de sous-traitants :
						</Text>
						<List>
							<ListElement>Vercel Inc : hébergeur du site internet cacbobad.fr</ListElement>
							<ListElement>HelloAsso : plateforme tiers pour le paiement en ligne et la collecte des adhésions.</ListElement>
							<ListElement>
								Google Ireland Limited : outil de mesure d&apos;audience anonymisée (Google Analytics).
							</ListElement>
						</List>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Durée de conservation des données
					</Text>

					<Bloc>
						<Text>
							Nous conservons vos données uniquement pendant la durée nécessaire aux finalités pour lesquelles
							elles ont été collectées :
						</Text>
						<List>
							<ListElement>
								<span className="font-semibold">Données de contact :</span> conservées pendant la durée nécessaire
								au traitement de la demande, puis supprimées dans un délai maximum de 12 mois à compter du dernier
								échange.
							</ListElement>
							<ListElement>
								<span className="font-semibold">Données des adhérents :</span> conservées pendant toute la durée de
								l&apos;adhésion, puis archivées pendant 3 ans à compter du terme de la dernière saison souscrite à
								des fins de gestion administrative.
							</ListElement>
							<ListElement>
								<span className="font-semibold">Documents comptables et justificatifs de paiement (HelloAsso) :</span>{" "}
								conservés pendant 10 ans, conformément aux obligations légales du Code de commerce.
							</ListElement>
							<ListElement>
								<span className="font-semibold">Durée de vie des cookies sur le navigateur :</span> 13 mois maximum
								conformément aux préconisations de la CNIL.
							</ListElement>
							<ListElement>
								<span className="font-semibold">Données d&apos;événements et d&apos;actions sur le site :</span>{" "}
								conservées pendant 2 mois sur les serveurs de Google Analytics avant suppression automatique.
							</ListElement>
							<ListElement>
								<span className="font-semibold">Données liées aux utilisateurs et identifiants d&apos;analyse :</span>{" "}
								conservées pendant 14 mois sur Google Analytics (cette durée est réinitialisée à chaque nouvelle
								visite ou activité sur le site).
							</ListElement>
						</List>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Sécurité des données
					</Text>

					<Bloc>
						<Text>
							Nous mettons en œuvre l&apos;ensemble des mesures techniques et organisationnelles appropriées
							(chiffrement des flux via protocole HTTPS/SSL, restriction des accès d&apos;administration aux seuls
							membres habilités du Bureau) afin de garantir la sécurité, la confidentialité et l&apos;intégrité de
							vos données personnelles contre tout accès non autorisé, altération ou divulgation.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Vos droits
					</Text>

					<Bloc>
						<Text>
							👉 Conformément à la réglementation européenne et française, vous disposez d&apos;un droit
							d&apos;accès, de rectification, d&apos;opposition et de suppression de vos données personnelles.
						</Text>
						<Text>
							Pour toute question ou demande d&apos;exercice de vos droits, vous pouvez contacter le club :
						</Text>
						<Text color="rouge-pale" className="font-semibold">
							{club.nom}
							<br />
							{club.adresse.rue}, {club.adresse.codePostal} {club.adresse.ville} – <Mail />
						</Text>
						<Text>
							Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez le droit
							d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et
							des Libertés) sur le site :{" "}
							<Link
								href="https://www.cnil.fr/fr/adresser-une-plainte"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								www.cnil.fr
							</Link>
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Modification de la politique de confidentialité
					</Text>

					<Bloc>
						<Text>
							La section Badminton du CACBO se réserve le droit de modifier la présente politique de
							confidentialité à tout moment afin de la conformer aux évolutions légales, réglementaires ou
							techniques.
						</Text>
						<Text>
							La date de mise à jour en haut de page sera modifiée en conséquence et applicable dès sa mise en
							ligne.
						</Text>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
}

export default Politique;
