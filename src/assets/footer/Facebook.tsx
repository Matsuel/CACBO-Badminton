import React from 'react'

interface FacebookProps extends React.SVGProps<SVGSVGElement> {
    size?: number
}

const Facebook = ({
    className,
    size = 36,
    ...props
}: FacebookProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className} {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M36 18.0451C36 8.08421 27.936 0 18 0C8.064 0 0 8.08421 0 18.0451C0 26.7789 6.192 34.0511 14.4 35.7293V23.4586H10.8V18.0451H14.4V13.5338C14.4 10.0511 17.226 7.21804 20.7 7.21804H25.2V12.6316H21.6C20.61 12.6316 19.8 13.4436 19.8 14.4361V18.0451H25.2V23.4586H19.8V36C28.89 35.0977 36 27.4105 36 18.0451Z" fill="currentColor" />
        </svg>

    )
}

export default Facebook