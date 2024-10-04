import Image from "next/image";
import File from "@/assets/file.svg";
import Link from "next/link";

interface DocumentsProps {
    content: string;
    href: string;
}

export const Documents = ({
    content,
    href,
}: DocumentsProps) => {

    return (
        <Link href={href} passHref target={"_blank"}
              className="w-auto h-auto flex flex-row items-center justify-start gap-[20px]">
            <Image src={File} alt={"Formulaire d’inscription"}/>

            <h5 className="font-Inter font-light text-[18px]">
                {content}
            </h5>
        </Link>
    )
}

export default Documents