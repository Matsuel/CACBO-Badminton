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
        <h3 className={`font-Montserrat font-semibold text-black xl:text-[28px] lg:text-2xl text-[22px] ${className}`} {...props}>
            {content}
            {children}
        </h3>
    )
}

export default Subtitle