import Title from "@/components/title";
import Navbar from "@/components/navbar";
import HeroAdherer from "@/assets/heroadherer.png";
import Rocket from "@/assets/rocket.svg";
import Hero from "@/components/hero";
import {SITE_CONFIG} from "@/constantes";

const Adherer = () => {
    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-whitebroken">
            <Title title={SITE_CONFIG.adherer + " - " + SITE_CONFIG.title}/>
            <Navbar/>

            <Hero
                background={HeroAdherer}
                title={SITE_CONFIG.adherer}
                subtitle={"Prêts à nous rejoindre ?"}
                icon={Rocket}
                description/>
        </div>
    )
}

export default Adherer