import React from 'react';
import LinkLogo from "@/assets/links.svg";
import Partenaire from '@/components/Partenaire';
import { partenaires } from '@/constantes/partenaires';
import PageLayout from '@/components/Page';


const Partenaires = () => {

    return (
        <PageLayout
            title="Nos partenaires"
            subtitle='Ils nous soutiennent pour faire grandir notre club !'
            icon={LinkLogo}
        >

            <div className="md:w-[45%] w-[90%] font-Inter font-light text-xl text-wrap text-center mt-20">
                Nos partenaires jouent un rôle clé dans la vie de notre club. Grâce à leur soutien, nous pouvons offrir
                à nos membres les meilleures conditions pour pratiquer le badminton. Découvrez ceux qui nous
                accompagnent dans cette belle aventure !
            </div>

            <div className="w-auto h-auto flex flex-row flex-wrap justify-center xl:gap-[70px] lg:gap-[50px] gap-[30px] mt-[105px]">

                {partenaires.map((person) => (
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
