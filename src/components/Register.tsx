import { textVariants } from '@/constantes/theme';
import { Check, X } from 'lucide-react';
import React from 'react'

interface RegisterProps {
    saison: string;
    open: boolean;
}

const Register = ({
    saison,
    open
}: RegisterProps) => {
    return (
        <div className='w-full h-auto flex flex-row items-center justify-start p-2 border border-redcolor rounded-full'>
            <span className={`${textVariants.secondary} text-redpale`}>
                SAISON 20{saison} -
            </span>

            <span className={`${textVariants.secondary} text-redcolor font-semibold`}>
                INSCRIPTIONS {open ? "OUVERTES" : "FERMÉES"} !
            </span>

            {open ?
                <Check strokeWidth={3} className='text-redcolor' /> : <X strokeWidth={3} />
            }

        </div>
    )
}

export default Register