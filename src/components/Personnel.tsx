import Image, { StaticImageData } from "next/image";

interface PersonnelProps {
    image: StaticImageData;
    name: string;
    role: string;
    roleFont?: string;
    roleParagraphWidth?: string;
    roleFontSize?: string;
}

const Personnel = ({
    image,
    role,
    name,
    roleParagraphWidth = "w-auto",
    roleFontSize = "xl:text-2xl md:text-[22px] text-xl"
}: PersonnelProps) => {

    const formattedName = name.split(' ');

    return (
        <div className="sm:w-auto w-[80%] h-auto flex flex-col items-center gap-[30px] p-8 bg-white rounded-ten">

            <Image src={image} alt={name} width={170} height={170} className="rounded-ten" />

            <h3 className="flex flex-col font-Montserrat font-medium xl:text-2xl md:text-[22px] text-xl text-center">
                {formattedName[0]}
                <span className="font-semibold">{formattedName[1]}</span>
            </h3>

            <div className="sm:w-[60px] w-[110px] h-[1.5px] bg-black rounded-full" />

            <h4 className={`font-light text-center font-Inter ${roleParagraphWidth} ${roleFontSize}`}>
                {role}
            </h4>

        </div>
    );
}

export default Personnel;