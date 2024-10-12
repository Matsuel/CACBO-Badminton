import React from "react";

interface SubtitleProps {
    content?: string;
    className?: string;
    children?: React.ReactNode;
}

const Subtitle = ({
    content,
    className,
    children
}: SubtitleProps) => {
    return (
        <h3 className={`font-Montserrat font-semibold text-black text-3xl ${className}`}>
            {content}
            {children}
        </h3>
    )
}

export default Subtitle