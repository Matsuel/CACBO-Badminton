import React from 'react';
import Title from "@/components/Title";
import { SITE_CONFIG } from "@/constantes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LinkLogo from "@/assets/links.svg";
import HeroPartenaires from "@/assets/heropartenaires.png";
import Footer from "@/components/Footer";
import Partenaire from '@/components/Partenaire';
import { partenaires } from '@/constantes/partenaires';


const Partenaires = () => {

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
                    <Partenaire
                        name={person.name}
                        texts={person.texts}
                        speciality={person.speciality}
                        image={person.image}
                        key={index}
                    />
                ))}

            </div>

            <Footer />
        </div>
    );
};

export default Partenaires;
