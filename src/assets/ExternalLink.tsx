import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}

const ExternalLink = ({
    size = 12,
    color = "currentColor",
    ...props
}: IconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1 10.9065L11 0.906525M11 0.906525L3.5 0.906525M11 0.906525V8.40652" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default ExternalLink