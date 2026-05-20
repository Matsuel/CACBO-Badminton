import { textVariants } from "@/constantes/theme";
import { cn } from "@/utils/cn";
import type React from "react";

interface PresidentProps extends React.HTMLAttributes<HTMLDivElement> {
    date: string;
    name: string;
}

const President = ({
    date,
    name,
    className,
    ...props
}: PresidentProps) => {

    // bg gradient-to-r from-redpale to-redcolor

    return (
        <div className={cn("w-full flex flex-row items-center px-5 py-3.5 bg-linear-to-tr from-redpale to-redcolor rounded-xl gap-3", className)} {...props}>
            <h3 className={`w-[30%] ${textVariants.h4} text-white`}>
                {date}
            </h3>
            <h2 className={` ${textVariants.text} text-white`}>
                {name}
            </h2>
        </div>
        );
};

export default President;
