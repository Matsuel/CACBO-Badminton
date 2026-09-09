import Image from "next/image";
import { textVariants } from "@/constantes/theme";

interface PartenaireProps {
	name: string;
	role: string;
	image: string;
}

const Partenaire = ({ image, name, role }: PartenaireProps) => {
	return (
		<div
			className={
				"w-full h-auto flex flex-row items-center justify-start p-5 gap-6.25 bg-white rounded-xl shadow-default"
			}
		>
			<div className="w-25 h-25 flex items-center justify-center rounded-xl bg-whitebroken shrink-0">
				<Image
					src={image}
					alt="volant de badminton"
					width={100}
					height={100}
					className="rounded-xl w-auto h-auto"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex flex-col">
					<span className={`${textVariants.h3} text-redcolor`}>{name}</span>
				</div>

				<p className={textVariants.text}>{role}</p>
			</div>
		</div>
	);
};

export default Partenaire;
