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
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M16 8.02054C16 3.59347 12.416 0.000488281 8 0.000488281C3.584 0.000488281 0 3.59347 0 8.02054C0 11.9022 2.752 15.1343 6.4 15.8802V10.4266H4.8V8.02054H6.4V6.01553C6.4 4.46766 7.656 3.20851 9.2 3.20851H11.2V5.61452H9.6C9.16 5.61452 8.8 5.97543 8.8 6.41653V8.02054H11.2V10.4266H8.8V16.0005C12.84 15.5995 16 12.1829 16 8.02054Z" fill="currentColor" />
        </svg>


    )
}

export default Facebook