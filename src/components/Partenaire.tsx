import Image from 'next/image';
import { textVariants } from '@/constantes/theme';

interface PartenaireProps {
    name: string;
    role: string;
    image: string;
}

const Partenaire = ({
    image,
    name,
    role
}: PartenaireProps) => {
    return (
        <div className={"w-full h-auto flex flex-row items-center justify-start p-5 gap-[25px] bg-white rounded-xl shadow-default"}>

            <div
                className='w-[100px] h-[100px] flex items-center justify-center rounded-xl bg-whitebroken'
            >
                <Image
                    src={image}
                    alt='volant de badminton'
                    className='w-auto h-auto'
                    width={100}
                    height={100}
                />
            </div>

            <div className='flex flex-col gap-content'>
                <div className='flex flex-col'>
                    <span className={`${textVariants.h3} text-redcolor`}>{name}</span>
                </div>

                <p className={textVariants.text}>
                    {role}
                </p>
            </div>


        </div>
    )
}

export default Partenaire