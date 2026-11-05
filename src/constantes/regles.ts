// Schémas du terrain (Figma : blocs « En simple » / « En double », page Règles du jeu).
export const terrains = {
	simple: {
		titre: "En simple",
		vues: [
			{
				legende: "Au service",
				src: "/regles/terrain-simple-service.png",
				alt: "Terrain de simple, au service : un carré de service en diagonale de chaque côté du filet, sans les couloirs latéraux",
			},
			{
				legende: "En jeu",
				src: "/regles/terrain-simple-jeu.png",
				alt: "Terrain de simple, en jeu : toute la largeur entre les lignes intérieures est valable",
			},
		],
	},
	double: {
		titre: "En double",
		vues: [
			{
				legende: "Au service",
				src: "/regles/terrain-double-service.png",
				alt: "Terrain de double, au service : le carré de service en diagonale, couloirs latéraux de service compris",
			},
			{
				legende: "En jeu",
				src: "/regles/terrain-double-jeu.png",
				alt: "Terrain de double, en jeu : tout le terrain, couloirs latéraux compris, est valable",
			},
		],
	},
} as const;
