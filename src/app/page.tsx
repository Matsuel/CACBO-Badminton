import Navbar from "@/components/UI/Navbar";
import Button from "@/components/UI/Button";
import Footer from "@/components/UI/Footer";
import Title from "@/components/UI/Title";
import { SITE_CONFIG } from "@/constantes";
import Subtitle from "@/components/UI/Subtitle";
import { Goto } from "@/assets/Goto";
import Emoji from "@/components/UI/Emoji";
import Paragraphe from "@/components/UI/Paragraphe";
import ImageLegend from "@/components/UI/ImageLegend";
import ListElement from "@/components/UI/ListElement";
import HomeHero from "@/components/HomeHero";
import Bloc from "@/components/Bloc";
import BlocInfos from "@/components/Bloc/BlocInfos";

export default function Home() {
  return (
    <div className={`w-full flex flex-col items-center min-h-screen bg-whitebroken`}>
      <Title title={SITE_CONFIG.title} />
      <Navbar />
      <HomeHero />

      <Bloc blocTitle="Qui sommes-nous ?">
        <BlocInfos>
          <Paragraphe>
            Créé en 2007 à Carbon-Blanc, notre club réunit des passionnés de badminton de tous niveaux.
            Ici, l&apos;ambiance est familiale et conviviale, <strong className="font-medium">propice à
              la détente</strong> et au partage.
            Que vous soyez compétiteur ou simplement en quête de loisirs, vous trouverez chez nous un
            cadre chaleureux pour <strong className="font-medium">pratiquer sans pression</strong>.
            Envie d&apos;en savoir plus ?
          </Paragraphe>

          <div className="w-[100%] h-auto flex flex-row items-center justify-end lg:mt-3 md:mt-5">
            <Button
              variant="inverted"
              href="/histoire"
              icon={Goto}
              rowReverse
              white
            >
              DECOUVRIR NOTRE HISTOIRE
            </Button>
          </div>
        </BlocInfos>

        <ImageLegend
          className="lg:w-[50%] w-full h-auto"
          image={"/home/1.png"}
          description={"Échauffement, match ou simple échange, il y a toujours du jeu au club !"}
        />

      </Bloc>

      <div
        className="w-[80%] h-auto flex 2xl:flex-row flex-col items-center justify-between bg-white border-1 border-redcolor rounded-ten p-10 mt-44">

        <div className="w-auto h-auto flex flex-col items-start justify-center gap-[50px]">
          <div className="w-[100%] h-auto flex flex-col items-start justify-center gap-2">

            <h3 className="font-Montserrat font-bold xl:text-[36px] md:text-3xl sm:text-[30px] text-[26px]">Qu&apos;est-ce que t&apos;attends ?</h3>
            <h4 className="flex flex-row items-center gap-4 font-Montserrat font-medium xl:text-[32px] md:text-[28px] text-2xl text-redcolor italic">Rejoins-nous ! <Emoji name="wink" width={36} /></h4>

          </div>

          <Paragraphe className="2xl:w-[70%] w-full font-normal leading-6">
            Fais partie de l&apos;aventure : rejoins une équipe où convivialité rime avec passion.
          </Paragraphe>

        </div>

        <Button
          href="/adherer"
          variant="inverted"
          rowReverse
          white
          icon={Goto}
          className="mr-20 text-xl px-5 py-[15px] uppercase"
        >
          JE M&apos;INSCRIS
        </Button>

      </div>

      <Bloc blocTitle="Quand peut-on venir ?">

        <ImageLegend
          className="lg:w-[50%] w-full h-auto"
          image={"/home/2.png"}
          description={"Parce que le club, c’est aussi des moments de partage après l’effort ! "}
        />

        <div className="lg:w-[42%] w-full h-auto flex flex-col items-start justify-center gap-5">
          <BlocInfos className="lg:w-full">

            <Subtitle className="!text-[22px]">
              Envie de taper le volant ? Nos créneaux sont :
            </Subtitle>

            <div className="w-[100%] h-auto flex flex-row items-center justify-between">
              <div className="flex flex-col gap-2">
                <ListElement>
                  <span className="font-normal">lundi</span> → 21ᴴ - 23ᴴ
                </ListElement>

                <ListElement>
                  <span className="font-normal">mardi</span> → 18ᴴ - 21ᴴ
                </ListElement>

                <ListElement>
                  <span className="font-normal">vendredi</span> → 18ᴴ30 - 21ᴴ
                </ListElement>
              </div>

              <Button
                href="/adherer"
                variant="inverted"
                rowReverse
                white
                icon={Goto}
                className="uppercase"
              >
                en savoir plus
              </Button>
            </div>

          </BlocInfos>

          <BlocInfos className="lg:w-full">
            <Subtitle className="font-Inter font-medium !text-[22px]">
              Complexe sportif Philippe Madrelle
            </Subtitle>

            <Paragraphe>
              24 rue Pasteur, 33560 Carbon-Blanc 📍
            </Paragraphe>
          </BlocInfos>
        </div>
      </Bloc>

      <Bloc blocTitle="Une question ? On a la réponse !" blocIcon={<Emoji name="phone" width={24} />}>
        <BlocInfos>

          <Paragraphe>
            Vous avez des interrogations sur le fonctionnement du club, les inscriptions ou les équipements nécessaires ?
          </Paragraphe>

          <div className="w-[100%] h-auto flex flex-row items-center justify-end lg:mt-3 md:mt-5">
            <Button
              className="uppercase"
              variant="inverted"
              href="/faq"
              icon={Goto}
              rowReverse
              white
            >
              Consulter notre faq
            </Button>
          </div>

        </BlocInfos>

        <ImageLegend
          className="lg:w-[50%] w-full h-auto"
          image={"/home/3.png"}
          description={"Le badminton, c'est avant tout du plaisir et du partage sur le terrain !"}
        />

      </Bloc>

      <Bloc blocTitle="Venez jouer avec nous ! 🤝">

        <ImageLegend
          className="lg:w-[50%] w-full h-auto"
          image={"/home/4.png"}
          description={"Smash, défense, amorti... et surtout du plaisir !"}
        />

        <BlocInfos>

          <Paragraphe>
            Le badminton, c&apos;est encore mieux à plusieurs ! Que vous soyez débutant ou confirmé, rejoignez-nous et profitez de créneaux adaptés à tous les niveaux.
          </Paragraphe>

          <Subtitle>
            <Emoji name="euro" width={22} /> Tarifs d&apos;adhésion :
          </Subtitle>

          <div className="w-full h-auto flex flex-col gap-3">
            <ListElement>
              <span className="font-medium">50 €</span> pour un adulte
            </ListElement>

            <ListElement>
              <span className="font-medium">90 €</span> pour un couple
            </ListElement>
          </div>

          <Paragraphe>
            Jouez en toute liberté, échangez avec d&apos;autres passionnés et participez à nos soirées ! ⚡
          </Paragraphe>

          <div className="w-full h-auto flex flex-row items-center justify-end lg:mt-3 md:mt-5">
            <Button
              className="uppercase"
              variant="inverted"
              href="/adherer"
              icon={Goto}
              rowReverse
              white
            >
              Nous rejoindre
            </Button>
          </div>

        </BlocInfos>

      </Bloc>

      <Bloc blocTitle="Les règles essentielles du bad’" blocIcon={<Emoji name="eyes" width={24} />}>
        <BlocInfos>

          <Subtitle className="!text-[22px]">
            Avant d&apos;entrer sur le terrain, un rappel des bases :
          </Subtitle>

          <ListElement>
            Un set se joue en <span className="font-medium">21 points</span>, avec <span className="font-medium">2 points d&apos;écart</span> minimum.
          </ListElement>

          <ListElement>
            Le <span className="font-medium">service</span> doit être effectué <span className="underline">en diagonale</span>, sous la taille.
          </ListElement>

          <ListElement>
            <span className="font-medium">Le volant touche la ligne ?</span> Il est bon !
          </ListElement>

          <div className="w-[100%] h-auto flex flex-row items-center justify-end lg:mt-3 md:mt-5">
            <Button
              className="uppercase"
              variant="inverted"
              href="/regles"
              icon={Goto}
              rowReverse
              white
            >
              Consulter les règles
            </Button>
          </div>

        </BlocInfos>

        <ImageLegend
          className="lg:w-[50%] w-full h-auto"
          image={"/home/5.png"}
          description={"Ici, on joue, on rigole et on progresse ensemble !"}
        />
      </Bloc>

      <Footer />

    </div>
  );
}
