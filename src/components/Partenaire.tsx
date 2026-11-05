import Image from "next/image";
import Text from "@/components/Text";

interface PartenaireProps {
	name: string;
	role: string;
	image: string;
}

const Partenaire = ({ image, name, role }: PartenaireProps) => {
	return (
		<div
			className={
				"w-full h-auto flex flex-row items-center justify-start p-5 gap-6.25 bg-blanc rounded-xl shadow-ombre"
			}
		>
			<div className="w-25 h-25 flex items-center justify-center rounded-xl bg-blanc-casse shrink-0">
				<Image
					src={image}
					alt={name}
					width={100}
					height={100}
					className="rounded-xl w-auto h-auto"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex flex-col">
					<Text as="span" variant="h3" color="rouge">
						{name}
					</Text>
				</div>

				<Text>{role}</Text>
			</div>
		</div>
	);
};

export default Partenaire;
