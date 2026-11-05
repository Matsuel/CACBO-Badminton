import type { Metadata } from "next";
import Header from "@/components/Header";
import HelloAssoWidget from "@/components/HelloAssoWidget";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Boutique",
};

const Boutique = () => {
	return (
		<PageLayout>
			<Header
				title="Boutique"
				subtitle="Un achat, un geste pour notre club !"
			/>

			<HelloAssoWidget />
		</PageLayout>
	);
};

export default Boutique;
