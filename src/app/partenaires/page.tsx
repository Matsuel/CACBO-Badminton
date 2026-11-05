import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Bloc from "@/components/Bloc";
import Content from "@/components/Content";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import Partenaire from "@/components/Partenaire";
import Text from "@/components/Text";
import { partenaires } from "@/constantes/partenaires";

export const metadata: Metadata = {
	title: "Nos partenaires",
};

const Partenaires = () => {
	return (
		<PageLayout>
			<Header
				title="PARTENAIRES"
				subtitle="Ils nous soutiennent pour faire grandir notre club !"
			/>

			<Banner
				src="/partenaires/1.png"
				alt="Photo devant une table remplit de volants"
			/>

			<Content>
				<Bloc>
					<Text>
						Nos partenaires jouent un rôle clé dans la vie de notre club. Grâce
						à leur soutien, nous pouvons offrir à nos membres les meilleures
						conditions pour pratiquer le badminton. Découvrez ceux qui nous
						accompagnent dans cette belle aventure !
					</Text>
				</Bloc>

				<div className="w-full h-auto flex flex-col md:flex-row flex-wrap items-start justify-start gap-5">
					{partenaires.map((partenaire) => (
						<Partenaire
							key={partenaire.name}
							name={partenaire.name}
							role={partenaire.role}
							image={partenaire.image}
						/>
					))}
				</div>
			</Content>
		</PageLayout>
	);
};

export default Partenaires;
