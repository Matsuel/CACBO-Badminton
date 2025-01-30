import React from 'react'

const Paragraphe = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4 className={`font-Inter leading-8 font-light xl:text-paragraph text-paragraph-mobile text-start ${className}`} {...props}>
      {children}
    </h4>
  )
}

export default Paragraphe