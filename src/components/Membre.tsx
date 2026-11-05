import Image from 'next/image';
import Text from "@/components/Text";

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
        <div className={"w-full h-auto flex flex-col items-start justify-center p-5 gap-5 bg-blanc rounded-xl shadow-ombre"}>

            <div className='flex flex-row items-center justify-start gap-6.25'>

                <div
                    className='w-24.5 h-24.5 flex items-center justify-center rounded-xl bg-rouge'
                    style={{
                        backgroundColor: `rgba(255, 28, 28, ${1 - index * 0.2})`
                    }}
                >
                    <Image
                        src="/bureau/volant.png"
                        alt='volant de badminton'
                        className='w-16 h-auto flex justify-center items-center object-center pt-2'
                        width={100}
                        height={100}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <Text as="span" variant="h3" color="rouge">{firstName}</Text>
                        <Text as="span" variant="h3" color="rouge">{lastName}</Text>
                    </div>

                    <Text>
                        {role}
                    </Text>
                </div>

            </div>

            {description && (
                <div className='w-full h-auto flex items-start justify-start gap-2.25'>
                    <Image
                        src="/info.svg"
                        alt=""
                        className='mt-0.5'
                        width={14}
                        height={14}
                    />

                    <Text variant="secondaire" color="rouge-pale">
                        {description}
                    </Text>
                </div>
            )}


        </div>
    )
}

export default Membre