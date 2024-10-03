import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HeroHistory from "@/assets/herohistoire.png";
import Book from "@/assets/book.svg";


const Histoire = () => {
    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-whitebroken">
            <Title title="Histoire - CACBO Badminton"/>
            <Navbar/>
            
            <Hero background={HeroHistory} title={"Notre histoire"} subtitle={"Le chemin parcouru depuis 2007"} icon={Book} />
        </div>
    )
}

export default Histoire