import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Bloc from "@/components/Bloc";
import Caroussel from "@/components/Caroussel";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageLegend from "@/components/ImageLegend";
import PageLayout from "@/components/PageLayout";
import Palmares from "@/components/Palmares";
import Parent from "@/components/Parent";
import President from "@/components/President";
import Text from "@/components/Text";

export const metadata: Metadata = {
	title: "Histoire",
};

const Histoire = () => {
	return (
		<PageLayout>
			<Header title="HISTOIRE" subtitle="Le chemin parcouru depuis 2007" />

			<Banner
				src="/histoire/1.png"
				alt="Photo devant une table avec des raquettes"
			/>

			<Content>
				<Parent>
					<Text variant="chapo" className="px-5">
						Fondé en 2007, la section badminton du CACBO a grandi au rythme de
						ses bénévoles, de ses joueurs et des nombreuses générations qui ont
						fait vivre la section. Année après année, le club s’est construit
						une identité : une pratique accessible, une ambiance chaleureuse et
						un engagement associatif fort.
					</Text>

					<Text variant="chapo" className="px-5">
						À travers cette page, nous revenons sur les grandes étapes qui ont
						marqué notre histoire, des débuts modestes jusqu’à la réouverture du
						club en 2022, symbole d’un véritable renouveau.
					</Text>
				</Parent>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Les prémices du club (2007-2010)
					</Text>

					<Bloc>
						<Text>
							Le club voit le jour le <strong>15 mars 2007</strong>, à
							l’initiative de trois passionnés : Ahmed KASSIM (président),
							Laurent THOMAS (secrétaire) et Julien LARCHER (trésorier). 🖋️
						</Text>

						<Text as="p" variant="citation" color="rouge-pale">
							L’objectif : développer une pratique loisir accessible à tous,
							dans une ambiance conviviale et respectueuse.
						</Text>

						<Text>
							Les premiers créneaux se tiennent au gymnase Gaston Lacoste, sur{" "}
							<strong>5 terrains tracés et 3 créneaux hebdomadaires</strong> de
							deux heures, réunissant dès la première saison près de{" "}
							<strong>70 adhérents</strong>.
						</Text>

						<Text>
							<strong>Dès 2008</strong>, la section consolide ses bases avec une
							fréquentation élevée, en maintenant 3 créneaux hebdomadaires et un{" "}
							<strong>taux d’occupation moyen de 60% des terrains</strong> à
							chaque séance.
						</Text>
					</Bloc>

					<Text as="p" variant="chapo" color="rouge-pale" className="p-5">
						Les responsables notent déjà un fort engouement et la nécessité d’un
						encadrement de qualité pour les jeunes, amorçant la création de
						l’école de badminton dès la saison suivante pour les plus jeunes. 🧒
					</Text>

					<Bloc>
						<Text>
							<strong>En 2009</strong>, le club franchit une nouvelle étape : on
							compte <strong>près de 87 licenciés</strong>, et la section
							envisage de dépasser la barre symbolique des 100 adhérents.
						</Text>

						<Text>
							Les premières rencontres amicales avec d’autres clubs, comme
							Saint-Louis-de-Montferrand, sont organisées, et un tournoi interne
							devient un rendez-vous régulier.
						</Text>
					</Bloc>
				</Parent>

				<Text
					as="p"
					variant="chapo"
					color="rouge-pale"
					className="p-5 font-semibold"
				>
					Les premières années sont marquées par un fort engouement, une gestion
					saine et une belle cohésion autour des valeurs de partage et
					d’apprentissage.
				</Text>

				<ImageLegend
					src="/histoire/2.png"
					description="La finale d’un tournoi opposant le club à celui de la Jeunesse Yvracaise"
					className="rounded-xl"
				/>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Une nouvelle dynamique (2011-2013)
					</Text>

					<Bloc>
						<Text>
							<strong>En mars 2010,</strong> après cinq années d’activité,{" "}
							<strong>
								la section connaît ses premiers changements de direction
							</strong>{" "}
							avec l’élection d’un nouveau bureau, mené par Pierre DANGAYS, qui
							prend la suite d’Ahmed KASSIM.
						</Text>

						<Text as="p" variant="citation" color="rouge-pale">
							Sous sa présidence, le club entre dans une véritable phase de
							structuration et de modernisation. 🔝
						</Text>

						<Text>
							L’organisation interne se consolide, le Bureau gagne en efficacité
							et la communication du club franchit un cap décisif :{" "}
							<strong>
								création du logo, nouveaux maillots, lancement d’un site
								internet et développement d’une communication locale renforcée
								dans la vie locale.
							</strong>
						</Text>

						<Text>
							Cette période est également celle d’une forte expansion. Durant la
							saison 2011/12, <strong>le club atteint 111 licenciés</strong>,
							dont 28 jeunes inscrits à l’école de badminton.
						</Text>
					</Bloc>

					<Text as="p" variant="chapo" color="rouge-pale" className="p-5">
						Le club obtient sa première labellisation École Française de
						Badminton (EFB) 1 étoile lors de la saison 2010/11, une distinction
						qu’il conservera sept saisons consécutives, témoignant de la qualité
						et de la continuité de sa formation jeune. 🌟
					</Text>

					<Caroussel
						images={[
							{
								src: "/histoire/carousel1.png",
								alt: "Joueurs du club lors d’une séance (1/3)",
							},
							{
								src: "/histoire/carousel2.png",
								alt: "Joueurs du club lors d’une séance (2/3)",
							},
							{
								src: "/histoire/carousel3.png",
								alt: "Joueurs du club lors d’une séance (3/3)",
							},
						]}
						title="Retour en images"
					/>

					<Bloc>
						<Text>
							La section, forte de 3 créneaux adultes et 2 jeunes, s’impose
							comme l’un des clubs les plus actifs du district libournais.
						</Text>

						<Text>
							La mixité est un atout : environ <strong>42% de femmes</strong>{" "}
							parmi les licenciés, et un public venant à{" "}
							<strong>40% de Carbon-Blanc et 60% des communes voisines</strong>{" "}
							(Ambès, Yvrac, Sainte-Eulalie, Bassens…).
						</Text>

						<Text as="p" variant="citation" color="rouge-pale">
							Sur le plan sportif, la dynamique est remarquable.
						</Text>

						<Text>
							Les équipes adultes participent aux interclubs du district
							libournais, avec des résultats significatifs : en 2011, l’équipe
							mixte termine{" "}
							<strong>
								4<sup>e</sup>/14
							</strong>{" "}
							et frôle la montée en interdistrict, l’équipe hommes se classe 6
							<sup>e</sup>/8 après s’être extraite des poules de brassage.
						</Text>

						<Text>
							L’école de badminton progresse également, avec des{" "}
							<strong>
								jeunes classés 3<sup>e</sup> et 4<sup>e</sup> en catégorie
								minime
							</strong>
							.
						</Text>

						<Text>
							L’encadrement est assuré par des bénévoles diplômés (dont Grégory
							KWARTNIK, initiateur DIB) et un suivi personnalisé est mis en
							place.
						</Text>

						<Text>
							<strong>Durant la saison 2012/13,</strong> la section atteint son
							apogée : <strong>près de 110 licenciés</strong> et une structure
							bien établie.
						</Text>
					</Bloc>
				</Parent>

				<Text as="p" variant="chapo" color="rouge-pale" className="p-5">
					Lors de cette même saison, l’équipe senior mixte du club réalise une
					performance majeure en remportant le titre de Champion du District
					libournais. 🏆
				</Text>

				<Bloc>
					<Text>
						Cette même année, elle se hisse ensuite à la 6ᵉ place du classement
						interdistrict sur 48 équipes engagées, confirmant l’un des plus
						beaux résultats sportifs de l’histoire de la section.
					</Text>

					<Text>
						Cette période voit également la montée en puissance des tournois
						internes, des événements conviviaux et d’un réel esprit d’équipe qui
						soude les adhérents autour de valeurs communes.
					</Text>
				</Bloc>

				<Text
					as="p"
					variant="chapo"
					color="rouge-pale"
					className="p-5 font-semibold"
				>
					Une ère de renouveau et de cohésion, où la rigueur et la convivialité
					ont permis de poser des bases solides pour l’avenir du club.
				</Text>

				<ImageLegend
					src="/histoire/3.png"
					description="Juillet 2013"
					className="rounded-xl"
				/>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Une période de stabilité (2013-2015)
					</Text>

					<Bloc>
						<Text>
							<strong>En juin 2013,</strong>{" "}
							<strong>le club connaît un nouveau tournant</strong> avec
							l’élection de Wolfgang SCHRADER à la présidence.
						</Text>

						<Text>
							La section compte <strong>105 à 110 adhérents</strong>, dont près
							d’un quart de jeunes.
						</Text>

						<Text>
							L’école de badminton accueille en moyenne 24 jeunes, répartis sur
							deux créneaux : le mardi pour les confirmés, le mercredi pour les
							débutants.
						</Text>

						<Text>
							<strong>
								Le club continue de participer activement à la vie locale
							</strong>{" "}
							: tournois internes, rencontres interclubs (avec Yvrac,
							Sainte-Eulalie, Ambès, Bègles…), et sorties de fin d’année pour
							les jeunes.
						</Text>
					</Bloc>

					<Text as="p" variant="chapo" color="rouge-pale" className="p-5">
						L’équipe senior mixte remporte pour la deuxième fois consécutive le
						titre de Champion du District libournais et finit 5e en poule
						interdistrict (sur 38 équipes engagées). 🏆
					</Text>

					<Bloc>
						<Text>
							La saison 2014/15 marque néanmoins le début de difficultés
							d’organisation : les créneaux sont raccourcis, notamment le lundi,
							à cause du développement d’autres sections du CACBO.
						</Text>

						<Text as="p" variant="citation" color="rouge-pale">
							Sous son impulsion, le club oriente davantage son activité vers la
							compétition et les interclubs. ⚔️
						</Text>

						<Text>
							Cette évolution marque une transition dans l’esprit du club,
							jusque-là centré sur le loisir et la convivialité.{" "}
							<strong>
								La pratique devient plus compétitive, avec une forte dynamique
								autour des classements et des résultats sportifs.
							</strong>
						</Text>

						<Text>
							Cette orientation, bien que porteuse de réussite sur le plan
							sportif, conduit à une diminution progressive de la place du jeu
							loisir, et à une différenciation plus marquée entre les niveaux de
							jeu.
						</Text>
					</Bloc>
				</Parent>

				<ImageLegend
					src="/histoire/4.png"
					description="Notre école de badminton saison 2014/15"
					className="rounded-xl"
				/>

				<ImageLegend
					src="/histoire/5.png"
					description="Septembre 2014"
					className="rounded-xl"
				/>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Une transition marquée par les changements (2015-2018)
					</Text>

					<Bloc>
						<Text>
							L’année 2015 voit l’élection d’Éric PRIVAT à la présidence,
							assisté de Wolfgang SCHRADER comme vice-président.
						</Text>

						<Text>
							La section reste très active avec{" "}
							<strong>environ 100 licenciés</strong>, une école de badminton
							structurée et des équipes vétérans performantes.
						</Text>
					</Bloc>

					<Text as="p" variant="chapo" color="rouge-pale">
						Les vétérans se classent 2e en division 2 (district libournais)
						durant la saison 2014/15 et sont récompensés par le COGIBAD (comité
						départemental). 🥈
					</Text>

					<Bloc>
						<Text>
							Cependant, une instabilité progressive s’installe au sein du
							Bureau : plusieurs remaniements ont lieu entre 2016 et 2018, avec
							notamment Guillaume BENTABET puis Christophe LECLERCQ à la
							présidence, dans un contexte d’effectifs en légère baisse.
						</Text>

						<Text>
							Malgré cela, la section continue de défendre ses couleurs en
							interclubs à travers une{" "}
							<strong>structure compétitive solide</strong>, avec{" "}
							<strong>trois équipes engagées en interclubs</strong> (mixte,
							hommes et vétérans) tout en conservant une{" "}
							<strong>vie associative dynamique</strong> : tournois internes,
							entraînements collectifs, et moments conviviaux rassemblant
							loisirs et compétiteurs.
						</Text>
					</Bloc>
				</Parent>

				<ImageLegend
					src="/histoire/6.png"
					description="L’un des nombreux cours de l’école de badminton du club (octobre 2017)"
					className="rounded-xl"
				/>

				<Parent>
					<Bloc>
						<Text>
							Mais en 2018, la tendance s’inverse brutalement :{" "}
							<strong>les effectifs chutent de près de 50%</strong> avec une
							cinquantaine de licenciés, l’école de badminton s’arrête, et une
							partie des créneaux est supprimée.
						</Text>

						<Text as="p" variant="citation" color="rouge-pale">
							La situation est aggravée par la fermeture définitive du gymnase
							Gaston Lacoste, berceau historique du club, en juillet 2018 pour
							raisons de sécurité.
						</Text>

						<Text>
							Sa démolition en novembre 2019{" "}
							<strong>met la section en sommeil pour près de quatre ans</strong>
							, le temps qu’un nouveau complexe voie le jour. 😴
						</Text>
					</Bloc>
				</Parent>

				<ImageLegend
					src="/histoire/7.png"
					description="Le gymnase lors de sa démolition (novembre 2019)"
					className="rounded-xl"
				/>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						La renaissance de la section (depuis 2022)
					</Text>

					<Bloc>
						<Text>
							<strong>En septembre 2022</strong>, après quatre années de mise en
							sommeil forcée, la section badminton du CACBO renaît avec
							l’ouverture du Complexe sportif Philippe Madrelle, une salle
							moderne de 1 056 m² abritant désormais sept terrains, symbole d’un
							nouveau départ.
						</Text>

						<Text>
							Sous l’impulsion de Laurent THOMAS, co-fondateur du club en 2007,
							le club retrouve son esprit d’origine : convivialité, plaisir de
							jouer et ambiance familiale.
						</Text>

						<Text>
							Ce retour marque une volonté claire de renouer avec les valeurs
							qui ont façonné le club à ses débuts, loin des tensions et de la
							recherche de performance qui avaient progressivement éloigné les
							adhérents du loisir pur.
						</Text>

						<Text>
							Le club choisit dès sa réouverture de ne pas s’affilier à la
							Fédération Française de Badminton (FFBaD), privilégiant un modèle
							plus libre et accessible. Ce choix audacieux permet de proposer
							une adhésion à moindre coût comparé aux prix affichés dans les
							clubs affiliés, rendant la pratique plus inclusive.
						</Text>
					</Bloc>

					<Text as="p" variant="chapo" color="rouge-pale">
						Ce retour marque une volonté claire de renouer avec les valeurs qui
						ont façonné le club à ses débuts, loin des tensions et de la
						recherche de performance qui avaient progressivement éloigné les
						adhérents du loisir pur.
					</Text>

					<Bloc>
						<Text>
							Ce positionnement séduit immédiatement : de nombreux joueurs,
							parfois anciens compétiteurs, rejoignent le club pour retrouver le
							plaisir simple du jeu et de la camaraderie.
						</Text>

						<Text>
							Depuis sa réouverture, le club multiplie les initiatives pour
							renforcer la cohésion et la convivialité : des soirées le vendredi
							rassemblant régulièrement une trentaine de joueurs, des tournois
							internes festifs et sans enjeu, et des repas de fin d’année au
							restaurant, offerts par le club, pour prolonger la convivialité
							au-delà des terrains.
						</Text>

						<Text>
							Afin de rendre la pratique plus abordable, le club revend aussi
							des boîtes de volants en plumes de qualité, environ 50% moins
							chères que sur le marché.
						</Text>

						<Text>
							Loin de l’esprit de compétition qui avait autrefois créé des
							divisions internes, le club défend désormais un badminton ouvert à
							tous, basé sur le respect, la bienveillance et le plaisir partagé.
						</Text>
					</Bloc>
				</Parent>

				<Text
					as="p"
					variant="chapo"
					color="rouge-pale"
					className="p-5 font-semibold"
				>
					Aujourd’hui, le CACBO Badminton rassemble une centaine d’adhérents de
					tous niveaux, et perpétue l’esprit de 2007 : un lieu où le sport rime
					avec détente, entraide et passion.
				</Text>

				<ImageLegend
					src="/histoire/8.png"
					description="La nouvelle salle du complexe remplaçant le précédent gymnase à la réouverture du club, en septembre 2022"
					className="rounded-xl"
				/>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Notre palmarès
					</Text>

					<Bloc>
						<Text variant="h4" color="rouge-pale">
							Même si le club est aujourd’hui tourné exclusivement vers le
							loisir, il a longtemps porté les couleurs de Carbon-Blanc en
							interclubs. 🏆
						</Text>

						<Text>
							Pendant plus d’une décennie, nos équipes ont signé de belles
							performances et ont marqué l’histoire de la section.
						</Text>
					</Bloc>

					<Bloc>
						<Palmares
							title="Champion"
							subtitle="District libournais A"
							legend="Saisons 2012/13 et 2013/14 (senior mixte)"
						/>

						<Palmares
							title="Vice-champion"
							subtitle="District libournais A"
							legend="Saison 2016/17 (senior mixte)"
						/>

						<Palmares
							title="Vice-champion"
							subtitle="Départementale 2"
							legend="Saison 2014/15 (vétéran hommes)"
						/>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Nos présidents depuis 2007
					</Text>

					<Bloc>
						<President date="2006-2011" name="Ahmed KASSIM" />

						<President date="2011-2013" name="Pierre DANGAYS" />

						<President date="2013-2015" name="Wolfgang SCHRADER" />

						<President date="2015-2018" name="Eric PRIVAT" />

						<President date="2017-2018" name="Guillaume BENTABET" />

						<President date="2018-2019" name="Christophe LECLERCQ" />

						<President date="2022-" name="Laurent THOMAS" />
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Quelques chiffres clés
					</Text>

					<Bloc className="items-center">
						<Text as="p" variant="chiffre" color="rouge-pale">
							2007
						</Text>

						<Text>
							C’est l’année de création du club, fondé le 15 mars par trois
							passionnés.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							7
						</Text>

						<Text>Nombre de présidents qui se sont succédés depuis 2007.</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							2022
						</Text>

						<Text>
							C’est l’année de renaissance du club (le 19 septembre), quatre ans
							après sa mise en sommeil.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							71
						</Text>

						<Text>
							Nombre d’adhérents inscrits dès la première saison du club, un
							départ prometteur pour une nouvelle section.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							1056 m²
						</Text>

						<Text>Surface de la salle Philippe Madrelle.</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							98
						</Text>

						<Text>
							Moyenne d’adhérents par saison avant la mise en sommeil du club en
							2018.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							7
						</Text>

						<Text>
							C’est le nombre de saisons consécutives durant lesquelles le club
							a été labellisé EFB – 1 étoile.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							113
						</Text>

						<Text>
							Nombre record d’adhérents atteint par le club lors de la saison
							2016/17.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							6
						</Text>

						<Text>
							C’est le nombre de saisons où le club a comptabilisé plus de 100
							adhésions.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							86
						</Text>

						<Text>
							Moyenne d’adhérents par saison depuis la réouverture en 2022 — une
							preuve de l’intérêt toujours croissant pour le badminton à
							Carbon-Blanc.
						</Text>

						<Text as="p" variant="chiffre" color="rouge-pale">
							7
						</Text>

						<Text>
							C’est le nombre de terrains disponibles aujourd’hui, soit deux de
							plus qu’avant.
						</Text>
					</Bloc>
				</Parent>

				<Parent>
					<Text variant="h2-histoire" color="rouge">
						Et le CACBO dans tout ça ?
					</Text>

					<Bloc>
						<Text>
							<strong>
								Le Club Athlétique CarbonBlanais Omnisports (CACBO) est né le 25
								mai 1972
							</strong>{" "}
							d&apos;une initiative municipale visant à regrouper et développer
							les activités sportives de la commune, qu&apos;elles soient de
							compétition ou de loisir.
						</Text>

						<Text>
							<strong>
								Il résulte de la fusion entre le Club Athlétique CarbonBlanais
							</strong>{" "}
							(CACB), fondé le 1er octobre 1925 par Gaston Lacoste (le club de
							football de la ville), <strong>le Club Léo Lagrange</strong>,
							regroupant déjà plusieurs sections{" "}
							<strong>et la Pétanque carbonblanaise</strong>. Simon Cypel (1er
							adjoint au maire) en devient le premier président.
						</Text>

						<Text>
							La section badminton fait partie intégrante du CACBO et est
							soumise à ses règlements, statuts et cadre de gouvernance,
							garantissant la cohérence et la bonne gestion de l’ensemble des
							sections sportives de la ville.
						</Text>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
};

export default Histoire;
