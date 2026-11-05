import Image from 'next/image'
import Bloc from './Bloc'
import Text from './Text'

// Schémas du terrain (Figma : blocs « En simple » / « En double », page Règles du jeu).
const terrains = {
    simple: {
        titre: 'En simple',
        vues: [
            {
                legende: 'Au service',
                src: '/regles/terrain-simple-service.png',
                alt: 'Terrain de simple, au service : un carré de service en diagonale de chaque côté du filet, sans les couloirs latéraux',
            },
            {
                legende: 'En jeu',
                src: '/regles/terrain-simple-jeu.png',
                alt: 'Terrain de simple, en jeu : toute la largeur entre les lignes intérieures est valable',
            },
        ],
    },
    double: {
        titre: 'En double',
        vues: [
            {
                legende: 'Au service',
                src: '/regles/terrain-double-service.png',
                alt: 'Terrain de double, au service : le carré de service en diagonale, couloirs latéraux de service compris',
            },
            {
                legende: 'En jeu',
                src: '/regles/terrain-double-jeu.png',
                alt: 'Terrain de double, en jeu : tout le terrain, couloirs latéraux compris, est valable',
            },
        ],
    },
} as const

interface TerrainProps {
    type: keyof typeof terrains;
}

const Terrain = ({ type }: TerrainProps) => {
    const { titre, vues } = terrains[type]

    return (
        <Bloc className="items-center">
            <Text variant="h4" color="rouge-pale">
                {titre}
            </Text>

            <div className="w-full grid grid-cols-2 gap-5">
                {vues.map(({ legende, src, alt }) => (
                    <figure key={src} className="flex flex-col items-center gap-content">
                        <Image src={src} alt={alt} width={292} height={512} sizes="(min-width: 768px) 200px, 40vw" className="w-full h-auto" />
                        <Text as="figcaption" variant="secondaire">
                            {legende}
                        </Text>
                    </figure>
                ))}
            </div>
        </Bloc>
    )
}

export default Terrain
