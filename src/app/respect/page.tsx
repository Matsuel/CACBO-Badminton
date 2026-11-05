import type { Metadata } from "next";
import Link from "next/link";
import Bloc from "@/components/Bloc";
import Content from "@/components/Content";
import Documents from "@/components/Document";
import Header from "@/components/Header";
import List from "@/components/List";
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import Parent from "@/components/Parent";
import Text from "@/components/Text";
import { club } from "@/constantes/club";

export const metadata: Metadata = {
	title: "Respect & prévention",
};

const engagements = [
	{
		emoji: "🤝",
		titre: "Respect",
		texte: "Nous favorisons l'écoute, le dialogue et la courtoisie.",
	},
	{
		emoji: "🚫",
		titre: "Tolérance zéro",
		texte:
			"Aucun comportement discriminant, sexiste, agressif ou humiliant n'est accepté.",
	},
	{
		emoji: "🌍",
		titre: "Inclusion",
		texte:
			"Toutes les personnes sont les bienvenues quelles que soient leurs origines, croyances ou parcours.",
	},
	{
		emoji: "🔒",
		titre: "Confidentialité",
		texte: "Chaque signalement est traité avec sérieux et discrétion.",
	},
];

const contactsUtiles = [
	{
		numeros: ["05 57 77 53 10"],
		nom: "Brigade de gendarmerie de Carbon-Blanc",
	},
	{
		numeros: ["05 40 54 73 43"],
		nom: "Service Départemental de la Jeunesse, de l’Engagement et des Sports (SDJES) de la Gironde",
	},
	{
		numeros: ["06 41 10 59 15", "05 56 00 99 05"],
		nom: "Maëlys VIRMAUX (CDOS Gironde)",
	},
	{ numeros: ["17"], nom: "Police" },
	{ numeros: ["114"], nom: "Urgences par SMS" },
	{ numeros: ["119"], nom: "Enfance en danger" },
];

const Respect = () => {
	return (
		<PageLayout>
			<Header title="respect & prévention" subtitle="Un club ouvert à tous" />

			<Content>
				<Bloc>
					<Text as="p" variant="h4">
						Le CACBO Badminton s&apos;engage à promouvoir une pratique du
						badminton fondée sur le respect, l&apos;inclusion et la
						convivialité.
					</Text>

					<Text>
						Chaque adhérent doit pouvoir évoluer dans un environnement serein où
						chacun trouve sa place, quel que soit son niveau, son parcours ou
						son expérience.
					</Text>
				</Bloc>

				<Parent>
					<Text variant="h2" color="rouge">
						Nos engagements
					</Text>

					<div className="w-full grid grid-cols-2 items-start gap-5">
						{[engagements.slice(0, 2), engagements.slice(2)].map((colonne) => (
							<div key={colonne[0].titre} className="flex flex-col gap-5">
								{colonne.map(({ emoji, titre, texte }) => (
									<Bloc key={titre} className="gap-[15px] text-center">
										<Text
											as="span"
											variant="emoji"
											aria-hidden
											className="w-full"
										>
											{emoji}
										</Text>
										<Text as="p" variant="h4" className="w-full font-medium">
											{titre}
										</Text>
										<Text className="w-full">{texte}</Text>
									</Bloc>
								))}
							</div>
						))}
					</div>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Prévention & intégrité
					</Text>

					<Bloc>
						<Text>
							<strong>Référent du club :</strong> Laurent THOMAS
						</Text>

						<Text>
							Pour toute question ou signalement, vous pouvez contacter
							directement le Bureau du club à :
						</Text>

						<Text as="p" variant="h4">
							<Link href={`mailto:${club.mail}`}>{club.mail}</Link> –{" "}
							<Link href={club.telephone.lien}>{club.telephone.affichage}</Link>
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Comment signaler une situation ?
					</Text>

					<Bloc>
						<Text as="p" variant="h4">
							Sous forme d’étapes
						</Text>

						<List>
							<ListElement>
								Alerter un membre du Bureau du club ou du Bureau Exécutif du
								CACBO et/ou le référent du club.
							</ListElement>
							<ListElement>
								En cas de besoin, contacter directement les organismes
								compétents (liste ci-dessous).
							</ListElement>
						</List>
					</Bloc>

					<Bloc>
						<Text as="p" variant="h4">
							Avec la fiche officielle
						</Text>

						<Documents href="/manque" content="Fiche de signalement (CDOS)" />
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Contacts utiles
					</Text>

					<Bloc>
						<List className="gap-[15px]">
							{contactsUtiles.map(({ numeros, nom }) => (
								<ListElement key={nom}>
									{numeros.map((numero, index) => (
										<span key={numero}>
											{index > 0 && " / "}
											<strong>
												<Link href={`tel:${numero.replaceAll(" ", "")}`}>
													{numero}
												</Link>
											</strong>
										</span>
									))}{" "}
									– {nom}
								</ListElement>
							))}
						</List>
					</Bloc>

					<Bloc>
						<Text as="p" variant="h4">
							Accompagnement, aide et écoute sur les violences
							sexistes/sexuelles
						</Text>

						<Documents href="/manque" content="Associations en Gironde" />
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Notre règlement intérieur
					</Text>
					<Bloc>
						<Text>
							Les règles relatives au respect, à l&apos;éthique, aux violences
							sexistes et sexuelles ainsi qu&apos;aux procédures de signalement
							sont détaillées dans le règlement intérieur, téléchargeable
							ci-dessous :
						</Text>

						<Documents
							href="/bureau/Règlement intérieur (club - 2026).pdf"
							content="Télécharger le règlement intérieur du club"
						/>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
};

export default Respect;
