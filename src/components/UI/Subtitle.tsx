import { cn } from "@/utils/cn";
import React from "react";

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    content?: string;
    children?: React.ReactNode;
}

const Subtitle = ({
    content,
    className,
    children,
    ...props
}: SubtitleProps) => {

    return (
        <h3 className={cn(`font-Montserrat font-semibold text-black text-[22px]`, className)} {...props}>
            {content}
            {children}
        </h3>
    )
}

export default Subtitle