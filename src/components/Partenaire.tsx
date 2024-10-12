import { StaticImageData } from 'next/image';
import React from 'react'

interface PartenaireProps {
    name: string;
    image: StaticImageData;
    texts: string[];
    speciality?: string;
}

const Partenaire = ({
    name,
    image,
    speciality='',
    texts
}: PartenaireProps) => {

    const formattedName = name.split(' ');

    return (
        <div className="w-[290px] h-auto flex flex-col items-center gap-[30px] p-10 bg-white rounded-ten">
            <div className="w-[170px] h-[170px] rounded-ten flex justify-center items-center bg-center bg-cover" style={{ backgroundImage: `url(${image.src})` }}>
            </div>

            <h3 className="flex flex-col font-Montserrat font-medium text-2xl text-center">
                {formattedName[0]}
                <span className="font-semibold">{formattedName[1]}</span>
            </h3>

            <div className="w-[60px] h-[1.5px] bg-black rounded-full" />

            <div className="flex flex-col items-center gap-0">
                {texts.map((text, index) => (
                    <h4 key={text} className="font-light text-center font-Inter text-xl">
                        {text}
                    </h4>
                ))}

                {speciality && (
                    <h4 className="font-medium text-center font-Inter text-xl">
                        {speciality}
                    </h4>
                )}
            </div>

        </div>
    );
}

export default Partenaire