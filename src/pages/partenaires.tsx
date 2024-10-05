import React from 'react';
import Title from "@/components/title";
import { SITE_CONFIG } from "@/constantes";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LinkLogo from "@/assets/links.svg";
import HeroPartenaires from "@/assets/heropartenaires.png";
import Personnel from "@/components/personnel";
import Adidas from "@/assets/partenaires/adidas.png";
import Intersport from "@/assets/partenaires/intersport.png";
import Omnisport from "@/assets/partenaires/omnisport.png";
import CarbonBlanc from "@/assets/partenaires/carbonblanc.png";
import Footer from "@/components/footer";


const Partenaires = () => {

    const partenaires = [
        {
            name: "Intersport",
            role: "Magasin de sport équipementier officiel",
            image: Intersport
        },
        {
            name: "Adidas",
            role: "Marque de sport équipementier officiel",
            image: Adidas
        },
        {
            name: "CACBO",
            role: "Club Athlétique CarbonBlanais Omnisports",
            image: Omnisport
        },
        {
            name: "Ville de\n" +
                "Carbon-Blanc",
            role: "Collectivité\n" +
                "territoriale",
            image: CarbonBlanc
        }
    ]

    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-whitebroken">
            <Title title={SITE_CONFIG.partenaires} />
            <Navbar />

            <Hero
                background={HeroPartenaires}
                title="Nos partenaires"
                subtitle="Ils nous soutiennent pour faire grandir notre club !"
                icon={LinkLogo}
            />

            <div className="w-[45%] font-Inter font-light text-xl text-wrap text-center mt-20">
                Nos partenaires jouent un rôle clé dans la vie de notre club. Grâce à leur soutien, nous pouvons offrir
                à nos membres les meilleures conditions pour pratiquer le badminton. Découvrez ceux qui nous
                accompagnent dans cette belle aventure !
            </div>

            <div className="w-auto h-auto flex flex-row justify-between gap-[70px] mt-[105px]">

                {partenaires.map((person, index) => (
                    <Personnel
                        name={person.name}
                        role={person.role}
                        roleFont={"font-Inter"}
                        image={person.image}
                        roleParagraphWidth={"w-[200px]"}
                        roleFontSize={"text-xl"}
                        key={index}
                    />
                ))}

            </div>

            <Footer />
        </div>
    );
};

export default Partenaires;
