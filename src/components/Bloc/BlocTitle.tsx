import React from 'react'

interface BlocTitleProps {
    children?: React.ReactNode
}

const BlocTitle = ({
    children
}: BlocTitleProps) => {
    return (
        <h3 className={"font-Montserrat font-semibold text-black text-[28px]"}>
            {children}
        </h3>
    )
}

export default BlocTitle