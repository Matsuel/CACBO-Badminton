import Bloc from '@/components/Bloc';
import BlocText from '@/components/BlocText';
import Content from '@/components/Content';
import Header from '@/components/Header';
import Membre from '@/components/Membre';
import PageLayout from '@/components/PageLayout';
import SingleTitle from '@/components/SingleTitle';
import { personnel } from '@/constantes/bureau';
import Image from 'next/image';

const Bureau = () => {

    return (
        <PageLayout>
            <Header
                title='BUREAU'
                subtitle="Équipe dirigeante du club"
            />

            <Content>
                <Image
                    src="/bureau/1.png"
                    alt="Photo devant une table avec des raquettes"
                    width={500}
                    height={300}
                />

                <Bloc title='Quésaco ?'>
                    <BlocText>
                        Le Bureau veille au bon fonctionnement du club et au respect des règlements en vigueur, il s&apos;occupe de la trésorerie (suivi des dépenses et des recettes, cotisations des adhérents, gestion du compte bancaire) et de la résolution des problèmes et des conflits en son sein.
                    </BlocText>
                </Bloc>

                <div className='w-full h-auto flex flex-col items-start justify-start gap-5'>
                    <SingleTitle>
                        Composition du Bureau
                    </SingleTitle>

                    {personnel.map(personnel => (
                        <Membre
                            key={personnel.color}
                            firstName={personnel.firstName}
                            lastName={personnel.lastName}
                            role={personnel.role}
                            color={personnel.color}
                        />
                    ))}

                </div>

                <SingleTitle>
                    Composition du Bureau
                </SingleTitle>
            </Content>


        </PageLayout>
    )
}

export default Bureau