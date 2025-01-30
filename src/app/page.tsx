import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@/components/Button";
import Groupe from "../../public/Hero1.png";
import Hero2 from "../../public/Hero2.png";
import Hero3 from "../../public/Hero3.png";
import Hero4 from "../../public/Hero4.png";
import Hero5 from "../../public/Hero5.png";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import { SITE_CONFIG } from "@/constantes";
import Subtitle from "@/components/Subtitle";
import { Goto } from "@/assets/Goto";
import Emoji from "@/components/Emoji";
import Paragraphe from "@/components/Paragraphe";
import ImageLegend from "@/components/ImageLegend";
import GPS from "@/assets/gps.svg";
import Gymnase from "@/assets/Gymnase.png";
import Logo from "@/assets/cacbo.svg";
import ListElement from "@/components/ListElement";

export default function Home() {
  return (
    <div className={`w-full flex flex-col items-center min-h-screen bg-whitebroken`}>
      <Title title={SITE_CONFIG.title} />
      <Navbar />

      <div
        className="flex flex-col items-center justify-center md:w-[80%] w-[90%] h-auto mt-5 bg-cover bg-center rounded-ten"
        style={{ backgroundImage: `url(${Gymnase.src})` }}>

        <div className="w-[100%] h-[485px] flex flex-row justify-center items-center">

          <div className="md:w-[80%] w-[90%] h-full flex flex-col justify-center gap-7 2xl:pl-28 xl:pl-20 lg:pl-16 md:pl-10 pl-5">
            <h3 className="font-Shantell font-medium text-white 2xl:text-4xl xl:text-[32px] lg:text-[28px] text-2xl ">Bienvenue !</h3>

            <h2 className="font-Montserrat font-bold text-white 2xl:text-8xl xl:text-[86px] lg:text-[76px] md:text-[66px] text-[52px]">CACBO Badminton</h2>

            <div className="flex flex-col items-start justify-center lg:gap-3 md:gap-2">
              <h3 className="font-Inter font-normal text-white 2xl:text-3xl xl:text-[24px] lg:text-[20px] text-[18px]">Club de badminton
                pour <strong>adultes</strong>, badistes depuis <strong>2007</strong></h3>

              <div className="flex flex-row items-start justify-center gap-3">
                <Image src={GPS} alt="gps" className="mt-1" />
                <h3 className="font-Shantell font-medium text-white 2xl:text-3xl xl:text-[24px] lg:text-[20px] text-[18px]">
                  Carbon-Blanc (33)
                </h3>
              </div>
            </div>

          </div>

          <div className="w-[20%] h-full flex flex-col justify-start items-center pt-14">

            <div className="md:w-40 md:h-40 h-[100px] w-[100px] bg-white rounded-full sm:flex hidden flex-row justify-center items-center">
              <Image src={Logo} alt="cacbo" className="md:w-[100px] w-[60px]" />
            </div>
          </div>

        </div>
      </div>

      <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-center gap-5 mt-44">

        <Subtitle content="Qui sommes-nous ?" className="ml-4" />

        <div className="w-[100%] h-auto flex flex-row flex-wrap items-start justify-center gap-32">

          {/* Texte gauche */}
          <div
            className="2xl:w-[40%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten p-5">

            <Paragraphe className="tracking-wide">
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
                href="/about"
                icon={Goto}
                rowReverse
                white
              >
                DECOUVRIR NOTRE HISTOIRE
              </Button>
            </div>

          </div>

          {/* Image droite */}
          <div
            className="2xl:w-[50%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten">

            <ImageLegend
              image={Groupe}
              description={"Échauffement, match ou simple échange, il y a toujours du jeu au club !"}
              descriptionClassName="w-[90%] leading-5 text-base mb-3"
            />

          </div>

        </div>

      </div>

      <div
        className="w-[80%] h-auto flex 2xl:flex-row flex-col items-center justify-between bg-white border-1 border-redcolor rounded-ten p-5 mt-44">

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
          href="/contact"
          variant="inverted"
          rowReverse
          white
          icon={Goto}
          className="px-[1.5rem] py-[0.75rem] text-xl mr-32"
        >
          JE M&apos;INSCRIS
        </Button>

      </div>

      <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-center gap-5 mt-44">

        <Subtitle content="Quand peut-on venir ?" className="ml-4" />

        <div className="w-[100%] h-auto flex flex-row flex-wrap items-start justify-center gap-32">

          <div
            className="2xl:w-[45%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten">

            <ImageLegend
              image={Hero2}
              description={"Parce que le club, c’est aussi des moments de partage après l’effort ! "}
              descriptionClassName="w-[90%] leading-5 text-base mb-3"
            />

          </div>

          {/* Texte gauche */}
          <div
            className="2xl:w-[46%] w-[90%] h-auto flex flex-col items-center justify-center gap-4 bg-white rounded-ten p-5">

            <Subtitle className="text-[22px]">
              Envie de taper le volant ? Nos créneaux sont :
            </Subtitle>

            <div className="w-[100%] h-auto flex flex-row items-center justify-between">
              <div className="flex flex-col gap-3">
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
                className="px-[1.5rem] py-[0.75rem] text-xl mr-7 uppercase"
              >
                en savoir plus
              </Button>
            </div>

          </div>
        </div>

      </div>

      <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-center gap-5 mt-44">

        <Subtitle className="ml-4">
          Une question ? On a la réponse ! <Emoji name="phone" width={24} />
        </Subtitle>

        <div className="w-[100%] h-auto flex flex-row flex-wrap items-start justify-center gap-32">

          {/* Texte gauche */}
          <div
            className="2xl:w-[40%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten p-5">

            <Paragraphe className="tracking-wide">
              Vous avez des interrogations sur le fonctionnement du club, les inscriptions ou les équipements nécessaires ?
            </Paragraphe>

            <div className="w-[100%] h-auto flex flex-row items-center justify-end lg:mt-3 md:mt-5">
              <Button
                className="uppercase"
                variant="inverted"
                href="/about"
                icon={Goto}
                rowReverse
                white
              >
                Consulter notre faq
              </Button>
            </div>

          </div>

          {/* Image droite */}
          <div
            className="2xl:w-[50%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten">

            <ImageLegend
              image={Hero3}
              description={"Le badminton, c'est avant tout du plaisir et du partage sur le terrain !"}
              descriptionClassName="w-[90%] leading-5 text-base mb-3"
            />

          </div>

        </div>

      </div>

      <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-center gap-5 mt-44">

        <Subtitle content="Quand peut-on venir ?" className="ml-4" />

        <div className="w-[100%] h-auto flex flex-row flex-wrap items-start justify-center gap-32">

          <div
            className="2xl:w-[45%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten">

            <ImageLegend
              image={Hero4}
              description={"Smash, défense, amorti... et surtout du plaisir !"}
              descriptionClassName="w-[90%] leading-5 text-base mb-3"
            />

          </div>

          {/* Texte gauche */}
          <div
            className="2xl:w-[46%] w-[90%] h-auto flex flex-col items-start justify-center gap-4 bg-white rounded-ten p-5">

            <Paragraphe>
              Le badminton, c&apos;est encore mieux à plusieurs ! Que vous soyez débutant ou confirmé, rejoignez-nous et profitez de créneaux adaptés à tous les niveaux.
            </Paragraphe>

            <Subtitle className="text-[22px]">
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

          </div>
        </div>

      </div>

      <div className="md:w-[80%] w-[90%] h-auto flex flex-col items-start justify-center gap-5 mt-44 mb-44">

        <Subtitle className="ml-4">
          Les règles essentielles du bad’ <Emoji name="eyes" width={26} />
        </Subtitle>

        <div className="w-[100%] h-auto flex flex-row flex-wrap items-start justify-center gap-32">

          {/* Texte gauche */}
          <div
            className="2xl:w-[40%] w-[90%] h-auto flex flex-col items-start justify-center gap-3 bg-white rounded-ten p-5">

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

          </div>

          {/* Image droite */}
          <div
            className="2xl:w-[50%] w-[90%] h-auto flex flex-col items-center justify-center gap-3 bg-white rounded-ten">

            <ImageLegend
              image={Hero5}
              description={"Ici, on joue, on rigole et on progresse ensemble !"}
              descriptionClassName="leading-5 text-base mb-3"
            />

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}
