import { cn } from '@/utils/cn'
import React from 'react'

const Paragraphe = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4 className={cn(`font-Inter lg:leading-8 leading-6 font-light xl:text-paragraph lg:text-[16px] text-paragraph-mobile text-start`, className)} {...props}>
      {children}
    </h4>
  )
}

export default Paragraphe