import { club } from "@/constantes/club";
import { cn } from "@/utils/cn";

interface AdresseProps {
	className?: string;
	/** Classes du nom du lieu (première ligne). */
	lieuClassName?: string;
}

const { lieu, rue, codePostal, ville } = club.adresse;

const Adresse = ({ className, lieuClassName }: AdresseProps) => {
	return (
		<address className={cn("not-italic flex flex-col", className)}>
			<span className={lieuClassName}>{lieu}</span>
			<span>
				{rue}, {codePostal} {ville}
			</span>
		</address>
	);
};

export default Adresse;
