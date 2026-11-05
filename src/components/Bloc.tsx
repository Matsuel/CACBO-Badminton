import { cva, type VariantProps } from 'class-variance-authority'
import type React from 'react'
import { cn } from '@/utils/cn'
import Text from './Text'

const blocStyles = cva(
    'w-full h-auto flex flex-col items-start justify-start p-5 gap-content bg-blanc rounded-xl shadow-ombre',
    {
        variants: {
            variant: {
                default: '',
                outline: 'border border-rouge',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

interface BlocProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof blocStyles> {
    title?: string;
    subtitle?: string;
}

const Bloc = ({ className, children, title, subtitle, variant, ...props }: BlocProps) => {
    return (
        <div className={cn(blocStyles({ variant }), className)} {...props}>
            {(title || subtitle) && (
                <div className="flex flex-col">
                    {title && (
                        <Text variant="h3" color="rouge">
                            {title}
                        </Text>
                    )}
                    {subtitle && (
                        <span className="text-noir font-space-grotesk text-xl leading-4 font-semibold">
                            {subtitle}
                        </span>
                    )}
                </div>
            )}
            {children}
        </div>
    )
}

export default Bloc
