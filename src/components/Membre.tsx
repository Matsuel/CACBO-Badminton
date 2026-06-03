import Image from 'next/image';
import { textVariants } from '@/constantes/theme';

interface MembreProps {
    firstName: string;
    lastName: string;
    role: string;
    index: number;
    description?: string;
}

const Membre = ({
    firstName,
    lastName,
    role,
    index,
    description
}: MembreProps) => {
    return (
        <div className={"w-full h-auto flex flex-col items-start justify-center p-5 gap-5 bg-white rounded-xl shadow-default"}>

            <div className='flex flex-row items-center justify-start gap-6.25'>

                <div
                    className='w-24.5 h-24.5 flex items-center justify-center rounded-xl bg-redcolor'
                    style={{
                        opacity: 1 - index * 0.2
                    }}
                >
                    <Image
                        src="/bureau/volant.svg"
                        alt='volant de badminton'
                        className='w-16 h-auto flex justify-center items-center object-center pt-2'
                        width={100}
                        height={100}
                    />
                </div>

                <div className='flex flex-col gap-content'>
                    <div className='flex flex-col'>
                        <span className={`${textVariants.h3} text-redcolor`}>{firstName}</span>
                        <span className={`${textVariants.h3} text-redcolor`}>{lastName}</span>
                    </div>

                    <p className={textVariants.text}>
                        {role}
                    </p>
                </div>

            </div>

            <div className='w-full h-auto flex items-start justify-start gap-2.25'>
                <Image
                    src="/info.svg"
                    alt="Icône d'information"
                    className='mt-0.5'
                    width={14}
                    height={14}
                />

                {description && (
                    <p className={`${textVariants.secondary} text-redpale`}>
                        {description}
                    </p>
                )}

            </div>


        </div>
    )
}

export default Membre