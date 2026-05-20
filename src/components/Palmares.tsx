import type React from "react";
import { cn } from "@/utils/cn";

interface PalmaresProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle: string;
    legend: string;
}

const Palmares = ({
    title,
    subtitle,
    legend,
    className,
    ...props
}: PalmaresProps) => {
    return (
        <div className={cn("w-full flex flex-col items-center gap-content", className)} {...props}>
            <h2 className="font-Poppins font-semibold text-[24px] leading-4.5 text-redpale">{title}</h2>
            <h3 className="font-Poppins font-extralight italic text-[24px] leading-4.5 text-redpale -mt-4">{subtitle}</h3>
            <p className="w-4/5 font-Poppins font-normal text-paragraph leading-4 text-center">{legend}</p>
        </div>
    );
};

export default Palmares;
