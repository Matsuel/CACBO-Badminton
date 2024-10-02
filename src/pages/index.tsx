import Navbar from "@/components/navbar";
import Image from "next/image";
import Gymnase from "@/assets/Gymnase.png";
import Logo from "@/assets/cacbo.svg";
import GPS from "@/assets/gps.svg";


export default function Home() {
  return (
    <div className={`w-full flex flex-col items-center min-h-screen bg-whitebroken`}>
      <Navbar />

      <div className="flex flex-col items-center justify-center w-[80%] h-auto mt-10 bg-cover bg-center rounded-ten" style={{ backgroundImage: `url(${Gymnase.src})` }}>

        <div className="w-[100%] h-[485px] flex flex-row justify-center items-center">

          <div className="w-[80%] h-full flex flex-col justify-evenly pl-28">
            <h3 className="font-Shantell font-medium text-white text-4xl">Bienvenue !</h3>

            <h2 className="font-Montserrat font-bold text-white text-8xl">CACBO Badminton</h2>

            <div className="flex flex-col items-start justify-center gap-5">
              <h3 className="font-Montserrat font-normal text-white text-3xl">Club de badminton pour <strong>adultes</strong>, badistes depuis <strong>2007</strong></h3>

              <div className="flex flex-row items-start justify-center gap-3">
                <Image src={GPS} alt="gps" className="mt-1" />
                <h3 className="font-Shantell font-medium text-white text-3xl">Gymnase de Carbon-Blanc</h3>
              </div>
            </div>

          </div>

          <div className="w-[20%] h-full flex flex-col justify-start items-center pt-14">

            <div className="w-40 h-40 bg-white rounded-full flex flex-row justify-center items-center">
              <Image src={Logo} alt="cacbo" width={100} />
            </div>
          </div>

        </div>
      </div>

      <div className="w-[48%] h-auto mt-28 mb-36 flex flex-col relative">
        <div className="font-SourceSerifPro text-9xl text-white text-center absolute top-[-70px] left-[-30px] z-0">
          «
        </div>
        <p className="w-[100%] font-Montserrat font-light italic text-xl text-wrap text-center relative z-10">
          Un club où la <strong className="font-medium">passion</strong> du badminton se vit dans une ambiance <strong className="font-medium">familiale</strong> et conviviale.
          Que vous soyez débutant ou expert, jouez et progressez dans un cadre <strong className="font-medium">chaleureux</strong>, sans prise de tête.
        </p>
        <div className="font-SourceSerifPro text-9xl text-white text-center absolute bottom-[-40px] right-[390px] z-0">
          »
        </div>
      </div>

    </div>
  );
}
