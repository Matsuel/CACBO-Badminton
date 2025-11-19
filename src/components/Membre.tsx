import Image from 'next/image';
import { textVariants } from '@/constantes/theme';

interface MembreProps {
    firstName: string;
    lastName: string;
    role: string;
    index: number;
}

const Membre = ({
    firstName,
    lastName,
    role,
    index
}: MembreProps) => {
    return (
        <div className={"w-full h-auto flex flex-row items-center justify-start p-5 gap-[25px] bg-white rounded-xl shadow-default"}>

            <div
                className='w-[98px] h-[98px] flex items-center justify-center rounded-xl bg-redcolor'
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
    )
}

export default Membre