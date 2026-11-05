import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Bloc from "@/components/Bloc";
import Content from "@/components/Content";
import Header from "@/components/Header";
import List from "@/components/List";
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import Parent from "@/components/Parent";
import Terrain from "@/components/Terrain";
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Règles du jeu",
};

const Regles = () => {
	return (
		<PageLayout>
			<Header
				title="RÈGLES DU JEU"
				subtitle="Tout ce qu'il faut savoir avant de jouer !"
			/>

			<Banner
				src="/regles/1.png"
				alt="Photo devant une table avec des raquettes"
			/>

			<Content>
				<Parent>
					<Text variant="h2" color="rouge">
						1. Déroulement du match
					</Text>

					<Bloc>
						<Text variant="h4">Comment se déroule un match ? 🎯</Text>

						<Text>
							Le badminton se joue en{" "}
							<span className="font-semibold">3 sets maximum</span>. Chaque set
							est remporté par le joueur ou l’équipe qui marque{" "}
							<span className="font-semibold">15 points</span>.
						</Text>

						<Text>
							Toutefois, si les deux adversaires atteignent un score de 15-15,
							le jeu continue jusqu’à ce qu’un joueur ou une équipe ait 2 points
							d’écart (par exemple, 17-15, 16-14, etc).
						</Text>

						<Text>
							Si le score atteint 20-20, la règle change : le joueur ou l’équipe
							qui atteint{" "}
							<span className="font-semibold">21 points en premier</span>{" "}
							remporte le set.
						</Text>

						<Text>
							Une fois le set gagné,{" "}
							<span className="font-semibold">
								l&apos;équipe ou le joueur gagnant sert en premier
							</span>{" "}
							dans le set suivant.
						</Text>
					</Bloc>

					<Bloc>
						<Text variant="h4">ℹ️ Exemple :</Text>

						<Text>
							<span className="font-semibold">Set 1</span> : 15-13 (2 pts
							d’écart)
						</Text>

						<Text>
							<span className="font-semibold">Set 2</span> : 12-15 (2 pts
							d’écart)
						</Text>

						<Text>
							<span className="font-semibold">Set 3</span> : 21-20 (point sec)
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						2. Les limites du terrain
					</Text>

					<Bloc>
						<Text variant="h3">
							Simple et double : quelles différences ? 🤔
						</Text>

						<Text variant="h4" color="rouge-pale">
							En simple, les joueurs utilisent le terrain restreint (les lignes
							intérieures sur les côtés et les lignes de fond).
						</Text>

						<List>
							<ListElement>
								Au service, le volant doit atterrir dans le carré de service
								diagonalement opposé au serveur. Si le service est court ou hors
								de cette zone, il est considéré comme faute.
							</ListElement>
							<ListElement>
								En jeu, toute la partie du terrain située entre les lignes
								intérieures est valable.
							</ListElement>
						</List>

						<Text variant="h4" color="rouge-pale">
							En double, le terrain s’élargit pour inclure les couloirs latéraux
							extérieurs.
						</Text>

						<List>
							<ListElement>
								Au service, il doit atterrir dans le carré de service
								diagonalement opposé ou dans les couloirs de service latéraux.
							</ListElement>
							<ListElement>
								En jeu, l’intégralité du terrain, y compris les couloirs
								latéraux, est utilisée.
							</ListElement>
						</List>
					</Bloc>

					<Terrain type="simple" />

					<Terrain type="double" />
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						3. Le service et le placement des joueurs
					</Text>
					<Bloc>
						<Text variant="h3">Comment servir et où se mettre ?</Text>

						<Text>
							Le joueur ou l&apos;équipe qui gagne un point prend le service. Le
							service se fait toujours en diagonale. En simple, le serveur se
							place à droite si son score est pair et à gauche si impair. En
							double, c&apos;est pareil, mais les joueurs ne changent de côté
							qu&apos;en cas de point marqué sur leur service.
						</Text>
					</Bloc>

					<Bloc>
						<Text variant="h3">Quand changer de demi-terrain ? 🔄</Text>

						<Text>
							Les joueurs changent de côté{" "}
							<span className="font-semibold">après chaque set</span>. Si un
							match atteint un troisième set, ils changent à 11 points.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						4. Les fautes en match
					</Text>
					<Bloc>
						<Text variant="h4">Au service</Text>

						<List>
							<ListElement>
								Frapper le volant au-dessus de la taille, ne pas respecter la
								diagonale, mordre les lignes avec son pied lors du service, ou
								arrêter le mouvement de la raquette.
							</ListElement>
						</List>

						<Text variant="h4">Au cours du jeu</Text>

						<List>
							<ListElement>
								Concernant le volant : lorsqu&apos;il est envoyé hors des
								limites du terrain, qu&apos;il ne passe pas au-dessus du filet
								ou passe en dessous, qu&apos;il touche le plafond, qu&apos;il
								est frappé successivement par un joueur et son partenaire ou
								qu&apos;il est frappé 2 fois par le même joueur.
							</ListElement>
							<ListElement>
								Joueur touchant le filet ou ses supports avec sa raquette, son
								corps ou ses vêtements, envahissement du terrain adverse
								par-dessus ou par-dessous le filet ou encore l’obstruction ou la
								distraction délibérée de l&apos;adversaire.
							</ListElement>
						</List>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						5. Le positionnement en Doubles et le tirage au sort
					</Text>
					<Bloc>
						<Text variant="h3">La stratégie est primordiale ! 🤝</Text>

						<Text>
							En double, après le service, les partenaires sont libres de leurs
							mouvements et doivent se coordonner pour couvrir le terrain
							efficacement. Au service, un joueur se place à l&apos;avant tandis
							que l&apos;autre reste en fond de court. Puis par la suite au
							cours du jeu, les joueurs se placent en côté-côté lorsqu&apos;ils
							doivent défendre.
						</Text>
					</Bloc>

					<Bloc>
						<Text variant="h3">Le tirage au sort</Text>

						<Text>
							Avant le début du match, un tirage au sort détermine qui servira
							en premier ou choisira le côté du terrain.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2" color="rouge">
						6. Les erreurs de zone de service et les &quot;lets&quot;
					</Text>
					<Bloc>
						<Text variant="h3">Que se passe-t-il en cas d&apos;erreur ?</Text>

						<Text>
							Si un joueur sert ou reçoit dans la mauvaise zone ou que ce
							n&apos;était pas son tour,{" "}
							<span className="font-semibold">le jeu continue</span>, mais{" "}
							<span className="underline">
								l&apos;erreur doit être corrigée
							</span>{" "}
							pour le prochain service et{" "}
							<span className="font-semibold">le score reste maintenu</span>.
						</Text>
					</Bloc>

					<Bloc>
						<Text variant="h3">Quand arrêter un échange ? ⏸️</Text>

						<Text>
							Un &quot;let&quot; est déclaré si le serveur sert avant que le
							receveur ne soit prêt, ou si un incident imprévu se produit (comme
							un volant cassé).
						</Text>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
};

export default Regles;
