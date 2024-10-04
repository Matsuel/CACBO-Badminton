import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HeroHistory from "@/assets/herohistoire.png";
import Book from "@/assets/book.svg";
import EFB from "@/assets/efb.png";
import Logo from "@/assets/cacbo.svg";
import Image from "next/image";


const Histoire = () => {
    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-whitebroken">
            <Title title="Histoire - CACBO Badminton"/>
            <Navbar/>

            <Hero background={HeroHistory} title={"Notre histoire"} subtitle={"Le chemin parcouru depuis 2007"}
                  icon={Book}/>

            <div className="w-[80%] h-auto mt-20 flex flex-col items-start justify-center gap-5 mb-[240px]">

                <h3 className="font-Montserrat font-semibold text-black text-3xl">
                    La naissance du club
                    {/* Component */}
                </h3>

                {/* Paragraph 1 */}
                <div
                    className="w-[53%] h-auto flex items-center justify-center bg-white rounded-ten p-[30px] font-Inter font-light text-[20px] relative">
                    Le CACBO Badminton voit le jour en 2007, grâce à l&apos;initiative de trois passionnés : Ahmed
                    Cassim, Laurent Thomas et Julien Larcher. Quelques années plus tard, le club s&apos;affilie à la
                    Fédération Française de Badminton (FFBaD) et décroche son premier label École Française de Badminton
                    (EFB) 1 étoile 🌟 lors de la saison 2013/14. Une distinction qu&apos;il conservera à 4 reprises lors
                    des saisons 2014/15, 2015/16, 2016/17 et 2017/18. 🏅
                    <div
                        className="w-[105px] h-[105px] bg-white rounded-full flex justify-center items-center absolute bottom-[-50px] right-[-50px] drop-shadow-xl">
                        <Image src={EFB} alt="efb" />
                    </div>
                </div>

            </div>

            <div
                className="w-[72%] h-auto flex flex-col items-center justify-center bg-white rounded-ten p-[30px] mb-[170px] relative">

                <div
                    className="w-[105px] h-[105px] bg-white rounded-full flex justify-center items-center absolute top-[-50px] left-[-50px] drop-shadow-xl">
                    <Image src={Logo} alt="efb" width={64}  />
                </div>

                <p className="w-[100%] h-auto font-Inter font-light text-[20px] text-start indent-12">
                    En juillet 2018, la fermeture définitive du gymnase Gaston Lacoste, menacé d&apos;effondrement, contraint le club à une mise en sommeil. Après sa démolition en novembre 2019, le club reste inactif pendant près de 4 ans.
                </p>

            </div>
        </div>
    )
}

export default Histoire