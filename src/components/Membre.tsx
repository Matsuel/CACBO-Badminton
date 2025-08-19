import { textVariants } from '@/constantes/theme';
import Image from 'next/image';

interface MembreProps {
    firstName: string;
    lastName: string;
    role: string;
    color: string;
}

const Membre = ({
    firstName,
    lastName,
    role,
    color
}: MembreProps) => {
    return (
        <div className={"w-full h-auto flex flex-row items-center justify-start p-5 gap-[25px] bg-white rounded-xl shadow-default"}>

            <div
                className='w-[100px] h-[100px] flex items-center justify-center rounded-xl'
                style={{
                    backgroundColor: color
                }}
            >
                <Image
                    src={"/bureau/volant.png"}
                    alt='volant de badminton'
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