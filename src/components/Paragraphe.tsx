import React from 'react'

interface ParagrapheProps extends React.HTMLAttributes<HTMLHeadingElement> {
}

const Paragraphe = ({
  children,
  className,
  ...props
}: ParagrapheProps) => {
  return (
    <h4 className={`font-Inter leading-8 font-light text-xl text-start ${className}`} {...props}>
      {children}
    </h4>
  )
}

export default Paragraphe