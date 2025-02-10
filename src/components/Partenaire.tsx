import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface PartenaireProps {
    name: string;
    image: StaticImageData;
    text: string;
    subterms?: string[];
}

const Partenaire = ({
    name,
    image,
    text,
    subterms
}: PartenaireProps) => {

    return (
        <div className="w-[230px] h-auto flex flex-col items-center gap-[30px] p-7 bg-white rounded-ten">
            <Image src={image} alt={name} width={170} height={170} className="rounded-ten" />

            <h3 className="w-auto flex flex-col font-Montserrat font-medium text-[22px] text-center">
                {name}
            </h3>

            <div className="w-[52px] h-[2px] bg-black rounded-full" />

            <div className="w-auto h-auto flex flex-col items-center gap-6">
                <h4 key={text} className="font-light text-paragraph font-Inter text-xl text-center">
                    {text}
                </h4>

                <div className="w-auto h-auto flex flex-col items-center">
                    {subterms && subterms.map((subterm) => (
                        <h4 key={subterm} className="font-medium text-paragraph font-Inter text-xl">
                            {subterm}
                        </h4>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Partenaire