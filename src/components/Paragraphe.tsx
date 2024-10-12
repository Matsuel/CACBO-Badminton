import React from 'react'

const Paragraphe = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4 className={`font-Inter leading-8 font-light text-xl text-start ${className}`} {...props}>
      {children}
    </h4>
  )
}

export default Paragraphe