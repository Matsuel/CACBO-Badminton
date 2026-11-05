import type { Metadata } from "next";
import Image from "next/image";
import Banner from "@/components/Banner";
import Bloc from "@/components/Bloc";
import Button from "@/components/Button";
import Content from "@/components/Content";
import Creneaux from "@/components/Creneaux";
import Documents from "@/components/Document";
import Header from "@/components/Header";
import List from "@/components/List";
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import Parent from "@/components/Parent";
import Register from "@/components/Register";
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Adhérer",
};

const Adherer = () => {
	return (
		<PageLayout>
			<Header
				title="ADHÉRER"
				subtitle="Prêt à nous rejoindre ?"
				cta={<Register saison="26/27" open={false} />}
			/>

			<Banner
				src="/adherer/1.png"
				alt="Photo devant une table avec des raquettes"
			/>

			<Content>
				<Parent>
					<Text variant="h2" color="rouge">
						Pourquoi nous rejoindre ?
					</Text>

					<Bloc variant="outline">
						<Text variant="h4">
							Profitez de{" "}
							<span className="text-rouge">-25% chez Sport Article</span> (hors
							cordages/volants) grâce à notre partenariat !
						</Text>
					</Bloc>

					<Bloc>
						<Text>
							En rejoignant notre club, vous intégrez une{" "}
							<strong>communauté accueillante</strong> et{" "}
							<strong>dynamique</strong>,{" "}
							<strong>ouverte à tous les niveaux</strong> de pratique.
						</Text>

						<Text>
							Nous offrons un cadre chaleureux où l’ambiance familiale et
							conviviale favorise à la fois le plaisir de jouer et la
							progression.
						</Text>

						<Text>
							Que vous soyez compétiteur ou amateur, vous bénéficierez d&apos;
							<strong>infrastructures modernes</strong>, de{" "}
							<strong>créneaux variés</strong> adaptées à vos besoins, et
							d&apos;un esprit sans prise de tête. 😎
						</Text>

						<Text>
							De plus, nos <span className="underline">soirées régulières</span>{" "}
							🎉 sont l&apos;occasion idéale de renforcer les liens et de{" "}
							<strong>partager des moments de détente</strong> en dehors des
							terrains. Ici, c&apos;est avant tout le plaisir du sport et du
							partage qui prime !
						</Text>
					</Bloc>

					<Bloc variant="outline">
						<Text variant="h4">
							Profitez de <span className="text-rouge">3</span> séances d’essai
							sans engagement avant de vous inscrire !
						</Text>
					</Bloc>

					<Bloc className="gap-[15px]">
						<Text variant="h4">Assurance &amp; couverture</Text>

						<Text>
							En adhérant à la section badminton,{" "}
							<strong>
								vous bénéficiez automatiquement de la Responsabilité Civile
							</strong>{" "}
							(RC) souscrite par le CACBO auprès de Groupama.
						</Text>

						<Text>
							Elle couvre les{" "}
							<strong>
								dommages corporels ou matériels que vous pourriez causer
								involontairement à un tiers
							</strong>{" "}
							(autre joueur, matériel du gymnase) lors de nos créneaux (cette
							assurance ne couvre pas vos propres blessures en l&apos;absence de
							tiers responsable).
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Comment ?
					</Text>

					<Bloc variant="outline">
						<Text variant="h4">
							Adhésion simplifiée : inscrivez-vous en ligne ! 🌐
						</Text>
						<Text>Inscrivez-vous facilement en ligne grâce à HelloAsso !</Text>

						<Text>
							Évitez l’impression des documents : remplissez le formulaire et
							réglez votre cotisation directement sur la plateforme, en toute
							simplicité.
						</Text>

						<Button
							href="https://www.helloasso.com/associations/cacbo-badminton"
							icon="external"
						>
							S’inscrire en ligne
						</Button>
					</Bloc>

					<Bloc title="Documents nécessaires : préparez votre dossier 📋">
						<Text>
							Pour valider votre inscription, nous aurons besoin de quelques
							documents indispensables :
						</Text>

						<List>
							<ListElement>
								<strong>Formulaire d’inscription</strong> : à remplir pour nous
								transmettre vos informations essentielles.
							</ListElement>
							<ListElement>
								<strong>Questionnaire de santé</strong> : à compléter pour
								évaluer votre condition physique.{" "}
								<span className="text-rouge">
									Si vous répondez positivement à une ou plusieurs questions
								</span>
								, un <strong>certificat médical</strong> daté de moins de 6 mois
								sera requis.
							</ListElement>
						</List>

						<Text>
							Ces documents sont essentiels pour garantir la sécurité de tous
							nos adhérents et assurer une pratique du badminton en toute
							sérénité. Pensez à les préparer pour faciliter votre inscription !
						</Text>
					</Bloc>

					<Bloc>
						<Text variant="h3">
							Fichiers à télécharger (si inscription papier)
						</Text>
						<Documents
							href="/adherer/Questionnaire santé FFBaD (page 1).pdf"
							content="Questionnaire de santé (obligatoire)"
						/>
						<Documents
							href="/adherer/Fiche d'inscription 26-27 (club).pdf"
							content="Formulaire d’inscription"
						/>
						<Documents
							href="/adherer/Certificat médical (club).pdf"
							content="Certificat médical (à fournir si le questionnaire est positif)"
						/>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Où et à quelle heure ?
					</Text>

					<Bloc>
						<Text>
							Nous nous situons au Complexe sportif Philippe Madrelle, à
							Carbon-Blanc (24 rue Pasteur). 📍
						</Text>

						<Text variant="h4">Voies d’accès :</Text>

						<Text>
							🚗 <strong className="text-rouge-pale">En voiture :</strong>
						</Text>

						<List>
							<ListElement>
								Depuis le centre de Bordeaux, prenez la N230, puis la sortie 26
								vers Carbon-Blanc
							</ListElement>
							<ListElement>
								Suivez la D10 jusqu&apos;à la Rue Pasteur
							</ListElement>
						</List>

						<Text>
							🚌 <strong className="text-rouge-pale">En bus :</strong>
						</Text>

						<List>
							<ListElement>
								Ligne 93 (TBM) : Arrêt Pasteur à proximité du complexe
							</ListElement>
							<ListElement>
								Ligne 7 (TBM) : Arrêt La Gardette (10-15 minutes à pied)
							</ListElement>
						</List>

						<Text>
							🚋 <strong className="text-rouge-pale">En tram :</strong>
						</Text>

						<List>
							<ListElement>
								Ligne A du tram à direction de La Gardette (puis 10-15 min de
								marche)
							</ListElement>
						</List>

						<Image
							src="/adherer/map.png"
							alt="Carte d'accès au complexe sportif Philippe Madrelle"
							width={2116}
							height={1000}
							sizes="100vw"
							className="w-full h-auto rounded-xl"
						/>
					</Bloc>

					<Bloc variant="outline">
						<Text variant="h4">
							Créneaux flexibles : jouez quand vous voulez ! ⏰
						</Text>

						<Creneaux jours="minuscule" />
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						À quel prix ?
					</Text>

					<Bloc variant="outline">
						<Text variant="h3">
							Tarifs avantageux : adhérez à prix réduits ! 💶
						</Text>

						<Text>
							Nous vous proposons deux formules adaptées à vos besoins :
						</Text>

						<List>
							<ListElement>
								<strong>Formule adulte</strong> :{" "}
								<span className="text-rouge-pale">50 €</span> par personne.
							</ListElement>
							<ListElement>
								<strong>Formule couple</strong> :{" "}
								<span className="text-rouge-pale">90 €</span> pour 2 personnes,
								idéale pour venir jouer à deux, que vous soyez en couple ou
								simplement entre amis.
							</ListElement>
						</List>
					</Bloc>

					<Bloc>
						<Text variant="h4">
							Comment offrons-nous des prix aussi bas ? 🤑
						</Text>

						<Text>
							Nos tarifs sont particulièrement attractifs car notre club
							n&apos;est pas affilié à la Fédération Française de Badminton
							(FFBaD).
						</Text>

						<Text>
							Cela signifie que{" "}
							<strong className="text-rouge-pale">
								vous ne payez que la cotisation au club
							</strong>
							, sans les coûts additionnels pour la licence fédérale, ni les
							contributions à la Ligue et au Comité départemental.
						</Text>

						<Text>
							Profitez d&apos;une adhésion simple et accessible, pour jouer en
							toute liberté, à un prix imbattable ! 💸
						</Text>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
};

export default Adherer;
