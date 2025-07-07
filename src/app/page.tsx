import Button from "@/components/Button";
import Content from "@/components/Content";
import PageLayout from "@/components/PageLayout";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";
import Bloc from "../components/Bloc";
import BlocText from "@/components/BlocText";
import BlocSubtitle from "@/components/BlocSubtitle";
import ExternalLink from "@/assets/ExternalLink";

export default function Home() {
  return (
    <PageLayout>
      <div className="w-full h-auto flex flex-col items-start justify-center gap-content">
        <h2 className="font-Poppins text-[13px] text-redcolor leading-4">
          Bienvenue
        </h2>

        <h1 className="font-Space-Grotesk text-[38px] font-bold text-redcolor leading-7">
          CACBO Badminton
        </h1>

        <h3 className="font-Poppins text-[13px] text-redcolor leading-none flex flex-col">
          <span>Club de badminton pour adultes, </span>
          <span>basé à Carbon-Blanc (33)</span>
        </h3>

        <Button href={"/contact"} variant="inverted">
          <SendHorizontal size={14} />
          Nous contacter
        </Button>
      </div>

      <Content>
        <Image
          src="/acceuil/1.png"
          alt="Photo de groupe de badminton"
          width={500}
          height={300}
        />

        <Bloc title="Créé en 2007 à Carbon-Blanc. ">
          <BlocText>
            Notre club réunit des passionnés de badminton de tous niveaux. L’ambiance y est familiale et conviviale, propice à la détente et au partage.
          </BlocText>

          <BlocSubtitle>
            Que vous soyez compétiteur ou simplement en quête de loisirs, vous trouverez chez nous un cadre chaleureux pour pratiquer sans pression.
          </BlocSubtitle>

          <BlocText>
            Envie d'en savoir plus ?
          </BlocText>

          <Button href={"/histoire"} variant="inverted">
            Découvrir notre histoire
            <ExternalLink size={10} />
          </Button>

        </Bloc>
      </Content>
    </PageLayout>
  );
}
