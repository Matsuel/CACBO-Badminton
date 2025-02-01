"use client";
import Image from "next/image";
import Link from "next/link";
import File from "@/assets/file.svg";
import FileRed from "@/assets/fileRed.svg";
import { useState } from "react";

interface DocumentsProps {
    content: string;
    href: string;
}

export const Documents = ({
    content,
    href,
}: DocumentsProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="w-auto h-auto flex flex-row items-center justify-start gap-[20px]">

            <Link
                href={href}
                passHref
                target={"_blank"}
                className="text-redcolor hover:text"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-[60px] h-[60px]">
                    <Image
                        src={File}
                        alt={"Formulaire d’inscription"}
                        className={`absolute transition-all duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <Image
                        src={FileRed}
                        alt={"Formulaire d’inscription"}
                        className={`absolute transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </Link>

            <h5 className="font-Inter font-light text-paragraph">
                {content}
            </h5>
        </div>
    )
}

export default Documents