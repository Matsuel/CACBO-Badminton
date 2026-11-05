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
	title: "Mentions légales",
};

const { lieu, rue, codePostal, ville } = club.adresse;

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
							Le présent site est édité par le CACBO Badminton, section du Club
							Athlétique CarbonBlanais Omnisports (CACBO), association loi 1901.
						</Text>
						<Text>
							<strong>Siège social :</strong> {lieu}, {rue}, {codePostal}{" "}
							{ville}
						</Text>
						<Text>
							<strong>SIREN/SIRET :</strong> 781 865 142 00025
						</Text>
						<Text>
							<strong>N° RNA :</strong> W332 000 297
						</Text>
						<Text>
							<strong>Directeur de la publication :</strong> Maël THOMAS
						</Text>
						<Text>
							<strong>Contact :</strong>{" "}
							<Link href={`mailto:${club.mail}`} className="underline">
								{club.mail}
							</Link>
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Hébergement
					</Text>

					<Bloc>
						<Text>Le site est hébergé par :</Text>
						<Text as="p" variant="h4">
							Vercel Inc.
						</Text>
						<Text>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</Text>
						<Text>
							<strong>Contact :</strong> privacy@vercel.com
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Propriété intellectuelle
					</Text>

					<Bloc>
						<Text>
							L&apos;ensemble des contenus présents sur ce site (textes, images,
							graphismes, logo, documents téléchargeables) sont la propriété
							exclusive du CACBO Badminton ou est utilisé avec autorisation.
						</Text>
						<Text>
							Toute reproduction, représentation, modification, diffusion ou
							exploitation, totale ou partielle, sans accord préalable écrit,
							est interdite conformément au Code de la Propriété Intellectuelle.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Protection des données personnelles &amp; cookies
					</Text>

					<Bloc>
						<Text>
							Le site cacbobad.fr collecte des données personnelles (formulaire
							de contact, adhésions &amp; commandes en ligne HelloAsso) et
							utilise des cookies d&apos;analyse statistique (Google Analytics).
						</Text>
						<Text>
							Pour connaître le détail de la collecte, des durées de
							conservation, des traitements effectués et exercer vos droits
							informatique et libertés, veuillez consulter notre{" "}
							<Link href="/politiques" className="underline">
								Politique de confidentialité
							</Link>
							.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Responsabilité
					</Text>

					<Bloc>
						<Text>
							Le CACBO Badminton s&apos;efforce d&apos;assurer l&apos;exactitude
							des informations diffusées sur le site. Toutefois, il ne saurait
							être tenu responsable :
						</Text>
						<List>
							<ListElement>
								d&apos;éventuelles erreurs ou omissions,
							</ListElement>
							<ListElement>
								d&apos;une interruption temporaire du site (maintenance,
								problème technique),
							</ListElement>
							<ListElement>
								ou de tout dommage direct ou indirect lié à l&apos;utilisation
								du site.
							</ListElement>
						</List>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Droit applicable
					</Text>

					<Bloc>
						<Text>
							L&apos;utilisation du site est régie par le droit français. En cas
							de litige, compétence exclusive est attribuée aux tribunaux
							compétents de Bordeaux.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Modification des mentions légales
					</Text>

					<Bloc>
						<Text>
							Le CACBO Badminton se réserve le droit de modifier et mettre à
							jour les présentes mentions légales à tout moment afin de rester
							conforme aux évolutions réglementaires et techniques.
						</Text>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
};

export default MentionsLegales;
