import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Bloc from "@/components/Bloc";
import Content from "@/components/Content";
import Header from "@/components/Header";
import List from "@/components/List";
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import Parent from "@/components/Parent";
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Guide de la raquette",
};

const Regles = () => {
	return (
		<PageLayout>
			<Header
				title="guide de la raquette"
				subtitle="Tout savoir sur sa raquette"
			/>

			<Banner src="/raquette/1.png" alt="Photo de plusieurs raquettes" />

			<Content>
				<Parent>
					<Text variant="h2" color="rouge">
						Pourquoi bien choisir sa raquette ?
					</Text>

					<Bloc>
						<Text>
							La raquette est l&apos;outil principal du joueur de badminton.
						</Text>

						<Text>
							Si, à première vue, toutes les raquettes se ressemblent, elles
							possèdent en réalité des caractéristiques très différentes qui
							influencent énormément le style de jeu, la puissance et le
							confort.
						</Text>

						<Text>
							Bien comprendre ces éléments permet de choisir une raquette
							adaptée à son niveau et à sa pratique.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Le poids de la raquette
					</Text>

					<Bloc>
						<Text variant="h4">
							Le poids est un critère essentiel. La plupart des raquettes pèsent
							entre 75 et 95 grammes (sans cordage).
						</Text>

						<List>
							<ListElement>
								Une <strong>raquette légère</strong> (75–80 g) est plus maniable
								et rapide, idéale pour la défense et les échanges rapides au
								filet. Elle demande cependant plus de technique pour générer de
								la puissance.
							</ListElement>
							<ListElement>
								Une <strong>raquette intermédiaire</strong> (80–85 g) représente
								un bon compromis entre maniabilité et puissance, et convient à
								la majorité des joueurs loisirs.
							</ListElement>
							<ListElement>
								Une <strong>raquette plus lourde</strong> (85–95 g) apporte
								davantage de puissance, mais peut fatiguer plus vite le bras,
								surtout pour un joueur débutant.
							</ListElement>
						</List>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						L’équilibre : manche, tête ou neutre
					</Text>

					<Bloc>
						<Text variant="h4">
							Au-delà du poids total, il faut aussi regarder où le poids est
							réparti. On distingue trois types d’équilibre :
						</Text>

						<List>
							<ListElement>
								<strong>Équilibre en tête</strong> : la raquette a plus de poids
								vers le haut. Cela procure plus de puissance pour les smashs et
								les frappes longues, mais réduit la maniabilité.
							</ListElement>
							<ListElement>
								<strong>Équilibre en manche</strong> : le poids est concentré
								vers le bas. La raquette est alors très maniable et rapide,
								parfaite pour le jeu défensif et les réactions rapides.
							</ListElement>
							<ListElement>
								<strong>Équilibre neutre</strong> : la répartition est
								équilibrée entre manche et tête. C’est un choix polyvalent,
								recommandé pour les joueurs loisir et ceux qui veulent un
								compromis.
							</ListElement>
						</List>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						La rigidité de la tige
					</Text>

					<Bloc>
						<Text variant="h4">
							La tige (ou shaft) de la raquette peut être plus ou moins rigide.
						</Text>

						<List>
							<ListElement>
								Une <strong>tige souple</strong> offre un effet de catapulte :
								elle aide à générer de la puissance sans trop d’effort, mais la
								précision est moindre. Parfait pour les débutants ou joueurs
								loisirs.
							</ListElement>
							<ListElement>
								Une <strong>tige intermédiaire</strong> est polyvalente et
								permet un bon compromis entre puissance et précision.
							</ListElement>
							<ListElement>
								Une <strong>tige rigide</strong> favorise la précision et la
								réactivité, mais demande plus de force et de technique pour
								exploiter la puissance. Elle est réservée aux joueurs confirmés.
							</ListElement>
						</List>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						Le cordage et sa tension
					</Text>

					<Bloc>
						<Text>
							Le cordage influence directement le ressenti et la performance de
							la raquette.
						</Text>

						<Text variant="h4">La tension se mesure en kilos :</Text>

						<List>
							<ListElement>
								Une <strong>tension basse</strong> (9–10,5 kg) donne plus de
								puissance grâce à un effet trampoline, mais moins de contrôle.
								Idéal pour les débutants.
							</ListElement>
							<ListElement>
								Une <strong>tension intermédiaire</strong> (10,5–12 kg) est
								polyvalente, adaptée aux joueurs réguliers.
							</ListElement>
							<ListElement>
								Une <strong>tension élevée</strong> (12–13,5 kg ou plus) procure
								beaucoup de précision et de contrôle, mais demande une
								excellente technique.
							</ListElement>
						</List>
					</Bloc>

					<Bloc>
						<Text>
							Le cordage peut être fin (plus de sensations mais moins durable)
							ou plus épais (plus résistant mais un peu moins précis). Les
							cordages les plus populaires sont par exemple le Yonex BG65 (très
							durable) ou le BG80 (plus de contrôle et de toucher).
						</Text>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
};

export default Regles;
