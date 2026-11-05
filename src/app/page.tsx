import Button from "@/components/Button";
import Caroussel from "@/components/Caroussel";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageLegend from "@/components/ImageLegend";
import List from "@/components/List";
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import Bloc from "../components/Bloc";
import Banner from "@/components/Banner";
import Text from "@/components/Text";
import Creneaux from "@/components/Creneaux";

export default function Home() {
	return (
		<PageLayout>
			<Header
				eyebrow="Bienvenue"
				title="CACBO Badminton"
				h1ClassName="break-normal"
				className="gap-5!"
				subtitle={
					<div className="flex flex-col">
						<span>Club de badminton pour adultes, </span>
						<span>basé à Carbon-Blanc (33)</span>
					</div>
				}
				cta={
					<Button href="/adherer" icon="send">
						Nous rejoindre
					</Button>
				}
			/>

			<Banner src="/acceuil/1.png" alt="Photo de groupe de badminton" />

			<Content>
				<Bloc title="Créé en 2007 à Carbon-Blanc." key={"created-in-2007"}>
					<Text>
						Notre club réunit des passionnés de badminton de tous niveaux.
						L’ambiance y est familiale et conviviale, propice à la détente et au
						partage.
					</Text>

					<Text variant="h4" color="rouge-pale">
						Que vous soyez compétiteur ou simplement en quête de loisirs, vous
						trouverez chez nous un cadre chaleureux pour pratiquer sans
						pression.
					</Text>

					<Text>Envie d&apos;en savoir plus ?</Text>

					<Button href="/histoire" icon="external">
						Découvrir notre histoire
					</Button>
				</Bloc>

				<Caroussel
					images={[
						{
							src: "/acceuil/caroussel1.png",
							alt: "Match de double au gymnase du club",
						},
						{
							src: "/acceuil/caroussel2.png",
							alt: "Joueur en plein échange au gymnase",
						},
					]}
					title="Notre club en photos"
				/>

				<Bloc
					title="Envie de taper dans le volant ?"
					key={"want-to-hit-the-shuttlecock"}
				>
					<Text variant="h4">Nos créneaux sont les :</Text>

					<Creneaux strong jours="pluriel" />

					<Text>
						Notre complexe sportif se situe au{" "}
						<span className="font-semibold">24 rue Pasteur</span> à
						Carbon-Blanc. 📍
					</Text>

					<Button href="/contact" icon="external">
						En savoir plus
					</Button>
				</Bloc>

				<ImageLegend
					src="/acceuil/partage.png"
					description="Parce que le club, c’est aussi des moments de partage après l’effort ! "
				/>

				<Bloc title="Venez jouer avec nous ! 🤝">
					<Text>
						Le badminton, c&apos;est encore mieux à plusieurs ! Que vous soyez
						débutant ou confirmé, rejoignez-nous et profitez de créneaux adaptés
						à tous les niveaux.
					</Text>

					<Text variant="h4">Tarifs d’adhésion :</Text>

					<List>
						<ListElement>
							<span className="font-semibold">50 €</span> pour un adulte
						</ListElement>
						<ListElement>
							<span className="font-semibold">90 €</span> pour un couple
						</ListElement>
					</List>

					<Text>
						Jouez en toute liberté, échangez avec d&apos;autres passionnés et
						participez à nos soirées ! ⚡
					</Text>

					<Button href="/adherer" icon="external">
						Nous rejoindre
					</Button>
				</Bloc>

				<ImageLegend
					src="/acceuil/plaisir.png"
					description="Smash, défense, amorti... et surtout du plaisir !"
				/>

				<Bloc title="Les règles essentielles du bad’">
					<Text variant="h4">
						Avant d’entrer sur le terrain, un rappel des bases :
					</Text>

					<List>
						<ListElement>
							Le service doit être effectué en diagonale, sous la taille.
						</ListElement>
						<ListElement>
							Un set se joue en 21 points, avec 2 points d’écart minimum.
						</ListElement>
						<ListElement>Le volant touche la ligne ? Il est bon !</ListElement>
					</List>
					<Button href="/regles" icon="external">
						En savoir plus
					</Button>
				</Bloc>

				<ImageLegend
					src="/acceuil/ensemble.png"
					alt="Joueurs du club en pleine séance au gymnase"
				/>

				<Bloc title="Une question ? On a la réponse !">
					<Text>
						Vous avez des interrogations sur le fonctionnement du club, les
						inscriptions ou les équipements nécessaires ?
					</Text>

					<Button href="/faq" icon="external">
						Voir notre FAQ
					</Button>
				</Bloc>

				<ImageLegend
					src="/acceuil/ensemble2.png"
					description="Ici, on joue, on rigole et on progresse ensemble !"
				/>

				<Bloc variant="outline">
					<Text
						variant="h3"
						color="rouge"
						className="text-[20px] leading-5 font-bold"
					>
						Eh, qu’est-ce t’attends ?{" "}
						<span className="text-noir">Rejoins-nous !</span> 😉
					</Text>

					<Text>
						Fais partie de l&apos;aventure : rejoins une équipe où convivialité
						rime avec passion.
					</Text>

					<Button href="/adherer" icon="external">
						Je m’inscris
					</Button>
				</Bloc>
			</Content>
		</PageLayout>
	);
}
