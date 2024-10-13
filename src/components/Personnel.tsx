import {StaticImageData} from "next/image";

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
    roleFont = "font-Shantell",
    roleParagraphWidth = "w-auto",
    roleFontSize = "xl:text-2xl md:text-[22px] text-xl"
}: PersonnelProps) => {

    const formattedName = name.split(' ');

    return (
        <div className="sm:w-auto w-[80%] h-auto flex flex-col items-center gap-[30px] sm:p-10 p-5 pt-10 bg-white rounded-ten">
            <div className="md:w-[170px] md:h-[170px] w-[250px] h-[250px] rounded-ten bg-center bg-cover" style={{backgroundImage: `url(${image.src})`}}>
            </div>

            <h3 className="flex flex-col font-Montserrat font-normal xl:text-2xl md:text-[22px] text-xl text-center">
                {formattedName[0]}
                <span className="font-semibold">{formattedName[1]}</span>
            </h3>

            <div className="sm:w-[60px] w-[110px] h-[1.5px] bg-black rounded-full" />

            <h4 className={`font-normal text-center ${roleFont} ${roleParagraphWidth} ${roleFontSize}`}>
                {role}
            </h4>

        </div>
    );
}

export default Personnel;