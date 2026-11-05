import Image from "next/image";
import Link from "next/link";
import File from "@/assets/file.svg";
import FileRed from "@/assets/fileRed.svg";
import Text from "./Text";

interface DocumentsProps {
	content: string;
	href: string;
}

// Lien de téléchargement (Figma « Bouton download ») : icône contour, pleine au survol.
export const Documents = ({ content, href }: DocumentsProps) => {
	return (
		<Link
			href={href}
			target="_blank"
			className="group w-auto h-auto flex flex-row items-center justify-start gap-5"
		>
			<span className="relative w-12 h-12 shrink-0">
				<Image
					src={File}
					alt=""
					className="absolute transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
				/>
				<Image
					src={FileRed}
					alt=""
					className="absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
				/>
			</span>

			<Text as="span">{content}</Text>
		</Link>
	);
};

export default Documents;
