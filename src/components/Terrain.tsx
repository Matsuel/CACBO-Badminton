import Image from "next/image";
import { terrains } from "@/constantes/regles";
import Bloc from "./Bloc";
import Text from "./Text";

interface TerrainProps {
	type: keyof typeof terrains;
}

const Terrain = ({ type }: TerrainProps) => {
	const { titre, vues } = terrains[type];

	return (
		<Bloc className="items-center">
			<Text variant="h4" color="rouge-pale">
				{titre}
			</Text>

			<div className="w-full grid grid-cols-2 gap-5">
				{vues.map(({ legende, src, alt }) => (
					<figure key={src} className="flex flex-col items-center gap-content">
						<Image
							src={src}
							alt={alt}
							width={292}
							height={512}
							sizes="(min-width: 768px) 200px, 40vw"
							className="w-full h-auto"
						/>
						<Text as="figcaption" variant="secondaire">
							{legende}
						</Text>
					</figure>
				))}
			</div>
		</Bloc>
	);
};

export default Terrain;
