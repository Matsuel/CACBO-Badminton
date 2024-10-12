import React from 'react';
import { SITE_CONFIG } from "@/constantes";
import LinkLogo from "@/assets/links.svg";
import HeroPartenaires from "@/assets/heropartenaires.png";
import Partenaire from '@/components/Partenaire';
import { partenaires } from '@/constantes/partenaires';
import PageLayout from '@/components/Page';


const Partenaires = () => {

    return (
        <PageLayout
            title="Nos partenaires"
            subtitle='Ils nous soutiennent pour faire grandir notre club !'
            icon={LinkLogo}
            background={HeroPartenaires}
            tabTitle={SITE_CONFIG.partenaires}
        >

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
                        key={person.name}
                    />
                ))}

            </div>

        </PageLayout>
    );
};

export default Partenaires;
