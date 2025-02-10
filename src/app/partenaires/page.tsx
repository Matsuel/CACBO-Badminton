import React from 'react';
import LinkLogo from "@/assets/links.svg";
import Partenaire from '@/components/Partenaire';
import { partenaires } from '@/constantes/partenaires';
import PageLayout from '@/components/Page';
import Paragraphe from '@/components/UI/Paragraphe';


const Partenaires = () => {

    return (
        <PageLayout
            title="Nos partenaires"
            subtitle='Ils nous soutiennent pour faire grandir notre club !'
            icon={LinkLogo}
        >

            <Paragraphe className="w-[42%] text-center">
                Nos partenaires jouent un rôle clé dans la vie de notre club. Grâce à leur soutien, nous pouvons offrir
                à nos membres les meilleures conditions pour pratiquer le badminton. Découvrez ceux qui nous
                accompagnent dans cette belle aventure !
            </Paragraphe>

            <div className="w-auto h-auto flex flex-row justify-center gap-[70px] mt-[105px]">

                {partenaires.map((person) => (
                    <Partenaire
                        name={person.name}
                        image={person.image}
                        text={person.text}
                        subterms={person.subterms}
                        key={person.name}
                    />
                ))}

            </div>

        </PageLayout>
    );
};

export default Partenaires;
