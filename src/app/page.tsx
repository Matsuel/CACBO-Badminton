import ExternalLink from "@/assets/ExternalLink";
import BlocText from "@/components/BlocText";
import Button from "@/components/Button";
import Caroussel from "@/components/Caroussel";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageLegend from "@/components/ImageLegend";
import List from "@/components/List";
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import { textVariants } from "@/constantes/theme";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";
import Bloc from "../components/Bloc";

export default function Home() {
  return (
    <PageLayout>
      <Header
        h2="Bienvenue"
        title="CACBO Badminton"
        h1ClassName="break-normal"
        className="gap-5!"
        subtitle={
          <div className="flex flex-col">
            <span>Club de badminton pour adultes, </span>
            <span>basé à Carbon-Blanc (33)</span>
          </div>
        }
        cta={
          <Button href="/adherer" variant="inverted">
            <SendHorizontal size={14} />
            Nous rejoindre
          </Button>
        }
      />

      <Content>
        <Image
          src="/acceuil/1.png"
          alt="Photo de groupe de badminton"
          className="rounded-xl"
          width={2000}
          height={2000}
        />

        <Bloc title="Créé en 2007 à Carbon-Blanc." key={"created-in-2007"}>
          <BlocText>
            Notre club réunit des passionnés de badminton de tous niveaux. L’ambiance y est familiale et conviviale, propice à la détente et au partage.
          </BlocText>

          <h4 className={`${textVariants.h4} text-redcolor`}>
            Que vous soyez compétiteur ou simplement en quête de loisirs, vous trouverez chez nous un cadre chaleureux pour pratiquer sans pression.
          </h4>

          <BlocText>
            Envie d&apos;en savoir plus ?
          </BlocText>

          <Button href="/histoire" variant="inverted">
            Découvrir notre histoire
            <ExternalLink size={10} />
          </Button>

        </Bloc>

        <Caroussel
          images={[
            "/acceuil/caroussel1.png",
            "/acceuil/caroussel2.png",
            "/acceuil/caroussel2.png"
          ]}
          title="Notre club en photos"
        />

        <Bloc title="Envie de taper dans le volant ?" key={"want-to-hit-the-shuttlecock"}>
          <h4 className={`${textVariants.h4}`}>
            Nos créneaux sont les :
          </h4>

          <List>
            <ListElement>lundis → 21h - 23h</ListElement>
            <ListElement>mardis → 18h - 21h</ListElement>
            <ListElement>vendredis → 18h30 - 21h</ListElement>
          </List>

          <BlocText>
            Notre complexe sportif se situe au <span className="font-medium">24 rue Pasteur</span> à Carbon-Blanc. 📍
          </BlocText>

          <Button href="/contact" variant="inverted">
            En savoir plus
            <ExternalLink size={10} />
          </Button>

        </Bloc>

        <ImageLegend
          src="/acceuil/partage.png"
          description="Parce que le club, c’est aussi des moments de partage après l’effort ! "
        />

        <Bloc title="Venez jouer avec nous ! 🤝">
          <BlocText>
            Le badminton, c&apos;est encore mieux à plusieurs ! Que vous soyez débutant ou confirmé, rejoignez-nous et profitez de créneaux adaptés à tous les niveaux.
          </BlocText>

          <h4 className={textVariants.h4}>
            💶 Tarifs d’adhésion :
          </h4>

          <List>
            <ListElement><span className="font-bold">50 €</span> pour un adulte</ListElement>
            <ListElement><span className="font-bold">90 €</span> pour un couple</ListElement>
          </List>

          <BlocText>
            Jouez en toute liberté, échangez avec d&apos;autres passionnés et participez à nos soirées ! ⚡
          </BlocText>

          <Button href="/adherer" variant="inverted">
            Nous rejoindre
            <ExternalLink size={10} />
          </Button>

        </Bloc>

        <ImageLegend
          src="/acceuil/plaisir.png"
          description="Smash, défense, amorti... et surtout du plaisir !"
        />

        <Bloc title="Les règles essentielles du bad’">
          <h4 className={textVariants.h4}>
            Avant d’entrer sur le terrain, un rappel des bases :
          </h4>

          <List>
            <ListElement>Le service doit être effectué en diagonale, sous la taille.</ListElement>
            <ListElement>Un set se joue en 21 points, avec 2 points d’écart minimum.</ListElement>
            <ListElement>Le volant touche la ligne ? Il est bon !</ListElement>
          </List>
          <Button variant="inverted" href="/regles">
            En savoir plus
            <ExternalLink size={10} />
          </Button>

        </Bloc>

        <ImageLegend
          src="/acceuil/ensemble.png"
          description="Ici, on joue, on rigole et on progresse ensemble !"
        />

        <Bloc title="Une question ? On a la réponse !">
          <BlocText>
            Vous avez des interrogations sur le fonctionnement du club, les inscriptions ou les équipements nécessaires ?
          </BlocText>

          <Button variant="inverted" href="/faq">
            Voir notre FAQ
            <ExternalLink size={10} />
          </Button>
        </Bloc>

        <ImageLegend
          src="/acceuil/ensemble2.png"
          description="Ici, on joue, on rigole et on progresse ensemble !"
        />

        <Bloc title="Eh, qu’est-ce t’attends ?" subtitile="Rejoins-nous ! 😉" className="border border-redcolor">
          <BlocText>
            Fais partie de l&apos;aventure : rejoins une équipe où convivialité rime avec passion.
          </BlocText>

          <Button variant="inverted" href="/adherer">
            Je m’inscris
            <ExternalLink size={10} />
          </Button>

        </Bloc>

      </Content>
    </PageLayout>
  );
}
