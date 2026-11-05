import Text from "@/components/Text";

interface RegisterProps {
	saison: string;
	open: boolean;
}

const Register = ({ saison, open }: RegisterProps) => {
	return (
		<Text
			variant="etiquette"
			color="rouge-pale"
			className="w-full h-auto p-2 border border-rouge rounded-full text-center"
		>
			SAISON 20{saison} -{" "}
			<strong>INSCRIPTIONS {open ? "OUVERTES ! ✔️" : "FERMÉES"}</strong>
		</Text>
	);
};

export default Register;
