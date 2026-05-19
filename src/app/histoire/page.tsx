import Image from "next/image";
import Bloc from "@/components/Bloc";
import BlocIntro from "@/components/BlocIntro";
import BlocText from "@/components/BlocText";
import Caroussel from "@/components/Caroussel";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageLegend from "@/components/ImageLegend";
import PageLayout from "@/components/PageLayout";
import Parent from "@/components/Parent";
import SingleTitle from "@/components/SingleTitle";
import { textVariants } from "@/constantes/theme";

const Histoire = () => {
	return (
		<PageLayout>
			<Header title="HISTOIRE" subtitle="Le chemin parcouru depuis 2007" />

			<Content>
				<Image
					src="/histoire/1.png"
					alt="Photo devant une table avec des raquettes"
					className="rounded-xl"
					width={2000}
					height={2000}
				/>

				<Parent>
					<BlocIntro>
						Fondé en 2007, la section badminton du CACBO a grandi au rythme de
						ses bénévoles, de ses joueurs et des nombreuses générations qui ont
						fait vivre la section. Année après année, le club s’est construit
						une identité : une pratique accessible, une ambiance chaleureuse et
						un engagement associatif fort.
					</BlocIntro>

                    <BlocIntro>
                        À travers cette page, nous revenons sur les grandes étapes qui ont marqué notre histoire, des débuts modestes jusqu’à la réouverture du club en 2022, symbole d’un véritable renouveau.
                    </BlocIntro>
				</Parent>

				<Parent>
					<SingleTitle>Les prémices du club (2007-2010)</SingleTitle>

					<Bloc>
						<BlocText>
							Le club voit le jour le{" "}
							<span className="text-redpale font-medium">15 mars 2007</span>, à
							l’initiative de trois passionnés : Ahmed KASSIM (président),
							Laurent THOMAS (secrétaire) et Julien LARCHER (trésorier). 🖋️
						</BlocText>

						<p className="font-Poppins font-semibold text-xl text-redcolor leading-4">
							L’objectif : développer une pratique loisir accessible à tous,
							dans une ambiance conviviale et respectueuse.
						</p>

						<BlocText>
							Les premiers créneaux se tiennent au gymnase Gaston Lacoste, sur{" "}
							<span className="text-redpale font-medium">
								5 terrains tracés et 3 créneaux hebdomadaires
							</span>{" "}
							de deux heures, réunissant dès la première saison près de{" "}
							<span className="text-redpale font-medium">70 adhérents</span>.
						</BlocText>

						<BlocText>
							<span className="font-medium">Dès 2008</span>, la section
							consolide ses bases avec une fréquentation élevée, en maintenant 3
							créneaux hebdomadaires et un{" "}
							<span className="text-redpale font-medium">
								taux d’occupation moyen de 60% des terrains
							</span>{" "}
							à chaque séance.
						</BlocText>

						<BlocText>
							Les responsables notent déjà un fort engouement et la nécessité
							d’un encadrement de qualité pour les jeunes, amorçant la{" "}
							<span className="text-redpale font-medium">
								création de l’école de badminton
							</span>{" "}
							dès la saison suivante pour les plus jeunes. 🧒
						</BlocText>

						<BlocText>
							<span className="font-medium">En 2009</span>, le club franchit une
							nouvelle étape : on compte{" "}
							<span className="text-redpale font-medium">
								près de 87 licenciés
							</span>
							, et la section envisage de dépasser la barre symbolique des 100
							adhérents.
						</BlocText>

						<BlocText>
							Les premières rencontres amicales avec d’autres clubs, comme
							Saint-Louis-de-Montferrand, sont organisées, et un tournoi interne
							devient un rendez-vous régulier.
						</BlocText>
					</Bloc>
				</Parent>

				<p className="p-5 font-Poppins font-semibold text-2xl text-redcolor leading-5">
					Les premières années sont marquées par un fort engouement, une gestion
					saine et une belle cohésion autour des valeurs de partage et
					d’apprentissage.
				</p>

				<ImageLegend
					src="/histoire/2.png"
					description="La finale d’un tournoi opposant le club à celui de la Jeunesse Yvracaise"
					className="rounded-xl"
				/>

				<Parent>
					<SingleTitle>Une nouvelle dynamique (2010-2013)</SingleTitle>

					<Bloc>
						<BlocText>
							En mars 2010, après quatre années d’activité,{" "}
							<span className="text-redpale font-medium">
								la section connaît ses premiers changements de direction
							</span>{" "}
							avec l’élection d’un nouveau bureau, mené par Pierre DANGAYS, qui
							prend la suite d’Ahmed KASSIM.
						</BlocText>

						<p className="font-Poppins font-semibold text-xl text-redcolor leading-4">
							Sous sa présidence, le club entre dans une véritable phase de
							structuration et de modernisation. 🔝
						</p>

						<BlocText>
							L’organisation interne se consolide, le Bureau gagne en efficacité
							et la communication du club franchit un cap décisif :{" "}
							<span className="text-redpale font-medium">
								création du logo, nouveaux maillots, lancement d’un site
								internet et développement d’une communication locale renforcée
								dans la vie locale.
							</span>
						</BlocText>

						<BlocText>
							Cette période est également celle d’une forte expansion. Durant la
							saison 2011/12,{" "}
							<span className="text-redpale font-medium">
								le club atteint 111 licenciés
							</span>
							, dont 28 jeunes inscrits à l’école de badminton.
						</BlocText>

						<p className="font-Poppins font-semibold text-xl text-redcolor leading-4">
							Le club obtient sa première labellisation École Française de
							Badminton (EFB) 1 étoile ⭐ lors de la saison 2010/11, une
							distinction qu’il conservera sept saisons consécutives, témoignant
							de la qualité et de la continuité de sa formation jeune.
						</p>

						<BlocText>
							La section, forte de 3 créneaux adultes et 2 jeunes, s’impose
							comme l’un des clubs les plus actifs du district libournais.
						</BlocText>

						<BlocText>
							La mixité est un atout : environ{" "}
							<span className="text-redpale font-medium">42% de femmes</span>{" "}
							parmi les licenciés, et un public venant à{" "}
							<span className="text-redpale font-medium">
								40% de Carbon-Blanc et 60% des communes voisines
							</span>{" "}
							(Ambès, Yvrac, Sainte-Eulalie, Bassens…).
						</BlocText>

						<p className="font-Poppins font-semibold text-xl text-redcolor leading-4">
							Sur le plan sportif, la dynamique est remarquable.
						</p>

						<BlocText>
							Les équipes adultes participent aux interclubs du district
							libournais, avec des résultats significatifs : en 2011, l’équipe
							mixte termine{" "}
							<span className="text-redpale font-medium">4e/14</span> et frôle
							la montée en interdistrict, l’équipe hommes se classe 6e/8 après
							s’être extraite des poules de brassage.
						</BlocText>

						<BlocText>
							L’école de badminton progresse également, avec des{" "}
							<span className="text-redpale font-medium">
								jeunes classés 3e et 4e en catégorie minime.
							</span>
						</BlocText>

						<BlocText>
							L’encadrement est assuré par des bénévoles diplômés (dont Grégory
							KWARTNIK, initiateur DIB) et un suivi personnalisé est mis en
							place.
						</BlocText>

						<BlocText>
							<span className="font-medium">En 2013</span>, la section atteint
							son apogée :{" "}
							<span className="text-redpale font-medium">
								près de 110 licenciés
							</span>
							, une structure bien établie, un budget excédentaire de 3 000 €.
						</BlocText>

						<BlocText>
							Cette période voit également la montée en puissance des tournois
							internes, des événements conviviaux et d’un réel esprit d’équipe
							qui soude les adhérents autour de valeurs communes.
						</BlocText>
					</Bloc>
				</Parent>

				<p className="p-5 font-Poppins font-semibold text-2xl text-redcolor leading-5">
					Une ère de renouveau et de cohésion, où la rigueur et la convivialité
					ont permis de poser des bases solides pour l’avenir du club.
				</p>

				<ImageLegend
					src="/histoire/3.png"
					description="Juillet 2013"
					className="rounded-xl"
				/>

				<Parent>
					<SingleTitle>Une période de stabilité (2013-2015)</SingleTitle>

					<Bloc>
						<BlocText>
							En juin 2013,{" "}
							<span className="font-medium text-redpale">
								le club connaît un nouveau tournant
							</span>{" "}
							avec l’élection de Wolfgang SCHRADER à la présidence.
						</BlocText>

						<BlocText>
							La section compte{" "}
							<span className="font-medium text-redpale">
								105 à 110 adhérents
							</span>
							, dont près d’un quart de jeunes, et conserve des{" "}
							<span className="font-medium text-redpale">
								résultats solides dans les compétitions
							</span>{" "}
							interclubs : l’équipe mixte termine 1ère du district libournais,
							les vétérans se classent 3e en division 2 et plusieurs jeunes sont
							récompensés par le COGIBAD (comité départemental). 🏆
						</BlocText>

						<BlocText>
							L’école de badminton accueille en moyenne 24 jeunes, répartis sur
							deux créneaux : le mardi pour les confirmés, le mercredi pour les
							débutants.
						</BlocText>

						<BlocText>
							<span className="font-medium text-redpale">
								Le club continue de participer activement à la vie locale
							</span>{" "}
							: tournois internes, rencontres interclubs (avec Yvrac,
							Sainte-Eulalie, Ambès, Bègles…), et sorties de fin d’année pour
							les jeunes.
						</BlocText>

						<BlocText>
							La saison 2014/15 marque néanmoins le début de difficultés
							d’organisation : les créneaux sont raccourcis, notamment le lundi,
							à cause du développement d’autres sections du CACBO.
						</BlocText>

						<p className="font-Poppins font-semibold text-xl text-redcolor leading-4">
							Sous son impulsion, le club oriente davantage son activité vers la
							compétition et les interclubs. ⚔️
						</p>

						<BlocText>
							Cette évolution marque une transition dans l’esprit du club,
							jusque-là centré sur le loisir et la convivialité.{" "}
							<span className="font-medium text-redpale">
								La pratique devient plus compétitive, avec une forte dynamique
								autour des classements et des résultats sportifs.
							</span>
						</BlocText>

						<BlocText>
							Cette orientation, bien que porteuse de réussite sur le plan
							sportif, conduit à une diminution progressive de la place du jeu
							loisir, et à une différenciation plus marquée entre les niveaux de
							jeu.
						</BlocText>
					</Bloc>
				</Parent>

				<ImageLegend
					src="/histoire/4.png"
					description="Notre école de badminton saison 2014/15"
					className="rounded-xl"
				/>

				<Caroussel
					images={[
						"/histoire/carousel1.png",
						"/histoire/carousel2.png",
						"/histoire/carousel3.png",
					]}
					title="Retour en images"
				/>

				<ImageLegend
					src="/histoire/5.png"
					description="Septembre 2014"
					className="rounded-xl"
				/>

				<Parent>
					<SingleTitle>
						Une transition marquée par les changements (2015-2018)
					</SingleTitle>

					<Bloc>
						<BlocText>
							L’année 2015 voit l’élection d’Éric PRIVAT à la présidence,
							assisté de Wolfgang SCHRADER comme vice-président.
						</BlocText>

						<BlocText>
							La section reste très active avec{" "}
							<span className="font-medium text-redpale">
								environ 100 licenciés
							</span>
							, une école de badminton structurée et des équipes vétérans
							performantes.
						</BlocText>

						<BlocText>
							Cependant, une instabilité progressive s’installe au sein du
							Bureau : plusieurs remaniements ont lieu entre 2016 et 2018, avec
							notamment Guillaume BENTABET puis Christophe LECLERCQ à la
							présidence, dans un contexte d’effectifs en légère baisse.
						</BlocText>

						<BlocText>
							Malgré cela, la section continue de défendre ses couleurs en
							interclubs à travers une{" "}
							<span className="font-medium text-redpale">
								structure compétitive solide
							</span>
							, avec{" "}
							<span className="font-medium text-redpale">
								trois équipes engagées en interclubs
							</span>{" "}
							(mixte, hommes et vétérans) tout en conservant une{" "}
							<span className="font-medium text-redpale">
								vie associative dynamique
							</span>{" "}
							: tournois internes, entraînements collectifs, et moments
							conviviaux rassemblant loisirs et compétiteurs.
						</BlocText>
					</Bloc>
				</Parent>

				<ImageLegend
					src="/histoire/6.png"
					description="L’un des nombreux cours de l’école de badminton du club (octobre 2017)"
					className="rounded-xl"
				/>

				<Parent>
					<Bloc>
						<BlocText>
							Mais en 2018, la tendance s’inverse brutalement :{" "}
							<span className="font-medium">
								les effectifs chutent de près de 50%
							</span>
							, l’école de badminton s’arrête, et une partie des créneaux est
							supprimée.
						</BlocText>

						<p className="font-Poppins font-semibold text-xl text-redcolor leading-4">
							La situation est aggravée par la fermeture définitive du gymnase
							Gaston Lacoste, berceau historique du club, en juillet 2018 pour
							raisons de sécurité.
						</p>

						<BlocText>
							Sa démolition en novembre 2019{" "}
							<span className="font-medium">
								met la section en sommeil pour près de quatre ans
							</span>
							, le temps qu’un nouveau complexe voie le jour. 😴
						</BlocText>
					</Bloc>
				</Parent>

				<ImageLegend
					src="/histoire/7.png"
					description="Le gymnase lors de sa démolition (novembre 2019)"
					className="rounded-xl"
				/>

				<Parent>
					<SingleTitle>La renaissance de la section (depuis 2022)</SingleTitle>

					<Bloc>
						<BlocText>
							<span className="font-medium">En septembre 2022</span>, après
							quatre années de mise en sommeil forcée, la section badminton du
							CACBO renaît avec l’ouverture du Complexe sportif Philippe
							Madrelle, une salle moderne de 1 056 m² abritant désormais sept
							terrains, symbole d’un nouveau départ.
						</BlocText>

						<BlocText>
							Sous l’impulsion de Laurent THOMAS, co-fondateur du club en 2007,
							le club retrouve son esprit d’origine : convivialité, plaisir de
							jouer et ambiance familiale.
						</BlocText>

						<BlocText>
							Ce retour marque une volonté claire de renouer avec les valeurs
							qui ont façonné le club à ses débuts, loin des tensions et de la
							recherche de performance qui avaient progressivement éloigné les
							adhérents du loisir pur.
						</BlocText>

						<BlocText>
							Le club choisit dès sa réouverture de ne pas s’affilier à la
							Fédération Française de Badminton (FFBaD), privilégiant un modèle
							plus libre et accessible. Ce choix audacieux permet de proposer
							une adhésion à moindre coût comparé aux prix affichés dans les
							clubs affiliés, rendant la pratique plus inclusive.
						</BlocText>

						<BlocText>
							En contrepartie, le club renonce aux compétitions officielles et
							aux interclubs, pour se concentrer exclusivement sur le badminton
							loisir, dans un esprit bon enfant et sans prise de tête.
						</BlocText>

						<BlocText>
							Ce positionnement séduit immédiatement : de nombreux joueurs,
							parfois anciens compétiteurs lassés des contraintes fédérales,
							rejoignent le club pour retrouver le plaisir simple du jeu et de
							la camaraderie.
						</BlocText>

						<BlocText>
							Depuis sa réouverture, le club multiplie les initiatives pour
							renforcer la cohésion et la convivialité.
						</BlocText>

						<BlocText>
							Régulièrement les vendredis soirs, des soirées de jeu et
							d’échanges réunissent une trentaine de participants, dans une
							ambiance détendue et chaleureuse. Des repas de fin d’année au
							restaurant, financés par le club, prolongent cet esprit de partage
							hors du terrain.
						</BlocText>
					</Bloc>
				</Parent>

				<p className="p-5 font-Poppins font-semibold text-2xl text-redcolor leading-5">
					Aujourd’hui, le CACBO Badminton rassemble une centaine d’adhérents de
					tous niveaux, et perpétue l’esprit de 2007 : un lieu où le sport rime
					avec détente, entraide et passion.
				</p>

				<ImageLegend
					src="/histoire/8.png"
					description="La nouvelle salle du complexe remplaçant le précédent gymnase à la réouverture du club, en septembre 2022"
					className="rounded-xl"
				/>

				<Parent>
					<SingleTitle>Notre palmarès</SingleTitle>

					<Bloc>
						<h4 className={`${textVariants.h4} text-redpale`}>
							Même si le club est aujourd’hui tourné exclusivement vers le
							loisir, il a longtemps porté les couleurs de Carbon-Blanc en
							interclubs. 🏆
						</h4>

						<BlocText>
							Pendant plus d’une décennie, nos équipes ont signé de belles
							performances et ont marqué l’histoire de la section.
						</BlocText>
					</Bloc>
				</Parent>

				<Parent>
					<SingleTitle>Quelques chiffres clés</SingleTitle>

					<Bloc className="items-center">
						<h2 className={`${textVariants.h2} text-redpale`}>2007</h2>

						<BlocText>
							C’est l’année de création du club, fondé le 15 mars par trois
							passionnés.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>7</h2>

						<BlocText>
							Nombre de présidents qui se sont succédés depuis 2007.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>2022</h2>

						<BlocText>
							C’est l’année de renaissance du club (le 19 septembre), quatre ans
							après sa mise en sommeil.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>71</h2>

						<BlocText>
							Nombre d’adhérents inscrits dès la première saison du club, un
							départ prometteur pour une nouvelle section.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>1056 m2</h2>

						<BlocText>Surface de la salle Philippe Madrelle.</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>98</h2>

						<BlocText>
							Moyenne d’adhérents par saison avant la mise en sommeil du club en
							2018.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>7</h2>

						<BlocText>
							C’est le nombre de saisons consécutives durant lesquelles le club
							a été labellisé EFB – 1 étoile.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>113</h2>

						<BlocText>
							Nombre record d’adhérents atteint par le club lors de la saison
							2016/17.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>6</h2>

						<BlocText>
							C’est le nombre de saisons où le club a comptabilisé plus de 100
							adhésions.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>86</h2>

						<BlocText>
							Moyenne d’adhérents par saison depuis la réouverture en 2022 — une
							preuve de l’intérêt toujours croissant pour le badminton à
							Carbon-Blanc.
						</BlocText>

						<h2 className={`${textVariants.h2} text-redpale`}>7</h2>

						<BlocText>
							C’est le nombre de terrains disponibles aujourd’hui, soit deux de
							plus qu’avant.
						</BlocText>
					</Bloc>
				</Parent>

				<Parent>
					<SingleTitle>Et le CACBO dans tout ça ?</SingleTitle>

					<Bloc>
						<BlocText>
							<span className="font-medium text-redpale">
								Le Club Athlétique CarbonBlanais Omnisports (CACBO) est né le 25
								mai 1972
							</span>{" "}
							d&apos;une initiative municipale visant à regrouper et développer
							les activités sportives de la commune, qu&apos;elles soient de
							compétition ou de loisir.
						</BlocText>

						<BlocText>
							<span className="font-medium text-redpale">
								Il résulte de la fusion entre le Club Athlétique CarbonBlanais
							</span>{" "}
							(CACB), fondé le 1er octobre 1925 par Gaston Lacoste (le club de
							football de la ville),{" "}
							<span className="font-medium text-redpale">
								le Club Léo Lagrange
							</span>
							, regroupant déjà plusieurs sections{" "}
							<span className="font-medium text-redpale">
								et la Pétanque carbonblanaise
							</span>
							. Simon Cypel (1er adjoint au maire) en devient le premier
							président.
						</BlocText>

						<BlocText>
							La section badminton fait partie intégrante du CACBO et est
							soumise à ses règlements, statuts et cadre de gouvernance,
							garantissant la cohérence et la bonne gestion de l’ensemble des
							sections sportives de la ville.
						</BlocText>
					</Bloc>
				</Parent>
			</Content>
		</PageLayout>
	);
};

export default Histoire;
