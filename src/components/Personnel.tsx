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
    roleFontSize = "text-2xl"
}: PersonnelProps) => {

    const formattedName = name.split(' ');

    return (
        <div className="w-auto h-auto flex flex-col items-center gap-[30px] p-10 bg-white rounded-ten">
            <div className="w-[170px] h-[170px] rounded-ten flex justify-center items-center bg-center bg-cover" style={{backgroundImage: `url(${image.src})`}}>
            </div>

            <h3 className="flex flex-col font-Montserrat font-normal text-2xl text-center">
                {formattedName[0]}
                <span className="font-semibold">{formattedName[1]}</span>
            </h3>

            <div className="w-[60px] h-[1.5px] bg-black rounded-full" />

            <h4 className={`font-normal text-center ${roleFont} ${roleParagraphWidth} ${roleFontSize}`}>
                {role}
            </h4>

        </div>
    );
}

export default Personnel;