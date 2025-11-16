import Link from 'next/link'
import type { NavbarLinkType } from '@/index'
import { textVariants } from '@/constantes/theme'
import { ChevronRight } from 'lucide-react'

const NavbarLink = ({
    title,
    href,
    description,
    icon
}: NavbarLinkType) => {
    return (
        <Link
            href={href}
            className='w-full h-auto p-5 text-redcolor flex flex-row justify-start gap-6 items-center'
        >
            <div className='w-12 h-12 flex items-center justify-center bg-redcolor text-white rounded-xl'>
                {icon}
            </div>
            <div className='w-[70%] h-auto flex flex-col gap-3 items-start'>
                <h3 className={textVariants.h3}>{title}</h3>
                {description && <p className={`${textVariants.secondary} w-3/4`}>
                    {description}
                </p>}
            </div>
            <ChevronRight className='w-4' />
        </Link>
    )
}

export default NavbarLink